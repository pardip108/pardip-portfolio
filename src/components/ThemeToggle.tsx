"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all cursor-pointer"
    >
      <Moon className="w-[1.125rem] h-[1.125rem] dark:hidden" />
      <Sun className="w-[1.125rem] h-[1.125rem] hidden dark:block" />
    </button>
  );
}
