import { getTranslations } from "next-intl/server";
import { Check, Minus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const ROWS = ["team", "architecture", "scalable", "seo", "delivery", "support", "stack"] as const;

export async function WhyUs() {
  const t = await getTranslations("why");

  return (
    <Section id="why-us" labelledBy="why-title" density="mid" surface="elevated">
      <Container>
        <SectionHeader
          num="02"
          id="why-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        {/* Desktop: semantik jadval */}
        <Reveal className="hidden overflow-hidden rounded-lg border border-line md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="w-1/2 px-8 py-5 text-sm font-medium text-tertiary">
                  {t("colFeature")}
                </th>
                <th
                  scope="col"
                  className="w-1/4 border-x border-line bg-surface px-8 py-5 text-base font-semibold"
                >
                  {t("colUs")}
                </th>
                <th scope="col" className="w-1/4 px-8 py-5 text-sm font-medium text-tertiary">
                  {t("colThem")}
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row} className={i < ROWS.length - 1 ? "border-b border-line" : ""}>
                  <th scope="row" className="px-8 py-5 text-base font-normal text-foreground/90">
                    {t(`rows.${row}.label`)}
                  </th>
                  <td className="border-x border-line bg-surface px-8 py-5">
                    <span className="inline-flex items-center gap-2.5 text-base font-medium">
                      <Check className="size-4 shrink-0 text-success" aria-hidden />
                      {t(`rows.${row}.us`)}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center gap-2.5 text-base text-tertiary">
                      <Minus className="size-4 shrink-0 opacity-50" aria-hidden />
                      {t(`rows.${row}.them`)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobil: ikki karta */}
        <div className="space-y-6 md:hidden">
          <Reveal className="rounded-lg border border-line-brand bg-surface p-6">
            <p className="text-lg font-semibold">{t("colUs")}</p>
            <ul className="mt-4 space-y-3.5">
              {ROWS.map((row) => (
                <li key={row} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden />
                  <span className="text-[15px] leading-snug">
                    <span className="text-secondary">{t(`rows.${row}.label`)}: </span>
                    <span className="font-medium">{t(`rows.${row}.us`)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-lg border border-line p-6">
            <p className="text-lg font-medium text-tertiary">{t("colThem")}</p>
            <ul className="mt-4 space-y-3.5">
              {ROWS.map((row) => (
                <li key={row} className="flex items-start gap-3 text-tertiary">
                  <Minus className="mt-1 size-4 shrink-0 opacity-50" aria-hidden />
                  <span className="text-[15px] leading-snug">
                    {t(`rows.${row}.label`)}: {t(`rows.${row}.them`)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
