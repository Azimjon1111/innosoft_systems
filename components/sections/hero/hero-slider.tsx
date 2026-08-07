"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDE_MS = 9000;

export interface HeroSlide {
  key: string;
  eyebrow: string;
  title: ReactNode;
  desc: string;
  ctaLabel: string;
  ctaHref: string;
  media: { type: "video"; src: string } | { type: "image"; src: string };
}

/**
 * EPAM uslubidagi to'liq ekran hero-karusel: har slaydda orqa fon video
 * (muted, loop, cover), pastki-chapda yirik light sarlavha, pastda
 * progress-indikatorlar. Reduced-motion'da avto-aylanish va video o'chadi.
 */
export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Avto-aylanish
  useEffect(() => {
    if (reduced) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setActive((a) => (a + 1) % slides.length);
    }, SLIDE_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, reduced, slides.length]);

  // Faqat aktiv video ijro etiladi (rasm-slaydlarda ref bo'sh)
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active && !reduced) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, reduced]);

  const goTo = useCallback((i: number) => setActive(i), []);

  return (
    <section
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      className="relative isolate flex min-h-[640px] flex-col overflow-hidden pt-[76px] h-svh"
    >
      {/* Orqa fon: fallback gradient + videolar + qoraytiruvchi qatlam */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(177,177,177,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(177,177,177,0.05), transparent 60%)",
          }}
        />
        {slides.map((slide, i) =>
          slide.media.type === "video" ? (
            <video
              key={slide.key}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={slide.media.src}
              muted
              loop
              playsInline
              preload={i === 0 ? "auto" : "metadata"}
              autoPlay={i === 0 && !reduced}
              className={cn(
                "absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out",
                i === active ? "opacity-100" : "opacity-0"
              )}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={slide.key}
              src={slide.media.src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              className={cn(
                "absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out",
                i === active ? "opacity-100" : "opacity-0"
              )}
            />
          )
        )}
        {/* Matn o'qilishi uchun overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/55 to-[#050816]/30" />
      </div>

      {/* Slayd matnlari — vertikal markazda (EPAM kabi) */}
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-6 pb-28 md:px-10 lg:px-16">
        {slides.map((slide, i) => {
          const TitleTag = i === 0 ? "h1" : "p";
          return (
            <div
              key={slide.key}
              aria-hidden={i !== active}
              className={cn(
                "col-start-1 row-start-1 grid transition-all duration-700 ease-out",
                i === active
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible translate-y-4 opacity-0",
                i !== 0 && "absolute inset-x-6 top-1/2 -translate-y-1/2 md:inset-x-10 lg:inset-x-16"
              )}
            >
              {/* Video ustida tema'dan qat'i nazar doim oq matn */}
              <p
                className="text-[13px] font-medium uppercase tracking-[0.16em]"
                style={{ color: "#b1b1b1" }}
              >
                {slide.eyebrow}
              </p>
              <TitleTag
                id={i === 0 ? "hero-title" : undefined}
                className="mt-4 max-w-[16ch] text-[40px] font-light leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-7xl xl:text-[76px]"
                style={{ color: "#ffffff" }}
              >
                {slide.title}
              </TitleTag>
              <p
                className="mt-5 max-w-[54ch] text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {slide.desc}
              </p>
              <a
                href={slide.ctaHref}
                tabIndex={i === active ? 0 : -1}
                className="group mt-8 inline-flex h-12 w-fit items-center gap-3 border border-white/40 px-7 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#050816]"
              >
                {slide.ctaLabel}
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
            </div>
          );
        })}
      </div>

      {/* Indikatorlar — EPAM uslubida raqam + progress chiziq */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex w-full max-w-[1280px] gap-6 px-6 pb-8 md:px-10 lg:px-16">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${i + 1} / ${slides.length}: ${slide.eyebrow}`}
              aria-current={i === active ? "true" : undefined}
              className="group flex-1 pt-3 text-left"
            >
              <span className="relative block h-px w-full overflow-hidden bg-white/20">
                {i === active && !reduced && (
                  <span
                    key={active}
                    className="absolute inset-y-0 left-0 block bg-white"
                    style={{ animation: `hero-progress ${SLIDE_MS}ms linear forwards` }}
                  />
                )}
                {i === active && reduced && (
                  <span className="absolute inset-0 block bg-white" />
                )}
              </span>
              <span
                className="mt-3 block font-mono text-[12px] tracking-[0.08em] transition-colors duration-200"
                style={{ color: i === active ? "#ffffff" : "rgba(255,255,255,0.45)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="mt-0.5 hidden text-[13px] font-medium transition-colors duration-200 sm:block"
                style={{ color: i === active ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.4)" }}
              >
                {slide.eyebrow}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
