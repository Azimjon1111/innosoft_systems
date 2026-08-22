"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  Users,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  key: string;
  title: string;
  desc: string;
}

/** Har bosqichga mos ikonka */
const ICONS: Record<string, LucideIcon> = {
  discovery: Search,
  research: Users,
  design: PenTool,
  development: Code2,
  qa: ShieldCheck,
  launch: Rocket,
  support: LifeBuoy,
};

/** Bitta bosqich uchun vertikal masofa (SVG koordinatalarida) */
const ROW = 176;
/** Yo'lning chapdagi va o'ngdagi cho'qqilari */
const LEFT_X = 27;
const RIGHT_X = 73;

/** Bosqichlar orqali silliq ilon-izi yo'l chizadi (piksel koordinatalari) */
function buildPath(count: number, width: number) {
  const nodes = Array.from({ length: count }, (_, i) => ({
    x: ((i % 2 === 0 ? RIGHT_X : LEFT_X) / 100) * width,
    y: ROW / 2 + i * ROW,
  }));

  let d = `M ${nodes[0].x} 0`;
  d += ` C ${nodes[0].x} ${ROW * 0.28}, ${nodes[0].x} ${ROW * 0.3}, ${nodes[0].x} ${nodes[0].y}`;
  for (let i = 1; i < nodes.length; i++) {
    const p = nodes[i - 1];
    const c = nodes[i];
    d += ` C ${p.x} ${p.y + ROW * 0.55}, ${c.x} ${c.y - ROW * 0.55}, ${c.x} ${c.y}`;
  }
  const last = nodes[nodes.length - 1];
  d += ` C ${last.x} ${last.y + ROW * 0.3}, ${last.x} ${last.y + ROW * 0.4}, ${last.x} ${last.y + ROW / 2}`;
  return { d, nodes };
}

/**
 * Zigzag yo'l xaritasi: gradient yo'l scroll bilan bog'liq ravishda chizilib
 * boradi (animation-timeline: view(), qo'llab-quvvatlanmasa — IO fallback).
 * Har bekatda pulslanuvchi halqa va "nafas oluvchi" ikonka; kartalar
 * navbatma-navbat chap/o'ngdan siljib chiqadi. Matn doim ko'rinadi.
 */
export function ProcessShowcase({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [width, setWidth] = useState(0);

  // SVG cho'zilmasligi uchun yo'l aynan piksel kengligida quriladi
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const path = pathRef.current;
    // Yo'lning haqiqiy uzunligi — dash hisob-kitobi shunga asoslanadi
    const len = path?.getTotalLength() ?? 0;
    if (path && len) {
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      if (path) path.style.strokeDashoffset = "0";
      return;
    }

    // Bekat/karta animatsiyalari — bir marta, ko'ringanda
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" }
    );
    io.observe(el);

    // Yo'l scroll bilan chiziladi: 0 → 1
    let raf = 0;
    const update = () => {
      raf = 0;
      const track = el.querySelector<HTMLElement>(".road-track");
      const box = track ?? el;
      const r = box.getBoundingClientRect();
      const vh = window.innerHeight;
      // Blok ekran pastiga kirganda boshlanadi, 65% ko'ringanda tugaydi
      const span = r.height * 0.72 + vh * 0.35;
      const p = Math.min(1, Math.max(0, (vh - r.top - vh * 0.28) / span));
      if (path && len) path.style.strokeDashoffset = String(len * (1 - p));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [width]);

  const height = steps.length * ROW;
  const { d, nodes } = buildPath(steps.length, width || 1000);

  return (
    <div ref={ref} className="road-scene relative" data-drawn={drawn}>
      {/* ── Desktop: ilon-izi yo'l ── */}
      <div ref={trackRef} className="road-track relative hidden lg:block" style={{ height }}>
        <svg
          viewBox={`0 0 ${width || 1000} ${height}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            {/* userSpaceOnUse — gradient butun yo'l bo'ylab bir tekis yotadi */}
            <linearGradient
              id="road-grad"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2={height}
            >
              <stop offset="0%" stopColor="var(--grad-a)" />
              <stop offset="50%" stopColor="var(--grad-a)" />
              <stop offset="100%" stopColor="var(--grad-b)" />
            </linearGradient>
          </defs>
          {/* Sokin asos chiziq */}
          <path
            d={d}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth={2}
          />
          {/* Scroll bilan chizilib boruvchi gradient yo'l */}
          <path
            ref={pathRef}
            className="road-path"
            d={d}
            fill="none"
            stroke="url(#road-grad)"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </svg>

        {/* Bekatlar — ikonkali doira + puls halqasi */}
        {nodes.map((n, i) => {
          const Icon = ICONS[steps[i].key] ?? Search;
          return (
            <span
              key={`node-${steps[i].key}`}
              className="road-node absolute -translate-x-1/2 -translate-y-1/2"
              style={
                { left: n.x, top: n.y, "--d": `${300 + i * 240}ms` } as React.CSSProperties
              }
              aria-hidden
            >
              <span className="relative flex size-12 items-center justify-center">
                {/* Tarqaluvchi puls */}
                <span
                  className="grad-line road-pulse absolute inset-0 rounded-none"
                  style={{ "--d": `${i * 340}ms` } as React.CSSProperties}
                />
                {/* Yadro */}
                <span
                  className="grad-line relative flex size-12 items-center justify-center rounded-none ring-4 ring-bg"
                  style={{ boxShadow: "0 0 26px color-mix(in oklab, var(--grad-a) 45%, transparent)" }}
                >
                  <Icon
                    className="road-icon size-5 text-white"
                    strokeWidth={2}
                    style={{ "--d": `${i * 300}ms` } as React.CSSProperties}
                  />
                </span>
              </span>
            </span>
          );
        })}

        {/* Bosqich kartalari — navbatma-navbat chap/o'ng */}
        {steps.map((step, i) => {
          const onRight = i % 2 === 0;
          return (
            <div
              key={step.key}
              className={cn(
                "road-card absolute w-[36%]",
                onRight
                  ? "road-card-r left-[calc(73%+52px)]"
                  : "road-card-l right-[calc(73%+52px)] text-right"
              )}
              style={
                {
                  top: nodes[i].y,
                  transform: "translateY(-50%)",
                  "--d": `${420 + i * 240}ms`,
                } as React.CSSProperties
              }
            >
              <span className="grad-text font-mono text-[13px] font-semibold tracking-[0.08em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1.5 text-[22px] font-semibold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-secondary">{step.desc}</p>
            </div>
          );
        })}
      </div>

      {/* ── Mobil/tablet: chapdagi chiziqli timeline ── */}
      <ol className="relative lg:hidden">
        <span
          className="road-line-v absolute bottom-5 left-[19px] top-4 w-0.5 rounded-none opacity-60"
          aria-hidden
        />
        {steps.map((step, i) => {
          const Icon = ICONS[step.key] ?? Search;
          return (
            <li key={step.key} className="relative pb-9 pl-14 last:pb-0">
              <span
                className="grad-line absolute left-0 top-0 flex size-10 items-center justify-center rounded-none ring-4 ring-bg"
                aria-hidden
              >
                <Icon className="size-4 text-white" strokeWidth={2} />
              </span>
              <span className="grad-text font-mono text-[12px] font-semibold tracking-[0.08em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-lg font-semibold tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-secondary">{step.desc}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
