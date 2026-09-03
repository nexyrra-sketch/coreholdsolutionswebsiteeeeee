import type { Article } from "../types";

export const uaeSmeGuide: Article = {
  slug: "uae-e-invoicing-guide-for-smes",
  published: "2026-09-03",
  readingMinutes: 6,
  content: {
    en: {
      title: "UAE e-invoicing for small and medium businesses: a practical guide",
      description:
        "You do not need to be an enterprise with an SAP system to be in scope for UAE e-invoicing. Here is what actually changes for a small or mid-sized business, in plain terms, with no jargon assumed.",
      intro:
        "If your business runs on QuickBooks, Zoho, Xero, or a spreadsheet, it is easy to read about Peppol networks and UBL formats and assume this mandate was written for someone else's company. It was not. Almost every VAT-registered business in the UAE is in scope, regardless of size, and the smaller your finance team, the more this guide is written for you.",
      body: [
        { type: "h2", text: "The myth worth killing first" },
        {
          type: "p",
          text: "\"This is an enterprise thing\" is the single most common misunderstanding we hear from smaller businesses, and it is wrong. The mandate applies by revenue band, not by company size or system sophistication. If you are registered for VAT in the UAE, you are in scope — the only question is which deadline applies to you.",
        },
        {
          type: "p",
          text: "Businesses under AED 50 million in annual revenue — which is the overwhelming majority of registered businesses in the country — need to appoint an Accredited Service Provider by 31 March 2027 and be fully live, issuing and receiving structured e-invoices, by 1 July 2027.",
        },
        { type: "h2", text: "What actually changes for you" },
        {
          type: "p",
          text: "Here is the part that surprises most small business owners: your day-to-day invoicing does not change. You do not learn a new invoicing process, and your staff do not start filling out different forms. You keep creating invoices the way you do today — through QuickBooks, Zoho, Xero, or whatever you currently use.",
        },
        {
          type: "p",
          text: "What changes is what happens after you hit send. Instead of that invoice going out as a PDF attachment, your accounting system connects to an Accredited Service Provider, which converts your invoice into the required structured format and transmits it through the mandated network. Your customer's system receives structured data it can process automatically, and the Federal Tax Authority receives a report of the transaction. None of this requires your team to learn Peppol or PINT-AE as concepts — that is the provider's job, not yours.",
        },
        { type: "h2", text: "Where the real work is" },
        { type: "h3", text: "If you already use QuickBooks, Zoho, or Xero" },
        {
          type: "p",
          text: "This is the easiest starting position. All three platforms have standard connection paths to accredited providers, so the integration itself is usually straightforward. The work is mostly in appointing the right provider and making sure your existing customer and product data is clean enough to map correctly — messy or duplicated records cause more integration headaches than the technology itself.",
        },
        { type: "h3", text: "If you invoice through spreadsheets or manually" },
        {
          type: "p",
          text: "This is the position that needs the most lead time, and it is worth being honest about why: the real project here is not e-invoicing compliance, it is moving off spreadsheets onto a connected accounting system in the first place. That is a bigger change than the mandate itself, which is exactly why it should not be left until a few months before your deadline. If this describes you, start the conversation now rather than in early 2027.",
        },
        { type: "h2", text: "What it costs, roughly" },
        {
          type: "p",
          text: "For a single-entity small business on standard software, the one-time integration and go-live work is typically the smallest cost band in the market, with an ongoing monthly cost that scales with how many invoices you actually send — a low-volume business pays for a low-volume tier. The number that matters is not a headline price, it is what a provider quotes against your actual invoice volume and your actual system, which is why any serious quote should follow a real conversation about your business, not a generic price list.",
        },
        { type: "h2", text: "Three mistakes smaller businesses make" },
        {
          type: "ul",
          items: [
            "Waiting for the deadline to feel close. The appointment deadline, not the go-live deadline, is the one that matters for planning — and every business under the threshold shares the same date, which means providers and integrators will have a queue in early 2027.",
            "Assuming the cheapest provider quote is the cheapest outcome. Per-invoice pricing that looks attractive at low volume can become the most expensive option as your business grows, and support quality is not visible in a price sheet.",
            "Treating this as a one-time project rather than an ongoing responsibility. Two of the six penalties in the current fine schedule are for failing to report system failures or data changes after you are already live — the obligation does not end at go-live.",
          ],
        },
        {
          type: "callout",
          title: "The honest starting point",
          text: "If you are not sure whether your current setup can connect cleanly to a provider, that uncertainty is normal and it is exactly what a first scoping conversation resolves — not something you need to figure out on your own before reaching out.",
        },
      ],
      sources: [
        {
          label: "Cabinet Decision No. 106 of 2025 on Violations and Administrative Penalties — Ministry of Finance (PDF)",
          url: "https://mof.gov.ae/wp-content/uploads/2025/12/Cabinet-Decision-Violations-and-Penalties-eInvoicing-final-version-en-8.12.25.pdf",
        },
      ],
    },
    ar: {
      title: "الفوترة الإلكترونية في الإمارات للشركات الصغيرة والمتوسطة: دليل عملي",
      description:
        "لستم بحاجة إلى أن تكونوا مؤسسة كبرى تعمل بنظام SAP لتقعوا ضمن نطاق الفوترة الإلكترونية في الإمارات. إليكم ما يتغيّر فعليًا بالنسبة لمنشأة صغيرة أو متوسطة، بلغة واضحة دون افتراض أي معرفة مسبقة بالمصطلحات.",
      intro:
        "إذا كانت منشأتكم تعمل عبر QuickBooks أو Zoho أو Xero أو جدول بيانات، فمن السهل أن تقرؤوا عن شبكات Peppol وصيغ UBL وتفترضوا أن هذا الإلزام كُتب لمنشأة غيركم. هذا غير صحيح. يقع تقريبًا كل صاحب تسجيل ضريبة قيمة مضافة في الإمارات ضمن النطاق، بغض النظر عن الحجم، وكلما كان فريقكم المالي أصغر، كان هذا الدليل أقرب إليكم.",
      body: [
        { type: "h2", text: "الفكرة الخاطئة الأولى التي ينبغي تصحيحها" },
        {
          type: "p",
          text: "«هذا أمر يخص المؤسسات الكبرى» هو أكثر سوء فهم نسمعه من المنشآت الأصغر، وهو خاطئ. ينطبق الإلزام حسب شريحة الإيرادات، لا حسب حجم الشركة أو تطور أنظمتها. إذا كنتم مسجَّلين في ضريبة القيمة المضافة بالإمارات، فأنتم ضمن النطاق — والسؤال الوحيد هو أي موعد ينطبق عليكم.",
        },
        {
          type: "p",
          text: "المنشآت التي تقل إيراداتها السنوية عن 50 مليون درهم — وهي الغالبية العظمى من المنشآت المسجَّلة في البلاد — تحتاج إلى تعيين مزوّد خدمة معتمد بحلول 31 مارس 2027، والتفعيل الكامل — أي إصدار واستلام الفواتير الإلكترونية الهيكلية فعليًا — بحلول 1 يوليو 2027.",
        },
        { type: "h2", text: "ما الذي يتغيّر فعليًا بالنسبة لكم" },
        {
          type: "p",
          text: "إليكم الجزء الذي يفاجئ معظم أصحاب الأعمال الصغيرة: عملية إصدار فواتيركم اليومية لا تتغيّر. لن تتعلموا عملية فوترة جديدة، ولن يبدأ موظفوكم بتعبئة نماذج مختلفة. تستمرون في إنشاء الفواتير بالطريقة التي تعتمدونها اليوم — عبر QuickBooks أو Zoho أو Xero أو أيًا كان ما تستخدمونه حاليًا.",
        },
        {
          type: "p",
          text: "ما يتغيّر هو ما يحدث بعد الضغط على «إرسال». فبدلًا من أن تخرج الفاتورة كمرفق PDF، يتصل نظام المحاسبة لديكم بمزوّد خدمة معتمد، الذي يحوّل فاتورتكم إلى الصيغة الهيكلية المطلوبة وينقلها عبر الشبكة الإلزامية. يستلم نظام عميلكم بيانات هيكلية يستطيع معالجتها تلقائيًا، وتتلقى الهيئة الاتحادية للضرائب تقريرًا عن المعاملة. لا شيء من هذا يستلزم أن يتعلم فريقكم مفهومَي Peppol أو PINT-AE — فتلك مهمة المزوّد، لا مهمتكم.",
        },
        { type: "h2", text: "أين يكمن العمل الفعلي" },
        { type: "h3", text: "إذا كنتم تستخدمون بالفعل QuickBooks أو Zoho أو Xero" },
        {
          type: "p",
          text: "هذا هو أسهل موقع انطلاق. تمتلك المنصّات الثلاث مسارات اتصال قياسية بالمزوّدين المعتمدين، لذا يكون التكامل نفسه مباشرًا في الغالب. يتركّز العمل أساسًا في تعيين المزوّد المناسب والتأكد من أن بيانات عملائكم ومنتجاتكم الحالية نظيفة بما يكفي لتُحوَّل بشكل صحيح — فالسجلات المشوّشة أو المكررة تسبب مشاكل تكامل أكثر من التقنية نفسها.",
        },
        { type: "h3", text: "إذا كنتم تُصدرون الفواتير عبر جداول البيانات أو يدويًا" },
        {
          type: "p",
          text: "هذا هو الموقع الذي يحتاج أطول مهلة تحضير، ومن المفيد أن نكون صادقين بشأن السبب: المشروع الحقيقي هنا ليس الامتثال للفوترة الإلكترونية، بل الانتقال من جداول البيانات إلى نظام محاسبة متصل من الأساس. هذا تغيير أكبر من الإلزام نفسه، وهذا تحديدًا سبب عدم تأجيله إلى ما قبل موعدكم بأشهر قليلة. إن كان هذا وصفكم، ابدؤوا المحادثة الآن لا في أوائل 2027.",
        },
        { type: "h2", text: "كم يكلّف ذلك، تقريبًا" },
        {
          type: "p",
          text: "بالنسبة لمنشأة صغيرة بكيان واحد تعمل ببرمجيات قياسية، يكون عمل التكامل والتفعيل لمرة واحدة عادةً في أصغر شريحة تكلفة في السوق، مع تكلفة شهرية مستمرة تتناسب مع عدد الفواتير التي تُصدرونها فعليًا — فالمنشأة منخفضة الحجم تدفع مقابل شريحة منخفضة الحجم. الرقم المهم ليس سعرًا معلنًا عامًا، بل ما يعرضه المزوّد بناءً على حجم فواتيركم الفعلي ونظامكم الفعلي، ولهذا ينبغي أن يأتي أي عرض سعر جاد بعد محادثة حقيقية عن منشأتكم، لا من قائمة أسعار عامة.",
        },
        { type: "h2", text: "ثلاثة أخطاء ترتكبها المنشآت الأصغر" },
        {
          type: "ul",
          items: [
            "انتظار اقتراب الموعد النهائي فعليًا. موعد التعيين، لا موعد التفعيل، هو ما يهم للتخطيط — وكل منشأة دون هذا الحد تشارك الموعد نفسه، ما يعني أن المزوّدين والمُنفّذين سيكون لديهم طابور في أوائل 2027.",
            "افتراض أن أرخص عرض من مزوّد هو أرخص نتيجة. التسعير لكل فاتورة الذي يبدو جذابًا عند حجم منخفض قد يصبح الخيار الأغلى مع نمو منشأتكم، وجودة الدعم لا تظهر في ورقة الأسعار.",
            "التعامل مع هذا كمشروع لمرة واحدة لا كمسؤولية مستمرة. اثنتان من العقوبات الست في جدول الغرامات الحالي تخصان التخلّف عن الإبلاغ عن أعطال النظام أو تغييرات البيانات بعد أن تكونوا مفعّلين بالفعل — الالتزام لا ينتهي عند التفعيل.",
          ],
        },
        {
          type: "callout",
          title: "نقطة البداية الصادقة",
          text: "إن لم تكونوا متأكدين مما إذا كان إعدادكم الحالي يمكنه الاتصال بمزوّد بسلاسة، فهذا التردد طبيعي، وهو تحديدًا ما تحلّه محادثة تحديد النطاق الأولى — لا شيء تحتاجون لمعرفته بمفردكم قبل التواصل معنا.",
        },
      ],
      sources: [
        {
          label:
            "قرار مجلس الوزراء رقم 106 لسنة 2025 بشأن المخالفات والجزاءات الإدارية — وزارة المالية (PDF)",
          url: "https://mof.gov.ae/wp-content/uploads/2025/12/Cabinet-Decision-Violations-and-Penalties-eInvoicing-final-version-en-8.12.25.pdf",
        },
      ],
    },
  },
};
