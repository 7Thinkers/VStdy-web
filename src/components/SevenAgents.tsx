import Image from "next/image";

type Agent = {
  n: string;
  img: string;
  name: string;
  role: string;
  desc: string;
};

const topAgents: Agent[] = [
  {
    n: "01",
    img: "/figma/agents/01-einstein.png",
    name: "Einstein",
    role: "Orchestrator",
    desc: "Big Boss LLM. Detects student's ability and tells Agents to appear when needed.",
  },
  {
    n: "02",
    img: "/figma/agents/02-warren.png",
    name: "Warren",
    role: "Analyst Agent",
    desc: "Provides analysis of the questions for full comprehension and proper goal setting.",
  },
  {
    n: "03",
    img: "/figma/agents/03-suntzu.png",
    name: "Sun Tzu",
    role: "Strategist Agent",
    desc: "Asks questions to help students on how to think and strategize on problem solving.",
  },
];

const bottomAgents: Agent[] = [
  {
    n: "04",
    img: "/figma/agents/04-sherlock.png",
    name: "Sherlock",
    role: "Detective Agent",
    desc: "Provides Error Detection on students' solutions.",
  },
  {
    n: "05",
    img: "/figma/agents/05-director.png",
    name: "Director",
    role: "Solution Agent",
    desc: "Provides video-based step by step solution.",
  },
  {
    n: "06",
    img: "/figma/agents/06-davinci.png",
    name: "Davinci",
    role: "Artist Agent",
    desc: "Math problems require diagrams to solve a problem. Davinci provides diagrams to visualize solutions.",
  },
  {
    n: "07",
    img: "/figma/agents/07-newton.png",
    name: "Newton",
    role: "Professor Agent",
    desc: "When formulas are needed to solve a problem, Newton appears to provide necessary formulas.",
  },
];

