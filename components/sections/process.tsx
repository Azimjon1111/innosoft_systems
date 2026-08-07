import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  "discovery",
  "research",
  "design",
  "development",
  "qa",
  "launch",
  "support",
] as const;

export async function Process() {
  const t = await getTranslations("process");

  return (
    <Section id="process" labelledBy="process-title" density="full">
      <Container>
        <SectionHeader
          id="process-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        {/* Desktop: gorizontal timeline */}
        <ol className="relative hidden grid-cols-7 gap-4 lg:grid">
          <div
            className="absolute left-0 right-0 top-4 h-px bg-gradient-to-r from-primary via-line-strong to-line"
            aria-hidden
          />
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step} index={i} className="relative pt-12">
              <span
                className="absolute left-0 top-0 inline-flex size-8 items-center justify-center rounded-full border border-line-strong bg-bg font-mono text-[12px] font-medium text-accent"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold">{t(`steps.${step}.title`)}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-tertiary">
                {t(`steps.${step}.desc`)}
              </p>
            </Reveal>
          ))}
        </ol>

        {/* Mobil/tablet: vertikal timeline */}
        <ol className="relative space-y-8 border-l border-line pl-8 lg:hidden">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step} className="relative">
              <span
                className="absolute -left-12 top-0 inline-flex size-8 items-center justify-center rounded-full border border-line-strong bg-bg font-mono text-[12px] font-medium text-accent"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold">{t(`steps.${step}.title`)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-tertiary">
                {t(`steps.${step}.desc`)}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
