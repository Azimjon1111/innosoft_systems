import { getTranslations } from "next-intl/server";
import { Plus, Send } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/components/seo/schemas";

const GROUPS = ["work", "pricing", "tech"] as const;
const ITEMS = ["q1", "q2", "q3", "q4", "q5"] as const;

export async function Faq() {
  const t = await getTranslations("faq");

  const allItems = GROUPS.flatMap((group) =>
    ITEMS.map((item) => ({
      q: t(`groups.${group}.items.${item}.q`),
      a: t(`groups.${group}.items.${item}.a`),
    }))
  );

  return (
    <Section id="faq" labelledBy="faq-title" density="full" surface="elevated">
      <Container>
        <SectionHeader
          num="08"
          id="faq-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        <div className="space-y-16">
          {GROUPS.map((group) => (
            <div key={group} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] lg:sticky lg:top-28">
                  {t(`groups.${group}.title`)}
                </h3>
              </Reveal>
              <div className="lg:col-span-8">
                {ITEMS.map((item, i) => (
                  <Reveal key={item} index={i}>
                    {/* Native details — 0 JS, javob har doim HTML'da (SEO) */}
                    <details className="group border-b border-line">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                        {t(`groups.${group}.items.${item}.q`)}
                        <Plus
                          className="size-5 shrink-0 text-tertiary transition-transform duration-200 group-open:rotate-45"
                          aria-hidden
                        />
                      </summary>
                      <p className="max-w-[68ch] pb-6 text-base leading-relaxed text-secondary">
                        {t(`groups.${group}.items.${item}.a`)}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ o'qigan odam — eng "issiq" lead */}
        <Reveal className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-line pt-10 text-center sm:flex-row sm:gap-6">
          <p className="text-lg font-medium">{t("moreTitle")}</p>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-foreground"
          >
            <Send className="size-4" aria-hidden />
            {t("moreCta")}
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </a>
        </Reveal>
      </Container>
      <JsonLd data={faqSchema(allItems)} />
    </Section>
  );
}
