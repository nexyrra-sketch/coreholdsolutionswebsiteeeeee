import type { Segment } from "../types";

const manufacturing: Segment = {
  kind: "industry",
  slug: "manufacturing",
  label: { en: "Manufacturing", ar: "التصنيع" },
  summary: {
    en: "ERP-heavy environments where the invoice is the end of a long production and dispatch chain.",
    ar: "بيئات كثيفة الاعتماد على أنظمة تخطيط الموارد، حيث تأتي الفاتورة في نهاية سلسلة إنتاج وشحن طويلة.",
  },
  content: {
    en: {
      h1: "UAE e-invoicing for manufacturers.",
      lede:
        "In manufacturing the invoice is usually the last step in a chain that runs from production order through dispatch. That means the invoice data is largely determined upstream, and the compliance question becomes whether what the ERP produces at the end of that chain contains what the structured format requires.",
      differentHeading: "Why this is harder than the generic case",
      different: [
        {
          title: "The invoice inherits from upstream processes",
          body: "Production orders, dispatch documents and quality releases all shape what ends up on the invoice. Fixing an invoice data problem often means changing something several steps earlier.",
        },
        {
          title: "ERP customisation is the norm",
          body: "Manufacturing ERP instances are rarely stock. The integration question is never about the product name — it is about your specific configuration, custom fields and document types.",
        },
        {
          title: "Contract and scheduled deliveries",
          body: "Call-off orders and scheduling agreements produce many deliveries against one commercial arrangement, and the referencing between documents has to be consistent.",
        },
      ],
      environmentHeading: "The systems environment we usually find",
      environment: [
        {
          title: "A full ERP, often SAP or Oracle",
          body: "With production, inventory and finance in one system, and years of configuration decisions embedded in it.",
        },
        {
          title: "Multiple plants or entities",
          body: "Where each may have its own tax registration, document numbering and process variations.",
        },
        {
          title: "Existing EDI or customer-specific invoicing",
          body: "Some customers may already require particular invoice formats, which the new requirement has to coexist with rather than replace.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Custom fields and document types",
          body: "Establishing which of your ERP's document types are in scope, and how customisations affect the data available for mapping.",
        },
        {
          title: "Change control in a production system",
          body: "Changes to an ERP that runs the plant require proper testing environments and release discipline. The e-invoicing work has to fit that, not bypass it.",
        },
        {
          title: "Coexistence with existing invoice channels",
          body: "Where EDI or customer portals are already in use, the structured invoicing requirement is additional to them and the interaction needs designing.",
        },
      ],
      approachHeading: "How we work on this",
      approach: [
        "Establish scope per entity and plant, with the dates that follow",
        "Review the ERP configuration relevant to invoicing, not the ERP in general",
        "Identify document types in scope and the data each one holds",
        "Design the integration to fit your existing change-control and release process",
        "Select and coordinate an accredited provider with real depth in your ERP",
        "Map, validate and test in a proper non-production environment before anything touches live",
        "Stay through the first full month-end after go-live",
      ],
      note:
        "Provider claims of ERP support should be tested against your instance, not accepted on the basis of a product name. That testing is part of selection.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "الفوترة الإلكترونية في الإمارات لشركات التصنيع.",
      lede:
        "في التصنيع، تكون الفاتورة عادةً الخطوة الأخيرة في سلسلة تمتد من أمر الإنتاج حتى الشحن. وهذا يعني أن بيانات الفاتورة تتحدد إلى حد كبير في مراحل سابقة، ويصبح سؤال الامتثال هو ما إذا كان ما ينتجه نظام تخطيط الموارد في نهاية تلك السلسلة يحتوي على ما تتطلبه الصيغة الهيكلية.",
      differentHeading: "لماذا هذه الفئة أصعب من الحالة العامة",
      different: [
        {
          title: "الفاتورة ترث من عمليات سابقة",
          body: "أوامر الإنتاج ومستندات الشحن وإفراجات الجودة كلها تشكّل ما ينتهي في الفاتورة. وإصلاح مشكلة في بيانات الفاتورة يعني غالبًا تغيير شيء في خطوات سابقة عليها.",
        },
        {
          title: "تخصيص نظام تخطيط الموارد هو القاعدة",
          body: "نادرًا ما تكون نسخ أنظمة التصنيع قياسية. وسؤال التكامل ليس عن اسم المنتج قط — بل عن تهيئتكم المحددة وحقولكم المخصصة وأنواع مستنداتكم.",
        },
        {
          title: "العقود والتسليمات المجدولة",
          body: "أوامر السحب واتفاقيات الجدولة تنتج تسليمات كثيرة مقابل ترتيب تجاري واحد، ويجب أن تكون الإشارات بين المستندات متسقة.",
        },
      ],
      environmentHeading: "بيئة الأنظمة التي نجدها عادةً",
      environment: [
        {
          title: "نظام تخطيط موارد كامل، غالبًا SAP أو Oracle",
          body: "بالإنتاج والمخزون والمالية في نظام واحد، وسنوات من قرارات التهيئة مضمّنة فيه.",
        },
        {
          title: "مصانع أو كيانات متعددة",
          body: "وقد يكون لكل منها تسجيله الضريبي وترقيم مستنداته وتنويعات عملياته الخاصة.",
        },
        {
          title: "تبادل إلكتروني قائم أو فوترة خاصة بعملاء",
          body: "قد يشترط بعض العملاء صيغ فواتير معينة بالفعل، وعلى المتطلب الجديد أن يتعايش معها لا أن يحل محلها.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "الحقول المخصصة وأنواع المستندات",
          body: "تحديد أي أنواع مستندات نظامكم تقع في النطاق، وكيف تؤثر التخصيصات على البيانات المتاحة للتحويل.",
        },
        {
          title: "ضبط التغيير في نظام إنتاجي",
          body: "التغييرات على نظام يدير المصنع تتطلب بيئات اختبار سليمة وانضباطًا في الإصدار. وعلى عمل الفوترة الإلكترونية أن يتوافق مع ذلك لا أن يتجاوزه.",
        },
        {
          title: "التعايش مع قنوات الفوترة القائمة",
          body: "حيث يُستخدم التبادل الإلكتروني أو بوابات العملاء بالفعل، يكون متطلب الفوترة الهيكلية إضافيًا إليها ويحتاج التفاعل بينهما إلى تصميم.",
        },
      ],
      approachHeading: "كيف نعمل على هذا",
      approach: [
        "تحديد النطاق لكل كيان ومصنع، والمواعيد المترتبة",
        "مراجعة تهيئة نظام تخطيط الموارد المتعلقة بالفوترة، لا النظام عمومًا",
        "تحديد أنواع المستندات ضمن النطاق والبيانات التي يحملها كل منها",
        "تصميم التكامل بما يناسب عملية ضبط التغيير والإصدار القائمة لديكم",
        "اختيار مزوّد معتمد لديه عمق حقيقي في نظامكم والتنسيق معه",
        "التحويل والتحقق والاختبار في بيئة غير إنتاجية سليمة قبل المساس بالبيئة الحية",
        "البقاء خلال أول إقفال شهر كامل بعد الإطلاق",
      ],
      note:
        "ادعاءات المزوّدين بدعم أنظمة تخطيط الموارد ينبغي اختبارها على نسختكم أنتم، لا قبولها بناءً على اسم منتج. وهذا الاختبار جزء من عملية الاختيار.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default manufacturing;
