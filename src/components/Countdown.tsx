"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-06-21T00:00:00");

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function compute(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  return {
    days: String(Math.floor(diff / 86400000)).padStart(2, "0"),
    hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
    minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
    seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
  };
}

function Cell({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="border border-[hsl(var(--border))] p-4 text-center">
      <span
        className={`font-mono font-semibold text-3xl md:text-4xl tracking-tighter block leading-none ${
          accent ? "text-[var(--brand-yellow-dark)]" : "text-[hsl(var(--foreground))]"
        }`}
      >
        {value}
      </span>
      <span className="font-mono text-[10px] tracking-widest uppercase text-[hsl(var(--muted-foreground))] mt-1 block">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(compute());
    const id = setInterval(() => setTime(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full mt-10">
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--muted-foreground))] mb-2 text-right">
        // Time to launch
      </p>
      <div className="grid grid-cols-2 border-2 border-[hsl(var(--border))] bg-[var(--brand-bg2)] dark:bg-[hsl(var(--card))]">
        <Cell value={time?.days ?? "--"} label="Days" />
        <Cell value={time?.hours ?? "--"} label="Hours" />
        <Cell value={time?.minutes ?? "--"} label="Min" />
        <Cell value={time?.seconds ?? "--"} label="Sec" accent />
      </div>
      {/* Progress bar */}
      <div className="border-2 border-t-0 border-[hsl(var(--border))] h-1.5 bg-[hsl(var(--muted))] overflow-hidden">
        <div
          className="h-full bg-[var(--brand-yellow)]"
          style={{ width: "100%", animation: "drain 3628800s linear forwards" }}
        />
      </div>
      <style>{`@keyframes drain { to { width: 0% } }`}</style>
    </div>
  );
}