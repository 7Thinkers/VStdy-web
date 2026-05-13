import Image from "next/image";

type Feature = {
  icon: string;
  iconAspect: string;
  iconAlt: string;
  title: string;
  body: string;
};

const leftFeatures: Feature[] = [
  {
    icon: "/figma/app/icon-instant.png",
    iconAspect: "70/70",
    iconAlt: "Instant Help icon",
    title: "Instant Help",
    body: "When you need help, scan your own problems and get instant step by step solution.",
  },
  {
    icon: "/figma/app/icon-error.png",
    iconAspect: "86/70",
    iconAlt: "Error Detection icon",
    title: "Error Detection",
    body: "When you are not sure about your answer, scan your hand written solution to get an accurate Error Detection.",
  },
];

const rightFeatures: Feature[] = [
  {
    icon: "/figma/app/icon-ask.png",
    iconAspect: "73/70",
    iconAlt: "Ask Questions icon",
    title: "Ask Questions",
    body: "VStdy's solutions are multi-modal: video and audio based to decrease dependency on text comprehension.",
  },
  {
    icon: "/figma/app/icon-specialized.png",
    iconAspect: "81/70",
    iconAlt: "Specialized AI for Math icon",
    title: "Specialized AI for Math",
    body: "New way to teach and learn using the state of the art, Artificial Intelligence technology.",
  },
];

export default function VstdyApp() {
  return (
    <section
      id="app"
      className="bg-white px-6 py-16 md:px-12 md:py-20 lg:px-[100px] lg:py-[50px]"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8">
        <div className="flex max-w-[650px] flex-col items-center gap-4 text-center">
          <h2 className="font-serif text-[clamp(2.25rem,5.5vw,70px)] leading-[1.2] text-neutral-900">
            The VStdy App
          </h2>
          <p className="text-base font-medium leading-[1.5] text-[color:var(--neutral-600)]">
            We turn your camera into a diagnostic portal. Speak to the AI to
            unlock hints, listen to conceptual breakdowns, and learn through
            immersive video &amp; audio dialogue.
          </p>
        </div>

        {/* Concentric circles + phone + 4 feature cards */}
        <div className="relative w-full max-w-[1200px]">
          {/* Mobile: stacked layout */}
          <div className="flex flex-col items-center gap-6 lg:hidden">
            <PhoneMockup />
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {[...leftFeatures, ...rightFeatures].map((f) => (
                <FeatureCard key={f.title} feature={f} />
              ))}
            </div>
          </div>

          {/* Desktop: concentric layout */}
          <div className="relative mx-auto hidden h-[635px] w-[635px] lg:block">
            {/* Concentric circles, decorative */}
            <Circle size={603} />
            <Circle size={505} />
            <Circle size={387} />
            <Circle size={271} />

            {/* Doodle arrows */}
            <Image
              src="/figma/app/arrow-tr.svg"
              alt=""
              aria-hidden
              width={84}
              height={64}
              className="pointer-events-none absolute"
              style={{ top: 3, left: 532 }}
            />
            <Image
              src="/figma/app/arrow-bl.svg"
              alt=""
              aria-hidden
              width={95}
              height={65}
              className="pointer-events-none absolute"
              style={{ top: 565, left: 32 }}
            />

            <p
              className="absolute font-serif text-[30px] leading-[1.2] text-[#272f3a]"
              style={{ top: 608, left: "50%", transform: "translateX(-50%)" }}
            >
              See it, Say it.
            </p>

            <PhoneMockup
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <FeatureCard
              feature={leftFeatures[0]}
              className="absolute"
              style={{ left: -231.5, top: 69, width: 274 }}
            />
            <FeatureCard
              feature={leftFeatures[1]}
              className="absolute"
              style={{ left: -193.5, top: 310, width: 274 }}
            />
            <FeatureCard
              feature={rightFeatures[0]}
              className="absolute"
              style={{ left: 591.5, top: 69, width: 274 }}
            />
            <FeatureCard
              feature={rightFeatures[1]}
              className="absolute"
              style={{ left: 551.5, top: 331, width: 274 }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <a href="#" aria-label="Download on the App Store" className="block">
            <Image
              src="/figma/app/app-store.png"
              alt="Download on the App Store"
              width={146}
              height={53}
              className="h-[44px] w-auto sm:h-[53px]"
            />
          </a>
          <a href="#" aria-label="Get it on Google Play" className="block">
            <Image
              src="/figma/app/google-play.png"
              alt="Get it on Google Play"
              width={147}
              height={53}
              className="h-[44px] w-auto sm:h-[53px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function Circle({ size }: { size: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#b0d0ff]/60"
      style={{ width: size, height: size }}
    />
  );
}

function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-[572px] w-[349px] overflow-hidden rounded-[20px] shadow-xl ${className}`}
    >
      <Image
        src="/figma/app/scanned_image.png"
        alt="VStdy app screenshot"
        fill
        sizes="349px"
        className="object-cover"
      />
    </div>
  );
}

function FeatureCard({
  feature,
  className = "",
  style,
}: {
  feature: Feature;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [iw, ih] = feature.iconAspect.split("/").map(Number);
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-[20px] border border-[#edeef0] bg-white p-6 text-center shadow-[10px_25px_50px_rgba(0,43,107,0.18)] ${className}`}
      style={style}
    >
      <Image
        src={feature.icon}
        alt={feature.iconAlt}
        width={iw * 4}
        height={ih * 4}
        className="h-[60px] w-auto"
      />
      <div className="flex flex-col gap-1">
        <p className="text-[20px] font-bold leading-[1.5] text-neutral-900">
          {feature.title}
        </p>
        <p className="text-[14px] font-semibold leading-[1.5] text-[color:var(--neutral-600)]">
          {feature.body}
        </p>
      </div>
    </div>
  );
}
