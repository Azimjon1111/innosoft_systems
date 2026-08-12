import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { IndustriesShowcase, type IndustryItem } from "./industries-showcase";

const INDUSTRY_KEYS = [
  "healthcare",
  "construction",
  "manufacturing",
  "education",
  "finance",
  "retail",
  "logistics",
  "realestate",
  "government",
] as const;

export async function Industries() {
  const t = await getTranslations("industries");

  const items: IndustryItem[] = INDUSTRY_KEYS.map((key) => ({
    key,
    title: t(`items.${key}.title`),
    desc: t(`items.${key}.desc`),
    image: `/assets/img/industries/${key}.webp`,
  }));

  return (
    <Section id="industries" labelledBy="industries-title" density="mid" surface="elevated">
      <Container>
        <SectionHeader
          id="industries-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />
        <Reveal>
          <IndustriesShowcase items={items} />
        </Reveal>
      </Container>
    </Section>
  );
}
