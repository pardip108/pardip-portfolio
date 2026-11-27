"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import { NAV_ITEMS, PORTFOLIO_IMAGES, RESUME_URL } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.05 }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-[1240px] mx-auto px-margin-mobile md:px-space-xl lg:px-margin flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-space-xs text-headline-sm font-headline-sm tracking-tight text-on-surface group"
        >
          <span>Pardip</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block transition-transform duration-200 group-hover:scale-125" />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-space-xs p-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "px-space-sm py-1 font-body-sm text-body-sm transition-colors duration-150 text-on-surface bg-surface-container font-medium rounded-lg"
                    : "px-space-sm py-1 font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors duration-150 rounded"
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          <ThemeToggle />

          <a
            href={RESUME_URL}
            download
            className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-body-sm text-body-sm hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-surface-container-highest shrink-0">
            <Image
              src={PORTFOLIO_IMAGES.profile}
              alt="Pardip Kr Nayak profile"
              fill
              sizes="32px"
              className="object-cover object-[55%_25%]"
            />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden bg-surface border-t border-outline-variant/40 shadow-[0_8px_16px_rgba(0,0,0,0.06)] px-margin-mobile py-space-md flex flex-col gap-space-xs"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={
                  isActive
                    ? "px-space-md py-2 font-body-sm text-body-sm text-on-surface bg-surface-container font-medium rounded-lg transition-colors"
                    : "px-space-md py-2 font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
                }
              >
                {item.label}
              </a>
            );
          })}

          <div className="pt-space-sm mt-space-xs">
            <a
              href={RESUME_URL}
              download
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-space-xs w-full py-2 rounded-lg bg-inverse-surface text-inverse-on-surface font-body-sm text-body-sm hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
