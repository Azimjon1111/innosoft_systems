import { SITE_URL, CONTACT } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: "Innosoft Systems",
    url: SITE_URL,
    // To'liq brend logosi ("systems" qatori bilan) — oq fonli versiya Google uchun
    logo: `${SITE_URL}/assets/img/white.png`,
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "U-ENTER Innovation Center, Shakhrisabz Street",
      addressLocality: "Tashkent",
      postalCode: "700093",
      addressCountry: "UZ",
    },
    areaServed: "UZ",
    sameAs: [CONTACT.telegram, CONTACT.instagram, CONTACT.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phoneDisplay.replace(/\s/g, ""),
      contactType: "sales",
      availableLanguage: ["uz", "ru", "en"],
    },
  };
}

export function webSiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Innosoft Systems",
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${locale}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function servicesSchema(
  locale: Locale,
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: item.name,
        url: item.url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "UZ",
      },
    })),
  };
}
