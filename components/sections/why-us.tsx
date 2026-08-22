import { getTranslations } from "next-intl/server";
import { Gem, Users, Headset } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const ITEMS = ["quality", "team", "result", "support"] as const;
type ItemKey = (typeof ITEMS)[number];

/**
 * Har afzallik kartasining o'ziga xos jonli vizuali (CSS-only):
 * olmos-yaltirash, yoyiladigan jamoa doiralari, hover'da sakraydigan
 * grafik ustunlar va 24/7 radar. Matn doim ko'rinadi — animatsiya bezak.
 */
function AdvVisual({ item }: { item: ItemKey }) {
  if (item === "quality") {
    return (
      <div className="flex h-20 items-center">
        <div
          className="adv-gem flex size-14 rotate-45 items-center justify-center rounded-xl shadow-[0_0_35px_rgba(9,131,198,0.35)]"
          style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
        >
          <Gem className="size-6 -rotate-45 text-white" aria-hidden />
        </div>
      </div>
    );
  }
  if (item === "team") {
    return (
      <div className="flex h-20 items-center">
        <div className="flex -space-x-3 transition-all duration-300 group-hover:-space-x-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="flex size-11 items-center justify-center rounded-none border-2 border-surface bg-bg-elevated transition-all duration-300"
            >
              <Users className="size-4 text-secondary" aria-hidden />
            </span>
          ))}
          <span
            className="flex size-11 items-center justify-center rounded-none border-2 border-surface text-[12px] font-bold text-white transition-all duration-300"
            style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
          >
            10+
          </span>
        </div>
      </div>
    );
  }
  if (item === "result") {
    return (
      <div className="flex h-20 items-end gap-2 pb-1" aria-hidden>
        {[38, 55, 72, 100].map((h, i) => (
          <span
            key={h}
            className="adv-bar grad-line w-3.5 rounded-t-sm"
            style={{ height: `${h}%`, "--d": `${i * 90}ms` } as React.CSSProperties}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="flex h-20 items-center">
      <div className="adv-radar relative flex size-14 items-center justify-center overflow-hidden rounded-none border border-line-strong">
        <Headset className="relative z-[1] size-5 text-secondary" aria-hidden />
      </div>
    </div>
  );
}

export async function WhyUs() {
  const t = await getTranslations("why");

  return (
    <Section id="why-us" labelledBy="why-title" density="mid" surface="elevated">
      <Container>
        <SectionHeader
          id="why-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item} index={i % 2}>
              <div className="bento-tile group relative h-full rounded-xl border border-line bg-surface p-8 transition-transform duration-300 hover:-translate-y-1">
                <span
                  className="grad-text pointer-events-none absolute right-7 top-6 font-mono text-4xl font-semibold leading-none opacity-25"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <AdvVisual item={item} />
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
                  {t(`items.${item}.title`)}
                </h3>
                <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-secondary">
                  {t(`items.${item}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
