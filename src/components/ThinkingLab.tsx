import Image from "next/image";

const cards = [
  "Quick and easy way to rebuild the fundamentals of mathematics with the help of specialized AI Agents. Guides students to learn problem solving fundamentals, not just give answers.",
  "Learn all fundamental concepts of math with this accelerated program for total recall. It's never too late to build a solid foundation of mathematics.",
  "There are four stages in this course. Ranging from Number Theory to high school Algebra 2 and Geometry, allowing students to review or learn fundamental concepts with AI Agents as personal tutors.",
  "Using Polya's Problem Solving Framework and Seven AI Agents appearing at the appropriate moment to provide students with tutoring for self-paced problem solving.",
];

export default function ThinkingLab() {
  return (
    <section
      id="thinking-lab"
      className="bg-white px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-[100px] lg:py-[80px]"
    >
      <div className="mx-auto max-w-[1216px]">
        {/* Mobile/tablet: stacked vertically (mascot → title → 4 cards) */}
        <div className="flex flex-col items-center lg:hidden">
          <Mascot />
          <h2 className="mt-2 text-center font-serif text-[clamp(2rem,8vw,56px)] leading-[1.2] text-neutral-900">
            Thinking Lab
            <br />
            Shortcut Math
          </h2>
          <div className="mt-8 flex w-full flex-col items-center gap-6">
            {cards.map((c) => (
              <Card key={c} text={c} />
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid (cards | center mascot+title | cards) */}
        <div className="hidden grid-cols-[320px_532px_320px] items-center gap-10 lg:grid">
          <div className="flex flex-col items-start gap-10">
            <Card text={cards[0]} />
            <Card text={cards[1]} />
          </div>
          <div className="flex flex-col items-center">
            <Mascot />
            <h2 className="text-center font-serif text-[clamp(2.5rem,5vw,70px)] leading-[1.2] text-neutral-900">
              Thinking Lab
              <br />
              Shortcut Math
            </h2>
          </div>
          <div className="flex flex-col items-end gap-10">
            <Card text={cards[2]} />
            <Card text={cards[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Mascot() {
  return (
    <div className="relative h-[328px] w-[328px]">
      <Image
        src="/figma/thinking-lab/moka.png"
        alt="Moka mascot pointing upward"
        fill
        sizes="328px"
        priority
        className="object-cover object-top"
        style={{ objectPosition: "center 8%" }}
      />
      {/* Fade-to-white at the bottom so the body merges into the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-white/65 to-white"
      />
    </div>
  );
}

function Card({ text }: { text: string }) {
  return (
    <div className="w-full max-w-[320px] rounded-[20px] border border-[#edeef0] bg-white p-6 text-center shadow-[10px_25px_50px_rgba(0,43,107,0.18)]">
      <p className="text-base leading-[1.5] text-[color:var(--neutral-600)]">
        {text}
      </p>
    </div>
  );
}
