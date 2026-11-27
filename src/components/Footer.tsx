import { AtSign, Briefcase, Code2 } from "lucide-react";
import { CONTACT_CHANNELS } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/40">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-space-xl lg:px-margin py-space-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="font-label-code text-label-code text-on-surface-variant">
            Pardip Kr Nayak © 2026
          </div>
          <p className="font-body-sm text-body-sm text-secondary text-center">
            Designed with care. Built with curiosity.
          </p>
          <div className="flex items-center gap-space-lg">
            <a
              href={CONTACT_CHANNELS.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <Code2 className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={CONTACT_CHANNELS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <Briefcase className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <AtSign className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
