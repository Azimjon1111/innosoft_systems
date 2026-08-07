import { cn } from "@/lib/utils";

/** Standart karta: border + yuqori qirra yorug'ligi. Soyalar yo'q. */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line bg-surface p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-200 lg:p-10",
        className
      )}
    >
      {children}
    </div>
  );
}
