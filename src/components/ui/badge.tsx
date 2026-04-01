import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-[var(--brand-yellow)] bg-[var(--brand-yellow)] text-[var(--brand-black)]",
        secondary:
          "border-transparent bg-[var(--brand-bg2)] text-[var(--brand-black)]",
        outline:
          "border-[hsl(var(--border))] text-[hsl(var(--foreground))] bg-transparent",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        success:
          "border-transparent bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
