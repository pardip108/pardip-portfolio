import {
  Brain,
  BrainCircuit,
  Compass,
  Layers,
  Network,
} from "lucide-react";

const PILLARS = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end architecture from reactive client surfaces to resilient backend services. Clean code conventions, modular patterns, and robust API contracts.",
    tags: ["React", "Node.js", "Spring Boot"],
    Icon: Layers,
  },
  {
    title: "Problem Solving",
    description:
      "Algorithmic efficiency, methodical debugging, and disciplined data modeling. Approaching complexity with mathematical clarity and step-by-step resolution.",
    tags: ["Data Structures", "System Design", "Optimization"],
    Icon: Network,
  },
  {
    title: "AI & Emerging Tech",
    description:
      "Active exploration of LLM orchestration, intelligent agent chains, retrieval-augmented generation (RAG), and vector embeddings integrated into practical UX.",
    tags: ["LangChain", "AI Agents", "Vector DBs"],
    Icon: BrainCircuit,
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-surface-container-low py-space-2xl md:py-space-3xl"
    >
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-space-xl lg:px-margin flex flex-col gap-space-xl">
        {/* Section Tag & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              01 / ABOUT
            </span>
            <h2 className="font-headline-lg text-headline-lg tracking-tight mt-1 text-on-surface">
              A little about me.
            </h2>
          </div>
          <div className="font-label-code text-label-code text-secondary">
            Crafting systems from first principles.
          </div>
        </div>

        {/* Narrative Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg lg:gap-gutter items-start">
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              I&apos;m a developer who enjoys building things for the web. From
              designing intuitive interfaces to developing backend systems, I
              like understanding how every part of an application works
              together.
            </p>
            <div className="mt-space-md bg-surface-container-low p-4 rounded-lg flex items-center gap-3">
              <Compass className="w-6 h-6 text-primary shrink-0" />
              <div className="font-label-code text-label-code text-on-surface-variant">
                System architecture · Reactive UI · Microservices
              </div>
            </div>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
              I believe good software is not just about writing code. It&apos;s
              about solving problems, keeping things simple, and creating
              experiences people genuinely enjoy using.
            </p>
            <div className="mt-space-md bg-surface-container-low p-4 rounded-lg flex items-center gap-3">
              <Brain className="w-6 h-6 text-tertiary shrink-0" />
              <div className="font-label-code text-label-code text-on-surface-variant">
                Pragmatic design · High accessibility · Zero fluff
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {PILLARS.map(({ title, description, tags, Icon }) => (
            <div
              key={title}
              className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                  {title}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-code text-[0.75rem]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophies Strip */}
        <div className="p-space-md rounded-xl bg-surface-container-high flex flex-wrap items-center justify-around gap-space-md text-center">
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase block mb-1">
              Focus
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface">
              Modern Web &amp; AI
            </span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-outline-variant" />
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase block mb-1">
              Design Axiom
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface">
              Simple &gt; Complex
            </span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-outline-variant" />
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase block mb-1">
              Status
            </span>
            <span className="font-headline-sm text-headline-sm text-primary">
              Selected @ KPIT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
