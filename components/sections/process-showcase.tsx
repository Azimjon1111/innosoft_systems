"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const STEP_MS = 4500;

export interface ProcessStep {
  key: string;
  title: string;
  desc: string;
}

/**
 * Akkordeon-ustunlar: 7 bosqich yonma-yon vertikal ustunlar bo'lib turadi,
 * aktivi kengayib ochiladi (sarlavha + tavsif + progress), qolganlari
 * vertikal yozuvli ingichka ustunlar. Auto-aylanadi, hover'da to'xtaydi,
 * klik bilan boshqariladi. Reduced-motion'da auto-aylanish o'chadi.
 * Mobil'da vertikal akkordeon.
 */
export function ProcessShowcase({ steps }: { steps: ProcessStep[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setActive((a) => (a + 1) % steps.length);
    }, STEP_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, paused, reduced, steps.length]);

  return (
    <>
      {/* Desktop: akkordeon-ustunlar */}
      <div
        className="hidden h-[420px] gap-2 lg:flex"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <button
              key={step.key}
              type="button"
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-expanded={isActive}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-lg border text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isActive
                  ? "proc-active grow-[5] basis-0 border-transparent bg-surface"
                  : "grow basis-0 border-line bg-transparent hover:border-line-strong hover:bg-surface/50"
              )}
            >
              {/* Progress chiziq — faqat aktiv ustunda, auto rejimda to'ladi */}
              <span className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden>
                {isActive && !reduced && !paused && (
                  <span
                    key={active}
                    className="proc-progress absolute inset-y-0 left-0 block"
                    style={{ animation: `hero-progress ${STEP_MS}ms linear forwards` }}
                  />
                )}
                {isActive && (reduced || paused) && (
                  <span className="proc-progress absolute inset-0 block" />
                )}
              </span>

              <span
                className={cn(
                  "px-5 pt-5 font-mono text-[13px] tracking-[0.08em] transition-colors duration-300",
                  isActive ? "proc-grad-text font-semibold" : "text-tertiary"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Yig'ilgan holat: vertikal sarlavha */}
              <span
                className={cn(
                  "mx-auto mb-6 mt-auto whitespace-nowrap text-[15px] font-medium text-secondary transition-all duration-300 [writing-mode:vertical-rl] rotate-180",
                  isActive ? "pointer-events-none absolute bottom-6 opacity-0" : "opacity-100 delay-200"
                )}
                aria-hidden={isActive}
              >
                {step.title}
              </span>
              {!isActive && (
                <Plus
                  className="mx-auto mb-5 size-4 text-tertiary transition-transform duration-300 group-hover:rotate-90"
                  aria-hidden
                />
              )}

              {/* Ochilgan holat */}
              <span
                className={cn(
                  "flex flex-1 flex-col justify-end p-6 transition-all duration-500",
                  isActive ? "translate-y-0 opacity-100 delay-150" : "pointer-events-none absolute inset-0 translate-y-4 opacity-0"
                )}
                aria-hidden={!isActive}
              >
                <span className="proc-grad-text pointer-events-none absolute right-4 top-10 font-mono text-[96px] font-semibold leading-none opacity-[0.18]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  {step.title}
                </span>
                <span className="mt-3 block max-w-[36ch] text-[15px] leading-relaxed text-secondary">
                  {step.desc}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobil/tablet: vertikal akkordeon */}
      <ol className="lg:hidden">
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <li key={step.key} className="border-t border-line last:border-b">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className="flex w-full items-baseline gap-4 py-4 text-left"
              >
                <span
                  className={cn(
                    "font-mono text-[13px]",
                    isActive ? "proc-grad-text font-semibold" : "text-tertiary"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span
                    className={cn(
                      "block text-lg font-medium transition-colors duration-200",
                      isActive ? "text-foreground" : "text-secondary"
                    )}
                  >
                    {step.title}
                  </span>
                  <span
                    className={cn(
                      "block overflow-hidden text-sm leading-relaxed text-tertiary transition-all duration-300",
                      isActive ? "mt-1.5 max-h-20 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    {step.desc}
                  </span>
                </span>
                <Plus
                  className={cn(
                    "size-4 shrink-0 self-center text-tertiary transition-transform duration-300",
                    isActive && "rotate-45"
                  )}
                  aria-hidden
                />
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}
