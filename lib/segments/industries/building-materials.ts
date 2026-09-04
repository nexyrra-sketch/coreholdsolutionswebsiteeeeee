import type { Segment } from "../types";

const buildingMaterials: Segment = {
  kind: "industry",
  slug: "building-materials",
  label: { en: "Building materials", ar: "مواد البناء" },
  summary: {
    en: "Long credit terms, delivery-note-driven billing and heavy project invoicing make this one of the harder categories to map cleanly.",
    ar: "شروط ائتمان طويلة، وفوترة مبنية على إشعارات التسليم، وفوترة مشاريع كثيفة — ما يجعل هذه الفئة من أصعب الفئات في التحويل السليم.",
  },
  content: {
    en: {
      h1: "UAE e-invoicing for building materials suppliers.",
      lede:
        "Building materials is one of the categories where the mandate meets an invoicing process that was never designed to be machine-readable. Deliveries happen before paperwork, quantities get adjusted on site, and a single project can generate months of partial billing against one order. None of that is a problem in itself — but all of it has to be expressed in structured data that validates on the first attempt.",
      differentHeading: "Why this is harder than the generic case",
      different: [
        {
          title: "Delivery notes drive the invoice, not the other way round",
          body: "Material goes out against a delivery note, quantities are confirmed at the gate, and the invoice is raised afterwards against what was actually received. The invoice therefore inherits data from a document that often lives outside the accounting system entirely.",
        },
        {
          title: "Quantities change after the order",
          body: "Short deliveries, site rejections, returns of damaged stock and part-loads are routine. Credit notes and adjustments are not an exception path here — they are a normal weekly occurrence, and each one is a structured document with its own requirements.",
        },
        {
          title: "Project billing runs for months against one agreement",
          body: "Progressive billing against a supply agreement means many invoices referencing one commercial arrangement, often with retention and staged release. The reference data linking them has to be consistent across every document.",
        },
        {
          title: "Unit of measure is not cosmetic",
          body: "Tonnes, cubic metres, pieces, bundles, linear metres — sometimes more than one on the same invoice line's history. Structured invoicing requires these to be expressed consistently, and legacy records frequently are not.",
        },
      ],
      environmentHeading: "The systems environment we usually find",
      environment: [
        {
          title: "An accounting system plus a separate operational layer",
          body: "Typically an accounting package handling the ledger, with deliveries, stock and site paperwork tracked in a separate system or in spreadsheets. The invoice data is assembled across both.",
        },
        {
          title: "Customer master data that has drifted",
          body: "The same contractor appearing under several names, sites recorded as separate customers, and tax registration numbers held inconsistently or not at all. This surfaces immediately during validation.",
        },
        {
          title: "Pricing held outside the system",
          body: "Rate agreements, project-specific pricing and discount structures often live in correspondence rather than in the system that raises the invoice.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Missing or unverified customer tax registration numbers",
          body: "Structured B2B invoices require the buyer's details to be present and correct. Supplier ledgers built over years rarely have them complete, and cleaning that is groundwork, not a technical task.",
        },
        {
          title: "Credit note and adjustment handling",
          body: "Because adjustments are frequent here, the way they are raised and referenced needs to be settled early rather than discovered during the first month-end after go-live.",
        },
        {
          title: "The gap between delivery and billing systems",
          body: "If the operational system is where the truth lives and the accounting system is where the invoice is raised, the mapping has to account for that split explicitly.",
        },
      ],
      approachHeading: "How we work on this",
      approach: [
        "Assess how invoices are actually assembled today, including the documents that live outside the accounting system",
        "Establish which entities and revenue tier apply, and the dates that follow",
        "Audit customer master data for the fields structured invoicing will require, before integration rather than during testing",
        "Define how credit notes, adjustments and progressive billing will be represented",
        "Select and coordinate with an accredited provider suited to this volume and document mix",
        "Map, validate and test against real invoice cases, including the returns and adjustments",
        "Stay through the first full month-end after go-live",
      ],
      note:
        "This describes the pattern we see in this category, not a claim about any specific business. Your environment is established during assessment, not assumed from your industry.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "الفوترة الإلكترونية في الإمارات لموردي مواد البناء.",
      lede:
        "مواد البناء من الفئات التي تلتقي فيها اللائحة بعملية فوترة لم تُصمَّم أصلًا لتكون مقروءة آليًا. فالتسليم يسبق الأوراق، والكميات تُعدَّل في الموقع، والمشروع الواحد قد يولّد أشهرًا من الفوترة الجزئية مقابل أمر واحد. لا شيء من ذلك مشكلة بحد ذاته — لكن لا بد من التعبير عنه كله ببيانات هيكلية تجتاز التحقق من المحاولة الأولى.",
      differentHeading: "لماذا هذه الفئة أصعب من الحالة العامة",
      different: [
        {
          title: "إشعار التسليم هو ما يقود الفاتورة، لا العكس",
          body: "تخرج المواد بموجب إشعار تسليم، وتُعتمد الكميات عند البوابة، ثم تُصدر الفاتورة لاحقًا بحسب ما استُلم فعلًا. وبذلك ترث الفاتورة بياناتها من مستند يوجد غالبًا خارج النظام المحاسبي تمامًا.",
        },
        {
          title: "الكميات تتغيّر بعد الأمر",
          body: "النقص في التسليم، والرفض في الموقع، وإرجاع البضاعة التالفة، والحمولات الجزئية أمور اعتيادية. وإشعارات الدائن والتسويات ليست مسارًا استثنائيًا هنا — بل حدث أسبوعي طبيعي، وكل منها مستند هيكلي له متطلباته.",
        },
        {
          title: "فوترة المشاريع تمتد شهورًا مقابل اتفاقية واحدة",
          body: "الفوترة التدريجية مقابل اتفاقية توريد تعني فواتير كثيرة تشير إلى ترتيب تجاري واحد، غالبًا مع محتجزات وإفراج على مراحل. ويجب أن تكون البيانات المرجعية الرابطة بينها متسقة في كل مستند.",
        },
        {
          title: "وحدة القياس ليست تفصيلًا شكليًا",
          body: "أطنان، أمتار مكعبة، قطع، حزم، أمتار طولية — وأحيانًا أكثر من وحدة في تاريخ البند الواحد. تتطلب الفوترة الهيكلية التعبير عنها باتساق، والسجلات القديمة كثيرًا ما تفتقر إليه.",
        },
      ],
      environmentHeading: "بيئة الأنظمة التي نجدها عادةً",
      environment: [
        {
          title: "نظام محاسبي إلى جانب طبقة تشغيلية منفصلة",
          body: "عادةً برنامج محاسبي يدير الدفتر، مع تتبع التسليمات والمخزون وأوراق الموقع في نظام منفصل أو في جداول بيانات. وتُجمَّع بيانات الفاتورة من الاثنين معًا.",
        },
        {
          title: "بيانات عملاء تراكمت وتشتّتت",
          body: "المقاول نفسه يظهر بأسماء عدة، والمواقع مسجّلة كعملاء منفصلين، وأرقام التسجيل الضريبي محفوظة بشكل غير متسق أو غير موجودة. ويظهر هذا فورًا أثناء التحقق.",
        },
        {
          title: "التسعير محفوظ خارج النظام",
          body: "اتفاقيات الأسعار والتسعير الخاص بالمشاريع وهياكل الخصومات تعيش غالبًا في المراسلات لا في النظام الذي يصدر الفاتورة.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "أرقام تسجيل ضريبي ناقصة أو غير موثّقة للعملاء",
          body: "تتطلب الفواتير الهيكلية بين المنشآت وجود بيانات المشتري صحيحة. ودفاتر الموردين المبنية عبر سنوات نادرًا ما تكون مكتملة، وتنظيف ذلك عمل تأسيسي لا مهمة تقنية.",
        },
        {
          title: "التعامل مع إشعارات الدائن والتسويات",
          body: "لأن التسويات متكررة هنا، يجب حسم طريقة إصدارها والإشارة إليها مبكرًا بدلًا من اكتشافها في أول إقفال شهر بعد الإطلاق.",
        },
        {
          title: "الفجوة بين نظام التسليم ونظام الفوترة",
          body: "إذا كان النظام التشغيلي هو موضع الحقيقة والنظام المحاسبي هو موضع إصدار الفاتورة، فيجب أن يعالج التحويل هذا الانقسام صراحةً.",
        },
      ],
      approachHeading: "كيف نعمل على هذا",
      approach: [
        "تقييم كيفية تجميع الفواتير فعليًا اليوم، بما في ذلك المستندات الموجودة خارج النظام المحاسبي",
        "تحديد الكيانات وفئة الإيرادات المنطبقة، والمواعيد المترتبة عليها",
        "تدقيق بيانات العملاء بحثًا عن الحقول التي ستطلبها الفوترة الهيكلية، قبل التكامل لا أثناء الاختبار",
        "تحديد كيفية تمثيل إشعارات الدائن والتسويات والفوترة التدريجية",
        "اختيار مزوّد معتمد مناسب لهذا الحجم ومزيج المستندات والتنسيق معه",
        "التحويل والتحقق والاختبار على حالات فواتير واقعية، بما فيها الإرجاعات والتسويات",
        "البقاء خلال أول إقفال شهر كامل بعد الإطلاق",
      ],
      note:
        "يصف هذا النمط الذي نراه في هذه الفئة، لا ادعاءً بشأن منشأة بعينها. فبيئتكم تُحدَّد أثناء التقييم، لا تُفترض من قطاعكم.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default buildingMaterials;
