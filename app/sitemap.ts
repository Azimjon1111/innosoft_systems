import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { projectsPath } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}`])),
    },
  }));

  const portfolio = routing.locales.map((locale) => ({
    url: `${SITE_URL}${projectsPath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}${projectsPath(l)}`])
      ),
    },
  }));

  return [...home, ...portfolio];
}
