"use client";

import { useEffect, useRef, useState } from "react";

/**
 * SSR yakuniy qiymatni chiqaradi (CLS=0, SEO to'liq) —
 * client ko'ringanda 0 → target ni bir marta animatsiya qiladi.
 */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(2, -10 * t); // easeOutExpo
          setDisplay(Math.round(value * eased));
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        setDisplay(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-US").replace(/,/g, " ")}
      {suffix}
    </span>
  );
}
