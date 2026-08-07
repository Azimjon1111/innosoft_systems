import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex h-[52px] items-center justify-center gap-2 rounded-md px-7 text-base font-semibold transition-colors duration-200 active:scale-[0.99]";

const variants = {
  primary: "btn-primary bg-primary-solid text-[#050816] hover:bg-primary-hover",
  secondary: "btn-secondary",
  ghost: "text-secondary hover:text-foreground",
} as const;

type Props = {
  variant?: keyof typeof variants;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({ variant = "primary", href, external, className, children, ...rest }: Props) {
  const cls = cn(base, variants[variant], className);

  if (href) {
    if (external || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
