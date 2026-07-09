// ============================================================
// UBAR STONE — TRANSLATIONS
// Language: English (en) | Arabic (ar)
// ============================================================

export type Language = "en" | "ar";

const translations = {
  en: {
    // ─── NAVBAR ──────────────────────────────────────────────
    navbar: {
      about: "About Us",
      products: "Our Products",
      industrial: "Industrial",
      contact: "Contact Us",
      catalog: "Catalog",
      toggleAr: "AR",
      toggleEn: "EN",
      home: "Home",
      homeSub: "Back to surface",
      brandNarrative: "Brand Narrative",
      brandNarrativeSub: "Our history & ethos",
      collection: "The Collection",
      collectionSub: "Fanar, Morooj, Reedan",
      industrialCore: "Industrial Core",
      industrialCoreSub: "Quicklime & Limestone",
      globalHQ: "Global HQ",
      hqAddress: "Rusayl Industrial Estate\nMuscat, Oman",
      hqEmail: "info@gmmc.om",
      catalogCard: "Industrial Catalog 2026",
      catalogCardSub: "Technical specifications for Quicklime and Limestone variations.",
      downloadPDF: "Download PDF (1MB)",
    },

    // ─── HERO ────────────────────────────────────────────────
    hero: {
      badge: "150 MILLION YEAR LEGACY",
      headlinePre: "Premium",
      headlineMain: "OMANI MARBLE & STONE",
      headlineSub: "Architectural Solutions",
      description: "Every great project starts with an idea. We shape luxury homes and landmarks, offering not just stone but a story etched with timeless secrets.",
      downloadCatalogue: "Download Catalogue",
      exploreGallery: "Explore Gallery",
      shipping: "Global Shipping: Active",
      iso: "ISO 9001:2015",
      country: "Sultanate of Oman",
    },

    // ─── ABOUT / UBAR STONE LEGACY ───────────────────────────
    about: {
      tag: "About Ubar Stone: A Piece of History",
      headlineA: "We Don't Just",
      headlineB: "Offer Stone.",
      bodyA: "At Ubar Stone, we offer you the chance to own a piece of history, etched with its markings and timeless secrets. Every story begins with a step, and every great project starts with an idea.",
      bodyB: "We are here to understand your vision and convert it into reality with the elegance and sophistication it truly deserves.",
      promiseLabel: "The Promise",
      promiseQuote: "\"A silent impact, with a presence that never fades.\"",
      discoverCta: "Discover our Legacy",
      estBadge: "Est. 2018 — Salalah",
    },

    // ─── COMPANY PROFILE ─────────────────────────────────────
    company: {
      badge: "Est. 2018 — Salalah",
      headlineA: "Pioneering the",
      headlineHighlight: "Stone Industry",
      headlineB: "in the Sultanate.",
      description: "Global Marble Manufacturing Co. (GMMC) is a 100% Omani-owned subsidiary of Global Mining Co. L.L.C. Driven by state-of-the-art grinding technology, we lead a qualitative leap in the region's industrial sector.",
      pillar1Title: "ISO Certified",
      pillar1Text: "International Manufacturing Standards",
      pillar2Title: "National Leader",
      pillar2Text: "First & Only Manufacturer in Oman",
      pillar3Title: "Global Reach",
      pillar3Text: "Exporting to MEA & India",
    },

    // ─── MARBLE COLLECTION ───────────────────────────────────
    collection: {
      sectionTag: "The Natural Marble Collection",
      headline: "\"When stone speaks. We don't shape marble,",
      headlineItalic: "we reveal its beauty.\"",
      subheading: "Discover three unique Omani marbles, each with its own color, rhythm, and timeless story.",
      rawMaterial: "Raw Material",
      specSheet: "Specification Sheet",
      skuCode: "SKU Code",
      surfaceFinishes: "Surface Finishes",
      thickness: "Thickness",
      primaryUse: "Primary Use",
      more: "more",
      requestSample: "Request Sample",
      stones: [
        {
          id: "fanar",
          name: "Fanar",
          sub: "Dark Beige",
          description: "Dark beige with soft natural veining. A classic choice for warm interiors.",
          finishes: ["Polished", "Honed", "Sandblasted", "Bush Hammered"],
          applications: ["Floors", "Walls", "Stairs", "Interior Cladding", "Washbasins", "Kitchens"],
          code: "UB-FN-01",
          thickness: "2 cm – 3 cm",
        },
        {
          id: "morooj",
          name: "Morooj",
          sub: "Dark Pink",
          description: "Deep Pink stone offering bespoke luxury. Rare and geometrically complex.",
          finishes: ["Polished", "Honed", "Sandblasted", "Bush Hammered"],
          applications: ["Floors", "Walls", "Columns", "Luxury Halls", "Decor Elements"],
          code: "UB-MJ-02",
          thickness: "2 cm – 3 cm",
        },
        {
          id: "reedan",
          name: "Reedan",
          sub: "Light Beige",
          description: "Light Beige-Grey elegance. Minimalist tone for modern spaces.",
          finishes: ["Polished", "Honed", "Sandblasted", "Bush Hammered"],
          applications: ["Floors", "Walls", "Stairs", "Washbasins"],
          code: "UB-RD-03",
          thickness: "2 cm – 3 cm",
        },
      ],
    },

    // ─── INDUSTRIAL SOLUTIONS ─────────────────────────────────
    industrial: {
      badge: "Mat.Eng-Sys",
      headlineA: "Industry starts",
      headlineB: "at the molecule.",
      description: "Extracting potential from the earth. Precision-processed minerals forming the bedrock of modern manufacturing.",
      exploreSpecs: "Explore Specs",
      products: [
        {
          id: "01",
          name: "Quicklime",
          chemical: "CaO",
          sub: "Calcium Oxide",
          desc: "High-purity calcination for metallurgy and chemical synthesis. Essential for modern industrial applications.",
          stats: [
            { label: "Color", value: "Bright White" },
            { label: "Finishes", value: "Powder / Granules" },
            { label: "Composition", value: "CaO >90%" },
            { label: "Sizes", value: "5 – 100 Microns" },
          ],
          tags: ["Construction", "Iron & Steel", "Water Treatment", "Chemical"],
          image: "https://images.squarespace-cdn.com/content/v1/6422484f3673e900810e7e47/bcbcf7bd-97a1-43ab-80c1-276f86fe4ee9/Renaissance+Lime+Putty+image.jpg",
        },
        {
          id: "02",
          name: "Limestone",
          chemical: "CaCO₃",
          sub: "Calcium Carbonate",
          desc: "Micronized mineral fillers for construction and agriculture. Extracted from high-grade sedimentary deposits.",
          stats: [
            { label: "Color", value: "White / Beige" },
            { label: "Finishes", value: "Crushed / Micronized" },
            { label: "Composition", value: "CaCO₃ >98%" },
            { label: "Sizes", value: "0 – 5 mm" },
          ],
          tags: ["Construction", "Agriculture", "Plastics", "Glass Mfg"],
          image: "https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2018/09/Natural_Limestone.jpg",
        },
      ],
    },

    // ─── PROJECT PORTFOLIO ────────────────────────────────────
    portfolio: {
      sectionTag: "Project Portfolio",
      headlineA: "Timeless Elegance",
      headlineB: "Shaping Landmarks.",
      scrollHint: "SCROLL TO EXPLORE",
      viewArchive: "View Full Archive",
      projects: [
        {
          id: 1,
          title: "Salalah Grand Mall",
          location: "Salalah, Oman",
          category: "Retail Destination",
          description: "A major retail destination defining the skyline.",
          stats: "100,000+",
          statsSub: "sqm Stone",
        },
        {
          id: 2,
          title: "Galleria Mall",
          location: "Muscat, Oman",
          category: "Commercial Design",
          description: "Showcasing modern commercial design with intricate detailing.",
          stats: "Bespoke Cladding",
          statsSub: "",
        },
        {
          id: 3,
          title: "Al Wathba Complex",
          location: "Abu Dhabi, UAE",
          category: "Residential",
          description: "350 villas featuring our stone, creating a unified community aesthetic.",
          stats: "350",
          statsSub: "Villas",
        },
        {
          id: 4,
          title: "Plaza Resort",
          location: "Salalah, Oman",
          category: "Hospitality",
          description: "Luxury hospitality integration where nature meets architecture.",
          stats: "5-Star Finish",
          statsSub: "",
        },
      ],
    },

    // ─── NEWS GRID ───────────────────────────────────────────
    news: {
      sectionTag: "The Ledger",
      headline: "News, Insights &",
      headlineItalic: "Exclusive Offers.",
      viewAll: "View Full Archive",
      viewAllMobile: "View All Posts",
      items: [
        { id: 1, type: "news", category: "Expansion", date: "OCT 12, 2025", title: "Ubar Stone Opens New Export Hub in Duqm.", image: "/ain.png" },
        { id: 2, type: "ad", category: "Limited Offer", title: "Architectural Partners: Get 15% Off Bulk Limestone Orders.", cta: "Apply Now", bgColor: "#f1c83d", textColor: "text-gray-900" },
        { id: 3, type: "news", category: "Sustainability", date: "SEP 28, 2025", title: "Achieving Net-Zero: Our New Calcination Process.", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2670&auto=format&fit=crop" },
        { id: 4, type: "news", category: "Exhibition", date: "SEP 15, 2025", title: "Visit us at The Big 5 Construction Week, Dubai.", image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2680&auto=format&fit=crop" },
        { id: 5, type: "ad", category: "New Arrival", title: "The \"Desert Rose\" Collection is finally here.", cta: "View Catalog", bgColor: "#6a6931", textColor: "text-white" },
        { id: 6, type: "news", category: "Project", date: "AUG 10, 2025", title: "Supplying the Royal Opera House Renovation.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" },
      ],
    },

    // ─── INSIGHT / VIDEO SECTION ─────────────────────────────
    insight: {
      badge: "Live Operations",
      headlineA: "Inside the",
      headlineB: "Core.",
      description: "Witness the fusion of raw nature and advanced robotics in our state-of-the-art facility in Raysut.",
      closeFeed: "Close Feed",
    },

    // ─── MANUFACTURING PROCESS ────────────────────────────────
    manufacturing: {
      badge: "Process Map",
      headline: "The Blueprint",
      description: "Trace the journey from raw Omani earth to precision-engineered surface.",
      initiateSequence: "INITIATE SEQUENCE",
      phase: "Phase",
      steps: [
        { id: "01", title: "Crushing & Sieving", desc: "Marble boulders are pulverized into precise granulometric sizes.", tech_note: "INPUT: RAW BOULDERS" },
        { id: "02", title: "Vibro-Compression", desc: "Granules are mixed with resin and compacted under vacuum.", tech_note: "PRESSURE: 100 BAR" },
        { id: "03", title: "Block Curing", desc: "Controlled curing cycle to maximize structural integrity.", tech_note: "TIME: 72 HOURS" },
        { id: "04", title: "Slab Sawing", desc: "Cured blocks are sliced into rough slabs using heavy-duty saws.", tech_note: "THICKNESS: <1MM VAR" },
        { id: "05", title: "Digital Calibration", desc: "Automated machines ensure exact thickness uniformity.", tech_note: "TOLERANCE: ISO STD" },
        { id: "06", title: "Polishing", desc: "Multi-head polishers apply progressive abrasion for mirror finish.", tech_note: "FINISH: GLOSS >90" },
        { id: "07", title: "Laser Sizing", desc: "Slabs are cut to architectural dimensions with millimeter precision.", tech_note: "LASER GUIDED" },
        { id: "08", title: "Global Dispatch", desc: "Quality checks, protective packing, and palletizing for export.", tech_note: "EXPORT READY" },
      ],
    },

    // ─── MARBLE STACK EXPERIENCE ─────────────────────────────
    marbleStack: {
      stoneLibrary: "Stone Library",
      selectMaterial: "Select Material",
      density: "Density",
      finish: "Finish",
      downloadCatalog: "Download Catalog",
    },

    // ─── FOOTER ──────────────────────────────────────────────
    footer: {
      brandName: "GLOBAL MARBLE",
      tagline: "Engineering nature's finest materials into timeless architectural masterpieces. Based in the Sultanate, serving the world.",
      hqLabel: "Factory HQ",
      hqValue: "P.O. Box: 2 Salalah 210 Sultanate of Oman",
      inquiriesLabel: "Inquiries",
      officeLabel: "Office",
      initiateProject: "Initiate Project",
      startConversation: "Start the Conversation",
      firstName: "First Name",
      firstNamePlaceholder: "John",
      lastName: "Last Name",
      lastNamePlaceholder: "Doe",
      email: "Email Address",
      emailPlaceholder: "john@company.com",
      projectType: "Project Type",
      projectOptions: ["Commercial Construction", "Residential Design", "Industrial Material Supply", "Other"],
      message: "Message",
      messagePlaceholder: "Tell us about your requirements...",
      sendInquiry: "Send Inquiry",
      sitemapLabel: "Sitemap",
      sitemapLinks: ["Our Company", "Products", "Projects", "Sustainability", "Careers", "News"],
      downloadsLabel: "Downloads",
      productCatalog: "Product Catalog",
      pdfSize: "PDF • 1 MB",
      copyright: "Global Marble Co.",
      privacy: "Privacy",
      terms: "Terms",
      sitemap: "Sitemap",
    },
  },

  // ═══════════════════════════════════════════════════════════
  // ARABIC
  // ═══════════════════════════════════════════════════════════
  ar: {
    // ─── NAVBAR ──────────────────────────────────────────────
    navbar: {
      about: "عن الشركة",
      products: "منتجاتنا",
      industrial: "الصناعة",
      contact: "تواصل معنا",
      catalog: "الكتالوج",
      toggleAr: "AR",
      toggleEn: "EN",
      home: "الرئيسية",
      homeSub: "العودة للأعلى",
      brandNarrative: "قصة العلامة",
      brandNarrativeSub: "تاريخنا وقيمنا",
      collection: "المجموعة",
      collectionSub: "فنار، مروج، ريدان",
      industrialCore: "الصناعة",
      industrialCoreSub: "الجير الحي والحجر الجيري",
      globalHQ: "المقر الرئيسي",
      hqAddress: "المنطقة الصناعية بالرسيل\nمسقط، سلطنة عُمان",
      hqEmail: "info@gmmc.om",
      catalogCard: "الكتالوج الصناعي 2026",
      catalogCardSub: "المواصفات التقنية لأنواع الجير الحي والحجر الجيري",
      downloadPDF: "تحميل PDF (1MB)",
    },

    // ─── HERO ────────────────────────────────────────────────
    hero: {
      badge: "إرث ١٥٠ مليون سنة",
      headlinePre: "فاخر",
      headlineMain: "رخام وحجر عُماني",
      headlineSub: "حلول معمارية",
      description: "كل مشروع عظيم يبدأ بفكرة. نحن نشكّل المنازل الفاخرة والمعالم البارزة، نقدم ليس فقط الحجر بل قصة منقوشة بأسرار خالدة.",
      downloadCatalogue: "تحميل الكتالوج",
      exploreGallery: "استعرض المعرض",
      shipping: "الشحن العالمي: نشط",
      iso: "ISO 9001:2015",
      country: "سلطنة عُمان",
    },

    // ─── ABOUT / UBAR STONE LEGACY ───────────────────────────
    about: {
      tag: "عن أوبار ستون: قطعة من التاريخ",
      headlineA: "نحن لا نقدم",
      headlineB: "الحجر فحسب.",
      bodyA: "في أوبار ستون، نمنحك فرصة امتلاك قطعة من التاريخ، منقوشة بعلاماته وأسراره الخالدة. كل قصة تبدأ بخطوة، وكل مشروع عظيم يبدأ بفكرة.",
      bodyB: "نحن هنا لفهم رؤيتك وتحويلها إلى واقع بالأناقة والرقي اللذين تستحقهما.",
      promiseLabel: "الوعد",
      promiseQuote: "\"تأثير صامت، بحضور لا يتلاشى أبداً.\"",
      discoverCta: "اكتشف إرثنا",
      estBadge: "تأسست ٢٠١٨ — صلالة",
    },

    // ─── COMPANY PROFILE ─────────────────────────────────────
    company: {
      badge: "تأسست ٢٠١٨ — صلالة",
      headlineA: "الريادة في",
      headlineHighlight: "صناعة الحجر",
      headlineB: "في السلطنة.",
      description: "شركة جلوبال ماربل للتصنيع (GMMC) شركة مملوكة ١٠٠٪ لمواطنين عُمانيين، تابعة لشركة جلوبال مايننج. بفضل تقنيات الطحن المتطورة، نقود نقلة نوعية في القطاع الصناعي بالمنطقة.",
      pillar1Title: "معتمدة ISO",
      pillar1Text: "معايير التصنيع الدولية",
      pillar2Title: "قائد وطني",
      pillar2Text: "أول وحيد مصنّع في عُمان",
      pillar3Title: "انتشار عالمي",
      pillar3Text: "تصدير إلى الشرق الأوسط وأفريقيا والهند",
    },

    // ─── MARBLE COLLECTION ───────────────────────────────────
    collection: {
      sectionTag: "مجموعة الرخام الطبيعي",
      headline: "\"حين يتكلم الحجر. نحن لا نشكّل الرخام،",
      headlineItalic: "بل نكشف جماله.\"",
      subheading: "اكتشف ثلاثة أنواع فريدة من الرخام العُماني، لكل منها لونه وإيقاعه وقصته الخالدة.",
      rawMaterial: "المادة الخام",
      specSheet: "ورقة المواصفات",
      skuCode: "رمز المنتج",
      surfaceFinishes: "أسطح التشطيب",
      thickness: "السُّمك",
      primaryUse: "الاستخدام الرئيسي",
      more: "المزيد",
      requestSample: "طلب عينة",
      stones: [
        {
          id: "fanar",
          name: "فنار",
          sub: "بيج داكن",
          description: "بيج داكن بتعريق طبيعي ناعم. اختيار كلاسيكي للديكورات الداخلية الدافئة.",
          finishes: ["مصقول", "مشطوف", "منفوخ رملياً", "مطروق"],
          applications: ["أرضيات", "جدران", "درج", "كسوة داخلية", "أحواض غسيل", "مطابخ"],
          code: "UB-FN-01",
          thickness: "٢ سم – ٣ سم",
        },
        {
          id: "morooj",
          name: "مروج",
          sub: "وردي داكن",
          description: "حجر وردي داكن يوفر فخامة مخصصة. نادر ومعقد هندسياً.",
          finishes: ["مصقول", "مشطوف", "منفوخ رملياً", "مطروق"],
          applications: ["أرضيات", "جدران", "أعمدة", "صالات فاخرة", "عناصر ديكور"],
          code: "UB-MJ-02",
          thickness: "٢ سم – ٣ سم",
        },
        {
          id: "reedan",
          name: "ريدان",
          sub: "بيج فاتح",
          description: "أناقة بيج فاتح رمادي. نبرة بسيطة للمساحات العصرية.",
          finishes: ["مصقول", "مشطوف", "منفوخ رملياً", "مطروق"],
          applications: ["أرضيات", "جدران", "درج", "أحواض غسيل"],
          code: "UB-RD-03",
          thickness: "٢ سم – ٣ سم",
        },
      ],
    },

    // ─── INDUSTRIAL SOLUTIONS ─────────────────────────────────
    industrial: {
      badge: "أنظمة هندسة المواد",
      headlineA: "الصناعة تبدأ",
      headlineB: "عند الجزيء.",
      description: "استخلاص الإمكانات من باطن الأرض. معادن مُعالجة بدقة تشكّل الأساس الراسخ للتصنيع الحديث.",
      exploreSpecs: "استعرض المواصفات",
      products: [
        {
          id: "01",
          name: "الجير الحي",
          chemical: "CaO",
          sub: "أكسيد الكالسيوم",
          desc: "تكليس عالي النقاء لعمليات علم المعادن والتوليف الكيميائي. أساسي للتطبيقات الصناعية الحديثة.",
          stats: [
            { label: "اللون", value: "أبيض ناصع" },
            { label: "التشطيبات", value: "مسحوق / حبيبات" },
            { label: "التركيب", value: "CaO >90%" },
            { label: "الأحجام", value: "٥ – ١٠٠ ميكرون" },
          ],
          tags: ["البناء", "الحديد والصلب", "معالجة المياه", "الكيمياء"],
          image: "https://images.squarespace-cdn.com/content/v1/6422484f3673e900810e7e47/bcbcf7bd-97a1-43ab-80c1-276f86fe4ee9/Renaissance+Lime+Putty+image.jpg",
        },
        {
          id: "02",
          name: "الحجر الجيري",
          chemical: "CaCO₃",
          sub: "كربونات الكالسيوم",
          desc: "حشوات معدنية مجهرية للبناء والزراعة. مستخرجة من رواسب رسوبية عالية الجودة.",
          stats: [
            { label: "اللون", value: "أبيض / بيج" },
            { label: "التشطيبات", value: "مطحون / مجهري" },
            { label: "التركيب", value: "CaCO₃ >98%" },
            { label: "الأحجام", value: "٠ – ٥ ملم" },
          ],
          tags: ["البناء", "الزراعة", "البلاستيك", "تصنيع الزجاج"],
          image: "https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2018/09/Natural_Limestone.jpg",
        },
      ],
    },

    // ─── PROJECT PORTFOLIO ────────────────────────────────────
    portfolio: {
      sectionTag: "محفظة المشاريع",
      headlineA: "أناقة خالدة",
      headlineB: "تشكيل المعالم.",
      scrollHint: "انتقل للاستكشاف",
      viewArchive: "عرض الأرشيف الكامل",
      projects: [
        {
          id: 1,
          title: "مول صلالة الكبير",
          location: "صلالة، عُمان",
          category: "وجهة تجارية",
          description: "وجهة تجارية كبرى تُحدد معالم الأفق.",
          stats: "+١٠٠,٠٠٠",
          statsSub: "م² حجر",
        },
        {
          id: 2,
          title: "جاليريا مول",
          location: "مسقط، عُمان",
          category: "تصميم تجاري",
          description: "يُجسّد التصميم التجاري الحديث بتفاصيل دقيقة ومعقدة.",
          stats: "كسوة مخصصة",
          statsSub: "",
        },
        {
          id: 3,
          title: "مجمع الوثبة",
          location: "أبوظبي، الإمارات",
          category: "سكني",
          description: "٣٥٠ فيلا تتميز بأحجارنا، مما يخلق جمالية مجتمعية موحدة.",
          stats: "٣٥٠",
          statsSub: "فيلا",
        },
        {
          id: 4,
          title: "بلازا ريزورت",
          location: "صلالة، عُمان",
          category: "ضيافة فاخرة",
          description: "دمج فاخر بين الطبيعة والعمارة في بيئة الضيافة.",
          stats: "تشطيب ٥ نجوم",
          statsSub: "",
        },
      ],
    },

    // ─── NEWS GRID ───────────────────────────────────────────
    news: {
      sectionTag: "السجل",
      headline: "أخبار، رؤى",
      headlineItalic: "وعروض حصرية.",
      viewAll: "عرض الأرشيف الكامل",
      viewAllMobile: "عرض جميع المقالات",
      items: [
        { id: 1, type: "news", category: "توسع", date: "أكت ١٢، ٢٠٢٥", title: "أوبار ستون تفتتح مركزاً جديداً للتصدير في الدقم.", image: "/ain.png" },
        { id: 2, type: "ad", category: "عرض محدود", title: "شركاء المعماريين: احصل على خصم ١٥٪ على طلبات الحجر الجيري بالجملة.", cta: "تقدم الآن", bgColor: "#f1c83d", textColor: "text-gray-900" },
        { id: 3, type: "news", category: "استدامة", date: "سبت ٢٨، ٢٠٢٥", title: "نحو الحياد الكربوني: عملية التكليس الجديدة لدينا.", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2670&auto=format&fit=crop" },
        { id: 4, type: "news", category: "معرض", date: "سبت ١٥، ٢٠٢٥", title: "زورونا في أسبوع البناء Big 5، دبي.", image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2680&auto=format&fit=crop" },
        { id: 5, type: "ad", category: "وصول جديد", title: "مجموعة «وردة الصحراء» هنا أخيراً.", cta: "عرض الكتالوج", bgColor: "#6a6931", textColor: "text-white" },
        { id: 6, type: "news", category: "مشروع", date: "أغس ١٠، ٢٠٢٥", title: "توريد أحجار تجديد دار الأوبرا الملكية.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" },
      ],
    },

    // ─── INSIGHT / VIDEO SECTION ─────────────────────────────
    insight: {
      badge: "العمليات المباشرة",
      headlineA: "داخل",
      headlineB: "القلب.",
      description: "اشهد مزيج الطبيعة الخام والروبوتيات المتقدمة في منشأتنا الحديثة في الريسوت.",
      closeFeed: "إغلاق",
    },

    // ─── MANUFACTURING PROCESS ────────────────────────────────
    manufacturing: {
      badge: "خريطة العملية",
      headline: "المخطط",
      description: "تتبع الرحلة من التربة العُمانية الخام إلى الأسطح الهندسية الدقيقة.",
      initiateSequence: "ابدأ التسلسل",
      phase: "المرحلة",
      steps: [
        { id: "01", title: "الطحن والغربلة", desc: "تُطحن كتل الرخام إلى أحجام حبيبية دقيقة.", tech_note: "الإدخال: كتل خام" },
        { id: "02", title: "الضغط الاهتزازي", desc: "تُخلط الحبيبات مع الراتنج وتُدمج تحت تفريغ الهواء.", tech_note: "الضغط: ١٠٠ بار" },
        { id: "03", title: "معالجة الكتل", desc: "دورة معالجة متحكمة لتعظيم السلامة الهيكلية.", tech_note: "المدة: ٧٢ ساعة" },
        { id: "04", title: "قطع الألواح", desc: "تُشرّح الكتل المعالجة إلى ألواح خام باستخدام مناشير ثقيلة.", tech_note: "السُّمك: <١ملم تفاوت" },
        { id: "05", title: "المعايرة الرقمية", desc: "آلات أوتوماتيكية تضمن تجانس السُّمك بدقة.", tech_note: "التفاوت: معيار ISO" },
        { id: "06", title: "التلميع", desc: "مُلمّعات متعددة الرؤوس تطبق تقطيعاً تدريجياً لإنهاء مرآوي.", tech_note: "البريق: >٩٠" },
        { id: "07", title: "القطع بالليزر", desc: "تُقطع الألواح بأبعاد معمارية بدقة ميليمترية.", tech_note: "موجّه بالليزر" },
        { id: "08", title: "الشحن العالمي", desc: "فحوصات جودة، تعبئة واقية، وتحزيم للتصدير.", tech_note: "جاهز للتصدير" },
      ],
    },

    // ─── MARBLE STACK EXPERIENCE ─────────────────────────────
    marbleStack: {
      stoneLibrary: "مكتبة الأحجار",
      selectMaterial: "اختر المادة",
      density: "الكثافة",
      finish: "التشطيب",
      downloadCatalog: "تحميل الكتالوج",
    },

    // ─── FOOTER ──────────────────────────────────────────────
    footer: {
      brandName: "جلوبال ماربل",
      tagline: "هندسة أرقى مواد الطبيعة في تحف معمارية خالدة. مقرنا في السلطنة، نخدم العالم.",
      hqLabel: "المقر الرئيسي",
      hqValue: "ص.ب: ٢ صلالة ٢١٠ سلطنة عُمان",
      inquiriesLabel: "الاستفسارات",
      officeLabel: "المكتب",
      initiateProject: "ابدأ مشروعك",
      startConversation: "ابدأ المحادثة",
      firstName: "الاسم الأول",
      firstNamePlaceholder: "محمد",
      lastName: "اسم العائلة",
      lastNamePlaceholder: "العلوي",
      email: "البريد الإلكتروني",
      emailPlaceholder: "mohammed@company.com",
      projectType: "نوع المشروع",
      projectOptions: ["البناء التجاري", "التصميم السكني", "توريد المواد الصناعية", "أخرى"],
      message: "الرسالة",
      messagePlaceholder: "أخبرنا عن متطلباتك...",
      sendInquiry: "إرسال الاستفسار",
      sitemapLabel: "خريطة الموقع",
      sitemapLinks: ["شركتنا", "المنتجات", "المشاريع", "الاستدامة", "الوظائف", "الأخبار"],
      downloadsLabel: "التنزيلات",
      productCatalog: "كتالوج المنتجات",
      pdfSize: "PDF • ١ ميغابايت",
      copyright: "جلوبال ماربل",
      privacy: "الخصوصية",
      terms: "الشروط",
      sitemap: "خريطة الموقع",
    },
  },
};

export default translations;
