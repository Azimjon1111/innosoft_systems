import type { Metadata } from "next";
import { Source_Sans_3, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { Send } from "lucide-react";
import { SITE_URL, CONTACT } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, webSiteSchema } from "@/components/seo/schemas";
import "../globals.css";

// EPAM shrift stacki: museo-sans (litsenziyali, mavjud bo'lsa) → Source Sans.
// Source Sans 3 — "Source Sans Pro"ning davomchisi, next/font orqali self-hosted.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: "%s — Innosoft Systems",
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        uz: "/uz",
        ru: "/ru",
        en: "/en",
        "x-default": "/uz",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Innosoft Systems",
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${sourceSans.variable} ${geistMono.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body className="min-h-svh antialiased">
        {/* No-flash: default — light; foydalanuvchi dark tanlagan bo'lsa,
            birinchi paint'dan OLDIN atribut olib tashlanadi */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='dark')document.documentElement.removeAttribute('data-theme')}catch(e){}",
          }}
        />
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        {/* Suzuvchi Telegram CTA — O'zbekiston bozorida eng tez konversiya kanali */}
        <a
          href={CONTACT.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="fixed bottom-5 right-5 z-40 inline-flex size-[52px] items-center justify-center rounded-full text-white shadow-[0_8px_24px_rgba(9,131,198,0.4)] transition-transform duration-200 hover:scale-105 print:hidden"
          style={{ background: "linear-gradient(135deg, #0983c6, #065d8f)" }}
        >
          <Send className="size-5" aria-hidden />
        </a>
        <JsonLd
          data={[organizationSchema(locale as Locale), webSiteSchema(locale as Locale)]}
        />
      </body>
    </html>
  );
}
