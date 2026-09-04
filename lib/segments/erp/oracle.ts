import type { Segment } from "../types";

const oracle: Segment = {
  kind: "erp",
  slug: "oracle",
  label: { en: "Oracle", ar: "Oracle" },
  summary: {
    en: "Fusion or E-Business Suite, the answer depends on your modules and your customisations.",
    ar: "سواء Fusion أو E-Business Suite، تعتمد الإجابة على وحداتكم وتخصيصاتكم.",
  },
  content: {
    en: {
      h1: "How UAE e-invoicing affects businesses running Oracle.",
      lede: "Oracle environments are capable of meeting the requirement. The work is establishing which of your modules produce invoices, what data they hold, and how the extraction and delivery to an accredited provider should be built and governed.",
      differentHeading: "What actually changes, and what does not",
      different: [
        {
          title: "What does not change",
          body: "Your finance operating model and the way Oracle supports it.",
        },
        {
          title: "What does change",
          body: "Invoice data must be produced in the required structured format and delivered through an accredited provider.",
        },
        {
          title: "What has to be established",
          body: "Which modules are in scope, and whether the required fields exist and are populated reliably today.",
        },
      ],
      environmentHeading: "Common situations we see",
      environment: [
        {
          title: "Oracle Fusion Cloud",
          body: "Different integration options from on-premise, and the release cadence affects planning.",
        },
        {
          title: "E-Business Suite",
          body: "Often long-customised, and the customisations determine the scope of the work.",
        },
        {
          title: "Multiple ledgers or operating units",
          body: "Each may map to a different tax registration and deadline.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Module scope",
          body: "Receivables, Projects and any industry module may all generate documents in scope, and each needs assessing.",
        },
        {
          title: "Customisations affecting invoice data",
          body: "Long-standing customisations frequently determine what is and is not available for mapping.",
        },
        {
          title: "Governance and testing environments",
          body: "Changes need to move through your existing environments properly rather than around them.",
        },
      ],
      approachHeading: "How we work on this",
      approach: [
        "Confirm your edition, version and how invoices are actually raised today",
        "Establish your revenue tier, entities and the deadlines that follow",
        "Audit customer and item data against the fields structured invoicing requires",
        "Identify which accredited providers genuinely support your setup, and test the claim",
        "Coordinate the connection, map the data and validate against real invoices",
        "Train your team on the small number of things that change for them",
        "Stay through the first full month-end after go-live",
      ],
      note: "To be clear about what we are and are not claiming: we do not sell a pre-built Oracle product or plugin. We assess your setup, select and coordinate an accredited provider, and make the connection work. Where a provider advertises Oracle support, we test whether it fits your configuration rather than taking the claim at face value.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "كيف تؤثر الفوترة الإلكترونية في الإمارات على الأنشطة التي تشغّل Oracle.",
      lede: "بيئات Oracle قادرة على تلبية المتطلب. والعمل هو تحديد أي وحداتكم تنتج فواتير، وما البيانات التي تحتفظ بها، وكيف ينبغي بناء الاستخراج والتسليم إلى مزوّد معتمد وحوكمته.",
      differentHeading: "ما الذي يتغير فعلًا، وما الذي لا يتغير",
      different: [
        {
          title: "ما لا يتغير",
          body: "نموذج تشغيلكم المالي وطريقة دعم Oracle له.",
        },
        {
          title: "ما يتغير",
          body: "يجب إنتاج بيانات الفاتورة بالصيغة الهيكلية المطلوبة وتسليمها عبر مزوّد معتمد.",
        },
        {
          title: "ما يجب تحديده",
          body: "أي الوحدات ضمن النطاق، وما إذا كانت الحقول المطلوبة موجودة ومملوءة بشكل موثوق اليوم.",
        },
      ],
      environmentHeading: "الحالات الشائعة التي نراها",
      environment: [
        {
          title: "Oracle Fusion Cloud",
          body: "خيارات تكامل مختلفة عن النسخ المحلية، وإيقاع الإصدارات يؤثر على التخطيط.",
        },
        {
          title: "E-Business Suite",
          body: "غالبًا مخصص منذ زمن، والتخصيصات تحدد نطاق العمل.",
        },
        {
          title: "دفاتر أو وحدات تشغيل متعددة",
          body: "قد يرتبط كل منها بتسجيل ضريبي وموعد مختلف.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "نطاق الوحدات",
          body: "قد تنتج وحدات الذمم المدينة والمشاريع وأي وحدة قطاعية مستندات ضمن النطاق، ويحتاج كل منها تقييمًا.",
        },
        {
          title: "تخصيصات تؤثر على بيانات الفاتورة",
          body: "التخصيصات القديمة كثيرًا ما تحدد ما هو متاح للتحويل وما ليس كذلك.",
        },
        {
          title: "الحوكمة وبيئات الاختبار",
          body: "يجب أن تمر التغييرات عبر بيئاتكم القائمة بشكل سليم لا حولها.",
        },
      ],
      approachHeading: "كيف نعمل على هذا",
      approach: [
        "تأكيد نسختكم وإصداركم وكيفية إصدار الفواتير فعليًا اليوم",
        "تحديد فئة إيراداتكم وكياناتكم والمواعيد المترتبة",
        "تدقيق بيانات العملاء والأصناف مقابل الحقول التي تتطلبها الفوترة الهيكلية",
        "تحديد المزوّدين المعتمدين الذين يدعمون إعدادكم فعلًا، واختبار هذا الادعاء",
        "تنسيق الاتصال وتحويل البيانات والتحقق على فواتير واقعية",
        "تدريب فريقكم على العدد القليل من الأمور التي تتغير بالنسبة له",
        "البقاء خلال أول إقفال شهر كامل بعد الإطلاق",
      ],
      note: "توضيحًا لما ندّعيه وما لا ندّعيه: نحن لا نبيع منتجًا أو إضافة جاهزة لـ Oracle. بل نقيّم إعدادكم، ونختار مزوّدًا معتمدًا وننسّق معه، ونجعل الاتصال يعمل. وحين يعلن مزوّد دعمه لـ Oracle، نختبر ما إذا كان يناسب تهيئتكم بدلًا من قبول الادعاء كما هو.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default oracle;
