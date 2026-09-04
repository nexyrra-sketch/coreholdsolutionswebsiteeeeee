import type { Segment } from "../types";

const generalTrading: Segment = {
  kind: "industry",
  slug: "general-trading",
  label: { en: "General trading", ar: "التجارة العامة" },
  summary: {
    en: "Wide product ranges, mixed VAT treatments and cross-border transactions make scoping the harder half of the work.",
    ar: "تشكيلة منتجات واسعة، ومعاملات ضريبية مختلطة، وتعاملات عابرة للحدود — ما يجعل تحديد النطاق هو النصف الأصعب من العمل.",
  },
  content: {
    en: {
      h1: "UAE e-invoicing for general trading companies.",
      lede:
        "Trading businesses rarely have one clean invoice type. Local sales, exports, re-exports, free zone movements and drop-shipments can all run through the same ledger, each with a different VAT treatment. Structured invoicing makes those distinctions explicit in a way a PDF never had to.",
      differentHeading: "Why this is harder than the generic case",
      different: [
        {
          title: "Several VAT treatments in one ledger",
          body: "Standard-rated, zero-rated exports, out-of-scope movements and reverse-charge purchases sitting side by side. Each has to be represented correctly in structured data, and getting the treatment wrong is a tax question before it is a technical one.",
        },
        {
          title: "Free zone and mainland activity in the same group",
          body: "Where a group operates entities across mainland and free zones, scope, tax registration and deadlines can differ per entity. Working out what applies to which entity is genuinely the first task.",
        },
        {
          title: "Product data that was never structured",
          body: "Descriptions written for the customer rather than for a system, inconsistent units, and item records that changed meaning over the years. Structured formats are less forgiving of this than a PDF was.",
        },
      ],
      environmentHeading: "The systems environment we usually find",
      environment: [
        {
          title: "A mid-market accounting package doing more than it was built for",
          body: "Often the ledger is fine and the surrounding process is where the complexity sits — quotations, proformas and order documents handled outside it.",
        },
        {
          title: "Multi-currency invoicing",
          body: "Sales in USD or EUR against AED reporting. The conversion basis and the way it is recorded need to be settled before mapping, not after.",
        },
        {
          title: "Multiple entities, one finance team",
          body: "Common in trading groups, and it means a single implementation has to serve several tax positions without the team running three parallel processes.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Deciding scope per entity, not per group",
          body: "Revenue tiers and obligations attach to entities. Groups frequently assume one answer covers all of them, and it usually does not.",
        },
        {
          title: "Zero-rated and out-of-scope transactions",
          body: "Export documentation and the evidence behind a zero rating become more visible once invoices are structured and reported. Weaknesses here surface quickly.",
        },
        {
          title: "Customer master data across markets",
          body: "Overseas customers without UAE tax registration numbers, and local customers with incomplete records, need different handling — and both need deciding before testing.",
        },
      ],
      approachHeading: "How we work on this",
      approach: [
        "Map the entity structure and establish scope and deadlines per entity",
        "Catalogue the actual transaction types running through the ledger, not the ones the process diagram shows",
        "Confirm VAT treatment per type with you and your tax advisor before mapping anything",
        "Assess customer and item master data against what structured invoicing requires",
        "Select and coordinate an accredited provider that handles your document mix and volume",
        "Map, validate and test across every transaction type, including the rare ones",
        "Stay through the first full month-end after go-live",
      ],
      note:
        "VAT treatment is a tax question and we work alongside your tax advisor on it rather than replacing them. Nothing here is tax advice.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "الفوترة الإلكترونية في الإمارات لشركات التجارة العامة.",
      lede:
        "نادرًا ما يكون لدى الشركات التجارية نوع فاتورة واحد نظيف. فالمبيعات المحلية والصادرات وإعادة التصدير وحركات المناطق الحرة والشحن المباشر قد تمر جميعها عبر الدفتر نفسه، ولكل منها معاملة ضريبية مختلفة. والفوترة الهيكلية تجعل هذه الفروق صريحة بشكل لم يكن مطلوبًا في ملف PDF.",
      differentHeading: "لماذا هذه الفئة أصعب من الحالة العامة",
      different: [
        {
          title: "معاملات ضريبية متعددة في دفتر واحد",
          body: "الخاضع للنسبة الأساسية، والصادرات بنسبة صفر، والحركات خارج النطاق، والمشتريات بآلية الاحتساب العكسي، جنبًا إلى جنب. ويجب تمثيل كل منها بشكل صحيح في البيانات الهيكلية، وخطأ المعاملة مسألة ضريبية قبل أن يكون مسألة تقنية.",
        },
        {
          title: "نشاط في المناطق الحرة والبر الرئيسي داخل المجموعة نفسها",
          body: "حين تعمل مجموعة بكيانات بين البر الرئيسي والمناطق الحرة، قد يختلف النطاق والتسجيل الضريبي والمواعيد لكل كيان. وتحديد ما ينطبق على أي كيان هو المهمة الأولى فعلًا.",
        },
        {
          title: "بيانات منتجات لم تُهيكل يومًا",
          body: "أوصاف كُتبت للعميل لا للنظام، ووحدات غير متسقة، وسجلات أصناف تغيّر معناها عبر السنين. والصيغ الهيكلية أقل تسامحًا مع ذلك مما كان ملف PDF.",
        },
      ],
      environmentHeading: "بيئة الأنظمة التي نجدها عادةً",
      environment: [
        {
          title: "برنامج محاسبي متوسط يؤدي أكثر مما بُني له",
          body: "غالبًا يكون الدفتر سليمًا ويكمن التعقيد في العملية المحيطة — عروض الأسعار والفواتير المبدئية ومستندات الطلب تُدار خارجه.",
        },
        {
          title: "فوترة متعددة العملات",
          body: "مبيعات بالدولار أو اليورو مقابل تقارير بالدرهم. ويجب حسم أساس التحويل وطريقة تسجيله قبل التحويل لا بعده.",
        },
        {
          title: "كيانات متعددة وفريق مالي واحد",
          body: "أمر شائع في المجموعات التجارية، ويعني أن تنفيذًا واحدًا عليه أن يخدم عدة أوضاع ضريبية دون أن يدير الفريق ثلاث عمليات متوازية.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "تحديد النطاق لكل كيان لا للمجموعة",
          body: "فئات الإيرادات والالتزامات ترتبط بالكيانات. وكثيرًا ما تفترض المجموعات أن إجابة واحدة تغطيها جميعًا، وهو ما لا يصح غالبًا.",
        },
        {
          title: "المعاملات بنسبة صفر وخارج النطاق",
          body: "تصبح مستندات التصدير والأدلة الداعمة للنسبة الصفرية أكثر ظهورًا بعد هيكلة الفواتير والإبلاغ عنها. وأي ضعف هنا يظهر سريعًا.",
        },
        {
          title: "بيانات العملاء عبر الأسواق",
          body: "العملاء في الخارج بلا أرقام تسجيل ضريبي إماراتية، والعملاء المحليون بسجلات ناقصة، يحتاجون معالجة مختلفة — وكلاهما يحتاج حسمًا قبل الاختبار.",
        },
      ],
      approachHeading: "كيف نعمل على هذا",
      approach: [
        "رسم هيكل الكيانات وتحديد النطاق والمواعيد لكل كيان",
        "حصر أنواع المعاملات الجارية فعليًا في الدفتر، لا تلك التي يعرضها مخطط العملية",
        "تأكيد المعاملة الضريبية لكل نوع معكم ومع مستشاركم الضريبي قبل أي تحويل",
        "تقييم بيانات العملاء والأصناف مقابل ما تتطلبه الفوترة الهيكلية",
        "اختيار مزوّد معتمد يتعامل مع مزيج مستنداتكم وحجمكم والتنسيق معه",
        "التحويل والتحقق والاختبار عبر كل نوع معاملة، بما فيها النادرة",
        "البقاء خلال أول إقفال شهر كامل بعد الإطلاق",
      ],
      note:
        "المعاملة الضريبية مسألة ضريبية، ونعمل فيها إلى جانب مستشاركم الضريبي لا بديلًا عنه. ولا شيء هنا يُعد استشارة ضريبية.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default generalTrading;
