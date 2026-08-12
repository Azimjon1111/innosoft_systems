import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ProcessShowcase, type ProcessStep } from "./process-showcase";

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

  const steps: ProcessStep[] = STEPS.map((key) => ({
    key,
    title: t(`steps.${key}.title`),
    desc: t(`steps.${key}.desc`),
  }));

  return (
    <Section id="process" labelledBy="process-title" density="full">
      <Container>
        <SectionHeader
          id="process-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />
        <Reveal>
          <ProcessShowcase steps={steps} />
        </Reveal>
      </Container>
    </Section>
  );
}
