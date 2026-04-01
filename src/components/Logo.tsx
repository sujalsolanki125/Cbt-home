"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Logo() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    // Set initial value
    update();

    // Watch for class changes on <html> triggered by ThemeToggle
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Render nothing during SSR / before mount to avoid hydration mismatch
  if (isDark === null) return <div className="w-[140px] h-9" />;

  return (
    <Image
      src={isDark ? "/logo-dark.svg" : "/logo.svg"}
      alt="Proctera"
      width={140}
      height={36}
      priority
    />
  );
}
