"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("proctera-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("proctera-theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative h-7 w-13 cursor-pointer rounded-none border-2 border-[hsl(var(--border))] bg-[var(--brand-bg2)] dark:bg-[hsl(var(--muted))] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-yellow)] focus-visible:ring-offset-2 flex items-center px-1"
      style={{ width: 52 }}
    >
      {/* icons */}
      <span className="absolute left-[5px] text-[10px] leading-none pointer-events-none">
        <Sun size={10} />
      </span>
      <span className="absolute right-[5px] text-[10px] leading-none pointer-events-none">
        <Moon size={10} />
      </span>
      {/* thumb */}
      <span
        className="size-4 rounded-none bg-[var(--brand-yellow)] border border-[var(--brand-yellow-dark)] transition-transform duration-300 z-10"
        style={{ transform: dark ? "translateX(26px)" : "translateX(0px)" }}
      />
    </button>
  );
}
