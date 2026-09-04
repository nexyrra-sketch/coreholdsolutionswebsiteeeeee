import type { Segment } from "../types";

const contracting: Segment = {
  kind: "industry",
  slug: "contracting",
  label: { en: "Contracting & construction", ar: "المقاولات والإنشاءات" },
  summary: {
    en: "Progress billing, retention and certified valuations make the invoice a downstream product of a certification process.",
    ar: "الفوترة التدريجية والمحتجزات والمستخلصات المعتمدة تجعل الفاتورة نتاجًا لاحقًا لعملية اعتماد.",
  },
  content: {
    en: {
      h1: "UAE e-invoicing for contractors.",
      lede:
        "Contracting invoices are not raised freely — they follow a valuation that has been submitted, reviewed and certified, often weeks after the work. Retention is withheld, variations are argued, and payment applications and tax invoices are not the same document. Structured invoicing has to accommodate all of that without changing how the commercial process works.",
      differentHeading: "Why this is harder than the generic case",
      different: [
        {
          title: "The invoice follows a certification, not a sale",
          body: "Work is valued, submitted for certification, and only then invoiced. The timing and the amount are determined outside your accounting system, which affects when a compliant invoice can even be issued.",
        },
        {
          title: "Retention and its release",
          body: "Amounts withheld across the life of a project and released long afterwards create documents that reference work invoiced months or years earlier.",
        },
        {
          title: "Variations and disputed amounts",
          body: "Where a certified amount differs from the application, the resulting adjustment has to be represented as a proper structured document rather than an informal correction.",
        },
      ],
      environmentHeading: "The systems environment we usually find",
      environment: [
        {
          title: "Project costing alongside accounting",
          body: "Valuations and cost tracking in a project system, invoices raised in the ledger, with the link between them maintained manually more often than not.",
        },
        {
          title: "Documents produced outside the system",
          body: "Payment applications and certificates frequently exist as spreadsheets or PDFs, with only the final figure entering the accounting system.",
        },
        {
          title: "Joint ventures and multiple entities",
          body: "Project-specific entities and JV arrangements each carry their own tax position and scope question.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Establishing scope per entity, including project entities",
          body: "Where projects are run through separate entities, each needs its own scope and deadline answer.",
        },
        {
          title: "Representing retention correctly",
          body: "How retention is shown on the invoice and how its later release is documented needs settling before go-live.",
        },
        {
          title: "The gap between certification and invoicing",
          body: "If the certified figure arrives by email and is keyed in manually, that step becomes part of the compliance chain and needs to be reliable.",
        },
      ],
      approachHeading: "How we work on this",
      approach: [
        "Establish scope and deadlines across operating and project entities",
        "Map how a valuation becomes an invoice today, including the manual steps",
        "Define the treatment of retention, variations and release documents",
        "Assess customer master data, particularly for main contractors and developers",
        "Select and coordinate an accredited provider suited to this document profile",
        "Map, validate and test against real project billing cases",
        "Stay through the first full month-end after go-live",
      ],
      note:
        "Tax treatment of retention and certified amounts is a question for your tax advisor. We work alongside them rather than substituting for them.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "الفوترة الإلكترونية في الإمارات لشركات المقاولات.",
      lede:
        "فواتير المقاولات لا تُصدر بحرية — بل تتبع مستخلصًا قُدِّم وروجع واعتُمد، غالبًا بعد أسابيع من تنفيذ العمل. تُحتجز المبالغ، وتُناقَش التغييرات، وطلب الدفع ليس هو الفاتورة الضريبية. وعلى الفوترة الهيكلية أن تستوعب ذلك كله دون تغيير طريقة عمل العملية التجارية.",
      differentHeading: "لماذا هذه الفئة أصعب من الحالة العامة",
      different: [
        {
          title: "الفاتورة تتبع اعتمادًا لا عملية بيع",
          body: "يُقيَّم العمل ويُقدَّم للاعتماد، وعندها فقط تُصدر الفاتورة. والتوقيت والمبلغ يتحددان خارج نظامكم المحاسبي، ما يؤثر على متى يمكن أصلًا إصدار فاتورة ممتثلة.",
        },
        {
          title: "المحتجزات والإفراج عنها",
          body: "مبالغ تُحتجز طوال عمر المشروع ويُفرج عنها بعده بوقت طويل، ما ينتج مستندات تشير إلى عمل فُوتر قبل أشهر أو سنوات.",
        },
        {
          title: "التغييرات والمبالغ محل الخلاف",
          body: "حين يختلف المبلغ المعتمد عن المطالبة، يجب تمثيل التسوية الناتجة كمستند هيكلي سليم لا كتصحيح غير رسمي.",
        },
      ],
      environmentHeading: "بيئة الأنظمة التي نجدها عادةً",
      environment: [
        {
          title: "تكاليف المشاريع إلى جانب المحاسبة",
          body: "المستخلصات وتتبع التكاليف في نظام مشاريع، والفواتير تُصدر في الدفتر، والربط بينهما يُدار يدويًا في أغلب الأحيان.",
        },
        {
          title: "مستندات تُنتَج خارج النظام",
          body: "طلبات الدفع والشهادات توجد كثيرًا كجداول بيانات أو ملفات PDF، ولا يدخل النظام المحاسبي إلا الرقم النهائي.",
        },
        {
          title: "المشاريع المشتركة والكيانات المتعددة",
          body: "الكيانات الخاصة بالمشاريع وترتيبات المشاريع المشتركة يحمل كل منها وضعه الضريبي وسؤال نطاقه.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "تحديد النطاق لكل كيان، بما فيها كيانات المشاريع",
          body: "حين تُدار المشاريع عبر كيانات منفصلة، يحتاج كل منها إلى إجابة خاصة عن نطاقه وموعده.",
        },
        {
          title: "تمثيل المحتجزات بشكل صحيح",
          body: "كيفية إظهار المحتجز على الفاتورة وكيفية توثيق الإفراج عنه لاحقًا تحتاج حسمًا قبل الإطلاق.",
        },
        {
          title: "الفجوة بين الاعتماد والفوترة",
          body: "إذا كان الرقم المعتمد يصل بالبريد ويُدخَل يدويًا، تصبح تلك الخطوة جزءًا من سلسلة الامتثال وتحتاج أن تكون موثوقة.",
        },
      ],
      approachHeading: "كيف نعمل على هذا",
      approach: [
        "تحديد النطاق والمواعيد عبر الكيانات التشغيلية وكيانات المشاريع",
        "رسم كيف يتحول المستخلص إلى فاتورة اليوم، بما في ذلك الخطوات اليدوية",
        "تحديد معالجة المحتجزات والتغييرات ومستندات الإفراج",
        "تقييم بيانات العملاء، خصوصًا المقاولين الرئيسيين والمطوّرين",
        "اختيار مزوّد معتمد يناسب هذا النمط من المستندات والتنسيق معه",
        "التحويل والتحقق والاختبار على حالات فوترة مشاريع واقعية",
        "البقاء خلال أول إقفال شهر كامل بعد الإطلاق",
      ],
      note:
        "المعاملة الضريبية للمحتجزات والمبالغ المعتمدة مسألة تخص مستشاركم الضريبي. ونحن نعمل إلى جانبه لا بديلًا عنه.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default contracting;
