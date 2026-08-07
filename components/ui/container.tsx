import { cn } from "@/lib/utils";

const sizes = {
  shell: "max-w-[1440px]",
  content: "max-w-[1280px]",
  narrow: "max-w-3xl",
} as const;

export function Container({
  size = "content",
  className,
  children,
}: {
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full px-6 md:px-10 lg:px-16", sizes[size], className)}>
      {children}
    </div>
  );
}
