import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeader({
  id,
  eyebrow,
  title,
  subhead,
  align = "center",
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subhead?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-3xl lg:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-4xl font-semibold tracking-[-0.03em] leading-[1.05] md:text-5xl lg:text-[56px]"
      >
        {title}
      </h2>
      {subhead && (
        <p className="mt-6 text-lg leading-relaxed text-secondary md:text-[22px] md:leading-[1.55]">
          {subhead}
        </p>
      )}
    </Reveal>
  );
}
