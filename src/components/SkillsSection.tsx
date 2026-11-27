import { Bot, Database, Monitor, Server, Terminal } from "lucide-react";
import { AI_FOCUS_ITEMS, SKILL_GROUPS, type SkillGroup } from "@/data/portfolio";

const SKILL_ICON_MAP = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  devops: Terminal,
} as const;

const DOT_COLOR_CLASS: Record<NonNullable<SkillGroup["dotColor"]>, string> = {
  primary: "bg-primary",
  "primary-container": "bg-primary-container",
  tertiary: "bg-tertiary",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full bg-surface-container-low py-space-2xl md:py-space-3xl"
    >
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-space-xl lg:px-margin flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              03 / CAPABILITIES
            </span>
            <h2 className="font-headline-lg text-headline-lg tracking-tight mt-1 text-on-surface">
              My tools of the trade.
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-1">
              Proven engineering stack built across scalable backends, reactive
              frontends, and intelligence pipelines.
            </p>
          </div>
          <div className="font-label-code text-label-code text-secondary">
            No arbitrary percentages · Only production competency
          </div>
        </div>

        {/* Skills Matrix Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {SKILL_GROUPS.map((group) => {
            const Icon =
              SKILL_ICON_MAP[group.id as keyof typeof SKILL_ICON_MAP] ??
              Terminal;
            const dotClass = group.dotColor
              ? DOT_COLOR_CLASS[group.dotColor]
              : null;

            return (
              <div
                key={group.id}
                className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col gap-space-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {group.title}
                    </h3>
                    <p className="font-label-code text-[0.75rem] text-secondary">
                      {group.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-code text-label-code flex items-center gap-1.5"
                    >
                      {dotClass && (
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${dotClass}`}
                        />
                      )}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* AI & Exploration (Spans 2 columns on md/lg) */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col gap-space-md md:col-span-2 lg:col-span-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Exploring: AI &amp; Intelligent Workflows
                  </h3>
                  <p className="font-label-code text-[0.75rem] text-primary">
                    Active R&amp;D Frontier
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-code text-[0.6875rem] shrink-0">
                Active Focus
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              {AI_FOCUS_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1"
                >
                  <span className="font-headline-sm text-[0.95rem] text-on-surface font-medium">
                    {item.title}
                  </span>
                  <p className="font-body-sm text-[0.8125rem] text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
