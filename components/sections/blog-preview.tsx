import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { getBlogs, mediaUrl } from "@/lib/api";
import type { Locale } from "@/i18n/routing";

export async function BlogPreview({ locale }: { locale: Locale }) {
  const [t, posts] = await Promise.all([getTranslations("blog"), getBlogs(3)]);

  if (posts.length === 0) return null;

  const formatDate = (iso?: string) => {
    if (!iso) return null;
    try {
      return new Intl.DateTimeFormat(locale === "uz" ? "uz-UZ" : locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(iso));
    } catch {
      return null;
    }
  };

  return (
    <Section id="blog" labelledBy="blog-title" density="mid">
      <Container>
        <SectionHeader
          id="blog-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, i) => {
            const img = mediaUrl(post.image);
            const date = formatDate(post.createdAt);
            const slug =
              typeof post.slug === "string"
                ? post.slug
                : post.slug?.[locale] ?? post.slug?.uz;
            const href = `/${locale}/blog/${slug ?? post._id}`;
            return (
              <Reveal as="article" key={post._id} index={i}>
                <Link
                  href={href}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-200 hover:border-line-strong"
                >
                  {img && (
                    <Image
                      src={img}
                      alt=""
                      width={480}
                      height={270}
                      sizes="(min-width: 768px) 400px, 100vw"
                      className="aspect-video w-full object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] transition-colors group-hover:text-accent">
                      {post.title[locale] ?? post.title.uz}
                    </h3>
                    <p className="mt-2.5 line-clamp-3 flex-1 text-[15px] leading-relaxed text-secondary">
                      {post.excerpt?.[locale] ?? post.excerpt?.uz}
                    </p>
                    {date && <p className="mt-4 text-[13px] text-tertiary">{date}</p>}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href={`/${locale}/blog`}
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-foreground"
          >
            {t("viewAll")}
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
