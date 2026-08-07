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
              <Link
                href={servicePath(locale, service.route)}
                className="group flex h-full flex-col rounded-lg border border-line bg-surface p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-200 hover:border-line-brand hover:bg-surface-hover"
              >
                <IconTile className="group-hover:bg-primary/20">
                  <service.icon className="size-6" />
                </IconTile>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-secondary">
                  {t(`items.${service.key}.desc`)}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  {t("learnMore")}
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
      <JsonLd data={servicesSchema(locale, schemaItems)} />
    </Section>
  );
}
