import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";
import { getProjects, mediaUrl } from "@/lib/api";
import { projectsPath } from "@/lib/routes";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

/** Bento kataklari: 1-katta featured (2x2), keyin kichiklar, 5-chi keng (2x1) */
const SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "",
  "",
  "lg:col-span-2",
] as const;

export async function CaseStudies({ locale }: { locale: Locale }) {
  const [t, projects] = await Promise.all([getTranslations("cases"), getProjects()]);

  const featured = projects.slice(0, 5);

  return (
    <Section id="cases" labelledBy="cases-title" density="full">
      <Container>
        <SectionHeader
          id="cases-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        {featured.length === 0 ? (
          <p className="text-center text-secondary">{t("empty")}</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:auto-rows-[225px] lg:grid-cols-3">
            {featured.map((project, i) => {
              const img = mediaUrl(project.image);
              const title = project.title[locale] ?? project.title.uz;
              const isBig = i === 0;
              const Tag = project.url ? "a" : "div";

              return (
                <Reveal
                  key={project.id}
                  as="article"
                  index={i % 3}
                  className={cn("min-h-[260px] lg:min-h-0", SPANS[i])}
                >
                  <Tag
                    {...(project.url
                      ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="bento-tile group block h-full overflow-hidden rounded-xl border border-line bg-surface"
                    aria-label={`${title} — ${t("view")}`}
                  >
                    {/* Fon: skrinshot (hover'da sekin kattalashadi) */}
                    {img && (
                      <Image
                        src={img}
                        alt={title}
                        fill
                        sizes={isBig ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                        quality={85}
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    )}
                    {/* O'qilish uchun doimiy qoraytiruvchi qatlam */}
                    <span
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-opacity duration-300"
                      aria-hidden
                    />

                    {/* Yuqori o'ng: hover'da chiqadigan strelka */}
                    <span
                      className="absolute right-4 top-4 z-[2] inline-flex size-9 translate-y-1 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      aria-hidden
                    >
                      <ArrowUpRight className="size-4 text-white" />
                    </span>

                    {/* Pastki kontent */}
                    <span className="absolute inset-x-0 bottom-0 z-[2] block p-5 lg:p-6">
                      {project.category && (
                        <span className="mb-2.5 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white/85 backdrop-blur-sm">
                          {project.category.title[locale] ?? project.category.title.uz}
                        </span>
                      )}
                      <span
                        className={cn(
                          "block font-semibold tracking-[-0.02em] text-white",
                          isBig ? "text-2xl lg:text-[28px]" : "text-lg"
                        )}
                      >
                        {title}
                      </span>
                      {isBig && (
                        <span className="mt-2 line-clamp-2 max-w-[52ch] text-[15px] leading-relaxed text-white/70">
                          {project.description[locale] ?? project.description.uz}
                        </span>
                      )}
                      {/* Texnologiyalar — hover'da ko'tarilib chiqadi */}
                      <span
                        className={cn(
                          "flex max-h-0 translate-y-2 flex-wrap gap-1.5 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:translate-y-0 group-hover:opacity-100",
                          isBig ? "mt-0 group-hover:mt-3.5" : "mt-0 group-hover:mt-3"
                        )}
                      >
                        {project.technologies?.slice(0, isBig ? 5 : 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white/12 px-2.5 py-0.5 font-mono text-[11px] text-white/80 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </span>
                    </span>
                  </Tag>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* Barcha loyihalar sahifasiga havola (sahifa keyinroq quriladi) */}
        {featured.length > 0 && (
          <Reveal className="mt-12 text-center">
            <Link
              href={projectsPath(locale)}
              className="group inline-flex h-12 items-center gap-3 border border-line-strong px-7 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 hover:border-foreground hover:bg-foreground hover:text-bg"
            >
              {t("viewAll")}
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
