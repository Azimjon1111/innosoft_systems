import { getTranslations } from "next-intl/server";
import Link from "next/link";
import {
  Globe,
  Code2,
  ContactRound,
  Layers,
  BrainCircuit,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { IconTile } from "@/components/ui/icon-tile";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { JsonLd } from "@/components/seo/json-ld";
import { servicesSchema } from "@/components/seo/schemas";
import { servicePath } from "@/lib/routes";
import { SITE_URL } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

const SERVICES = [
  { key: "web", icon: Globe, route: "korporativ-saytlar" },
  { key: "software", icon: Code2, route: "dasturiy-taminot" },
  { key: "crm", icon: ContactRound, route: "crm-tizimlar" },
  { key: "erp", icon: Layers, route: "erp-tizimlar" },
  { key: "ai", icon: BrainCircuit, route: "ai-chatbotlar" },
  { key: "mobile", icon: Smartphone, route: "mobile-ilovlar" },
  { key: "ecommerce", icon: ShoppingCart, route: "internet-dukonlar" },
  { key: "seo", icon: TrendingUp, route: "seo-xizmatlar" },
] as const;

export async function Services({ locale }: { locale: Locale }) {
  const t = await getTranslations("services");

  const schemaItems = SERVICES.map((s) => ({
    name: t(`items.${s.key}.title`),
    url: `${SITE_URL}${servicePath(locale, s.route)}`,
  }));

  return (
    <Section id="services" labelledBy="services-title" density="full">
      <Container>
        <SectionHeader
          id="services-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.key} as="article" index={i % 4}>
              {/* Stretched-link: butun karta xizmatga olib boradi,
                  pastdagi alohida havola esa portfolioga */}
              <SpotlightCard className="group relative flex h-full flex-col rounded-lg border border-line bg-surface p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-200 hover:bg-surface-hover">
                <span className="spot-sheen" aria-hidden />
                <span className="spot-num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <IconTile className="transition-all duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:rounded-full group-hover:bg-primary/20">
                  <service.icon className="size-6 transition-transform duration-300 group-hover:rotate-6" />
                </IconTile>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">
                  <Link
                    href={servicePath(locale, service.route)}
                    className="after:absolute after:inset-0"
                  >
                    {t(`items.${service.key}.title`)}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-secondary">
                  {t(`items.${service.key}.desc`)}
                </p>
                <span className="mt-6 inline-flex w-fit flex-col text-sm font-medium text-accent">
                  <span className="inline-flex items-center gap-2">
                    {t("learnMore")}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden
                    />
                  </span>
                  {/* Ostki chiziq — hover'da chapdan o'sib chiqadi */}
                  <span
                    className="grad-line mt-1 block h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                </span>
                {/* Hover'da ochiladigan portfolio havolasi (xizmat → loyihalar) */}
                <a
                  href="#cases"
                  className="relative z-10 mt-3 hidden w-fit items-center gap-1.5 text-[13px] font-medium text-tertiary opacity-0 transition-all duration-200 [transform:translateY(4px)] hover:text-foreground group-hover:translate-y-0 group-hover:opacity-100 lg:inline-flex"
                >
                  {t("related")} →
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
      <JsonLd data={servicesSchema(locale, schemaItems)} />
    </Section>
  );
}
