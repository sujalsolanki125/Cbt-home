"use client";

import { useEffect, useState } from "react";

export function QWatermark() {
  const [num, setNum] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setNum((n) => (n % 65) + 1);
        setVisible(true);
      }, 380);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed right-[clamp(40px,8vw,100px)] bottom-[clamp(20px,4vh,50px)] pointer-events-none select-none z-[1] hidden lg:block"
      style={{
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: "clamp(80px, 18vw, 200px)",
        color: "transparent",
        WebkitTextStroke: "1.5px",
        WebkitTextStrokeColor: "color-mix(in srgb, hsl(var(--foreground)) 5%, transparent)",
        lineHeight: 1,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      {String(num).padStart(2, "0")}
    </div>
  );
}
