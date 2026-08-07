import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PARTNERS } from "@/content/partners";

/** Hamkorlar devori — barcha logolar statik, hammasi ko'rinadi */
export async function TrustBar() {
  const t = await getTranslations("trust");

  return (
    <Section density="band" surface="elevated" ariaLabel={t("label")}>
      <Container>
        <p className="mb-10 text-center text-[13px] font-medium uppercase tracking-[0.14em] text-tertiary">
          {t("label")}
        </p>
        <Reveal>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 md:gap-4 lg:grid-cols-6">
            {PARTNERS.map((partner) => (
              <li
                key={partner.logo}
                className="group overflow-hidden  border rounded-4xl border-line bg-white/[0.02]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={252}
                  height={152}
                  sizes="(min-width: 1024px) 190px, (min-width: 640px) 25vw, 33vw"
                  className="aspect-[8/5] w-full object-cover opacity-85 rounded-4xl transition-opacity duration-200 group-hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
