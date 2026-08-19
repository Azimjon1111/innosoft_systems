import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { PROJECTS } from "@/content/projects";
import { CONTACT } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

/** Portfolio ro'yxati sahifasi — uch tilda bir xil UI, statik ma'lumot */
export async function PortfolioPage({ locale }: { locale: Locale }) {
  const t = await getTranslations("portfolio");

  const industries = new Set(PROJECTS.map((p) => p.category?.slug).filter(Boolean));

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main">
        {/* Sahifa sarlavhasi */}
        <Section density="mid" labelledBy="portfolio-title">
          <Container>
            <Reveal className="max-w-3xl">
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
                {t("eyebrow")}
              </p>
              <h1
                id="portfolio-title"
                className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-[56px]"
              >
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary md:text-[22px] md:leading-[1.55]">
                {t("subhead")}
              </p>

              <dl className="mt-10 flex flex-wrap items-end gap-x-12 gap-y-6">
                <div>
                  <dd className="grad-text text-5xl font-light leading-none tracking-[-0.02em]">
                    {PROJECTS.length}
                  </dd>
                  <dt className="mt-2 text-sm text-tertiary">{t("counter")}</dt>
                </div>
                <div>
                  <dd className="grad-text text-5xl font-light leading-none tracking-[-0.02em]">
                    {industries.size}
                  </dd>
                  <dt className="mt-2 text-sm text-tertiary">{t("industries")}</dt>
                </div>
              </dl>
            </Reveal>
          </Container>
        </Section>

        {/* Filtr + grid */}
        <Section density="full" surface="elevated" ariaLabel={t("title")}>
          <Container>
            <PortfolioGrid
              projects={PROJECTS}
              locale={locale}
              labels={{
                all: t("all"),
                counter: t("counter"),
                visit: t("visit"),
                duration: t("duration"),
                empty: t("empty"),
              }}
            />
          </Container>
        </Section>

        {/* Yakuniy CTA */}
        <Section density="mid" ariaLabel={t("ctaTitle")}>
          <Container>
            <Reveal className="proc-active relative overflow-hidden rounded-xl px-6 py-16 text-center md:px-16 md:py-20">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
                {t("ctaTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondary">
                {t("ctaDesc")}
              </p>
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex h-12 items-center gap-3 rounded-md bg-primary-solid px-7 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#050816] transition-colors duration-200 hover:bg-primary-hover"
              >
                {t("ctaAction")}
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
            </Reveal>
          </Container>
        </Section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
