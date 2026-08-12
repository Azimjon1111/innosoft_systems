"use client";

import { useState } from "react";
import { ArrowRight, Check, Minus, Repeat2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WhyRow {
  key: string;
  label: string;
  us: string;
  them: string;
}

/**
 * 3D flip-kartalar: old tomonda mezon + odatiy agentliklar qiymati (xira),
 * hover/klikda karta ag'darilib, orqa tomonda Innosoft Systems qiymati
 * gradient bezak bilan ochiladi. 8-karta — CTA. Klik ham ishlaydi (touch
 * qurilmalar va klaviatura uchun), reduced-motion'da ag'darish darhol.
 */
function FlipCard({
  row,
  colUs,
  colThem,
  flipHint,
}: {
  row: WhyRow;
  colUs: string;
  colThem: string;
  flipHint: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-scene h-[250px]">
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={`${row.label} — ${flipHint}`}
        className={cn("flip-inner block w-full text-left", flipped && "is-flipped")}
      >
        {/* Old tomon: odatiy agentliklar */}
        <span className="flip-face flex flex-col rounded-lg border border-line bg-surface p-6">
          <span className="flex items-center justify-between">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-tertiary">
              {colThem}
            </span>
            <Minus className="size-4 text-tertiary opacity-50" aria-hidden />
          </span>
          <span className="mt-5 block text-lg font-semibold leading-snug tracking-[-0.01em]">
            {row.label}
          </span>
          <span className="mt-2 block text-[15px] text-tertiary">{row.them}</span>
          <span className="mt-auto inline-flex items-center gap-2 text-[13px] font-medium text-tertiary">
            <Repeat2 className="size-4" aria-hidden />
            {flipHint}
          </span>
        </span>

        {/* Orqa tomon: Innosoft Systems */}
        <span className="flip-face flip-back proc-active flex flex-col rounded-lg bg-surface p-6">
          <span className="flex items-center justify-between">
            <span className="grad-text text-[11px] font-semibold uppercase tracking-[0.12em]">
              {colUs}
            </span>
            <span
              className="grad-line inline-flex size-6 items-center justify-center rounded-full"
              aria-hidden
            >
              <Check className="size-3.5 text-white" strokeWidth={3} />
            </span>
          </span>
          <span className="mt-5 block text-[15px] leading-snug text-secondary">{row.label}</span>
          <span className="mt-2 block text-[22px] font-semibold leading-snug tracking-[-0.01em]">
            {row.us}
          </span>
          <span
            className="grad-text pointer-events-none mt-auto self-end font-mono text-[44px] font-semibold leading-none opacity-25"
            aria-hidden
          >
            ✓
          </span>
        </span>
      </button>
    </div>
  );
}

export function WhyUsShowcase({
  rows,
  colUs,
  colThem,
  flipHint,
  ctaTitle,
  ctaDesc,
  ctaAction,
}: {
  rows: WhyRow[];
  colUs: string;
  colThem: string;
  flipHint: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaAction: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {rows.map((row) => (
        <FlipCard key={row.key} row={row} colUs={colUs} colThem={colThem} flipHint={flipHint} />
      ))}

      {/* 8-karta: CTA (ag'darilmaydi — to'g'ridan-to'g'ri harakatga chaqiradi) */}
      <a
        href="#contact"
        className="proc-active group flex h-[250px] flex-col rounded-lg bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
      >
        <span className="grad-text text-[11px] font-semibold uppercase tracking-[0.12em]">
          {colUs}
        </span>
        <span className="mt-5 block text-lg font-semibold leading-snug tracking-[-0.01em]">
          {ctaTitle}
        </span>
        <span className="mt-2 block text-[15px] leading-relaxed text-secondary">{ctaDesc}</span>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold">
          {ctaAction}
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden
          />
        </span>
      </a>
    </div>
  );
}
