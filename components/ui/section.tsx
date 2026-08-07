import { cn } from "@/lib/utils";

const densities = {
  full: "py-24 md:py-[140px] lg:py-[180px]",
  mid: "py-[72px] md:py-[100px] lg:py-[120px]",
  band: "py-10 md:py-12 lg:py-14",
} as const;

const surfaces = {
  base: "bg-bg",
  elevated: "bg-bg-elevated",
} as const;

export function Section({
  id,
  labelledBy,
  ariaLabel,
  density = "full",
  surface = "base",
  className,
  children,
}: {
  id?: string;
  labelledBy?: string;
  ariaLabel?: string;
  density?: keyof typeof densities;
  surface?: keyof typeof surfaces;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      className={cn("scroll-mt-20", densities[density], surfaces[surface], className)}
    >
      {children}
    </section>
  );
}
