import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

/** Raqamlar production sayt (innosoft-systems.uz) bilan bir xil */
const STATS = [
  { key: "projects", value: 200, suffix: "+" },
  { key: "years", value: 5, suffix: "+" },
  { key: "users", value: 700, suffix: "K+" },
  { key: "support", static: "24/7" },
] as const;

export async function Stats() {
  const t = await getTranslations("stats");

  return (
    <Section density="band" ariaLabel={t("ariaLabel")}>
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 py-6 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {STATS.map((stat, i) => (
            <Reveal key={stat.key} index={i} className="text-center lg:px-6">
              <dd className="text-4xl font-semibold tracking-[-0.025em] md:text-[36px]">
                {"static" in stat ? (
                  <span className="tabular-nums">{stat.static}</span>
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </dd>
              <dt className="mt-2 text-sm text-tertiary">{t(stat.key)}</dt>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
