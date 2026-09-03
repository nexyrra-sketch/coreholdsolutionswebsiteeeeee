import type { Article } from "../types";

export const uaeChoosingAProvider: Article = {
  slug: "how-to-choose-an-accredited-service-provider",
  published: "2026-09-03",
  readingMinutes: 7,
  content: {
    en: {
      title: "How to choose an Accredited Service Provider in the UAE",
      description:
        "Every in-scope business now needs to appoint an Accredited Service Provider for UAE e-invoicing. Here is what the role actually does, and the questions worth asking before you sign anything.",
      intro:
        "The e-invoicing mandate does not let you connect to the Federal Tax Authority's system directly. You connect through an Accredited Service Provider — a vendor certified by the FTA to move your invoices onto the Peppol network in the required PINT-AE format. That single design choice is why 'which provider' has become the most consequential decision in most companies' rollout, and the one businesses tend to research least.",
      body: [
        { type: "h2", text: "What the role actually is" },
        {
          type: "p",
          text: "An Accredited Service Provider sits between your accounting or ERP system and the Federal Tax Authority. It takes the invoice data your business already generates, converts it into the PINT-AE UBL format the mandate requires, and transmits it across the Peppol network using the five-corner model — your system, your provider, the recipient's provider, the recipient's system, and the Authority receiving a copy of the data in near real time.",
        },
        {
          type: "p",
          text: "That means the provider is not a reporting tool you check occasionally. It is live infrastructure sitting inside your invoice-to-cash process. If it goes down, or maps your data incorrectly, or cannot keep pace with your invoice volume, that is not a support ticket — it is a compliance failure with a daily fine attached, and potentially a stalled invoice you cannot legally send.",
        },
        { type: "h2", text: "The questions worth asking before you sign" },
        { type: "h3", text: "Integration, not just accreditation" },
        {
          type: "p",
          text: "Being on the FTA's accredited list is table stakes, not a differentiator — it tells you a provider is legally allowed to operate, not that it is a good fit for your systems. The real question is how it connects to what you already run. Does it have a built connector for your ERP or accounting platform, or is it proposing custom integration work? A custom build is not disqualifying, but it changes your timeline and your cost, and it means testing against your actual data rather than a demo environment.",
        },
        { type: "h3", text: "What happens to your data" },
        {
          type: "p",
          text: "Ask where invoice data is processed and stored, for how long, and under what jurisdiction. Ask what happens to your historical data if you switch providers later — whether you can export it, and in what format. A provider that cannot answer this cleanly is a provider you should be cautious about building years of financial records inside.",
        },
        { type: "h3", text: "How failure is handled" },
        {
          type: "p",
          text: "Two of the six penalties in Cabinet Decision No. 106 of 2025 exist specifically for system failures — one obligation on you as the issuer, one on the recipient, each carrying a daily fine. Ask a provider directly what its uptime commitment is, what its incident notification process looks like, and how quickly you would know if invoices were failing to transmit. A provider that has not thought about this will not be able to answer quickly.",
        },
        { type: "h3", text: "Pricing structure, not just the sticker price" },
        {
          type: "p",
          text: "Per-invoice pricing, flat monthly fees, tiered volume bands, one-off integration charges — providers structure this differently, and the cheapest quote is not always the cheapest outcome once volume grows or a custom integration is added midway. Ask for the full pricing structure in writing, including what happens if your invoice volume changes significantly, before comparing any two quotes against each other.",
        },
        { type: "h3", text: "Whether the relationship has a reseller margin baked in" },
        {
          type: "p",
          text: "Some integration partners are also resellers of specific providers, which means their recommendation is not independent — they are paid more for steering you toward the provider they resell. That is not necessarily bad advice, but it is worth knowing whose interest is being served before you take the recommendation at face value.",
        },
        { type: "h2", text: "Red flags worth taking seriously" },
        {
          type: "ul",
          items: [
            "Vague or evasive answers about uptime, incident handling, or data export — these are operational questions with concrete answers, and a provider that has run this before should have them ready.",
            "Pressure to sign before you have seen the actual integration scope for your specific ERP — a generic proposal that has not looked at your systems is not yet a real quote.",
            "No clear answer on what happens to your data if you leave — a provider confident in its service should not be uneasy about your exit path.",
            "A single point of contact who cannot bring in technical staff to answer integration questions before contract signature.",
          ],
        },
        { type: "h2", text: "Why timing changes the calculation" },
        {
          type: "p",
          text: "Businesses with AED 50 million or more in annual revenue must have a provider appointed by 30 October 2026 and be live by 1 January 2027. Everyone else has until 31 March 2027 to appoint and 1 July 2027 to go live. The second date range covers almost every business in the country under the threshold, which means the queue for provider onboarding, data mapping and testing in early 2027 will not be short. Starting the evaluation now is not caution for its own sake — it is the only way to avoid being one of the businesses still negotiating scope a month before the deadline.",
        },
        {
          type: "callout",
          title: "Where CoreholdSolutions fits",
          text: "We are not an Accredited Service Provider ourselves, and we hold no reseller margin with any provider we recommend. Our role is to sit on your side of the table — mapping your actual systems and invoice volumes against what different providers offer, running the evaluation questions above with real answers instead of marketing copy, and managing the integration so the provider relationship is one part of a project you control rather than the whole of it.",
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
      title: "كيف تختارون مزوّد خدمة معتمدًا في الإمارات",
      description:
        "كل منشأة داخلة في نطاق الإلزام تحتاج الآن إلى تعيين مزوّد خدمة معتمد للفوترة الإلكترونية في الإمارات. إليكم ما يقوم به هذا الدور فعليًا، والأسئلة الجديرة بالطرح قبل توقيع أي شيء.",
      intro:
        "لا يتيح لكم إلزام الفوترة الإلكترونية الاتصال بنظام الهيئة الاتحادية للضرائب مباشرة. تتصلون عبر مزوّد خدمة معتمد — وهو جهة معتمدة من الهيئة لنقل فواتيركم عبر شبكة Peppol بصيغة PINT-AE المطلوبة. هذا الخيار التصميمي الوحيد هو سبب تحوّل «أي مزوّد» إلى أهم قرار في مسار معظم الشركات، وهو الأقل بحثًا من قِبل أصحاب الأعمال.",
      body: [
        { type: "h2", text: "ما هو هذا الدور فعليًا" },
        {
          type: "p",
          text: "يقف مزوّد الخدمة المعتمد بين نظام المحاسبة أو تخطيط الموارد لديكم وبين الهيئة الاتحادية للضرائب. يأخذ بيانات الفواتير التي تنتجها منشأتكم بالفعل، ويحوّلها إلى صيغة PINT-AE / UBL التي يشترطها الإلزام، وينقلها عبر شبكة Peppol باستخدام نموذج الزوايا الخمس — نظامكم، ومزوّدكم، ومزوّد المستلم، ونظام المستلم، والهيئة التي تتلقى نسخة من البيانات في وقت قريب من الفوري.",
        },
        {
          type: "p",
          text: "هذا يعني أن المزوّد ليس أداة تقارير تراجعونها بين الحين والآخر. إنه بنية تحتية حيّة تعمل داخل دورة تحويل فواتيركم إلى نقد. فإن تعطّل، أو حوّل بياناتكم بشكل خاطئ، أو عجز عن مواكبة حجم فواتيركم، فذلك ليس تذكرة دعم — إنه إخفاق في الامتثال مرتبط بغرامة يومية، وربما فاتورة معلّقة لا يمكنكم إرسالها قانونيًا.",
        },
        { type: "h2", text: "الأسئلة الجديرة بالطرح قبل التوقيع" },
        { type: "h3", text: "التكامل، لا الاعتماد وحده" },
        {
          type: "p",
          text: "الوجود على قائمة الهيئة المعتمدة شرط أساسي، لا عامل تمييز — فهو يخبركم أن المزوّد مسموح له قانونيًا بالعمل، لا أنه مناسب لأنظمتكم. السؤال الحقيقي هو كيف يتصل بما تعملون عليه بالفعل. هل لديه موصل جاهز لمنصّة تخطيط الموارد أو المحاسبة الخاصة بكم، أم يقترح عمل تكامل مخصص؟ العمل المخصص ليس عيبًا مُقصيًا، لكنه يغيّر جدولكم الزمني وتكلفتكم، ويعني اختبارًا على بياناتكم الفعلية لا على بيئة عرض تجريبية.",
        },
        { type: "h3", text: "ماذا يحدث لبياناتكم" },
        {
          type: "p",
          text: "اسألوا أين تُعالج بيانات الفواتير وتُخزَّن، ولأي مدة، وتحت أي ولاية قضائية. اسألوا ماذا يحدث لبياناتكم التاريخية إذا بدّلتم المزوّد لاحقًا — وهل يمكنكم تصديرها، وبأي صيغة. أي مزوّد لا يستطيع الإجابة عن هذا بوضوح هو مزوّد ينبغي أن تتوخوا الحذر من بناء سنوات من سجلاتكم المالية داخل منظومته.",
        },
        { type: "h3", text: "كيف يُتعامل مع الأعطال" },
        {
          type: "p",
          text: "توجد عقوبتان من العقوبات الست في قرار مجلس الوزراء رقم 106 لسنة 2025 مخصصتان تحديدًا لأعطال النظام — التزام عليكم كمُصدر، وآخر على المستلم، وكل منهما يحمل غرامة يومية. اسألوا المزوّد مباشرة عن التزامه بنسبة التشغيل، وعن عملية إبلاغه بالأعطال، وعن السرعة التي ستعرفون بها إن كانت فواتيركم تفشل في الإرسال. أي مزوّد لم يفكر في هذا لن يستطيع الإجابة بسرعة.",
        },
        { type: "h3", text: "هيكل التسعير، لا السعر المعلن وحده" },
        {
          type: "p",
          text: "التسعير لكل فاتورة، والرسوم الشهرية الثابتة، والشرائح المتدرجة حسب الحجم، ورسوم التكامل لمرة واحدة — يختلف المزوّدون في بنائها، وأرخص عرض ليس دائمًا أرخص نتيجة بمجرد نمو الحجم أو إضافة تكامل مخصص لاحقًا. اطلبوا هيكل التسعير كاملًا وكتابيًا، بما في ذلك ما يحدث إذا تغيّر حجم فواتيركم بشكل ملحوظ، قبل مقارنة أي عرضين ببعضهما.",
        },
        { type: "h3", text: "هل تنطوي العلاقة على هامش إعادة بيع" },
        {
          type: "p",
          text: "بعض شركاء التكامل هم أيضًا موزّعون لمزوّدين محددين، ما يعني أن توصيتهم ليست مستقلة — إذ يُدفع لهم أكثر مقابل توجيهكم إلى المزوّد الذي يوزّعونه. ليست هذه بالضرورة نصيحة سيئة، لكن من المفيد معرفة مصلحة مَن تُخدم قبل أخذ التوصية على ظاهرها.",
        },
        { type: "h2", text: "إشارات تحذيرية جديرة بالجدية" },
        {
          type: "ul",
          items: [
            "إجابات غامضة أو مراوغة عن نسبة التشغيل أو التعامل مع الأعطال أو تصدير البيانات — هذه أسئلة تشغيلية لها إجابات محددة، وأي مزوّد سبق له تنفيذ هذا ينبغي أن تكون إجاباته جاهزة.",
            "الضغط للتوقيع قبل أن تروا نطاق التكامل الفعلي لمنصّة تخطيط الموارد الخاصة بكم — أي عرض عام لم ينظر بعد في أنظمتكم ليس عرض سعر حقيقيًا بعد.",
            "غياب إجابة واضحة عمّا يحدث لبياناتكم إذا غادرتم — المزوّد الواثق بخدمته لا ينبغي أن يشعر بالقلق من سؤالكم عن مسار الخروج.",
            "نقطة اتصال واحدة لا تستطيع إشراك طاقم تقني للإجابة عن أسئلة التكامل قبل توقيع العقد.",
          ],
        },
        { type: "h2", text: "لماذا يغيّر التوقيت الحساب" },
        {
          type: "p",
          text: "على المنشآت التي تبلغ إيراداتها 50 مليون درهم فأكثر تعيين مزوّد بحلول 30 أكتوبر 2026 والتفعيل الكامل بحلول 1 يناير 2027. أما البقية فأمامها حتى 31 مارس 2027 للتعيين و1 يوليو 2027 للتفعيل. النطاق الزمني الثاني يشمل تقريبًا كل منشأة في البلاد دون هذا الحد، ما يعني أن طابور تأهيل المزوّدين وتحويل البيانات والاختبار في أوائل 2027 لن يكون قصيرًا. البدء في التقييم الآن ليس حذرًا لأجل الحذر — إنه الطريقة الوحيدة لتفادي أن تكونوا من بين المنشآت التي لا تزال تتفاوض على النطاق قبل شهر واحد من الموعد النهائي.",
        },
        {
          type: "callout",
          title: "أين تقف كورهولد سوليوشنز",
          text: "لسنا مزوّد خدمة معتمدًا بأنفسنا، ولا نحتفظ بأي هامش إعادة بيع مع أي مزوّد نوصي به. دورنا أن نقف إلى جانبكم من الطاولة — نُقارن أنظمتكم وأحجام فواتيركم الفعلية بما يقدّمه مزوّدون مختلفون، ونطرح أسئلة التقييم أعلاه بإجابات حقيقية بدل الخطاب التسويقي، وندير التكامل حتى تكون علاقة المزوّد جزءًا من مشروع تتحكمون فيه لا المشروع بأكمله.",
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
