import { BookOpen, FlaskConical, Leaf, Lightbulb } from "lucide-react";
import { BEYOND_ITEMS } from "@/data/portfolio";

const BEYOND_ICONS = {
  learning: BookOpen,
  "ai-labs": FlaskConical,
  challenges: Lightbulb,
  mindfulness: Leaf,
} as const;

export function BeyondSection() {
  return (
    <section
      id="beyond"
      className="w-full bg-surface-container-low py-space-2xl md:py-space-3xl"
    >
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-space-xl lg:px-margin flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              05 / PERSPECTIVE
            </span>
            <h2 className="font-headline-lg text-headline-lg tracking-tight mt-1 text-on-surface">
              When I&apos;m not coding.
            </h2>
          </div>
          <div className="font-label-code text-label-code text-secondary">
            Mindfulness, curiosity, and mental models beyond syntax.
          </div>
        </div>

        {/* 4 Perspective Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {BEYOND_ITEMS.map((item) => {
            const Icon =
              BEYOND_ICONS[item.id as keyof typeof BEYOND_ICONS] ?? BookOpen;

            return (
              <div
                key={item.id}
                className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="mt-6 font-label-code text-[0.75rem] text-primary">
                  {item.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
