import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/data/portfolio";

const CATEGORY_TEXT_CLASS: Record<ProjectItem["categoryAccent"], string> = {
  primary: "text-primary",
  tertiary: "text-tertiary",
  "primary-container": "text-primary-container",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-space-2xl md:py-space-3xl">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-space-xl lg:px-margin flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              02 / SELECTED WORK
            </span>
            <h2 className="font-headline-lg text-headline-lg tracking-tight mt-1 text-on-surface">
              Things I&apos;ve built.
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-1">
              A selection of projects I&apos;ve worked on, experimented with,
              and learned from.
            </p>
          </div>
          <div className="font-label-code text-label-code text-on-surface-variant flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <span className="tabular-nums-code">3 Production Builds</span>
          </div>
        </div>

        {/* Project Cards */}
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="rounded-xl bg-surface-container-lowest p-space-md md:p-space-lg shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              {/* Mockup */}
              <div
                className={`lg:col-span-7 rounded-lg overflow-hidden bg-surface-container-high shadow-inner border border-outline-variant/30 ${
                  project.reverseLayout ? "order-1 lg:order-2" : ""
                }`}
              >
                <div className="h-8 bg-surface-container px-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                  </div>
                  <div className="font-label-code text-[0.6875rem] text-secondary">
                    {project.browserPath}
                  </div>
                  <div className="w-8" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div
                className={`lg:col-span-5 flex flex-col items-start gap-space-sm ${
                  project.reverseLayout ? "order-2 lg:order-1" : ""
                }`}
              >
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-surface-container font-label-code text-label-code ${
                    CATEGORY_TEXT_CLASS[project.categoryAccent]
                  }`}
                >
                  <span>{project.category}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {project.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 py-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant font-label-code text-label-code"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-space-sm pt-2 w-full sm:w-auto">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-inverse-surface text-inverse-on-surface font-body-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-body-sm font-medium hover:bg-surface-container-highest transition-colors"
                  >
                    <span>Source Code</span>
                    <Code2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
