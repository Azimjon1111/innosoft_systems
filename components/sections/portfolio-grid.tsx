"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/api";
import type { Locale } from "@/i18n/routing";

/**
 * Portfolio ro'yxati: kategoriya bo'yicha filtr (klient) + uniform grid.
 * Kartada rasm (hover'da zoom + gradient halqa), kategoriya, sarlavha,
 * qisqa tavsif, texnologiya chiplari va saytga havola.
 */
export function PortfolioGrid({
  projects,
  locale,
  labels,
}: {
  projects: Project[];
  locale: Locale;
  labels: { all: string; counter: string; visit: string; duration: string; empty: string };
}) {
  const [active, setActive] = useState<string>("all");

  // Kategoriyalar + har biridagi loyihalar soni
  const categories = useMemo(() => {
    const map = new Map<string, { slug: string; title: string; count: number }>();
    for (const p of projects) {
      if (!p.category) continue;
      const slug = p.category.slug;
      const title = p.category.title[locale] ?? p.category.title.uz;
      const prev = map.get(slug);
      map.set(slug, { slug, title, count: (prev?.count ?? 0) + 1 });
    }
    return [...map.values()].sort((a, b) => b.count - a.count);
  }, [projects, locale]);

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category?.slug === active)),
    [projects, active]
  );

  return (
    <>
      {/* Filtr qatori */}
      <div className="mb-12 flex flex-wrap items-center gap-2.5">
        <FilterChip
          label={labels.all}
          count={projects.length}
          isActive={active === "all"}
          onClick={() => setActive("all")}
        />
        {categories.map((c) => (
          <FilterChip
            key={c.slug}
            label={c.title}
            count={c.count}
            isActive={active === c.slug}
            onClick={() => setActive(c.slug)}
          />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-secondary">{labels.empty}</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => {
            const title = project.title[locale] ?? project.title.uz;
            const desc = project.description[locale] ?? project.description.uz;
            const dur = project.duration?.[locale] ?? project.duration?.uz;

            return (
              <article key={project.id} className="group flex flex-col">
                {/* Rasm */}
                <div className="bento-tile relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    unoptimized
                    priority={i < 3}
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span
                    className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0"
                    aria-hidden
                  />
                  {project.url && (
                    <span
                      className="absolute right-4 top-4 z-[2] inline-flex size-9 translate-y-1 items-center justify-center rounded-full bg-white/12 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      aria-hidden
                    >
                      <ArrowUpRight className="size-4 text-white" />
                    </span>
                  )}
                </div>

                {/* Matn */}
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex items-center gap-3">
                    <span className="grad-text font-mono text-[13px] font-semibold tracking-[0.08em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.category && (
                      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-tertiary">
                        {project.category.title[locale] ?? project.category.title.uz}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-2.5 text-[22px] font-semibold tracking-[-0.02em]">{title}</h2>
                  <p className="mt-2.5 line-clamp-3 text-[15px] leading-relaxed text-secondary">
                    {desc}
                  </p>

                  {project.technologies?.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-tertiary"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    {dur ? (
                      <span className="inline-flex items-center gap-2 text-[13px] text-tertiary">
                        <Clock className="size-3.5" aria-hidden />
                        {labels.duration}: {dur}
                      </span>
                    ) : (
                      <span />
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent transition-colors hover:text-foreground"
                      >
                        {labels.visit}
                        <ArrowUpRight
                          className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}

function FilterChip({
  label,
  count,
  isActive,
  onClick,
}: {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
        isActive
          ? "proc-active border-transparent text-foreground"
          : "border-line text-secondary hover:border-line-strong hover:text-foreground"
      )}
    >
      {label}
      <span className={cn("font-mono text-[11px]", isActive ? "grad-text font-semibold" : "text-tertiary")}>
        {count}
      </span>
    </button>
  );
}
