"use client";

import { useCallback, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Kursorni kuzatuvchi spotlight-karta: sichqoncha pozitsiyasi CSS
 * o'zgaruvchilarga (--mx/--my) yoziladi, chegara nuri va ichki yorug'lik
 * shu nuqta atrofida chiziladi (styling globals.css'dagi .spot-card'da).
 * Kontent server'da render bo'ladi — bu faqat yengil interaktiv qobiq.
 */
export function SpotlightCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={cn("spot-card", className)}>
      {children}
    </div>
  );
}
