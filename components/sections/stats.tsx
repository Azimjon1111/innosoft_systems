import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

/**
 * EPAM "Results" uslubidagi natijalar bloki: chapga tekislangan sarlavha,
 * ostida ulkan gradient raqamlar (scroll'da sanaladi), har birining ustida
 * ingichka chiziq. Raqamlar production sayt bilan bir xil + sayt kontentidan
 * kelib chiqadigan haqiqiy ko'rsatkichlar (hamkorlar, sohalar).
 */
const STATS = [
  { key: "projects", value: 200, suffix: "+" },
  { key: "users", value: 700, suffix: "K+" },
  { key: "years", value: 5, suffix: "+" },
  { key: "clients", value: 36, suffix: "+" },
  { key: "industries", value: 9, suffix: "" },
  { key: "support", static: "24/7" },
] as const;

export async function Stats() {
  const t = await getTranslations("stats");

  return (
    <Section labelledBy="stats-title" density="full">
      <Container>
        <SectionHeader
          id="stats-title"
          align="left"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        <dl className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.key} index={i % 3} className="border-t border-line pt-7">
              <dd className="grad-text text-7xl font-light leading-none tracking-[-0.03em] md:text-[92px]">
                {"static" in stat ? (
                  <span className="tabular-nums">{stat.static}</span>
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </dd>
              <dt className="mt-5 max-w-[28ch] text-base font-medium text-secondary">
                {t(stat.key)}
              </dt>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
