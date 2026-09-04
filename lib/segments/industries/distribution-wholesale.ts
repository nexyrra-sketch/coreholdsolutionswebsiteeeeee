import type { Segment } from "../types";

const distribution: Segment = {
  kind: "industry",
  slug: "distribution-wholesale",
  label: { en: "Distribution & wholesale", ar: "التوزيع والبيع بالجملة" },
  summary: {
    en: "Van sales, high line counts and frequent returns mean the volume and the exceptions both have to be handled properly.",
    ar: "مبيعات المركبات، وعدد بنود مرتفع، وإرجاعات متكررة — ما يعني ضرورة معالجة الحجم والاستثناءات معًا بشكل سليم.",
  },
  content: {
    en: {
      h1: "UAE e-invoicing for distributors and wholesalers.",
      lede:
        "Distribution generates a lot of invoices with a lot of lines, and a steady stream of returns, claims and rebates against them. The mandate does not change how you sell — it changes what your system has to be able to say about every one of those documents, in a format that validates.",
      differentHeading: "Why this is harder than the generic case",
      different: [
        {
          title: "Van sales and field invoicing",
          body: "Where invoices are raised in the field on handheld devices or by a salesperson at the customer's premises, the question becomes how and when that data reaches a system that can transmit it correctly.",
        },
        {
          title: "Returns, claims and rebates are continuous",
          body: "Expired stock returns, damage claims, listing fees and volume rebates all generate credit documents. How each is represented has to be settled before go-live rather than improvised afterwards.",
        },
        {
          title: "Many lines per invoice",
          body: "An invoice carrying dozens of SKUs multiplies the chance that one line has a data problem — and one bad line can fail the whole document.",
        },
      ],
      environmentHeading: "The systems environment we usually find",
      environment: [
        {
          title: "A distribution or inventory system feeding accounting",
          body: "Stock, pricing and orders in one system; the ledger in another. Invoice data is assembled across the boundary.",
        },
        {
          title: "Item master data of real size",
          body: "Thousands of SKUs, some inactive, some duplicated, with descriptions and units that have drifted over time.",
        },
        {
          title: "Trade terms applied at or after billing",
          body: "Discounts, rebates and settlement terms that affect the final document and need consistent representation.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Item master data cleanup",
          body: "Not glamorous, and usually the single largest piece of preparatory work. Doing it before integration is significantly cheaper than discovering it during validation.",
        },
        {
          title: "Credit note structure",
          body: "Returns and claims need a defined, consistent structure that references the original document correctly.",
        },
        {
          title: "Field-to-system data flow",
          body: "If invoices originate outside the core system, the timing and reliability of that flow becomes part of the compliance question.",
        },
      ],
      approachHeading: "How we work on this",
      approach: [
        "Establish scope, entities and deadlines",
        "Assess where invoices actually originate, including field and handheld processes",
        "Audit item and customer master data against structured-invoicing requirements",
        "Define how returns, claims and rebates will be represented",
        "Select and coordinate an accredited provider suited to your volume",
        "Map, validate and test at representative volume including multi-line and credit cases",
        "Stay through the first full month-end after go-live",
      ],
      note:
        "Master data cleanup is work you own, with our guidance on what specifically needs to be correct. We will tell you the scale of it during assessment rather than after you have signed.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "الفوترة الإلكترونية في الإمارات للموزّعين وتجار الجملة.",
      lede:
        "يولّد التوزيع فواتير كثيرة ببنود كثيرة، وتدفقًا مستمرًا من الإرجاعات والمطالبات والحوافز مقابلها. اللائحة لا تغيّر طريقة بيعكم — بل تغيّر ما يجب أن يكون نظامكم قادرًا على قوله عن كل مستند من هذه، بصيغة تجتاز التحقق.",
      differentHeading: "لماذا هذه الفئة أصعب من الحالة العامة",
      different: [
        {
          title: "مبيعات المركبات والفوترة الميدانية",
          body: "حين تُصدر الفواتير ميدانيًا على أجهزة محمولة أو من مندوب في مقر العميل، يصبح السؤال كيف ومتى تصل تلك البيانات إلى نظام قادر على إرسالها بشكل صحيح.",
        },
        {
          title: "الإرجاعات والمطالبات والحوافز مستمرة",
          body: "إرجاع البضاعة منتهية الصلاحية، ومطالبات التلف، ورسوم الإدراج، وحوافز الحجم، كلها تولّد مستندات دائنة. ويجب حسم تمثيل كل منها قبل الإطلاق لا ارتجاله بعده.",
        },
        {
          title: "بنود كثيرة في الفاتورة الواحدة",
          body: "الفاتورة التي تحمل عشرات الأصناف تضاعف احتمال وجود مشكلة بيانات في بند واحد — وبند واحد سيئ قد يُفشل المستند كله.",
        },
      ],
      environmentHeading: "بيئة الأنظمة التي نجدها عادةً",
      environment: [
        {
          title: "نظام توزيع أو مخزون يغذّي المحاسبة",
          body: "المخزون والتسعير والطلبات في نظام؛ والدفتر في آخر. وتُجمَّع بيانات الفاتورة عبر الحد الفاصل بينهما.",
        },
        {
          title: "بيانات أصناف بحجم حقيقي",
          body: "آلاف الأصناف، بعضها غير نشط، وبعضها مكرر، بأوصاف ووحدات تغيّرت بمرور الوقت.",
        },
        {
          title: "شروط تجارية تُطبَّق عند الفوترة أو بعدها",
          body: "خصومات وحوافز وشروط سداد تؤثر على المستند النهائي وتحتاج تمثيلًا متسقًا.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "تنظيف بيانات الأصناف",
          body: "عمل غير براق، وهو عادةً أكبر قطعة تحضيرية منفردة. وإنجازه قبل التكامل أرخص كثيرًا من اكتشافه أثناء التحقق.",
        },
        {
          title: "هيكل إشعارات الدائن",
          body: "الإرجاعات والمطالبات تحتاج هيكلًا محددًا ومتسقًا يشير إلى المستند الأصلي بشكل صحيح.",
        },
        {
          title: "تدفق البيانات من الميدان إلى النظام",
          body: "إذا نشأت الفواتير خارج النظام الأساسي، يصبح توقيت ذلك التدفق وموثوقيته جزءًا من مسألة الامتثال.",
        },
      ],
      approachHeading: "كيف نعمل على هذا",
      approach: [
        "تحديد النطاق والكيانات والمواعيد",
        "تقييم المكان الذي تنشأ فيه الفواتير فعليًا، بما في ذلك العمليات الميدانية والمحمولة",
        "تدقيق بيانات الأصناف والعملاء مقابل متطلبات الفوترة الهيكلية",
        "تحديد كيفية تمثيل الإرجاعات والمطالبات والحوافز",
        "اختيار مزوّد معتمد يناسب حجمكم والتنسيق معه",
        "التحويل والتحقق والاختبار بحجم تمثيلي يشمل حالات البنود المتعددة والإشعارات الدائنة",
        "البقاء خلال أول إقفال شهر كامل بعد الإطلاق",
      ],
      note:
        "تنظيف البيانات الأساسية عمل تملكونه أنتم، بتوجيه منّا لما يجب أن يكون صحيحًا تحديدًا. وسنخبركم بحجمه أثناء التقييم لا بعد التوقيع.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default distribution;
