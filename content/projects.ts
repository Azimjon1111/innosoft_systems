import type { Project } from "@/lib/api";

/**
 * Statik portfolio — API'siz (admin.innosoft-systems.uz snapshot,
 * 2026-08-12, 6 sahifa / 52 loyiha). Muqovalar: saytlarning haqiqiy
 * skrinshotlari, manzili yo'qlariga brend-fon (public/assets/img/projects/).
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
      "uz": "Anibla (mobil ilova)",
      "ru": "Anibla (мобильное приложение)",
      "en": "Anibla (mobile app)"
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
    "image": "/assets/img/projects/anibla-app.webp",
    "technologies": [
      "React Native",
      "Nestjs",
      "Mongodb"
    ],
    "url": "https://play.google.com/store/apps/details?id=com.amediatv.soft",
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
  },
  {
    "id": "biolife",
    "slug": "biolife",
    "title": {
      "uz": "Biolife",
      "ru": "Biolife",
      "en": "Biolife"
    },
    "description": {
      "uz": "Imir-Trade Group kompaniyasi uchun ishlab chiqilgan va ularning \"Biolife\" qadoqlangan suv va ichimliklar brendini namoyish etuvchi zamonaviy platforma. Sayt foydalanuvchilar uchun qulay bo'lgan katalog orqali turli xil mahsulotlar liniyalarini, jumladan, gazlanmagan suv va turli hajmdagi mevali (qulupnay, limon miks) ichimliklarni taqdim etadi.",
      "ru": "Современная платформа-витрина, разработанная для компании Imir-Trade Group, представляющая бренд бутилированной воды и напитков «Biolife». Сайт предлагает удобный каталог с различными линейками продукции, включая негазированную воду и ароматизированные напитки (клубника, лимонный микс) разных объемов.",
      "en": "A modern product showcase platform developed for Imir-Trade Group, featuring their \"Biolife\" brand of bottled water and beverages. The website provides a clean, user-friendly catalog displaying various product lines, including non-carbonated water and flavored drinks (strawberry, lemon mix) in different sizes."
    },
    "duration": {
      "uz": "20 kun",
      "ru": "20 дней",
      "en": "20 days"
    },
    "image": "/assets/img/projects/biolife.webp",
    "technologies": [
      "Next.js",
      "Tailwind",
      "Typescript"
    ],
    "url": "https://biolife.innobek.uz",
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
    "id": "gci",
    "slug": "gci",
    "title": {
      "uz": "GCI",
      "ru": "GCI",
      "en": "GCI"
    },
    "description": {
      "uz": "GCI Labs — zargarlik buyumlari va qimmatbaho toshlarni professional sertifikatlash va ekspertizadan o'tkazishga ixtisoslashgan O'zbekistondagi birinchi xalqaro gemologiya laboratoriyasidir. 20 yildan ortiq tajribaga ega bo'lgan laboratoriya qat'iy xalqaro standartlarga (ISO sertifikatlari) javob beradigan zamonaviy tahlil usullaridan foydalanadi. Platforma foydalanuvchilarga 4 bosqichli sertifikatlash jarayoni bilan tanishish, maxsus gemologiya kurslarini o'rganish va o'zlariga berilgan sertifikatlarning haqiqiyligini onlayn tarzda xavfsiz tekshirish imkonini beruvchi qulay raqamli tizimni taklif etadi.",
      "ru": "GCI Labs — это первая международная геммологическая лаборатория в Узбекистане, специализирующаяся на профессиональной сертификации и экспертной оценке ювелирных изделий и драгоценных камней. Опираясь на более чем 20-летний опыт, лаборатория использует современные методы анализа, соответствующие строгим международным стандартам (сертификация ISO). Платформа предлагает удобный интерфейс, где пользователи могут ознакомиться с 4-этапным процессом сертификации, записаться на специализированные курсы по геммологии и безопасно проверить подлинность выданных сертификатов онлайн.",
      "en": "GCI Labs is Uzbekistan's premier international gemological laboratory, specializing in the professional certification and expert appraisal of jewelry and precious stones. With over 20 years of industry expertise, the laboratory utilizes modern analytical methods that comply with rigorous international standards (ISO certified). The platform offers a seamless digital experience where users can learn about the 4-step certification process, explore specialized gemology courses, and securely verify the authenticity of their issued certificates online."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "10 месяца",
      "en": "10 months"
    },
    "image": "/assets/img/projects/gci.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Tailwind",
      "Nest.js"
    ],
    "url": "https://gci-labs.uz",
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
    "id": "dentium",
    "slug": "dentium",
    "title": {
      "uz": "Dentium",
      "ru": "Dentium",
      "en": "Dentium"
    },
    "description": {
      "uz": "«dentium.uz» sayti — bu Dentium Uzbekistan brendi ostida ishlovchi, stomatologik implantlar va boshqa  dental mahsulotlar bilan shug‘ullanuvchi kompaniya. Bugungi kunida o‘zining korporativ sayti orqali   o‘z xizmatlari va mahsulotlarini mijozlariga  taqdim etmoqda",
      "ru": "Сайт «dentium.uz» — это корпоративный ресурс компании, работающей под брендом Dentium Uzbekistan и занимающейся стоматологическими имплантами и другими дентальными продуктами. Сегодня компания предоставляет свои услуги и продукцию клиентам через данный сайт.",
      "en": "«dentium.uz» sayti — bu Dentium Uzbekistan brendi ostida ishlovchi, stomatologik implantlar va boshqa  dental mahsulotlar bilan shug‘ullanuvchi kompaniya. Bugungi kunida o‘zining korporativ sayti orqali   o‘z xizmatlari va mahsulotlarini mijozlariga  taqdim etmoqda"
    },
    "duration": {
      "uz": "10 kun",
      "ru": "10 kun",
      "en": "10 kun"
    },
    "image": "/assets/img/projects/dentium.webp",
    "technologies": [
      "React js",
      "JQuery",
      "Tailwind Css"
    ],
    "url": "https://www.dentium.uz/",
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
    "id": "drkim",
    "slug": "drkim",
    "title": {
      "uz": "DrKim",
      "ru": "DrKim",
      "en": "DrKim"
    },
    "description": {
      "uz": "«drkim.uz»- bu Tibbiyot sohasida foydalaniladigan zamonaviy asbob-uskunalar : yoritgichlar, optika, 4K-kameralar va boshqa operatsion jihozlarni 3D formatda interaktiv ko‘rish, ularning funksiyalari, afzalliklari va texnik tavsiflari bilan batafsil tanishish imkoniyatini beruvchi bir sahifali sayt",
      "ru": "«drkim.uz» — это одностраничный сайт, предоставляющий возможность в интерактивном 3D-формате подробно ознакомиться с современным медицинским оборудованием: осветителями, оптикой, 4K-камерами и другими операционными устройствами, а также их функциями, преимуществами и техническими характеристиками.",
      "en": "“drkim.uz” is a modern one-page website in the medical field that allows interactive 3D viewing of equipment such as lighting systems, optics, 4K cameras, and other surgical devices. Users can explore their functions, advantages, and technical specifications in detail."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяца",
      "en": "1 months"
    },
    "image": "/assets/img/projects/drkim.webp",
    "technologies": [
      "React js",
      "JQuery",
      "Css"
    ],
    "url": "https://www.drkim.uz/",
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
    "id": "oikos",
    "slug": "oikos",
    "title": {
      "uz": "Oikos",
      "ru": "Oikos",
      "en": "Oikos"
    },
    "description": {
      "uz": "Oikos brendining O‘zbekistondagi rasmiy vakili uchun yaratilgan korporativ veb-sayt bo‘lib, u Italiyaning premium ekologik toza bo‘yoqlari va dekorativ qoplamalarini taqdim etadi. Platforma brend nufuzini mustahkamlaydi va barqaror yechimlarga qiziquvchi mijozlar bilan samarali aloqa o‘rnatishga yordam beradi.",
      "ru": "Корпоративный сайт для официального представителя Oikos в Узбекистане, представляющий премиальные экологичные краски и декоративные покрытия из Италии. Платформа укрепляет доверие к бренду и служит эффективным инструментом для коммуникации с клиентами, ценящими качество и устойчивое развитие.",
      "en": "A professional corporate platform for Oikos Uzbekistan that showcases premium Italian eco-friendly paints and decorative solutions. The website strengthens brand authority and facilitates communication between the brand and clients seeking sustainable, high-quality materials for interior and exterior design."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/oikos.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://oikos-paint.uz",
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
    "id": "ipsum-conference",
    "slug": "ipsum-conference",
    "title": {
      "uz": "Ipsum Conference",
      "ru": "Ipsum Conference",
      "en": "Ipsum Conference"
    },
    "description": {
      "uz": "Toshkent shahrida bo'lib o'tadigan \"Diagnostik va bashoratli patologiyada zamonaviy yondashuvlar\" mavzusidagi xalqaro ilmiy-amaliy konferensiya uchun maxsus ishlab chiqilgan raqamli platforma. Sog'liqni saqlash vazirligi va Ipsum Pathology hamkorligida tashkil etilgan ushbu sayt tibbiyot mutaxassislari uchun qulay axborot markazi bo'lib xizmat qiladi. U ishtirokchilarga tadbirga oson ro'yxatdan o'tish, batafsil dastur bilan tanishish hamda AQSh, Yevropa va MDH davlatlaridan tashrif buyurgan yetakchi patolog-ekspertlar profillarini o'rganish imkonini beradi. Shuningdek, platforma maxsus master-klasslar, mehmonxonalarga joylashish va madaniy turlar haqida qulay va birlashtirilgan ma'lumotlarni taqdim etib, barcha ishtirokchilar uchun yuqori darajadagi qulaylikni ta'minlaydi.",
      "ru": "Специализированная цифровая платформа, разработанная для Международной научно-практической конференции «Современные подходы в диагностической и предиктивной патологии», проходящей в Ташкенте. Сайт, организованный совместно с Министерством здравоохранения РУз и Ipsum Pathology, служит удобным центром для медицинских специалистов. Он позволяет участникам легко зарегистрироваться на мероприятие, изучить подробную программу и ознакомиться с профилями ведущих экспертов-патологов из США, Европы и стран СНГ. Платформа также предоставляет интегрированную информацию о профильных мастер-классах, вариантах проживания и культурных турах, обеспечивая комфортное участие для всех делегатов.",
      "en": "A dedicated digital platform developed for the International Scientific and Practical Conference \"Modern Approaches in Diagnostic and Predictive Pathology,\" held in Tashkent, Uzbekistan. Organized in collaboration with the Ministry of Health and Ipsum Pathology, the website serves as a comprehensive hub for medical professionals. It allows attendees to seamlessly register for the event, explore the detailed schedule, and review profiles of leading pathology experts from the USA, Europe, and CIS countries. The platform also provides integrated information on specialized masterclasses, accommodation options, and cultural tours, ensuring a smooth experience for all participants."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/ipsum-conference.webp",
    "technologies": [
      "Next.js",
      "Tailwind",
      "Typescript",
      "Nestjs"
    ],
    "url": "https://ipsumconference.uz",
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
    "id": "sbm-food",
    "slug": "sbm-food",
    "title": {
      "uz": "SBM Food",
      "ru": "SBM Food",
      "en": "SBM Food"
    },
    "description": {
      "uz": "O‘zbekistondagi yetakchi oziq-ovqat distribyutori uchun brend nufuzini oshirish va mijozlar ishonchini mustahkamlashga qaratilgan zamonaviy e-commerce platformasi. Loyiha iste'molchilar bilan samarali aloqa o‘rnatishga xizmat qiluvchi professional raqamli vitrina va axborot markazini taqdim etadi.",
      "ru": "Современная e-commerce платформа для ведущего дистрибьютора продуктов питания в Узбекистане, созданная для укрепления имиджа бренда и повышения доверия потребителей. Проект обеспечивает эффективную цифровую витрину и удобные каналы связи для прямого взаимодействия с аудиторией.",
      "en": "A modern e-commerce platform for a leading food distributor in Uzbekistan, designed to enhance brand presence and build consumer trust. The project provides a professional digital storefront that facilitates seamless communication and strengthens the brand's position in the local market."
    },
    "duration": {
      "uz": "2 oy",
      "ru": "2 месяца",
      "en": "2 months"
    },
    "image": "/assets/img/projects/sbm-food.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://sbmfood.uz",
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
    "id": "neurotagline",
    "slug": "neurotagline",
    "title": {
      "uz": "Neurotagline",
      "ru": "Neurotagline",
      "en": "Neurotagline"
    },
    "description": {
      "uz": "NEUROTAGLINE brendi uchun yaratilgan ushbu professional platforma sun'iy intellektga asoslangan aqlli salomatlik qurilmalarini taqdim etadi. Sayt brend nufuzini oshirish va foydalanuvchilar bilan ishonchli aloqa kanalini yo'lga qo'yish maqsadida ishlab chiqilgan.",
      "ru": "Профессиональный лендинг для бренда NEUROTAGLINE, представляющий инновационные смарт-устройства для мониторинга здоровья на базе ИИ. Проект направлен на укрепление доверия к бренду и создание эффективного канала коммуникации с пользователями.",
      "en": "A professional landing page for NEUROTAGLINE, showcasing a range of next-generation smart wellness devices powered by AI health insights. The site establishes a strong brand presence and provides a centralized hub for user engagement and technical support."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/neurotagline.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://neurotagline.com",
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
    "id": "myyurist",
    "slug": "myyurist",
    "title": {
      "uz": "MyYurist",
      "ru": "MyYurist",
      "en": "MyYurist"
    },
    "description": {
      "uz": "MyYurist — O‘zbekistondagi fuqarolar va professional yuristlar o‘rtasidagi muloqotni soddalashtirishga qaratilgan innovatsion huquqiy platforma. Loyiha huquqiy yordamdan foydalanish imkoniyatlarini kengaytirish va raqamli muhitda brend ishonchini mustahkamlashga xizmat qiladi.",
      "ru": "MyYurist — это инновационная юридическая платформа, созданная для упрощения взаимодействия между гражданами и профессиональными юристами в Узбекистане. Проект направлен на повышение доступности правовой помощи и укрепление доверия к бренду через современный цифровой интерфейс.",
      "en": "MyYurist is an innovative legal platform designed to bridge the gap between citizens and professional lawyers in Uzbekistan through a seamless digital interface. The project enhances legal accessibility and brand trust, providing a secure environment for professional consultations and document management."
    },
    "duration": {
      "uz": "2 oy",
      "ru": "2 месяца",
      "en": "2 months"
    },
    "image": "/assets/img/projects/myyurist.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://myyurist.uz",
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
    "id": "ceragem-uzbekistan",
    "slug": "ceragem-uzbekistan",
    "title": {
      "uz": "Ceragem Uzbekistan",
      "ru": "Ceragem Uzbekistan",
      "en": "Ceragem Uzbekistan"
    },
    "description": {
      "uz": "«ceragemuzbekistann.uz»– bu Tashkentda joylashgan, Ceragem terapevtik massaj uskunalarining rasmiy vakolatxonasi. Ular massaj to‘shaklarini sotadi Agar siz osteoxondroz, mushak og‘riqlari yoki umurtqa muammolari uchun massaj echimi qidirsangiz kopmaniya veb-saytiga tashrif buyuring",
      "ru": "«ceragemuzbekistann.uz» — официальное представительство терапевтического массажного оборудования Ceragem в Ташкенте. Они продают массажные кровати. Если вы ищете массажные процедуры при остеохондрозе, мышечных болях или проблемах с позвоночником, посетите сайт компании",
      "en": "«ceragemuzbekistann.uz»– bu Tashkentda joylashgan, Ceragem terapevtik massaj uskunalarining rasmiy vakolatxonasi. Ular massaj to‘shaklarini sotadi Agar siz osteoxondroz, mushak og‘riqlari yoki umurtqa muammolari uchun massaj echimi qidirsangiz kopmaniya veb-saytiga tashrif buyuring"
    },
    "duration": {
      "uz": "10 kun",
      "ru": "10 kun",
      "en": "10 kun"
    },
    "image": "/assets/img/projects/ceragem-uzbekistan.webp",
    "technologies": [
      "Next js",
      "React js",
      "Type Script",
      "Tailwind Css",
      "Framer Motion"
    ],
    "url": "https://www.ceragemuzbekistann.uz/",
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
    "id": "firewise",
    "slug": "firewise",
    "title": {
      "uz": "Firewise",
      "ru": "Firewise",
      "en": "Firewise"
    },
    "description": {
      "uz": "Firewise.uz – bu O‘zbekistonda yong‘in signalizatsiya  va tutun detektorlari bo‘yicha birinchi importyorlardan  biri bo‘lib, kompaniya o‘z sayti orqali,  mahsulotlarini bozorga olib kirib,mijozlarga o‘z xizmatlarini ko‘rsatmoqda.",
      "ru": "Firewise.uz – одна из первых компаний-импортёров систем пожарной сигнализации и дымовых детекторов в Узбекистане. Компания через свой сайт выводит продукцию на рынок и оказывает услуги своим клиентам.",
      "en": "Firewise.uz – is one of the first importers of fire alarm systems and smoke detectors in Uzbekistan. Through its website, the company brings its products to the market and provides services to its customers."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяца",
      "en": "1 months"
    },
    "image": "/assets/img/projects/firewise.webp",
    "technologies": [
      "NestJs",
      "NextJs",
      "MONGO",
      "TailwindCSS",
      "ShadcnUI"
    ],
    "url": "https://firewise.uz",
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
    "id": "imtihan",
    "slug": "imtihan",
    "title": {
      "uz": "Imtihan",
      "ru": "Imtihan",
      "en": "Imtihan"
    },
    "description": {
      "uz": "Imtihan — arab tili bo'yicha bilim darajasini tasdiqlash uchun yaratilgan ixtisoslashgan raqamli platforma bo'lib, nomzodlar uchun xavfsiz va professional imtihon muhitini taqdim etadi. Loyiha yuqori akademik standartlar asosida ishonchli brend imidjini yaratish va foydalanuvchilarga tezkor natijalar taqdim etishga yo'naltirilgan.",
      "ru": "Imtihan — это специализированная цифровая платформа для сертификации знаний арабского языка, обеспечивающая безопасную и профессиональную среду для подтверждения академической квалификации. Проект направлен на создание надежной цифровой экосистемы с высокими стандартами безопасности и мгновенной отчетностью для пользователей.",
      "en": "Imtihan is a specialized digital platform for Arabic language certification, providing a secure and professional environment for candidates to validate their academic proficiency. The project establishes a high-standard digital ecosystem that ensures trust, data privacy, and immediate performance feedback for users."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/imtihan.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://imtihan.net",
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
    "id": "freeman-lourenco",
    "slug": "freeman-lourenco",
    "title": {
      "uz": "Freeman & Lourenco",
      "ru": "Freeman & Lourenco",
      "en": "Freeman & Lourenco"
    },
    "description": {
      "uz": "Durham mintaqasi va Katta Toronto hududida faoliyat yurituvchi ishonchli Freeman & Lourenco LLP malakali buxgalterlar va auditorlar firmasi uchun ishlab chiqilgan professional korporativ veb-sayt. Firmaning 40 yildan ortiq tajribasini o'zida aks ettirgan ushbu platforma shaxsiy va korporativ soliqlarni tayyorlash, buxgalteriya hisobi va strategik maslahat kabi keng ko'lamli moliyaviy yechimlarni namoyish etadi. Sayt qat'iy va zamonaviy dizaynga ega bo'lib, o'zida xavfsiz mijozlar portali, moliya va soliqqa oid foydali bloglar hamda mutaxassislar bilan bog'lanish uchun qulay tizimni jamlagan. Bu esa jismoniy va yuridik shaxslar uchun ishonchli va uzluksiz raqamli xizmat ko'rsatishni ta'minlaydi.",
      "ru": "Профессиональный корпоративный сайт, разработанный для Freeman & Lourenco LLP — надежной бухгалтерской и консалтинговой компании, обслуживающей регион Дарем и Большой Торонто. Опираясь на более чем 40-летний опыт работы фирмы, платформа подробно освещает широкий спектр финансовых решений, включая подготовку личных и корпоративных налоговых деклараций, бухгалтерский учет и стратегическое планирование. Проект отличается строгим и современным дизайном, интегрированным безопасным клиентским порталом, информативным блогом о финансах и удобной системой обратной связи, обеспечивая комфортное цифровое взаимодействие как для частных лиц, так и для корпоративных клиентов.",
      "en": "A professional corporate website developed for Freeman & Lourenco LLP, a trusted firm of Chartered Professional Accountants serving the Durham Region and Greater Toronto Area. Highlighting over 40 years of industry experience, the platform details their comprehensive financial solutions, including personal and corporate tax preparation, accounting, and strategic advisory services. The site features a clean, accessible design integrating a secure client portal, informative financial blogs, and straightforward contact systems, ensuring a seamless and reliable digital experience for both individual taxpayers and businesses."
    },
    "duration": {
      "uz": "10 kun",
      "ru": "10 дней",
      "en": "10 days"
    },
    "image": "/assets/img/projects/freeman-lourenco.webp",
    "technologies": [
      "Nextjs",
      "Tailwind",
      "Typescript"
    ],
    "url": "https://site1760185143.mywhc.ca",
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
    "id": "decolor",
    "slug": "decolor",
    "title": {
      "uz": "Decolor",
      "ru": "Decolor",
      "en": "Decolor"
    },
    "description": {
      "uz": "O'zbekistonga yuqori sifatli Italiya qurilish hamda pardozlash materiallarini to'g'ridan-to'g'ri import qilish va yetkazib berishga ixtisoslashgan Decolor Group Ltd kompaniyasining premium qurilish va dizayn platformasi. Saytda OIKOS, Marmorino Tools va Giusto Manetti kabi butun dunyoga mashhur Italiya brendlarining dekorativ bo'yoqlari, Venetsiya suvoqlari, professional zarhallash (tilla suvi yugurtirish) materiallari hamda mebellari katalogi keng yoritilgan. Loyiha nafaqat mahsulotlar savdosi, balki elita villalarini qurish, xonalarni premium darajada ta'mirlash, eksklyuziv interyer dizaynini yaratish, shuningdek, noyob mebel va santexnikalarni tanlashda individual yordam ko'rsatish kabi yuqori darajadagi xizmatlarni ham taklif etadi.",
      "ru": "Премиальная строительно-дизайнерская платформа компании Decolor Group Ltd, специализирующаяся на прямом импорте и поставках высококачественных итальянских строительных и отделочных материалов в Узбекистан. На сайте представлен обширный каталог декоративных красок, венецианской штукатурки, материалов для профессионального золочения, а также мебели от всемирно известных итальянских брендов, таких как OIKOS, Marmorino Tools и Giusto Manetti. Помимо реализации продукции, проект подробно описывает предоставляемые услуги, включая проектирование, строительство элитных вилл, премиальную отделку помещений и индивидуальную помощь в подборе эксклюзивных предметов интерьера и сантехники.",
      "en": "A premium construction and design platform representing Decolor Group Ltd, specializing in the direct import and supply of high-end Italian building materials and interior products in Uzbekistan. The website showcases an extensive catalog of decorative paints, Venetian plaster, professional gilding materials, and furniture from world-renowned Italian brands such as OIKOS, Marmorino Tools, and Giusto Manetti. Beyond product sales, the platform details their comprehensive services, including architectural design, luxury villa construction, high-end interior finishing, and personalized assistance in sourcing exclusive home décor and sanitary ware."
    },
    "duration": {
      "uz": "10 kun",
      "ru": "10 дней",
      "en": "10 days"
    },
    "image": "/assets/img/projects/decolor.webp",
    "technologies": [
      "Next.js",
      "Tailwind",
      "Typescript"
    ],
    "url": "https://decolor.uz",
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
    "id": "bernhardt",
    "slug": "bernhardt",
    "title": {
      "uz": "Bernhardt",
      "ru": "Bernhardt",
      "en": "Bernhardt"
    },
    "description": {
      "uz": "O'zbekistondagi premium Amerika mebel brendi bo'lmish Bernhardtning rasmiy dileri uchun ishlab chiqilgan zamonaviy elektron tijorat platformasi. Sayt xaridorlarga keng ko'lamli yuqori sifatli mebellar katalogini, batafsil mahsulot galereyalari va texnik xususiyatlarni taqdim etgan holda mukammal onlayn xarid tajribasini taklif etadi. Foydalanuvchilar kolleksiyalar bilan osongina tanishishlari, konsultatsiyalarga yozilishlari hamda yetkazib berish va professional yig'ish xizmatlarini rasmiylashtirishlari mumkin.",
      "ru": "Элегантная e-commerce платформа, разработанная для официального дилера премиального американского мебельного бренда Bernhardt в Узбекистане. Сайт предлагает изысканный опыт онлайн-покупок, предоставляя обширный каталог высококачественной мебели с подробными галереями товаров и техническими характеристиками. Пользователи могут легко просматривать коллекции, записываться на консультации, а также оформлять доставку и профессиональную сборку.",
      "en": "An elegant e-commerce platform developed for the official dealership of the premium American furniture brand, Bernhardt, in Uzbekistan. The site offers a sophisticated online shopping experience, featuring an extensive catalog of high-quality furniture with detailed product galleries and technical specifications. Users can seamlessly browse collections, schedule consultations, and easily arrange for delivery and professional assembly."
    },
    "duration": {
      "uz": "10 kun",
      "ru": "10 дней",
      "en": "10 days"
    },
    "image": "/assets/img/projects/bernhardt.webp",
    "technologies": [
      "Next.js",
      "Tailwind",
      "Lucide"
    ],
    "url": "bernhardt.uz",
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
    "id": "wogme",
    "slug": "wogme",
    "title": {
      "uz": "Wogme",
      "ru": "Wogme",
      "en": "Wogme"
    },
    "description": {
      "uz": "«wogme.com» — bu Dubay markazli, Yaqin Sharq va boshqa mintaqalarda faoliyat yurituvchi, arkada o‘yinlari va attraksion uskunalarining mukammal yetkazib beruvchisi. Korxona o‘zining katalog sayti orqali,o‘yin avtomatlarini sotish, o‘rnatish, texnik xizmat ko‘rsatish kabi xizmatlarini dunyoga tanishtiradi va o‘zining brend maqomini oshirish uchun saytdan foydalanadi.",
      "ru": "«wogme.com» — это компания, базирующаяся в Дубае и работающая на Ближнем Востоке и в других регионах, являющаяся ведущим поставщиком аркадных игр и аттракционного оборудования. С помощью своего каталог-сайта компания представляет миру услуги по продаже, установке и техническому обслуживанию игровых автоматов, а также использует сайт для повышения узнаваемости своего бренда.",
      "en": "«wogme.com» — bu Dubay markazli, Yaqin Sharq va boshqa mintaqalarda faoliyat yurituvchi, arkada o‘yinlari va attraksion uskunalarining mukammal yetkazib beruvchisi. Korxona o‘zining katalog sayti orqali,o‘yin avtomatlarini sotish, o‘rnatish, texnik xizmat ko‘rsatish kabi xizmatlarini dunyoga tanishtiradi va o‘zining brend maqomini oshirish uchun saytdan foydalanadi."
    },
    "duration": {
      "uz": "2 oy",
      "ru": "2 oy",
      "en": "2 oy"
    },
    "image": "/assets/img/projects/wogme.webp",
    "technologies": [
      "React js",
      "Next js",
      "MUI",
      "Tailwind Css"
    ],
    "url": "https://www.wogme.com/",
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
    "id": "ceragemuzbekistann",
    "slug": "ceragemuzbekistann",
    "title": {
      "uz": "Ceragemuzbekistann",
      "ru": "Ceragemuzbekistann",
      "en": "Ceragemuzbekistann"
    },
    "description": {
      "uz": "«ceragemuzbekistann.uz»– bu Tashkentda joylashgan, Ceragem terapevtik massaj uskunalarining rasmiy vakolatxonasi. Ular massaj to‘shaklarini sotadi Agar siz osteoxondroz, mushak og‘riqlari yoki umurtqa muammolari uchun massaj echimi qidirsangiz kopmaniya veb-saytiga tashrif buyuring",
      "ru": "«ceragemuzbekistann.uz» — официальный представитель терапевтического массажного оборудования Ceragem, расположенный в Ташкенте. Они продают массажные кровати. Если вы ищете массажное решение при остеохондрозе, мышечных болях или проблемах с позвоночником, посетите сайт компании.",
      "en": "«ceragemuzbekistann.uz» — is the official representative office of Ceragem therapeutic massage equipment located in Tashkent. They sell massage beds. If you are looking for a massage solution for osteochondrosis, muscle pain, or spinal problems, visit the company’s website."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяца",
      "en": "1 months"
    },
    "image": "/assets/img/projects/ceragemuzbekistann.webp",
    "technologies": [
      "ReactJs",
      "NextJs",
      "Tailwind Css",
      "Shadcn UI",
      "NestJs",
      "Mongo"
    ],
    "url": "https://www.ceragemuzbekistann.uz",
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
    "id": "universal-frp-systems-mchj",
    "slug": "universal-frp-systems-mchj",
    "title": {
      "uz": "Universal FRP Systems MChJ",
      "ru": "Universal FRP Systems MChJ",
      "en": "Universal FRP Systems MChJ"
    },
    "description": {
      "uz": "«ufrp.uz» — bu Universal FRP Systems MChJ  kompaniyasining rasmiy veb-sayti bo‘lib, shisha-kumpozit  (FRP) armaturalar va qurilish tarmoqlarini ishlab chiqarishga  ixtisoslashgan",
      "ru": "«ufrp.uz» — официальный веб-сайт компании Universal FRP Systems ООО, специализирующейся на производстве стеклокомпозитной (FRP) арматуры и строительных материалов.",
      "en": "«ufrp.uz» — is the official website of Universal FRP Systems LLC, a company specialized in the production of fiberglass composite (FRP) reinforcements and construction materials."
    },
    "duration": {
      "uz": "10 kun",
      "ru": "10 дней",
      "en": "10 days"
    },
    "image": "/assets/img/projects/universal-frp-systems-mchj.webp",
    "technologies": [
      "React Js",
      "Next Js",
      "TailwindCss",
      "Shadcn UI",
      "Nest Js",
      "Mongo"
    ],
    "url": "https://www.ufrp.uz",
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
    "id": "tamamuzbot",
    "slug": "tamamuzbot",
    "title": {
      "uz": "Tamamuzbot",
      "ru": "Tamamuzbot",
      "en": "Tamamuzbot"
    },
    "description": {
      "uz": "@tamamuzbot — bu zamonaviy  Telegram bot bo‘lib, original,  nufuzli va sifatli atirlarni oson va  tez xarid qilish imkonini beradi.  U O‘zbekiston bozorida atir  ixlosmandlari uchun  maxsus ishlab chiqilgan  qulay platformadir",
      "ru": "@tamamuzbot — это современный Telegram-бот, который позволяет легко и быстро приобрести оригинальные, престижные и качественные духи. Это удобная платформа, специально созданная для любителей парфюмерии в Узбекистане.",
      "en": "@tamamuzbot — is a modern Telegram bot that allows you to easily and quickly purchase original, prestigious, and high-quality perfumes. It is a convenient platform specially designed for perfume enthusiasts in Uzbekistan."
    },
    "duration": {
      "uz": "10 kun",
      "ru": "10 дней",
      "en": "10 days"
    },
    "image": "/assets/img/projects/tamamuzbot.webp",
    "technologies": [
      "NextJs",
      "GrammyJs",
      "TailwindCSS",
      "MONGO"
    ],
    "url": "@tamamuzbot",
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
    "id": "uzfiltr",
    "slug": "uzfiltr",
    "title": {
      "uz": "UzFiltr",
      "ru": "UzFiltr",
      "en": "UzFiltr"
    },
    "description": {
      "uz": "«uzfiltr.uz» — sanoat filtrlari va tozalash elementlarida yetakchi kompaniya bo‘lib, mahalliy ishlab chiqarish, keng assortiment va sifat nazorati bilan ajralib turadi. Agar siz sanoat, energetika yoki ekologiya tarmoqlarida samaradorligini oshirmoqchi bo‘lsangiz, UzFiltr siz uchun ishonchli tanlov bo‘ladi.",
      "ru": "«uzfiltr.uz» — ведущая компания в области промышленных фильтров и очистительных элементов, отличающаяся локальным производством, широким ассортиментом и строгим контролем качества. Если вы хотите повысить эффективность в промышленности, энергетике или экологии, UzFiltr станет для вас надежным выбором.",
      "en": "“uzfiltr.uz” is a leading company in industrial filters and purification elements, distinguished by local production, a wide product range, and strict quality control. If you want to improve efficiency in industry, energy, or ecology, UzFiltr is the reliable choice for you."
    },
    "duration": {
      "uz": "10 kun",
      "ru": "10 дней",
      "en": "10 days"
    },
    "image": "/assets/img/projects/uzfiltr.webp",
    "technologies": [
      "ReactJs",
      "ExpressJs",
      "NodeJs",
      "Tailwind",
      "Redux"
    ],
    "url": "https://www.uzfiltr.uz/",
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
    "id": "zap",
    "slug": "zap",
    "title": {
      "uz": "Zap",
      "ru": "Zap",
      "en": "Zap"
    },
    "description": {
      "uz": "ZAP.UZ — O‘zbekistondagi avtoehtiyot qismlari va servis xizmatlarini qidirishni osonlashtirish uchun yaratilgan keng ko‘lamli marketpleys. Platforma avtomobil egalari va ishonchli sotuvchilar o‘rtasida samarali aloqa o‘rnatib, bozorda ishonchli brend ishtirokini ta'minlaydi.",
      "ru": "ZAP.UZ — это масштабный маркетплейс, созданный для упрощения поиска автозапчастей и сервисных услуг в Узбекистане. Платформа обеспечивает эффективное взаимодействие между автовладельцами и проверенными поставщиками, повышая доступность качественного обслуживания и доверие к бренду.",
      "en": "ZAP.UZ is a comprehensive marketplace designed to streamline the search for auto parts and professional car services across Uzbekistan. The platform establishes a reliable bridge between car owners and verified sellers, enhancing market accessibility and user trust through a centralized digital presence."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/zap.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://zap.uz",
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
    "id": "scriber-arts",
    "slug": "scriber-arts",
    "title": {
      "uz": "Scriber Arts",
      "ru": "Scriber Arts",
      "en": "Scriber Arts"
    },
    "description": {
      "uz": "Innovatsion muhandislik va arxitektura yechimlariga ixtisoslashgan xalqaro kompaniya uchun ishlab chiqilgan professional korporativ platforma. Sayt brend ishonchini mustahkamlashga, texnik salohiyatni namoyish etishga va mijozlar bilan samarali aloqa o'rnatishga xizmat qiladi.",
      "ru": "Профессиональная корпоративная платформа для международной инжиниринговой компании, предназначенная для демонстрации архитектурного опыта и технических решений в промышленном секторе. Сайт способствует росту доверия к бренду через прозрачный доступ к лицензиям и обеспечивает эффективное взаимодействие с партнерами.",
      "en": "A professional corporate platform for an international engineering firm, designed to showcase architectural expertise and technical solutions across various industrial sectors. The website strengthens brand trust by providing transparent access to official certifications and facilitating seamless communication with global partners."
    },
    "duration": {
      "uz": "2 oy",
      "ru": "2 месяца",
      "en": "2 months"
    },
    "image": "/assets/img/projects/scriber-arts.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://scriber-arts.uz",
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
    "id": "universal-frp-systems",
    "slug": "universal-frp-systems",
    "title": {
      "uz": "Universal FRP Systems",
      "ru": "Universal FRP Systems",
      "en": "Universal FRP Systems"
    },
    "description": {
      "uz": "«ufrp.uz» — bu Universal FRP Systems MChJ  kompaniyasining rasmiy veb-sayti bo‘lib, shisha-kumpozit  (FRP) armaturalar va qurilish tarmoqlarini ishlab chiqarishga  ixtisoslashgan",
      "ru": "«ufrp.uz» — официальный сайт компании ООО «Universal FRP Systems», специализирующейся на производстве стеклопластиковой арматуры и строительных сетей.",
      "en": "«ufrp.uz» — bu Universal FRP Systems MChJ  kompaniyasining rasmiy veb-sayti bo‘lib, shisha-kumpozit  (FRP) armaturalar va qurilish tarmoqlarini ishlab chiqarishga  ixtisoslashgan"
    },
    "duration": {
      "uz": "14 kun",
      "ru": "14 kun",
      "en": "14 kun"
    },
    "image": "/assets/img/projects/universal-frp-systems.webp",
    "technologies": [
      "Next js",
      "React js",
      "Tailwind Css",
      "Type Script",
      "Framer Motion"
    ],
    "url": "https://www.ufrp.uz/uz",
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
    "id": "saturn-education",
    "slug": "saturn-education",
    "title": {
      "uz": "Saturn Education",
      "ru": "Saturn Education",
      "en": "Saturn Education"
    },
    "description": {
      "uz": "Saturn Education — butun dunyo bo'ylab talabalarga turli fanlar bo'yicha bepul va sifatli ta'lim berishga mo'ljallangan professional platforma. Loyiha brend nufuzini oshirish va ekspert bilimlariga oson kirish imkonini beruvchi qulay raqamli muhitni taqdim etadi.",
      "ru": "Saturn Education — это профессиональная образовательная платформа, предоставляющая бесплатный доступ к качественным урокам по различным дисциплинам для студентов по всему миру. Проект направлен на укрепление доверия к бренду и создание доступной цифровой среды для эффективного обучения.",
      "en": "Saturn Education is a professional educational platform providing free, high-quality lessons across diverse subjects to empower students globally. The project focuses on building brand trust and accessibility, offering a student-centered digital space for expert-led learning."
    },
    "duration": {
      "uz": "1 oy",
      "ru": "1 месяц",
      "en": "1 month"
    },
    "image": "/assets/img/projects/saturn-education.webp",
    "technologies": [
      "Typescript",
      "Next.js",
      "Nest.js",
      "Mongodb"
    ],
    "url": "https://www.saturnedu.org",
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
    "id": "cleanza",
    "slug": "cleanza",
    "title": {
      "uz": "Cleanza",
      "ru": "Cleanza",
      "en": "Cleanza"
    },
    "description": {
      "uz": "Cleanza.uz — uy, kvartira va ofislarni, shuningdek  remontdan keyingi yoki general tozalash xizmatlarini  taqdim etuvchi professional tozalash xizmati.\nUlarning sayti mavjudligi xizmat shakli va jonli ish  faoliyatini tasdiqlaydi",
      "ru": "Cleanza.uz — профессиональная клининговая компания, предоставляющая услуги по уборке домов, квартир и офисов, а также генеральной и послеремонтной уборке.\nНаличие сайта подтверждает формат предоставляемых услуг и активную деятельность компании.",
      "en": "Cleanza.uz — uy, kvartira va ofislarni, shuningdek  remontdan keyingi yoki general tozalash xizmatlarini  taqdim etuvchi professional tozalash xizmati.\nUlarning sayti mavjudligi xizmat shakli va jonli ish  faoliyatini tasdiqlaydi"
    },
    "duration": {
      "uz": "5 kun",
      "ru": "5 kun",
      "en": "5 kun"
    },
    "image": "/assets/img/projects/cleanza.webp",
    "technologies": [
      "React js",
      "Next js",
      "TypeScript",
      "Css"
    ],
    "url": "https://www.cleanza.uz/",
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
    "id": "aslamboi-uc-bot",
    "slug": "aslamboi-uc-bot",
    "title": {
      "uz": "Aslamboi UC bot",
      "ru": "Aslamboi UC bot",
      "en": "Aslamboi UC bot"
    },
    "description": {
      "uz": "@Ucaslambot — bu PUBG  Mobile o‘yini uchun UC xarid  qilishni osonlashtiruvchi Telegram  botidir.O‘zbekistonlik geymerlar  uchun maxsus ishlab chiqilgan  bu bot orqali istalgan vaqtda  UC sotib olish mumkin. Bot tezkor, qulay va ishonchli.",
      "ru": "@Ucaslambot — Telegram-бот, упрощающий покупку UC для игры PUBG Mobile. Этот бот специально разработан для геймеров из Узбекистана, позволяя приобрести UC в любое время. Бот работает быстро, удобно и надёжно.",
      "en": "@Ucaslambot — bu PUBG  Mobile o‘yini uchun UC xarid  qilishni osonlashtiruvchi Telegram  botidir.O‘zbekistonlik geymerlar  uchun maxsus ishlab chiqilgan  bu bot orqali istalgan vaqtda  UC sotib olish mumkin. Bot tezkor, qulay va ishonchli."
    },
    "duration": {
      "uz": "15 kun",
      "ru": "15 kun",
      "en": "15 kun"
    },
    "image": "/assets/img/projects/aslamboi-uc-bot.webp",
    "technologies": [
      "React js",
      "Next js",
      "Tailwind Css"
    ],
    "url": "https://t.me/Ucaslambot",
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
    "id": "gaztex-uz",
    "slug": "gaztex-uz",
    "title": {
      "uz": "Gaztex uz",
      "ru": "Gaztex uz",
      "en": "Gaztex uz"
    },
    "description": {
      "uz": "Gaztex.uz – bu gaz va texnika bo‘yicha xizmat  korsatafigan korxona bollib ishchilar va  buyurtmalarni nazorat qilish uchun ishlab chiqilgan platforma. CRM, hodimlar boshqaruvi va xizmatlar  bo‘limlari mavjud",
      "ru": "Gaztex.uz — это предприятие, оказывающее услуги в сфере газа и техники, а также платформа, разработанная для контроля за сотрудниками и заказами. Включает в себя модули CRM, управление персоналом и отделы обслуживания.",
      "en": "Gaztex.uz – bu gaz va texnika bo‘yicha xizmat  korsatafigan korxona bollib ishchilar va  buyurtmalarni nazorat qilish uchun ishlab chiqilgan platforma. CRM, hodimlar boshqaruvi va xizmatlar  bo‘limlari mavjud"
    },
    "duration": {
      "uz": "1",
      "ru": "1",
      "en": "1"
    },
    "image": "/assets/img/projects/gaztex-uz.webp",
    "technologies": [
      "Next js",
      "React js",
      "TailwindCss",
      "Shadcn UI"
    ],
    "url": "https://gaztex.uz/login",
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
    "id": "mesmer-uz",
    "slug": "mesmer-uz",
    "title": {
      "uz": "Mesmer uz",
      "ru": "Mesmer uz",
      "en": "Mesmer uz"
    },
    "description": {
      "uz": "«corporate.mesmer.uz» — Mesmer kompaniyasi o‘z xodimlariga e’tiborli bo‘lganligi sababli xodimlarining\nboshqaruv tizimini avtomatlashtirgan,sayt orqali xodimlar ma‘lumotlari ularning tug‘ilgan kunlari haqida, ilmiy \ndarajalari va kontaktlari, va bugungi kundagi topdagi  xodimlarni yoritib borishadi",
      "ru": "corporate.mesmer.uz — Поскольку компания Mesmer уделяет особое внимание своим сотрудникам, она автоматизировала систему управления персоналом. Через сайт публикуется информация о сотрудниках: их даты рождения, научные степени, контактные данные, а также освещаются лучшие сотрудники на сегодняшний день.",
      "en": "«corporate.mesmer.uz» — Mesmer kompaniyasi o‘z xodimlariga e’tiborli bo‘lganligi sababli xodimlarining\nboshqaruv tizimini avtomatlashtirgan,sayt orqali xodimlar ma‘lumotlari ularning tug‘ilgan kunlari haqida, ilmiy \ndarajalari va kontaktlari, va bugungi kundagi topdagi  xodimlarni yoritib borishadi"
    },
    "duration": {
      "uz": "2",
      "ru": "2",
      "en": "2"
    },
    "image": "/assets/img/projects/mesmer-uz.webp",
    "technologies": [
      "Next js",
      "React js",
      "TailwindCss",
      "Shadcn UI"
    ],
    "url": "https://corporate.mesmer.uz/auth/signin",
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
    "id": "logistatrans-app",
    "slug": "logistatrans-app",
    "title": {
      "uz": "Logistatrans (mobil ilova)",
      "ru": "Logistatrans (мобильное приложение)",
      "en": "Logistatrans (mobile app)"
    },
    "description": {
      "uz": "Logistatrans logistika kompaniyasi uchun mobil ilova. Yuk tashish arizasining to'liq sikli — yangidan yetkazib berilgangacha — kanban statuslarida kuzatib boriladi. Mijozlar va agentlar bazasi, ichki shaxsiy hamda guruh chatlari, hisob-fakturalar va bildirishnomalar bitta ilovada jamlangan.",
      "ru": "Мобильное приложение для логистической компании Logistatrans. Полный цикл грузоперевозки — от новой заявки до доставки — отслеживается по канбан-статусам. База клиентов и агентов, внутренние личные и групповые чаты, счета и уведомления собраны в одном приложении.",
      "en": "A mobile app for the logistics company Logistatrans. The full freight cycle — from a new request to delivery — is tracked through kanban statuses. Client and agent directories, internal private and group chats, invoices and notifications are gathered in a single app."
    },
    "image": "/assets/img/projects/logistatrans-app.webp",
    "technologies": [
      "React Native",
      "TypeScript",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://play.google.com/store/apps/details?id=uz.logistatrans.app",
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
    "id": "bobo-market-app",
    "slug": "bobo-market-app",
    "title": {
      "uz": "Bobo Market (mobil ilova)",
      "ru": "Bobo Market (мобильное приложение)",
      "en": "Bobo Market (mobile app)"
    },
    "description": {
      "uz": "Bobo Market onlayn do'koni va yetkazib berish xizmatining mobil ilovasi. Kategoriyalar bo'yicha katalog, qidiruv va filtrlar, savat, buyurtma tarixi hamda yetkazib berish holatini kuzatish — oziq-ovqatdan maishiy texnikagacha bo'lgan mahsulotlar bir joyda.",
      "ru": "Мобильное приложение интернет-магазина и службы доставки Bobo Market. Каталог по категориям, поиск и фильтры, корзина, история заказов и отслеживание доставки — от продуктов питания до бытовой техники в одном месте.",
      "en": "The mobile app of the Bobo Market online store and delivery service. A category catalogue, search and filters, cart, order history and delivery tracking — from groceries to home appliances in one place."
    },
    "image": "/assets/img/projects/bobo-market-app.webp",
    "technologies": [
      "React Native",
      "TypeScript",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://play.google.com/store/apps/details?id=uz.bobo.market",
    "category": {
      "title": {
        "uz": "Internet magazin",
        "ru": "Интернет магазин",
        "en": "Online store"
      },
      "slug": "e-commerce"
    }
  },
  {
    "id": "besh-market-app",
    "slug": "besh-market-app",
    "title": {
      "uz": "Besh Market (mobil ilova)",
      "ru": "Besh Market (мобильное приложение)",
      "en": "Besh Market (mobile app)"
    },
    "description": {
      "uz": "Besh Market — restoranlardan ovqat yetkazib berish ilovasi. Foydalanuvchi yaqin atrofdagi restoranlarni ko'radi, menyu va reytinglar bilan tanishadi, bir necha bosishda buyurtma beradi va uni real vaqtda kuzatadi. Kuryerlar uchun alohida smena va jadval moduli ishlab chiqilgan.",
      "ru": "Besh Market — приложение для доставки еды из ресторанов. Пользователь видит заведения поблизости, изучает меню и рейтинги, оформляет заказ в несколько касаний и отслеживает его в реальном времени. Для курьеров разработан отдельный модуль смен и расписания.",
      "en": "Besh Market is a restaurant food-delivery app. Users browse nearby venues, explore menus and ratings, place an order in a few taps and track it in real time. A separate shift and schedule module was built for couriers."
    },
    "image": "/assets/img/projects/besh-market-app.webp",
    "technologies": [
      "React Native",
      "TypeScript",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://play.google.com/store/apps/details?id=com.beshmarket",
    "category": {
      "title": {
        "uz": "Internet magazin",
        "ru": "Интернет магазин",
        "en": "Online store"
      },
      "slug": "e-commerce"
    }
  },
  {
    "id": "firewise-app",
    "slug": "firewise-app",
    "title": {
      "uz": "FireWise (mobil ilova)",
      "ru": "FireWise (мобильное приложение)",
      "en": "FireWise (mobile app)"
    },
    "description": {
      "uz": "FireWise Enterprises uchun mobil katalog ilovasi. Yong'in xavfsizligi uskunalari va yechimlari bo'yicha keng assortiment, qidiruv, filtr va saralash, mahsulot kartochkalari, saqlangan tanlanganlar, amalga oshirilgan loyihalar hamda kompaniya yangiliklari bo'limi.",
      "ru": "Мобильное каталожное приложение для FireWise Enterprises. Широкий ассортимент оборудования и решений для пожарной безопасности, поиск, фильтры и сортировка, карточки товаров, избранное, реализованные проекты и раздел новостей компании.",
      "en": "A mobile catalogue app for FireWise Enterprises. A broad range of fire-safety equipment and solutions, search, filters and sorting, product cards, favourites, completed projects and a company news section."
    },
    "image": "/assets/img/projects/firewise-app.webp",
    "technologies": [
      "React Native",
      "TypeScript",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://play.google.com/store/apps/details?id=uz.firewise.app",
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
    "id": "myyurist-app",
    "slug": "myyurist-app",
    "title": {
      "uz": "My Yurist (mobil ilova)",
      "ru": "My Yurist (мобильное приложение)",
      "en": "My Yurist (mobile app)"
    },
    "description": {
      "uz": "My Yurist huquqiy yordam ilovasi. Yuristlar katalogi va ular bilan bog'lanish, onlayn savol-javob, tez javob talab qiladigan blits-savollar bo'limi, ariza va shartnoma namunalari bazasi hamda sud jarayoni bo'yicha qo'llanma.",
      "ru": "Приложение юридической помощи My Yurist. Каталог юристов и связь с ними, онлайн вопрос-ответ, раздел блиц-вопросов для быстрых консультаций, база образцов заявлений и договоров, а также руководство по судебному процессу.",
      "en": "The My Yurist legal-help app. A directory of lawyers and direct contact, online Q&A, a rapid-answer section for short questions, a library of application and contract templates, and a guide to court procedure."
    },
    "image": "/assets/img/projects/myyurist-app.webp",
    "technologies": [
      "React Native",
      "TypeScript",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://play.google.com/store/apps/details?id=com.yurist_mobile",
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
    "id": "anibla-web",
    "slug": "anibla-web",
    "title": {
      "uz": "Anibla.uz (veb platforma)",
      "ru": "Anibla.uz (веб-платформа)",
      "en": "Anibla.uz (web platform)"
    },
    "description": {
      "uz": "Anibla.uz — o'zbek tilida dublyaj qilingan anime ko'rish uchun veb-platforma. Katalog va kategoriyalar, qismlar bo'yicha navigatsiya, sevimlilar ro'yxati, video pleyer va sifat tanlash, obuna tariflari hamda yangi qismlar haqida xabarnoma.",
      "ru": "Anibla.uz — веб-платформа для просмотра аниме в узбекском дубляже. Каталог и категории, навигация по сериям, список избранного, видеоплеер с выбором качества, тарифы подписки и уведомления о новых эпизодах.",
      "en": "Anibla.uz is a web platform for watching anime dubbed into Uzbek. A catalogue with categories, episode navigation, a favourites list, a video player with quality selection, subscription plans and new-episode notifications."
    },
    "image": "/assets/img/projects/anibla-web.webp",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://anibla.uz/",
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
    "id": "global-building-group",
    "slug": "global-building-group",
    "title": {
      "uz": "Global Building Group",
      "ru": "Global Building Group",
      "en": "Global Building Group"
    },
    "description": {
      "uz": "Global Building Group qurilish kompaniyasining korporativ sayti. Loyihalashdan «kalit topshiriq»gacha bo'lgan to'liq sikl xizmatlari, sanoat, energetika va fuqarolik qurilishi bo'yicha amalga oshirilgan loyihalar galereyasi, yangiliklar bo'limi va uch tilli interfeys.",
      "ru": "Корпоративный сайт строительной компании Global Building Group. Услуги полного цикла — от проектирования до сдачи «под ключ», галерея реализованных проектов промышленного, энергетического и гражданского строительства, раздел новостей и трёхъязычный интерфейс.",
      "en": "The corporate website of the construction company Global Building Group. Full-cycle services from design to turnkey handover, a gallery of completed industrial, energy and civil construction projects, a news section and a trilingual interface."
    },
    "image": "/assets/img/projects/globalbuilding.webp",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://globalbuilding.uz/",
    "category": {
      "title": {
        "uz": "Qurilish",
        "ru": "Строительство",
        "en": "Construction"
      },
      "slug": "construction"
    }
  },
  {
    "id": "ipsum-pathology",
    "slug": "ipsum-pathology",
    "title": {
      "uz": "IPSUM Pathology",
      "ru": "IPSUM Pathology",
      "en": "IPSUM Pathology"
    },
    "description": {
      "uz": "IPSUM Pathology laboratoriyasining sayti. NGS (yangi avlod sekvenatsiyasi), kliniko-diagnostik va patomorfologik yo'nalishlar bo'yicha xizmatlar katalogi, tahlil turlari tavsifi, o'quv dasturlari hamda onlayn ariza qoldirish imkoniyati.",
      "ru": "Сайт лаборатории IPSUM Pathology. Каталог услуг по направлениям NGS (секвенирование нового поколения), клинико-диагностическим и патоморфологическим исследованиям, описание видов анализов, обучающие программы и онлайн-заявка.",
      "en": "The website of the IPSUM Pathology laboratory. A catalogue of services across NGS (next-generation sequencing), clinical diagnostics and pathomorphology, descriptions of test types, training programmes and an online request form."
    },
    "image": "/assets/img/projects/ipsum-pathology.webp",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://ipsum.uz/",
    "category": {
      "title": {
        "uz": "Meditsina",
        "ru": "Медицина",
        "en": "Medicine"
      },
      "slug": "medicine"
    }
  },
  {
    "id": "ung-overseas",
    "slug": "ung-overseas",
    "title": {
      "uz": "UNG Overseas",
      "ru": "UNG Overseas",
      "en": "UNG Overseas"
    },
    "description": {
      "uz": "UNG Overseas — O'zbekistonning xalqaro energetika savdosi bo'linmasi sayti. Trading, strukturaviy moliyalashtirish va kapital bozorlari yo'nalishlari, investorlar uchun bo'lim, tenderlar, yangiliklar va karyera sahifalari ingliz hamda rus tillarida.",
      "ru": "UNG Overseas — сайт международного энергетического подразделения Узбекистана. Направления трейдинга, структурного финансирования и рынков капитала, раздел для инвесторов, тендеры, новости и карьерные страницы на английском и русском языках.",
      "en": "UNG Overseas is the website of Uzbekistan's international energy trading arm. Trading, structured finance and capital markets divisions, an investor section, tenders, news and career pages in English and Russian."
    },
    "image": "/assets/img/projects/ung-overseas.webp",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://www.ungoverseas.com/",
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
    "id": "mountain-and-sea",
    "slug": "mountain-and-sea",
    "title": {
      "uz": "Mountain&Sea",
      "ru": "Mountain&Sea",
      "en": "Mountain&Sea"
    },
    "description": {
      "uz": "Mountain&Sea oziq-ovqat brendining sayti. Tabiiy nori va dengiz mahsulotlari katalogi, mahsulot tarkibi va sifat sertifikatlari, kompaniya tarixi hamda yangiliklar bo'limi — uch tilda.",
      "ru": "Сайт продуктового бренда Mountain&Sea. Каталог натуральных нори и морепродуктов, состав продукции и сертификаты качества, история компании и раздел новостей — на трёх языках.",
      "en": "The website of the food brand Mountain&Sea. A catalogue of natural nori and seafood products, ingredient details and quality certificates, the company story and a news section — in three languages."
    },
    "image": "/assets/img/projects/mountain-and-sea.webp",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://mountainandsea.uz/",
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
    "id": "avantika-medex",
    "slug": "avantika-medex",
    "title": {
      "uz": "Avantika Medex",
      "ru": "Avantika Medex",
      "en": "Avantika Medex"
    },
    "description": {
      "uz": "Avantika Medex farmatsevtika ishlab chiqaruvchisining sayti. GMP standartidagi avtomatlashtirilgan ishlab chiqarish liniyalari haqida ma'lumot, preparatlar katalogi, hamkorlik va farmakonazorat bo'limlari hamda yangiliklar lentasi.",
      "ru": "Сайт фармацевтического производителя Avantika Medex. Информация об автоматизированных производственных линиях стандарта GMP, каталог препаратов, разделы партнёрства и фармаконадзора, а также лента новостей.",
      "en": "The website of the pharmaceutical manufacturer Avantika Medex. Information on GMP-standard automated production lines, a product catalogue, partnership and pharmacovigilance sections, and a news feed."
    },
    "image": "/assets/img/projects/avantika-medex.webp",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nest.js",
      "MongoDB"
    ],
    "url": "https://avantikamedex.uz/",
    "category": {
      "title": {
        "uz": "Meditsina",
        "ru": "Медицина",
        "en": "Medicine"
      },
      "slug": "medicine"
    }
  }
];
