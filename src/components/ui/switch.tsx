"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, onCheckedChange, onChange, checked, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <label className={cn("relative inline-flex cursor-pointer items-center", className)}>
        <input
          type="checkbox"
          className="sr-only peer"
          ref={ref}
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "relative h-6 w-11 rounded-full border-2 border-[hsl(var(--border))]",
            "bg-[var(--brand-bg2)] dark:bg-[hsl(var(--muted))]",
            "transition-colors duration-300",
            "peer-checked:bg-[var(--brand-yellow)] peer-checked:border-[var(--brand-yellow-dark)]",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--brand-yellow)] peer-focus-visible:ring-offset-2"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 left-0.5 size-4 rounded-full",
              "bg-[hsl(var(--foreground))] transition-transform duration-300",
              "peer-checked:translate-x-5"
            )}
          />
        </div>
      </label>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
