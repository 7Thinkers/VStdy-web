const levels = [
  {
    n: "01",
    text: "Watch animated short videos for basic math fundamentals and the science of learning theories.",
  },
  {
    n: "02",
    text: "Frequent exposure is critical to long lasting effect. VStdy mobile app will provide Error Detection and Step by Step Video Solutions.",
  },
  {
    n: "03",
    text: "Quick review of all key fundamentals of math with the help of AI Agents. There are seven AI Agents who will provide thinking skills and problem solving guidelines. So you will never work alone.",
  },
];

export default function VisualizedLearning() {
  return (
    <section className="bg-[#fafafa] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-[100px] lg:py-[50px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 lg:gap-10">
        <h2 className="text-center font-serif text-[clamp(2rem,6vw,70px)] leading-[1.2] text-neutral-900">
          VStdy
          <br />
          Visualized Learning System
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[1fr_500px] lg:items-stretch lg:gap-6">
          {/* Mobile: video first, then text */}
          <div className="order-1 aspect-square w-full overflow-hidden rounded-[20px] lg:order-2 lg:size-[500px]">
            <video
              src="/figma/videos-mp4/Video_02_Photoshoot_03.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="The Panic Squad photoshoot"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                // The source MP4 has ~85px of black pillar bars baked in on each
                // side of its 720x1280 frame. Scale the video element up so those
                // black columns get clipped by the parent's overflow-hidden.
                transform: "scale(1.34)",
                transformOrigin: "center center",
              }}
            />
          </div>

          <div className="order-2 flex flex-col justify-center rounded-[20px] bg-[#1e242c] px-6 py-8 text-white sm:px-8 sm:py-10 lg:order-1 lg:px-[40px] lg:py-[40px]">
            <p className="text-[clamp(1rem,1.6vw,20px)] font-bold leading-[1.5] text-white">
              Join Moka and friends&apos; &quot;The Panic Squad&quot; journey to
              conquer math.
            </p>
            <ul className="mt-5 flex flex-col gap-5 lg:mt-6">
              {levels.map((lvl) => (
                <li key={lvl.n} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full bg-[#edeef0] text-[#002b6b]"
                  >
                    <span className="text-[20px] font-bold leading-none">
                      {lvl.n}
                    </span>
                    <span className="text-[12px] font-medium leading-none">
                      Level
                    </span>
                  </span>
                  <p className="text-[15px] font-medium leading-[1.5] text-white md:text-base lg:text-[clamp(1rem,1.4vw,18px)]">
                    {lvl.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
