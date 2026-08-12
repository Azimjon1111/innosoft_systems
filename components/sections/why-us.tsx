import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { WhyUsShowcase, type WhyRow } from "./why-us-showcase";

const ROWS = ["team", "architecture", "scalable", "seo", "delivery", "support", "stack"] as const;

export async function WhyUs() {
  const t = await getTranslations("why");

  const rows: WhyRow[] = ROWS.map((key) => ({
    key,
    label: t(`rows.${key}.label`),
    us: t(`rows.${key}.us`),
    them: t(`rows.${key}.them`),
  }));

  return (
    <Section id="why-us" labelledBy="why-title" density="mid" surface="elevated">
      <Container>
        <SectionHeader
          id="why-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />
        <Reveal>
          <WhyUsShowcase
            rows={rows}
            colUs={t("colUs")}
            colThem={t("colThem")}
            flipHint={t("flipHint")}
            ctaTitle={t("ctaTitle")}
            ctaDesc={t("ctaDesc")}
            ctaAction={t("ctaAction")}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
