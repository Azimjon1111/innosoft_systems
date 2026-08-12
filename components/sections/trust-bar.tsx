import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PARTNERS, type PartnerLogo } from "@/content/partners";

/** Bitta marquee qatori — ro'yxat 2x render bo'ladi (uzluksiz aylanish) */
function MarqueeRow({
  items,
  reverse = false,
}: {
  items: PartnerLogo[];
  reverse?: boolean;
}) {
  const track = reverse ? "marquee-track-reverse" : "marquee-track";

  return (
    <div className="group/marquee marquee-mask overflow-hidden">
      <ul className={`${track} flex w-max items-center gap-4 pr-4 md:gap-5 md:pr-5`}>
        {[false, true].map((clone) =>
          items.map((partner) => (
            <li
              key={partner.logo + (clone ? "-c" : "")}
              aria-hidden={clone || undefined}
              className="partner-item flex w-[160px] shrink-0 items-center justify-center px-3 py-2 md:w-[190px]"
            >
              {/* unoptimized: 504px shaffof-fonli manba qayta siqilmasin */}
              <Image
                src={partner.logo}
                alt={clone ? "" : partner.name}
                width={504}
                height={304}
                unoptimized
                className={`partner-logo aspect-[8/5] w-full object-contain${
                  partner.mono ? " partner-logo--mono" : ""
                }${partner.logoDark ? " logo-for-light" : ""}`}
              />
              {partner.logoDark && (
                <Image
                  src={partner.logoDark}
                  alt=""
                  width={504}
                  height={304}
                  unoptimized
                  className="partner-logo logo-for-dark aspect-[8/5] w-full object-contain"
                />
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

/** Hamkorlar — fonsiz oq monoxrom logolar, ikki qatorli qarama-qarshi marquee */
export async function TrustBar() {
  const t = await getTranslations("trust");

  const half = Math.ceil(PARTNERS.length / 2);
  const rowA = PARTNERS.slice(0, half);
  const rowB = PARTNERS.slice(half);

  return (
    <Section density="band" surface="elevated" ariaLabel={t("label")}>
      <Container>
        <p className="mb-10 text-center text-[13px] font-medium uppercase tracking-[0.14em] text-tertiary">
          {t("label")}
        </p>
      </Container>
      <div className="space-y-4 md:space-y-5">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </Section>
  );
}
