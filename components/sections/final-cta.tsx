import { getTranslations } from "next-intl/server";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ParticleNetwork } from "@/components/ui/particle-network";
import { CONTACT } from "@/lib/constants";

export async function FinalCta() {
  const t = await getTranslations("cta");

  return (
    <section id="contact" aria-labelledby="cta-title" className="scroll-mt-20 py-24 md:py-[140px]">
      <Container>
        <Reveal className="relative overflow-hidden rounded-xl border border-line bg-bg-elevated px-6 py-20 text-center md:px-16 md:py-28">
          <div className="grid-pattern absolute inset-0" aria-hidden />
          {/* Nozik gradient dog' — sarlavha orqasida */}
          <div
            className="grad-blob pointer-events-none absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 opacity-[0.16] blur-3xl"
            aria-hidden
          />
          {/* Interaktiv IT tarmoq foni — sichqonchaga reaksiya qiladi */}
          <div className="absolute inset-0" aria-hidden>
            <ParticleNetwork />
          </div>
          <div className="pointer-events-none relative">
            <h2
              id="cta-title"
              className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.03em] leading-[1.05] md:text-5xl lg:text-[56px]"
            >
              {t("title")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary md:text-[22px] md:leading-[1.55]">
              {t("subhead")}
            </p>
            <div className="pointer-events-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={CONTACT.telegram} external>
                {t("primary")}
              </Button>
              <Button href={CONTACT.phoneHref} variant="secondary">
                <Phone className="size-4" aria-hidden />
                {CONTACT.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