export default function SevenAgents() {
  const allAgents = [...topAgents, ...bottomAgents];
  return (
    <section className="bg-white px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-[100px] lg:py-[70px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 lg:gap-[104px]">
        {/* Mobile: single column, title at top, 7 stacked cards with alternating number side */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          <h2 className="text-center font-serif text-[clamp(2rem,8vw,56px)] leading-[1.2] text-neutral-900">
            7 AI Specialized
            <br />
            Agents
          </h2>
          <div className="flex w-full max-w-[420px] flex-col gap-6">
            {allAgents.map((agent, i) => (
              <MobileAgentRow
                key={agent.n}
                agent={agent}
                numberSide={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>

        {/* Desktop: two grouped rows with photo collages */}
        <div className="hidden lg:contents">
          {/* Top group */}
          <div className="grid grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-10">
              <h2 className="font-serif text-[clamp(2.5rem,5.5vw,70px)] leading-[1.2] text-neutral-900">
                7 AI Specialized
                <br />
                Agents
              </h2>
              <div className="flex flex-col gap-6">
                {topAgents.map((agent, i) => (
                  <DesktopAgentRow
                    key={agent.n}
                    agent={agent}
                    numberSide={i === 1 ? "right" : "left"}
                  />
                ))}
              </div>
            </div>
            <PhotoCollage
              smallSrc="/figma/agents/photo-chalkboard.png"
              smallAlt="Student writing on a chalkboard"
              bigSrc="/figma/agents/photo-phone-scanning.png"
              bigAlt="Phone scanning handwritten math"
              badge="THINK SLOW & LEARN FAST"
            />
          </div>

          {/* Bottom group */}
          <div className="grid grid-cols-2 items-start gap-12">
            <div className="flex flex-col gap-6">
              <PhotoCollage
                smallSrc="/figma/agents/photo-girl-smiling.png"
                smallAlt="Student smiling, holding paper"
                bigSrc="/figma/agents/photo-handwriting.png"
                bigAlt="Student writing math by hand"
                badge="SEE IT, HEAR IT, & SAY IT."
              />
              <h3 className="px-10 font-serif text-[clamp(1.75rem,3.5vw,50px)] leading-[1.2] text-neutral-900">
                Different Tutors For
                <br />
                Different Circumstances
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              {bottomAgents.map((agent, i) => (
                <DesktopAgentRow
                  key={agent.n}
                  agent={agent}
                  numberSide={i % 2 === 1 ? "right" : "left"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileAgentRow({
  agent,
  numberSide,
}: {
  agent: Agent;
  numberSide: "left" | "right";
}) {
  const Number = (
    <p
      aria-hidden
      className="shrink-0 font-serif text-[64px] leading-none text-[#002b6b] opacity-15"
    >
      {agent.n}
    </p>
  );
  const Card = (
    <div className="flex flex-1 flex-col items-center gap-3 rounded-[20px] border border-[#edeef0] bg-white p-5 text-center shadow-[10px_25px_50px_rgba(0,43,107,0.18)]">
      <div className="relative h-[114px] w-[114px] shrink-0 overflow-hidden rounded-full bg-[#f6f7f9]">
        <Image
          src={agent.img}
          alt={`${agent.name} avatar`}
          fill
          sizes="114px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[18px] font-bold leading-[1.4] text-neutral-900">
          {agent.name}, {agent.role}
        </p>
        <p className="text-[14px] leading-[1.5] text-[color:var(--neutral-600)]">
          {agent.desc}
        </p>
      </div>
    </div>
  );
  return (
    <div className="flex items-center gap-3">
      {numberSide === "left" ? Number : null}
      {Card}
      {numberSide === "right" ? Number : null}
    </div>
  );
}

function DesktopAgentRow({
  agent,
  numberSide,
}: {
  agent: Agent;
  numberSide: "left" | "right";
}) {
  const Number = (
    <p
      aria-hidden
      className="shrink-0 font-serif text-[108px] leading-none text-[#002b6b] opacity-15"
    >
      {agent.n}
    </p>
  );
  const Card = (
    <div className="flex max-w-[463px] flex-1 items-center gap-4 rounded-[20px] border border-[#edeef0] bg-white p-3.5 shadow-[10px_25px_50px_rgba(0,43,107,0.18)]">
      <div className="relative h-[114px] w-[114px] shrink-0 overflow-hidden rounded-full bg-[#f6f7f9]">
        <Image
          src={agent.img}
          alt={`${agent.name} avatar`}
          fill
          sizes="114px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-[20px] font-bold leading-[1.5] text-neutral-900">
          {agent.name}, {agent.role}
        </p>
        <p className="text-[15px] leading-[1.5] text-[color:var(--neutral-600)]">
          {agent.desc}
        </p>
      </div>
    </div>
  );
  return (
    <div className="flex items-center gap-6">
      {numberSide === "left" ? Number : null}
      {Card}
      {numberSide === "right" ? Number : null}
    </div>
  );
}

function PhotoCollage({
  smallSrc,
  smallAlt,
  bigSrc,
  bigAlt,
  badge,
}: {
  smallSrc: string;
  smallAlt: string;
  bigSrc: string;
  bigAlt: string;
  badge: string;
}) {
  return (
    <div className="relative mx-auto h-[493px] w-full max-w-[579px]">
      {/* Big photo on the right */}
      <div className="absolute right-0 top-0 h-[493px] w-[341px] overflow-hidden rounded-[20px]">
        <Image
          src={bigSrc}
          alt={bigAlt}
          fill
          sizes="(min-width: 1280px) 341px, 30vw"
          className="object-cover"
        />
      </div>
      {/* Small photo on the left */}
      <div className="absolute left-0 top-0 h-[339px] w-[214px] overflow-hidden rounded-[20px]">
        <Image
          src={smallSrc}
          alt={smallAlt}
          fill
          sizes="(min-width: 1280px) 214px, 22vw"
          className="object-cover"
        />
      </div>
      {/* Badge sits at the bottom-left, overlapping into the big photo */}
      <div className="absolute left-0 top-[363px] w-[288px] rounded-[20px] border border-[#edeef0] bg-white px-4 py-4 shadow-[10px_25px_50px_rgba(0,43,107,0.18)]">
        <p className="text-center font-serif text-[20px] leading-[1.2] text-neutral-900">
          {badge}
        </p>
      </div>
    </div>
  );
}
