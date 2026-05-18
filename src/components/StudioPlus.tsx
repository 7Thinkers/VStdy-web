import Image from "next/image";

const videos = [
  { src: "/thumbnails/ep1.jpeg", title: "Best Way To Learn: Sleep" },
  { src: "/thumbnails/ep2.jpeg", title: "It's Not Your Fault!" },
  { src: "/thumbnails/ep3.jpeg", title: "Conquer Fractions with minimum understanding" },
  { src: "/thumbnails/ep4.jpeg", title: "How to ace any exam by studying only 20 minutes a day" },
  { src: "/thumbnails/ep5.jpeg", title: "Transform Numbers To Avoid Mistakes" },
  { src: "/thumbnails/ep6.jpeg", title: "Be Like Mike — Practice math like basketball" },
  { src: "/thumbnails/ep7.jpeg", title: "Math Made Fun with VStdy" },
  { src: "/thumbnails/ep8.jpeg", title: "Learn Math with the Panic Squad" },
];

export default function StudioPlus() {
  return (
    <section
      id="studio"
      className="bg-[#fafafa] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-[100px] lg:py-[50px]"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 lg:gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-serif text-[clamp(2rem,6vw,70px)] leading-[1.2] text-neutral-900">
            VStdy Studio+
          </h2>
          <p className="max-w-[628px] text-balance text-[15px] leading-[1.5] text-[color:var(--neutral-600)] md:text-base">
            Math concepts come to life through short, animated stories featuring
            the Panic Squad. Our bite-sized videos turn complex Math concepts
            and theories into fun, immersive learning experiences available for{" "}
            <strong className="font-bold text-[color:var(--hero-purple)]">
              FREE on{" "}
              <a href="https://www.youtube.com/@vstdy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">YouTube</a>,{" "}
              <a href="https://www.instagram.com/vstdy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">Instagram</a>, and{" "}
              <a href="https://www.tiktok.com/@vstdy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">TikTok</a>
            </strong>.
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {videos.map((v, i) => (
            <li
              key={v.src}
              className={`group ${i >= 3 ? "hidden sm:block" : ""}`}
            >
              <a
                href="https://www.youtube.com/@vstdy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch on YouTube: ${v.title}`}
                className="relative block aspect-video overflow-hidden rounded-2xl ring-1 ring-black/5 transition-shadow hover:shadow-xl"
              >
                <Image
                  src={v.src}
                  alt={v.title}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.youtube.com/@vstdy"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-4 rounded-full border border-[#8ab9ff] bg-white py-1 pl-6 pr-1 text-base font-bold text-[#0066ff] shadow-sm transition-shadow hover:shadow-md"
        >
          View All
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066ff] text-white"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
