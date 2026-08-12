/**
 * Barcha hamkorlar — statik (API'dan emas).
 * Logolar Desktop/partners kolláj rasmlaridan avtomatik kesib olingan (2026-08-06).
 */
export interface PartnerLogo {
  name: string;
  logo: string;
  /** Fayl faqat oq rangda — light temada qora siluet qilinadi */
  mono?: boolean;
  /** Dark tema uchun alohida variant (alpha-detallar bilan) */
  logoDark?: string;
}

export const PARTNERS: PartnerLogo[] = [
  { name: "Grandpharm", logo: "/assets/img/partners/01-grandpharm.webp" },
  { name: "QV Attraction", logo: "/assets/img/partners/02-qv-attraction.webp" },
  { name: "Biolife Active", logo: "/assets/img/partners/03-biolife-active.webp" },
  { name: "Befit Pro", logo: "/assets/img/partners/04-befit-pro.webp" },
  { name: "W Games", logo: "/assets/img/partners/05-w-games.webp" },
  { name: "Mesmer", logo: "/assets/img/partners/06-mesmer.webp" },
  { name: "Atlet.uz", logo: "/assets/img/partners/07-atletuz.webp" },
  { name: "GCI Uzbekistan", logo: "/assets/img/partners/08-gci-uzbekistan.webp" },
  { name: "Deutsch-Usbekischer Wirtschaftsrat", logo: "/assets/img/partners/09-deutsch-usbekischer-wirtschaftsrat.webp" },
  { name: "Ipsum Pathology", logo: "/assets/img/partners/10-ipsum-pathology.webp" },
  { name: "LTTS Logistatrans", logo: "/assets/img/partners/11-ltts-logistatrans.webp" },
  { name: "Serkon East", logo: "/assets/img/partners/12-serkon-east.webp" },
  { name: "Suvmash", logo: "/assets/img/partners/13-suvmash.webp" },
  { name: "Dentium", logo: "/assets/img/partners/14-dentium.webp" },
  { name: "Tamerlan Marketing", logo: "/assets/img/partners/15-tamerlan-marketing.webp" },
  { name: "Meritz", logo: "/assets/img/partners/17-meritz.webp" },
  { name: "Block 21 Group", logo: "/assets/img/partners/22-block-21-group.webp" },
  { name: "New Anibla", logo: "/assets/img/partners/25-new-anibla.webp", logoDark: "/assets/img/partners/25-new-anibla-dark.webp" },
  { name: "FireWise Enterprises", logo: "/assets/img/partners/26-firewise-enterprises.webp" },
  { name: "Yurak Markazi", logo: "/assets/img/partners/28-yurak-markazi.webp" },
  { name: "Imir-Trade Group", logo: "/assets/img/partners/30-imir-trade-group.webp" },
  { name: "Oikos", logo: "/assets/img/partners/36-oikos.webp" },
  { name: "Family Group", logo: "/assets/img/partners/37-family-group.webp" },
  { name: "Elma", logo: "/assets/img/partners/38-elma.webp" },
  { name: "Tez Lift", logo: "/assets/img/partners/39-tez-lift.webp" },
  { name: "Shayana Farm", logo: "/assets/img/partners/42-shayana-farm.webp" },
  { name: "Avantika", logo: "/assets/img/partners/44-avantika.webp" },
  { name: "Smart Technology Systems", logo: "/assets/img/partners/45-smart-technology-systems.webp" },
  { name: "O'ZSMP", logo: "/assets/img/partners/49-ozsmp.webp" },
  { name: "UNG Overseas", logo: "/assets/img/partners/50-ung-overseas.webp" },
  { name: "Cleanza", logo: "/assets/img/partners/55-cleanza.webp" },
  { name: "Scriber Engineering Arts", logo: "/assets/img/partners/57-scriber-engineering-arts.webp" },
  { name: "Tax Advisors Academy", logo: "/assets/img/partners/58-tax-advisors-academy.webp" },
  { name: "Decolor", logo: "/assets/img/partners/59-decolor.webp" },
  { name: "Kuychi.AI", logo: "/assets/img/partners/60-kuychiai.webp" },
];
