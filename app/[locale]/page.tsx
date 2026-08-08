import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { TrustBar } from "@/components/sections/trust-bar";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { CaseStudies } from "@/components/sections/case-studies";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { Certificates } from "@/components/sections/certificates";
import { Faq } from "@/components/sections/faq";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FinalCta } from "@/components/sections/final-cta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const l = locale as Locale;

  return (
    <>
      <SiteHeader locale={l} />
      <main id="main">
        <Hero locale={l} />
        <TechMarquee />
        <TrustBar />
        <Stats />
        <Services locale={l} />
        <WhyUs />
        <CaseStudies locale={l} />
        <Industries />
        <Process />
        <TechStack />
        <Certificates />
        <Faq />
        <BlogPreview locale={l} />
        <FinalCta />
      </main>
      <SiteFooter locale={l} />
    </>
  );
}
