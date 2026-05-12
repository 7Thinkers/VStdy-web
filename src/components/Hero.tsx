"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

type Photo = {
  src: string;
  alt: string;
  bg: string;
  /** object-position fine-tuning so subjects sit centered after cropping */
  position?: string;
};

const photos: Photo[] = [
  {
    src: "/figma/hero/1-urban-beat.png",
    alt: "Teen in red and navy varsity jacket",
    bg: "#FFEED2",
    position: "50% 30%",
  },
  {
    src: "/figma/hero/2-violinist.png",
    alt: "Young violinist playing",
    bg: "#F3F0D1",
    position: "50% 30%",
  },
  {
    src: "/figma/hero/3-panda.png",
    alt: "Stylised panda character in overalls",
    bg: "#E1E9FE",
    position: "50% 30%",
  },
  {
    src: "/figma/hero/4-moka.png",
    alt: "Pomeranian in a VStdy basketball jersey",
    bg: "#ECF5D6",
    position: "50% 35%",
  },
  {
    src: "/figma/hero/5-puppy.png",
    alt: "White puppy character holding a book",
    bg: "#FFEED2",
    position: "50% 30%",
  },
  {
    src: "/figma/hero/6-student.png",
    alt: "Student in school uniform",
    bg: "#ECF5D6",
    position: "50% 25%",
  },
];

const MOKA_INDEX = 3; // 4th photo, the pomeranian in the #23 jersey

export default function Hero() {
  const stripRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const centerOnMoka = () => {
      // Desktop natively centers via md:justify-center; only adjust on mobile.
      if (window.matchMedia("(min-width: 768px)").matches) return;
      const strip = stripRef.current;
      const card = strip?.children[MOKA_INDEX] as HTMLElement | undefined;
      if (!strip || !card) return;
      const center =
        card.offsetLeft + card.offsetWidth / 2 - strip.clientWidth / 2;
      strip.scrollLeft = Math.max(0, center);
    };

    // Run once on mount and again after images finish loading, so Moka is
    // centered regardless of whether cards have settled their layout.
    centerOnMoka();
    const t = window.setTimeout(centerOnMoka, 0);
    window.addEventListener("load", centerOnMoka);
    window.addEventListener("resize", centerOnMoka);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", centerOnMoka);
      window.removeEventListener("resize", centerOnMoka);
    };
  }, []);

  return (
    <section
      id="top"
      className="hero-bg relative isolate overflow-hidden pt-[86px]"
    >
      {/* Headline */}
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-24 text-center md:pt-28 lg:pt-32">
        <h1 className="font-serif text-[clamp(1.875rem,7vw,70px)] leading-[1.1] tracking-tight text-balance text-neutral-900">
          Welcome To The Future
          <br className="hidden sm:block" /> Of Education
        </h1>
        <p className="mt-6 max-w-[560px] text-[15px] font-semibold leading-[1.6] text-[color:var(--neutral-600)] sm:text-base">
          VSTDY transforms math learning through AI powered explanations,
          personalized guidance, and visual understanding. Ask freely, think
          deeper, and learn at your own pace.
        </p>
      </div>

      {/* Photo strip */}
      <div className="relative mt-16 pb-0 md:mt-20">
        <div
          ref={stripRef}
          className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:justify-center md:overflow-visible md:px-0 md:snap-none [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((p) => (
            <PhotoCard key={p.src} photo={p} />
          ))}
        </div>
        {/* Soft white fade into the next section so cards feel grounded */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
        />
      </div>
    </section>
  );
}

function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <div
      className="relative aspect-[235/277] w-[200px] shrink-0 snap-center overflow-hidden rounded-[20px] sm:w-[220px] md:w-[235px]"
      style={{ backgroundColor: photo.bg }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 768px) 235px, 220px"
        style={{ objectFit: "cover", objectPosition: photo.position ?? "center" }}
        className="select-none"
        priority
      />
    </div>
  );
}
