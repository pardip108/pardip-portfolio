import Image from "next/image";
import {
  ArrowDown,
  BadgeCheck,
  Cpu,
  Globe,
  MessageSquare,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_IMAGES } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="home"
      className="w-full max-w-[1240px] mx-auto px-margin-mobile md:px-space-xl lg:px-margin py-space-xl md:py-space-3xl flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-center">
        {/* Narrative Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-space-md md:gap-space-lg">
          {/* Status & Location Badges */}
          <div className="flex flex-wrap items-center gap-space-xs md:gap-space-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="font-label-code text-label-code font-medium">
                Available for freelance &amp; collaboration
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-code text-label-code">
              <Globe className="w-3.5 h-3.5" />
              <span>Based in India · Working Worldwide</span>
            </div>
          </div>

          {/* Overline Tag */}
          <div className="font-label-caps text-label-caps text-primary tracking-widest uppercase flex items-center gap-2">
            <span className="w-6 h-[2px] bg-primary" />
            <span>Hello, I&apos;m Pardip Kr Nayak</span>
          </div>

          {/* Headline */}
          <h1 className="font-headline-lg md:font-display-hero text-headline-lg md:text-display-hero tracking-tight leading-[1.08] text-on-surface">
            Building{" "}
            <span className="text-primary-container">digital experiences</span>{" "}
            that make a difference.
          </h1>

          {/* Subheading */}
          <p className="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
            I&apos;m a Full-Stack Developer passionate about building clean,
            scalable and user-friendly web applications. I enjoy turning complex
            ideas into pragmatic digital products.
          </p>

          {/* CTA Action Hub */}
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-body-sm font-medium hover:opacity-90 transition-all shadow-sm group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-[1.125rem] h-[1.125rem] transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-lg bg-surface-container-high text-on-surface font-body-sm font-medium hover:bg-surface-container-highest transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <MessageSquare className="w-[1.125rem] h-[1.125rem]" />
            </a>
          </div>

          {/* Quick Proof Micro-Bar */}
          <div className="pt-space-md flex flex-wrap items-center gap-y-2 gap-x-6 text-on-surface-variant font-label-code text-label-code">
            <div className="flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-primary" />
              <span>Selected @ KPIT Technologies</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-primary" />
              <span>Crossing into AI &amp; Intelligent Agents</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Right Column */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high shadow-xl group">
            <Image
              src={PORTFOLIO_IMAGES.profile}
              alt="Pardip Kr Nayak - Full-Stack & AI/ML Developer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[55%_center] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Editorial Floating Overlay Badges */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
              <span className="px-2.5 py-1 rounded bg-surface/90 backdrop-blur-md text-on-surface font-label-code text-label-code shadow-sm">
                Full-Stack Eng
              </span>
              <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-code text-label-code shadow-sm">
                Exploring AI/ML
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
              <div>
                <p className="font-headline-sm text-headline-sm font-medium leading-none text-white">
                  Pardip Kr Nayak
                </p>
                <p className="font-label-code text-[0.75rem] text-white/80 mt-1">
                  Computer Science &amp; Engineering
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
