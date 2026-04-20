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
    <div className="flex flex-col items-center justify-center border border-[hsl(var(--border))] px-3 py-3 text-center sm:px-4 sm:py-4">
      <span
        className={`block font-mono text-[22px] font-semibold leading-none tracking-tight sm:text-[28px] md:text-[34px] ${
          accent ? "text-(--brand-yellow-dark)" : "text-[hsl(var(--foreground))]"
        }`}
      >
        {value}
      </span>
      <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.24em] text-[hsl(var(--muted-foreground))] sm:text-[10px]">
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
    <div className="w-full">
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--muted-foreground))] mb-2 text-right">
        // Time to launch
      </p>
      <div className="grid grid-cols-4 overflow-hidden rounded-[22px] border border-[hsl(var(--border))] bg-(--brand-bg2) dark:bg-[hsl(var(--card))]">
        <Cell value={time?.days ?? "--"} label="Days" />
        <Cell value={time?.hours ?? "--"} label="Hours" />
        <Cell value={time?.minutes ?? "--"} label="Min" />
        <Cell value={time?.seconds ?? "--"} label="Sec" accent />
      </div>
      {/* Progress bar */}
      <div className="h-1 border border-t-0 border-[hsl(var(--border))] bg-[hsl(var(--muted))] overflow-hidden rounded-b-[22px]">
        <div
          className="h-full bg-(--brand-yellow)"
          style={{ width: "100%", animation: "drain 3628800s linear forwards" }}
        />
      </div>
      <style>{`@keyframes drain { to { width: 0% } }`}</style>
    </div>
  );
}