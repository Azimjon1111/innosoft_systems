import type { Project } from "@/lib/api";

/**
 * Statik portfolio — API'siz (admin.innosoft-systems.uz'dan 2026-08-12'da
 * ko'chirilgan snapshot). Rasmlar: brend uslubida generatsiya qilingan
 * fonlar (public/assets/img/projects/), kartada overlay matni bilan ishlaydi.
 */
export const PROJECTS: Project[] = [
  {
    "id": "rememberme",
    "slug": "rememberme",
    "title": {
      "uz": "RememberMe",
      "ru": "RememberMe",
      "en": "RememberMe"
    },
    "description": {
      "uz": "Yaqinlarning xotirasini abadiylashtirish uchun yaratilgan ushbu raqamli platforma sun'iy intellekt yordamida interaktiv memorial sahifalarini shakllantirish imkonini beradi. Loyiha oilaviy merosni xavfsiz saqlash va QR-kodlar orqali xotiralarga tezkor kirishni ta'minlab, avlodlar o'rtasidagi ma'naviy aloqani mustahkamlaydi.",
      "ru": "Цифровая мемориальная платформа, использующая технологии ИИ для сохранения и передачи наследия близких через интерактивные страницы и QR-коды. Проект создает защищенное эмоциональное пространство для хранения семейной истории и укрепления связи между поколениями.",
      "en": "A digital memorial platform that leverages AI technology to preserve and share the legacy of loved ones through interactive pages and QR-code access. The project focuses on creating a secure, emotional space for families to maintain their heritage and strengthen intergenerational bonds."
    },
    "duration": {
      "uz": "2 oy",
      "ru": "2 месяца",
      "en": "2 months"
    },
    "image": "/assets/img/projects/rememberme.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://rememberme.uz",
    "category": {
      "title": {
        "uz": "Boshqalar",
        "ru": "Другие",
        "en": "Others"
      },
      "slug": "others"
    }
  },
  {
    "id": "atlet",
    "slug": "atlet",
    "title": {
      "uz": "Atlet",
      "ru": "Atlet",
      "en": "Atlet"
    },
    "description": {
      "uz": "Atlet.uz — bu sport ozuqalari, vitaminlar va salomatlik uchun qo'shimchalar savdosiga ixtisoslashgan zamonaviy elektron tijorat platformasi. Sportchilar va sog'lom turmush tarzi ixlosmandlari uchun mo'ljallangan ushbu loyiha ishonchli jahon brendlarining yuqori sifatli mahsulotlari katalogini o'z ichiga oladi. Loyiha qulay foydalanuvchi interfeysi, mahsulotlarni izlashning oson tizimi va butun O'zbekiston bo'ylab tezkor yetkazib berish xizmati bilan jihozlangan bo'lib, xaridorlarga onlayn xarid qilishda qulaylik yaratadi.",
      "ru": "Atlet.uz — это современная e-commerce платформа, специализирующаяся на реализации спортивного питания, витаминов и добавок для здоровья. Проект разработан для спортсменов и приверженцев здорового образа жизни, предлагая обширный каталог качественной продукции от проверенных мировых брендов. Сайт отличается удобным пользовательским интерфейсом, интуитивно понятной навигацией и интегрированной системой быстрой доставки по всему Узбекистану, обеспечивая комфортный процесс онлайн-покупок.",
      "en": "Atlet.uz is a modern e-commerce platform dedicated to sports nutrition, vitamins, and health supplements. Designed for athletes and fitness enthusiasts, the platform offers a wide catalog of high-quality products from trusted global brands. The project features a clean, user-friendly interface, seamless product navigation, and an integrated system for fast delivery across Uzbekistan. It serves as a complete digital storefront optimized for an effortless shopping experience."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/atlet.webp",
    "technologies": [
      "Next.js",
      "Tailwind"
    ],
    "url": "https://atlet.uz",
    "category": {
      "title": {
        "uz": "Sport",
        "ru": "Спорт",
        "en": "Sport"
      },
      "slug": "sport"
    }
  },
  {
    "id": "suvmash-jsc",
    "slug": "suvmash-jsc",
    "title": {
      "uz": "SUVMASH JSC",
      "ru": "SUVMASH JSC",
      "en": "SUVMASH JSC"
    },
    "description": {
      "uz": "SUVMASH JSC — bu O‘zbekistonda 50+ yillik tajribaga ega bo‘lgan, turli sohalar uchun kuchli va samarali nasos uskunalari ishlab chiqaruvchi korxona. Ularning mahsulot assortimentiga sanoat, kommunal xizmatlar va agrar sektor uchun mo‘ljallangan turli nasoslar kiradi. Katta loyihalar, keng mahsulot portfeli va sifatli xizmat ko‘rsatishi ularni raqobatchilardan ajratib turadi. Agar sizga nasosli qurilmalar yoki agregatlar kerak bo‘lsa, suvmash.uz orqali murojaat qilishingiz mumkin.",
      "ru": "SUVMASH JSC — это предприятие в Узбекистане с более чем 50-летним опытом, производящее мощное и эффективное насосное оборудование для различных отраслей. В их ассортимент входят насосы для промышленности, коммунальных служб и аграрного сектора. Крупные проекты, широкий продуктовый портфель и высокое качество обслуживания выделяют их среди конкурентов. Если вам нужны насосные установки или агрегаты, вы можете обратиться через suvmash.uz.",
      "en": "SUVMASH JSC — is a company in Uzbekistan with over 50 years of experience in manufacturing powerful and efficient pumping equipment for various industries. Their product range includes pumps designed for industrial, municipal, and agricultural sectors. Large-scale projects, a wide product portfolio, and high-quality service make them stand out from competitors. If you need pumping equipment or aggregates, you can contact them via suvmash.uz."
    },
    "duration": {
      "uz": "2 oy",
      "ru": "2 месяца",
      "en": "2 months"
    },
    "image": "/assets/img/projects/suvmash-jsc.webp",
    "technologies": [
      "NestJs",
      "NextJs",
      "TailwindCSS",
      "MONGO"
    ],
    "url": "https://suvmash.uz",
    "category": {
      "title": {
        "uz": "Qurilish",
        "ru": "Строительство",
        "en": "Building"
      },
      "slug": "construction"
    }
  },
  {
    "id": "logistatrans",
    "slug": "logistatrans",
    "title": {
      "uz": "LogistaTrans",
      "ru": "LogistaTrans",
      "en": "LogistaTrans"
    },
    "description": {
      "uz": "LogistaTrans kompaniyasi uchun xalqaro logistika sohasidagi nufuzini mustahkamlovchi va mijozlar oqimini samarali boshqaruvchi korporativ veb-sayt. Loyiha brend ishonchliligini oshirishga va xizmatlar uchun so‘rovlarni qabul qilish jarayonini avtomatlashtirishga xizmat qiladi.",
      "ru": "Корпоративный сайт для компании LogistaTrans, направленный на укрепление имиджа в сфере международных логистических услуг и автоматизацию сбора заявок. Платформа повышает уровень доверия клиентов, демонстрируя широкую географию перевозок и обеспечивая прозрачную коммуникацию.",
      "en": "A corporate platform for LogistaTrans designed to showcase international logistics expertise and facilitate lead generation through a streamlined service calculation system. It strengthens brand presence and builds client trust by highlighting the company's extensive geographic reach and commitment to transparent service standards."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/logistatrans.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://logistatrans.com",
    "category": {
      "title": {
        "uz": "Biznes",
        "ru": "Бизнес",
        "en": "Business"
      },
      "slug": "biznes"
    }
  },
  {
    "id": "anibla",
    "slug": "anibla",
    "title": {
      "uz": "Anibla",
      "ru": "Anibla",
      "en": "Anibla"
    },
    "description": {
      "uz": "Anibla.uz O'zbekistondagi birinchi uz Fandab. Bu ilova orqali siz xohlagan animeyingizni sifatli o'zbek tilida dublyaj qilinganini ko'ra olasiz.",
      "ru": "Anibla.uz — первый узбекский фандаб в Узбекистане. Через это приложение вы сможете смотреть любое желаемое аниме в качественном узбекском дубляже.",
      "en": "Anibla.uz is the first Uzbek fandub in Uzbekistan. Through this app, you can watch any anime you want with high-quality Uzbek dubbing."
    },
    "duration": {
      "uz": "6 oy",
      "ru": "6 месяца",
      "en": "6 months"
    },
    "image": "/assets/img/projects/anibla.webp",
    "technologies": [
      "React Native",
      "Nestjs",
      "Mongodb"
    ],
    "category": {
      "title": {
        "uz": "Media",
        "ru": "Медиа",
        "en": "Media"
      },
      "slug": "media"
    }
  },
  {
    "id": "yurak-markazi",
    "slug": "yurak-markazi",
    "title": {
      "uz": "Yurak Markazi",
      "ru": "Yurak Markazi",
      "en": "Yurak Markazi"
    },
    "description": {
      "uz": "Yurak jarrohligi markazi uchun yaratilgan ushbu professional platforma brend ishonchini mustahkamlashga va onlayn qabul orqali bemorlar bilan samarali aloqa o‘rnatishga xizmat qiladi.",
      "ru": "Профессиональная веб-платформа для центра кардиохирургии, созданная для укрепления доверия пациентов и обеспечения удобного взаимодействия через онлайн-запись и презентацию экспертного состава.",
      "en": "A professional digital platform for a specialized cardiac surgery center, designed to build brand trust and streamline patient communication through online appointment booking and expert profiles."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/yurak-markazi.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://yurakmarkazi.uz",
    "category": {
      "title": {
        "uz": "Meditsina",
        "ru": "Медицина",
        "en": " Medicine"
      },
      "slug": "medicine"
    }
  },
  {
    "id": "ung-academy",
    "slug": "ung-academy",
    "title": {
      "uz": "UNG Academy",
      "ru": "UNG Academy",
      "en": "UNG Academy"
    },
    "description": {
      "uz": "Markaziy Osiyoda energetika ta’limi va malaka oshirishga yo‘naltirilgan mukammallik markazi uchun yaratilgan professional platforma. Sayt xalqaro hamkorlikni mustahkamlashga xizmat qiladi va soha kadrlarini tayyorlash bo‘yicha jahon darajasidagi tashabbuslarni namoyish etadi.",
      "ru": "Профессиональная платформа для центра передового опыта, направленного на развитие энергетического образования и повышение квалификации специалистов в Центральной Азии. Сайт выступает стратегическим хабом для международного партнерства и формирования доверия к образовательным программам мирового уровня.",
      "en": "A professional platform for a regional center of excellence dedicated to advancing energy education and professional development in Central Asia. The site establishes a strategic hub for international collaboration and showcases world-class training programs to build industry capability."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/ung-academy.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://www.ung.academy",
    "category": {
      "title": {
        "uz": "Boshqalar",
        "ru": "Другие",
        "en": "Others"
      },
      "slug": "others"
    }
  },
  {
    "id": "tamerlan-marketing",
    "slug": "tamerlan-marketing",
    "title": {
      "uz": "Tamerlan Marketing",
      "ru": "Tamerlan Marketing",
      "en": "Tamerlan Marketing"
    },
    "description": {
      "uz": "Tamerlan Marketing uchun ishlab chiqilgan ushbu professional e-commerce platformasi brend nufuzini oshirish va tabiiy mahsulotlar savdosini raqamlashtirishga xizmat qiladi. Tizim integratsiyalashgan to'lov usullari va qulay interfeys orqali mijozlar ishonchini mustahkamlab, buyurtmalar oqimini ta'minlaydi.",
      "ru": "Профессиональная e-commerce платформа для Tamerlan Marketing, направленная на укрепление доверия к бренду и цифровизацию продаж натуральной продукции. Сайт обеспечивает эффективное взаимодействие с аудиторией через интегрированные платежные системы и оптимизированный процесс оформления заказов.",
      "en": "A professional e-commerce platform developed for Tamerlan Marketing to enhance brand presence and digitize the sale of premium natural products. The site builds customer trust and drives lead generation through integrated payment systems and a seamless user communication interface."
    },
    "duration": {
      "uz": "2 oy",
      "ru": "2 месяца",
      "en": "2 months"
    },
    "image": "/assets/img/projects/tamerlan-marketing.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://tamerlan-marketing.uz",
    "category": {
      "title": {
        "uz": "Internet magazin",
        "ru": "Интернет-магазин",
        "en": "E-commerce"
      },
      "slug": "e-commerce"
    }
  },
  {
    "id": "sts-market",
    "slug": "sts-market",
    "title": {
      "uz": "STS Market",
      "ru": "STS Market",
      "en": "STS Market"
    },
    "description": {
      "uz": "«stsmarket.uz» — Toshkentda kompyuter texnikasi va  video-kuzatuv uskunalarini taklif etuvchi ishonchli  internet‑do‘kon bo‘lib, keng assortiment, professional  maslahat, yetkazib berish va rasmiy kafolatlar bilan xizmat  qiladi. Ularning faoliyati innovasion texnologiyalar va  mijozlarga qulaylikka yo‘naltirilgan.",
      "ru": "«stsmarket.uz» — надёжный интернет-магазин в Ташкенте, предлагающий широкий ассортимент компьютерной техники и оборудования для видеонаблюдения. Обеспечивает профессиональные консультации, доставку и официальную гарантию. Деятельность компании ориентирована на инновационные технологии и удобство для клиентов.",
      "en": "«stsmarket.uz» — Toshkentda kompyuter texnikasi va  video-kuzatuv uskunalarini taklif etuvchi ishonchli  internet‑do‘kon bo‘lib, keng assortiment, professional  maslahat, yetkazib berish va rasmiy kafolatlar bilan xizmat  qiladi. Ularning faoliyati innovasion texnologiyalar va  mijozlarga qulaylikka yo‘naltirilgan."
    },
    "duration": {
      "uz": "3 oy",
      "ru": "3 oy",
      "en": "3 oy"
    },
    "image": "/assets/img/projects/sts-market.webp",
    "technologies": [
      "React js",
      "Next js",
      "Tailwind Css",
      "Radix UI"
    ],
    "url": "https://www.stsmarket.uz/ru",
    "category": {
      "title": {
        "uz": "Internet magazin",
        "ru": "Интернет-магазин",
        "en": "E-commerce"
      },
      "slug": "e-commerce"
    }
  },
  {
    "id": "mesmer",
    "slug": "mesmer",
    "title": {
      "uz": "Mesmer",
      "ru": "Mesmer",
      "en": "Mesmer"
    },
    "description": {
      "uz": "«mesmer.uz» — bu xalqaro ISO standarti sertifikatlariga ega yirik EPC kompaniyasi bo‘lib, energetika, suv va ekologik infratuzilma loyihalarida chuqur tajribaga ega. Kompaniya Korporativ sayt orqali uskunalar xarididan boshlanib,texnik xizmat, loyiha boshqaruvi va investitsiyalargacha bo‘lgan keng ko‘lamdagi xizmatlarni taqdim etadi.",
      "ru": "«mesmer.uz» — крупная EPC-компания с международными сертификатами стандарта ISO, обладающая большим опытом в проектах в области энергетики, водоснабжения и экологической инфраструктуры. Через корпоративный сайт компания предлагает широкий спектр услуг — от закупки оборудования до технического обслуживания, управления проектами и инвестиций.",
      "en": "«mesmer.uz» — bu xalqaro ISO standarti sertifikatlariga ega yirik EPC kompaniyasi bo‘lib, energetika, suv va ekologik infratuzilma loyihalarida chuqur tajribaga ega. Kompaniya Korporativ sayt orqali uskunalar xarididan boshlanib,texnik xizmat, loyiha boshqaruvi va investitsiyalargacha bo‘lgan keng ko‘lamdagi xizmatlarni taqdim etadi."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 oy",
      "en": "1 oy"
    },
    "image": "/assets/img/projects/mesmer.webp",
    "technologies": [
      "React js",
      "Next js",
      "Tailwind Css",
      "Shadcn UI"
    ],
    "url": "https://mesmer.uz/en",
    "category": {
      "title": {
        "uz": "Qurilish",
        "ru": "Строительство",
        "en": "Building"
      },
      "slug": "construction"
    }
  }
];
