import { cn } from "@/lib/utils";

export function IconTile({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "inline-flex size-12 items-center justify-center rounded-sm bg-primary-dim text-accent transition-colors duration-200",
        className
      )}
      aria-hidden
    >
      {children}
    </div>
  );
}
