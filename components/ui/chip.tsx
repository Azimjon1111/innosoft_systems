import { cn } from "@/lib/utils";

export function Chip({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border border-line bg-white/[0.03] px-2.5 py-1 text-[13px] font-medium text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
