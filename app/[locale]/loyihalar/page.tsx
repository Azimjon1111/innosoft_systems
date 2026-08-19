import { setRequestLocale, getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { PortfolioPage } from "@/components/pages/portfolio-page";
import { projectsPath } from "@/lib/routes";
import { SITE_URL } from "@/lib/constants";

/** uz-tilidagi portfolio sahifasi: /uz/loyihalar */
const PAGE_LOCALE = "uz" as const;

export function generateStaticParams() {
  return [{ locale: PAGE_LOCALE }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== PAGE_LOCALE) return {};
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "portfolio" });
  const url = `${SITE_URL}${projectsPath(PAGE_LOCALE)}`;
  return {
    title: t("title"),
    description: t("subhead"),
    alternates: {
      canonical: url,
      languages: {
        uz: `${SITE_URL}${projectsPath("uz")}`,
        ru: `${SITE_URL}${projectsPath("ru")}`,
        en: `${SITE_URL}${projectsPath("en")}`,
      },
    },
    openGraph: { title: t("title"), description: t("subhead"), url, type: "website" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Bu manzil faqat o'z tilida ochiladi (boshqa tilda 404)
  if (!hasLocale(routing.locales, locale) || locale !== PAGE_LOCALE) notFound();
  setRequestLocale(locale);
  return <PortfolioPage locale={locale as Locale} />;
}
