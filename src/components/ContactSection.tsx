import {
  ArrowRight,
  Briefcase,
  Code2,
  ExternalLink,
  FileText,
  Mail,
} from "lucide-react";
import { CONTACT_CHANNELS, RESUME_URL } from "@/data/portfolio";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-space-2xl md:py-space-3xl">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-space-xl lg:px-margin flex flex-col gap-space-xl">
        {/* Section Header */}
        <div>
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
            06 / GET IN TOUCH
          </span>
          <h2 className="font-headline-lg text-headline-lg tracking-tight mt-1 text-on-surface">
            Have an idea? Let&apos;s build something.
          </h2>
          <p className="font-body-lg text-body-lg text-secondary mt-1 max-w-2xl">
            I&apos;m always interested in meaningful projects, new
            opportunities, and connecting with people who love building
            thoughtful software.
          </p>
        </div>

        {/* Contact Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-start">
          {/* Left: Quick Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col gap-space-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Direct Channels
              </h3>

              <a
                href={`mailto:${CONTACT_CHANNELS.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <Mail className="w-[1.125rem] h-[1.125rem]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-label-code text-[0.6875rem] text-secondary uppercase block">
                    Email
                  </span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface truncate block">
                    {CONTACT_CHANNELS.email}
                  </span>
                </div>
                <ArrowRight className="w-[1.125rem] h-[1.125rem] text-secondary" />
              </a>

              <a
                href={CONTACT_CHANNELS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <Briefcase className="w-[1.125rem] h-[1.125rem]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-label-code text-[0.6875rem] text-secondary uppercase block">
                    LinkedIn
                  </span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface truncate block">
                    {CONTACT_CHANNELS.linkedinDisplay}
                  </span>
                </div>
                <ExternalLink className="w-[1.125rem] h-[1.125rem] text-secondary" />
              </a>

              <a
                href={CONTACT_CHANNELS.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <Code2 className="w-[1.125rem] h-[1.125rem]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-label-code text-[0.6875rem] text-secondary uppercase block">
                    GitHub
                  </span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface truncate block">
                    {CONTACT_CHANNELS.githubDisplay}
                  </span>
                </div>
                <ExternalLink className="w-[1.125rem] h-[1.125rem] text-secondary" />
              </a>

              <div className="pt-2">
                <a
                  href={RESUME_URL}
                  download
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-body-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <FileText className="w-[1.125rem] h-[1.125rem]" />
                  <span>Download Complete Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-space-md rounded-xl bg-surface-container-high flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
              <div className="font-body-sm text-body-sm text-on-surface">
                <span className="font-medium">Current Status:</span> Open for
                selected contract inquiries, tech advisory, and research chats.
              </div>
            </div>
          </div>

          {/* Right: Interactive Minimalist Contact Form */}
          <div className="lg:col-span-7 p-space-lg md:p-space-xl rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
