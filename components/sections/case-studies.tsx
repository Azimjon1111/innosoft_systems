import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { getProjects, mediaUrl } from "@/lib/api";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export async function CaseStudies({ locale }: { locale: Locale }) {
  const [t, projects] = await Promise.all([
    getTranslations("cases"),
    getProjects(),
  ]);

  const featured = projects.slice(0, 3);

  return (
    <Section id="cases" labelledBy="cases-title" density="full">
      <Container>
        <SectionHeader
          num="03"
          id="cases-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        {featured.length === 0 ? (
          <p className="text-center text-secondary">{t("empty")}</p>
        ) : (
          <div className="space-y-8">
            {featured.map((project, i) => {
              const img = mediaUrl(project.image);
              const reversed = i % 2 === 1;
              return (
                <Reveal key={project.id} as="article">
                  <div
                    className={cn(
                      "grid grid-cols-1 overflow-hidden rounded-xl border border-line bg-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:grid-cols-12"
                    )}
                  >
                    {/* Mockup — brauzer freym CSS bilan */}
                    <div
                      className={cn(
                        "p-6 pb-0 lg:col-span-7 lg:p-10 lg:pb-0",
                        reversed && "lg:order-2"
                      )}
                    >
                      <div className="group/frame overflow-hidden rounded-t-lg border border-b-0 border-line bg-bg-elevated">
                        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
                          <span className="frame-dot size-2 rounded-full bg-white/15" />
                          <span className="frame-dot size-2 rounded-full bg-white/15" />
                          <span className="frame-dot size-2 rounded-full bg-white/15" />
                          {project.url && (
                            <span className="ml-3 truncate font-mono text-[10px] text-tertiary">
                              {project.url.replace(/^https?:\/\//, "")}
                            </span>
                          )}
                        </div>
                        {img && (
                          <Image
                            src={img}
                            alt={project.title[locale] ?? project.title.uz}
                            width={720}
                            height={450}
                            sizes="(min-width: 1024px) 640px, 100vw"
                            quality={85}
                            className="aspect-[16/10] w-full object-cover object-top transition-[object-position] duration-[5000ms] ease-linear group-hover/frame:object-bottom"
                          />
                        )}
                      </div>
                    </div>

                    {/* Matn */}
                    <div
                      className={cn(
                        "flex flex-col justify-center p-6 lg:col-span-5 lg:p-10",
                        reversed && "lg:order-1"
                      )}
                    >
                      {project.category && (
                        <Chip className="self-start text-accent">
                          {project.category.title[locale] ?? project.category.title.uz}
                        </Chip>
                      )}
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
                        {project.title[locale] ?? project.title.uz}
                      </h3>
                      <p className="mt-3 line-clamp-4 text-base leading-relaxed text-secondary">
                        {project.description[locale] ?? project.description.uz}
                      </p>

                      {project.duration?.[locale] && (
                        <p className="mt-5 inline-flex items-center gap-2 text-sm text-tertiary">
                          <Clock className="size-4" aria-hidden />
                          {t("duration")}: {project.duration[locale]}
                        </p>
                      )}

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {project.technologies?.slice(0, 5).map((tech) => (
                          <li key={tech}>
                            <Chip>{tech}</Chip>
                          </li>
                        ))}
                      </ul>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-7 inline-flex items-center gap-2 self-start text-[15px] font-semibold text-accent transition-colors hover:text-foreground"
                        >
                          {t("view")}
                          <ArrowUpRight
                            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
}
