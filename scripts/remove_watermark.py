import numpy as np
from PIL import Image
from scipy.ndimage import (
    distance_transform_edt, binary_dilation, gaussian_filter, label
)
from pathlib import Path

thumbnails_dir = Path(__file__).parent.parent / "public" / "thumbnails"

# Watermark zone in a 2752x1536 image: from (w-270, h-210) to (w-50, h-10)
ZONE_LEFT  = 270
ZONE_RIGHT = 50
ZONE_TOP   = 210
ZONE_BOT   = 10

def remove_watermark(img_path, test=False):
    img = Image.open(img_path).convert("RGB")
    arr = np.array(img, dtype=np.float32)
    h, w = arr.shape[:2]

    x1, y1 = w - ZONE_LEFT, h - ZONE_TOP
    x2, y2 = w - ZONE_RIGHT, h - ZONE_BOT
    region = arr[y1:y2, x1:x2].copy()

    luminance = region.mean(axis=2)

    # Local contrast: pixel brightness minus blurred neighborhood mean.
    # The diamond is always locally brighter than its surroundings regardless
    # of whether the background is dark or bright.
    local_bg = gaussian_filter(luminance, sigma=15)
    contrast  = luminance - local_bg
    mask = contrast > 12

    # Remove components that are too small (noise), too large (background),
    # or too far to the left (e.g. text letters that aren't the watermark).
    # The diamond is always in the right 60% of the crop zone.
    crop_w = x2 - x1
    labeled, n = label(mask)
    for i in range(1, n + 1):
        comp = labeled == i
        size = comp.sum()
        if size < 300 or size > 10000:
            mask[comp] = False
            continue
        ys, xs = np.where(comp)
        if xs.mean() < crop_w * 0.4:        # too far left — not the diamond
            mask[comp] = False
            continue
        if xs.max() - xs.min() > crop_w * 0.6:  # too wide — edge artifact, not diamond
            mask[comp] = False

    if not mask.any():
        print(f"  {img_path.name}: no watermark detected — skipping")
        return

    pixels = int(mask.sum())
    print(f"  {img_path.name}: {pixels} px detected")

    if test:
        debug = region.copy().astype(np.uint8)
        debug[mask] = [255, 0, 0]
        Image.fromarray(debug).save(thumbnails_dir / f"debug_{img_path.name}")
        return

    # Two separate dilations:
    # 1. fill_exclusion (8px): excludes the diamond core + its anti-aliased edges
    #    from the background average, so fill_values is truly clean background.
    # 2. blend_mask (14px): covers the full visual diamond (core + all edge pixels)
    #    so the alpha replacement reaches every part of the diamond.
    fill_exclusion = binary_dilation(mask, iterations=8)
    blend_mask     = binary_dilation(mask, iterations=14)

    weights = (~fill_exclusion).astype(np.float32)
    blurred_weights = gaussian_filter(weights, sigma=18)
    safe_weights = np.maximum(blurred_weights, 1e-6)

    fill_values = np.zeros_like(region)
    for c in range(3):
        masked_ch = region[:, :, c] * weights
        fill_values[:, :, c] = gaussian_filter(masked_ch, sigma=18) / safe_weights

    alpha = gaussian_filter(blend_mask.astype(np.float32), sigma=8)
    for c in range(3):
        region[:, :, c] = alpha * fill_values[:, :, c] + (1 - alpha) * region[:, :, c]

    arr[y1:y2, x1:x2] = region
    Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8)).save(
        img_path, "JPEG", quality=95
    )


if __name__ == "__main__":
    import sys
    test_mode = "--test" in sys.argv
    targets = sorted(thumbnails_dir.glob("ep*.jpeg")) + [
        thumbnails_dir / "devision-winnie.jpeg",
        thumbnails_dir / "sleepy-moka.jpeg",
    ]
    for f in targets:
        if f.exists():
            remove_watermark(f, test=test_mode)
    print("All done.")
