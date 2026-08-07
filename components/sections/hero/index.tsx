import { getTranslations } from "next-intl/server";
import { HeroSlider, type HeroSlide } from "./hero-slider";
import { servicePath } from "@/lib/routes";
import type { Locale } from "@/i18n/routing";

/**
 * EPAM uslubidagi video-hero. Video fayllar: public/assets/video/hero-{1..3}.mp4
 * Fayl bo'lmasa gradient fon ko'rinadi — sahifa buzilmaydi.
 */
export async function Hero({ locale }: { locale: Locale }) {
  const t = await getTranslations("hero");

  const accent = (chunks: React.ReactNode) => (
    <span className="font-normal text-accent">{chunks}</span>
  );

  const slides: HeroSlide[] = [
    {
      key: "main",
      eyebrow: t("badge"),
      title: t.rich("title", { accent }),
      desc: t("subhead"),
      ctaLabel: t("ctaPrimary"),
      ctaHref: "#contact",
      media: { type: "video", src: "/assets/video/hero-1.mp4" },
    },
    {
      key: "ai",
      eyebrow: t("slides.ai.eyebrow"),
      title: t.rich("slides.ai.title", { accent }),
      desc: t("slides.ai.desc"),
      ctaLabel: t("slides.ai.cta"),
      ctaHref: servicePath(locale, "ai-chatbotlar"),
      media: { type: "video", src: "/assets/video/hero-2.mp4" },
    },
    {
      key: "cases",
      eyebrow: t("slides.cases.eyebrow"),
      title: t.rich("slides.cases.title", { accent }),
      desc: t("slides.cases.desc"),
      ctaLabel: t("ctaSecondary"),
      ctaHref: "#cases",
      media: { type: "image", src: "/assets/img/hero-3.webp" },
    },
  ];

  return <HeroSlider slides={slides} />;
}
