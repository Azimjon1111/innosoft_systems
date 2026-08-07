import type { Locale } from "@/i18n/routing";

/**
 * Eski saytdagi (production) service slug'lari — URL strukturasi
 * SEO tarixini saqlash uchun aynan shu ko'rinishda qoladi.
 * Manba: innobek_official/utils/pathMapping.js
 */
export const serviceRoutes: Record<string, Record<Locale, string>> = {
  "lending-saytlar": { uz: "lending-saytlar", ru: "lending-sayty", en: "landing-websites" },
  "internet-dukonlar": { uz: "internet-dukonlar", ru: "internet-magazini", en: "e-commerce" },
  "telegram-botlar": { uz: "telegram-botlar", ru: "telegram-boty", en: "telegram-bots" },
  "mobile-ilovlar": { uz: "mobile-ilovlar", ru: "mobilnye-prilojenie", en: "mobile-apps" },
  "korporativ-saytlar": { uz: "korporativ-saytlar", ru: "korporativnye-sayty", en: "corporate-websites" },
  "startap-saytlar": { uz: "startap-saytlar", ru: "sayty-dlya-startapov", en: "startup-websites" },
  "seo-xizmatlar": { uz: "seo-xizmatlar", ru: "seo-uslugi", en: "seo-services" },
  "vizitka-saytlar": { uz: "vizitka-saytlar", ru: "sayt-vizitka", en: "business-card-websites" },
  "crm-tizimlar": { uz: "crm-tizimlar", ru: "crm-sistemy", en: "crm-development" },
  "erp-tizimlar": { uz: "erp-tizimlar", ru: "erp-sistemy", en: "erp-development" },
  "veb-ilovalar": { uz: "veb-ilovalar", ru: "veb-prilojeniya", en: "web-applications" },
  "ai-chatbotlar": { uz: "ai-chatbotlar", ru: "ai-chat-boty", en: "ai-chatbots" },
  "ux-ui-dizayn": { uz: "ux-ui-dizayn", ru: "ux-ui-dizayn", en: "ux-ui-design" },
  "sayt-redizayn": { uz: "sayt-redizayn", ru: "redizayn-sayta", en: "website-redesign" },
  "sayt-texnik-xizmat": { uz: "sayt-texnik-xizmat", ru: "podderjka-saytov", en: "website-maintenance" },
  "kontekst-reklama": { uz: "kontekst-reklama", ru: "kontekstnaya-reklama", en: "google-ads" },
  "smm-marketing": { uz: "smm-marketing", ru: "smm-prodvijenie", en: "smm-marketing" },
  "it-autsorsing": { uz: "it-autsorsing", ru: "it-autsorsing", en: "it-outsourcing" },
  "sayt-buyurtma": { uz: "sayt-buyurtma", ru: "zakazat-sayt", en: "order-website" },
  "dasturiy-taminot": { uz: "dasturiy-taminot", ru: "razrabotka-po", en: "software-development" },
  "biznes-avtomatlashtirish": { uz: "biznes-avtomatlashtirish", ru: "avtomatizaciya-biznesa", en: "business-automation" },
  "it-konsalting": { uz: "it-konsalting", ru: "it-konsalting", en: "it-consulting" },
};

export const categoryRoutes: Record<string, Record<Locale, string>> = {
  xizmatlar: { uz: "xizmatlar", ru: "uslugi", en: "services" },
};

/** /{locale}/{xizmatlar|uslugi|services}/{slug} */
export function servicePath(locale: Locale, key: keyof typeof serviceRoutes): string {
  const category = categoryRoutes.xizmatlar[locale];
  const slug = serviceRoutes[key]?.[locale] ?? key;
  return `/${locale}/${category}/${slug}`;
}

export function servicesHubPath(locale: Locale): string {
  return `/${locale}/${categoryRoutes.xizmatlar[locale]}`;
}
