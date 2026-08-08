import { getTranslations } from "next-intl/server";
import {
  HeartPulse,
  HardHat,
  Factory,
  GraduationCap,
  Banknote,
  ShoppingBag,
  Truck,
  Building2,
  Landmark,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const INDUSTRIES = [
  { key: "healthcare", icon: HeartPulse },
  { key: "construction", icon: HardHat },
  { key: "manufacturing", icon: Factory },
  { key: "education", icon: GraduationCap },
  { key: "finance", icon: Banknote },
  { key: "retail", icon: ShoppingBag },
  { key: "logistics", icon: Truck },
  { key: "realestate", icon: Building2 },
  { key: "government", icon: Landmark },
] as const;

export async function Industries() {
  const t = await getTranslations("industries");

  return (
    <Section id="industries" labelledBy="industries-title" density="mid" surface="elevated">
      <Container>
        <SectionHeader
          num="04"
          id="industries-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <Reveal
              as="li"
              key={industry.key}
              index={i % 3}
              className="group flex items-center gap-5 rounded-lg border border-line bg-surface p-6 transition-colors duration-200 hover:border-line-strong"
            >
              <industry.icon
                className="size-8 shrink-0 text-secondary transition-colors duration-200 group-hover:text-accent"
                strokeWidth={1.5}
                aria-hidden
              />
              <div>
                <h3 className="text-lg font-medium">{t(`items.${industry.key}.title`)}</h3>
                <p className="mt-0.5 text-sm text-tertiary">{t(`items.${industry.key}.desc`)}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
