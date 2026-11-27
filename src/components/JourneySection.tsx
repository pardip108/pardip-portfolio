import { TIMELINE_NODES } from "@/data/portfolio";

export function JourneySection() {
  return (
    <section id="journey" className="w-full py-space-2xl md:py-space-3xl">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-space-xl lg:px-margin flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              04 / BACKGROUND
            </span>
            <h2 className="font-headline-lg text-headline-lg tracking-tight mt-1 text-on-surface">
              My journey so far.
            </h2>
          </div>
          <div className="font-label-code text-label-code text-secondary">
            Continuous compounding across code and systems.
          </div>
        </div>

        {/* Linear Timeline Grid */}
        <div className="relative pl-6 md:pl-10 space-y-10 before:absolute before:left-2 md:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-highest">
          {TIMELINE_NODES.map((node) => (
            <div key={node.period} className="relative group">
              {node.isCurrent ? (
                <div className="absolute -left-6 md:-left-10 top-1.5 w-4 md:w-5 h-4 md:h-5 rounded-full bg-primary ring-4 ring-primary/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-primary" />
                </div>
              ) : (
                <div className="absolute -left-6 md:-left-10 top-1.5 w-4 md:w-5 h-4 md:h-5 rounded-full bg-surface-container-highest ring-4 ring-surface-container flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant" />
                </div>
              )}

              <div className="p-space-md md:p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-label-code text-label-code font-bold tabular-nums-code ${
                        node.isCurrent
                          ? "text-primary"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {node.period}
                    </span>
                    {node.badge && (
                      <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-code text-[0.6875rem]">
                        {node.badge}
                      </span>
                    )}
                  </div>
                  <span className="font-label-code text-label-code text-secondary">
                    {node.phase}
                  </span>
                </div>
                <h3 className="font-headline-md text-[1.35rem] text-on-surface font-medium">
                  {node.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary mt-1 leading-relaxed">
                  {node.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
