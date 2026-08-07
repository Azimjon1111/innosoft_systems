import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const GROUPS = [
  { key: "frontend", items: ["React", "Next.js", "TypeScript"] },
  { key: "backend", items: ["Node.js", "NestJS", "GraphQL"] },
  { key: "data", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { key: "cloud", items: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud"] },
  { key: "ai", items: ["OpenAI", "LangChain"] },
  { key: "payments", items: ["Stripe", "Payme", "Click"] },
] as const;

export async function TechStack() {
  const t = await getTranslations("tech");

  return (
    <Section id="tech" labelledBy="tech-title" density="mid" surface="elevated">
      <Container>
        <SectionHeader
          id="tech-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <Reveal key={group.key} index={i % 3}>
              <p className="border-b border-line pb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-tertiary">
                {t(`groups.${group.key}`)}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-lg font-semibold tracking-[-0.01em] text-secondary transition-colors duration-200 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
