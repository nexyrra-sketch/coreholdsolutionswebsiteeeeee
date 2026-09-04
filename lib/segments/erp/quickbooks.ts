import type { Segment } from "../types";

const quickbooks: Segment = {
  kind: "erp",
  slug: "quickbooks",
  label: { en: "QuickBooks", ar: "QuickBooks" },
  summary: {
    en: "What the UAE mandate means if you invoice from QuickBooks, and what has to change.",
    ar: "ما يعنيه التفويض الإماراتي إن كنتم تصدرون الفواتير من QuickBooks، وما الذي يجب تغييره.",
  },
  content: {
    en: {
      h1: "How UAE e-invoicing affects businesses using QuickBooks.",
      lede:
        "If you invoice from QuickBooks, the mandate does not mean you have to leave it. What it means is that your invoices can no longer end their life as a PDF emailed to a customer — the underlying data has to reach an accredited provider in a structured format, and QuickBooks has to be able to supply the fields that format requires.",
      differentHeading: "What actually changes, and what does not",
      different: [
        {
          title: "What does not change",
          body: "How you raise an invoice, your chart of accounts, your reporting, and your day-to-day process. For most finance teams the QuickBooks experience after go-live looks close to what it looks like now.",
        },
        {
          title: "What does change",
          body: "Invoice data has to leave QuickBooks and reach your accredited provider in the required structured format, and it has to contain fields that a PDF never needed — buyer tax registration details, correct classification, and consistent references.",
        },
        {
          title: "What has to be verified first",
          body: "Whether your QuickBooks edition and configuration actually hold everything the format requires, and whether your customer records are complete enough for structured invoices to validate.",
        },
      ],
      environmentHeading: "Common QuickBooks situations we see",
      environment: [
        {
          title: "QuickBooks Online, standard usage",
          body: "Generally the most straightforward category. The work is usually about data completeness and the connection to a provider, not about the software itself.",
        },
        {
          title: "QuickBooks Desktop",
          body: "Different integration considerations from the online edition, and worth establishing early which edition and version you are on because the answer materially affects the approach.",
        },
        {
          title: "QuickBooks with heavy customisation or add-ons",
          body: "Where third-party apps generate invoices or hold part of the invoice data, the scope extends beyond QuickBooks itself.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Incomplete customer records",
          body: "Buyer tax registration numbers and address details are frequently missing or inconsistent, because QuickBooks never forced them to be complete. Structured invoicing does.",
        },
        {
          title: "Item and tax code configuration",
          body: "Tax codes applied inconsistently across items, or free-text descriptions where the format expects structured values.",
        },
        {
          title: "Invoices raised outside QuickBooks",
          body: "Where some invoices are produced in spreadsheets or another tool and only entered into QuickBooks afterwards, those need bringing into scope explicitly.",
        },
      ],
      approachHeading: "How we work on this",
      approach: [
        "Confirm your edition, version and how invoices are actually raised today",
        "Establish your revenue tier, entities and the deadlines that follow",
        "Audit customer and item data against the fields structured invoicing requires",
        "Identify which accredited providers genuinely support your QuickBooks setup, and test the claim",
        "Coordinate the connection, map the data and validate against real invoices",
        "Train your team on the small number of things that change for them",
        "Stay through the first full month-end after go-live",
      ],
      note:
        "To be clear about what we are and are not claiming: we do not sell a pre-built QuickBooks product or plugin. We assess your setup, select and coordinate an accredited provider, and make the connection work. Where a provider offers a QuickBooks integration, we test whether it actually fits your configuration rather than taking the claim at face value.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "كيف تؤثر الفوترة الإلكترونية في الإمارات على الأنشطة التي تستخدم QuickBooks.",
      lede:
        "إن كنتم تصدرون فواتيركم من QuickBooks، فالتفويض لا يعني أن عليكم تركه. بل يعني أن فواتيركم لم يعد بإمكانها أن تنتهي كملف PDF يُرسل بالبريد للعميل — إذ يجب أن تصل البيانات الأساسية إلى مزوّد معتمد بصيغة هيكلية، وأن يكون QuickBooks قادرًا على توفير الحقول التي تتطلبها تلك الصيغة.",
      differentHeading: "ما الذي يتغير فعلًا، وما الذي لا يتغير",
      different: [
        {
          title: "ما لا يتغير",
          body: "طريقة إصدار الفاتورة، ودليل حساباتكم، وتقاريركم، وعملكم اليومي. فبالنسبة لمعظم الفرق المالية، يبدو استخدام QuickBooks بعد الإطلاق قريبًا مما هو عليه الآن.",
        },
        {
          title: "ما يتغير",
          body: "على بيانات الفاتورة أن تغادر QuickBooks وتصل إلى مزوّدكم المعتمد بالصيغة الهيكلية المطلوبة، وأن تتضمن حقولًا لم يحتجها ملف PDF يومًا — بيانات التسجيل الضريبي للمشتري، والتصنيف الصحيح، والمراجع المتسقة.",
        },
        {
          title: "ما يجب التحقق منه أولًا",
          body: "ما إذا كانت نسختكم من QuickBooks وتهيئتها تحتفظان فعلًا بكل ما تتطلبه الصيغة، وما إذا كانت سجلات عملائكم مكتملة بما يكفي لتجتاز الفواتير الهيكلية التحقق.",
        },
      ],
      environmentHeading: "حالات QuickBooks الشائعة التي نراها",
      environment: [
        {
          title: "QuickBooks Online، استخدام قياسي",
          body: "عمومًا الفئة الأيسر. والعمل عادةً يتعلق باكتمال البيانات والاتصال بالمزوّد، لا بالبرنامج نفسه.",
        },
        {
          title: "QuickBooks Desktop",
          body: "اعتبارات تكامل مختلفة عن النسخة السحابية، ويجدر تحديد نسختكم وإصداركم مبكرًا لأن الجواب يؤثر جوهريًا على المنهج.",
        },
        {
          title: "QuickBooks مع تخصيص كثيف أو إضافات",
          body: "حين تنتج تطبيقات طرف ثالث الفواتير أو تحتفظ بجزء من بياناتها، يمتد النطاق إلى ما وراء QuickBooks نفسه.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "سجلات عملاء ناقصة",
          body: "أرقام التسجيل الضريبي للمشتري وتفاصيل العناوين ناقصة أو غير متسقة كثيرًا، لأن QuickBooks لم يفرض يومًا اكتمالها. أما الفوترة الهيكلية فتفرضه.",
        },
        {
          title: "تهيئة الأصناف ورموز الضريبة",
          body: "رموز ضريبية مطبّقة بشكل غير متسق عبر الأصناف، أو أوصاف نصية حرة حيث تتوقع الصيغة قيمًا هيكلية.",
        },
        {
          title: "فواتير تُصدر خارج QuickBooks",
          body: "حين تُنتَج بعض الفواتير في جداول بيانات أو أداة أخرى ثم تُدخَل إلى QuickBooks لاحقًا، يجب إدخالها في النطاق صراحةً.",
        },
      ],
      approachHeading: "كيف نعمل على هذا",
      approach: [
        "تأكيد نسختكم وإصداركم وكيفية إصدار الفواتير فعليًا اليوم",
        "تحديد فئة إيراداتكم وكياناتكم والمواعيد المترتبة",
        "تدقيق بيانات العملاء والأصناف مقابل الحقول التي تتطلبها الفوترة الهيكلية",
        "تحديد المزوّدين المعتمدين الذين يدعمون إعداد QuickBooks لديكم فعلًا، واختبار هذا الادعاء",
        "تنسيق الاتصال وتحويل البيانات والتحقق على فواتير واقعية",
        "تدريب فريقكم على العدد القليل من الأمور التي تتغير بالنسبة له",
        "البقاء خلال أول إقفال شهر كامل بعد الإطلاق",
      ],
      note:
        "توضيحًا لما ندّعيه وما لا ندّعيه: نحن لا نبيع منتجًا أو إضافة جاهزة لـ QuickBooks. بل نقيّم إعدادكم، ونختار مزوّدًا معتمدًا وننسّق معه، ونجعل الاتصال يعمل. وحين يعرض مزوّد تكاملًا مع QuickBooks، نختبر ما إذا كان يناسب تهيئتكم فعلًا بدلًا من قبول الادعاء كما هو.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default quickbooks;
