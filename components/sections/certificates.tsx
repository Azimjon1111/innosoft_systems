import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const CERTIFICATES = [
  {
    key: "itpark",
    src: "/assets/img/certificates/it-park-rezident.webp",
    width: 1200,
    height: 832,
  },
  {
    key: "state",
    src: "/assets/img/certificates/davlat-royxati.webp",
    width: 567,
    height: 794,
  },
] as const;

/** Rasmiy guvohnomalar — IT Park rezidentligi va davlat ro'yxati */
export async function Certificates() {
  const t = await getTranslations("certificates");

  return (
    <Section id="certificates" labelledBy="certificates-title" density="mid">
      <Container>
        <SectionHeader
          id="certificates-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {CERTIFICATES.map((cert, i) => (
            <Reveal key={cert.key} as="article" index={i} className="flex">
              <figure className="flex w-full flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="flex flex-1 items-center justify-center bg-white/[0.02] p-6">
                  <Image
                    src={cert.src}
                    alt={t(`items.${cert.key}.title`)}
                    width={cert.width}
                    height={cert.height}
                    sizes="(min-width: 768px) 420px, 100vw"
                    className="max-h-[420px] w-auto rounded-sm object-contain"
                  />
                </div>
                <figcaption className="border-t border-line p-6">
                  <p className="text-lg font-semibold">{t(`items.${cert.key}.title`)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-tertiary">
                    {t(`items.${cert.key}.desc`)}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
