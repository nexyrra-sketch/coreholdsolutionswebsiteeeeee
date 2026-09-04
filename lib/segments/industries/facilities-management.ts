import type { Segment } from "../types";

const facilities: Segment = {
  kind: "industry",
  slug: "facilities-management",
  label: { en: "Facilities & property management", ar: "إدارة المرافق والعقارات" },
  summary: {
    en: "Recurring contract billing at scale, plus reactive works, plus invoicing on behalf of owners.",
    ar: "فوترة عقود متكررة بحجم كبير، إضافةً إلى الأعمال الطارئة، والفوترة نيابة عن المُلّاك.",
  },
  content: {
    en: {
      h1: "UAE e-invoicing for facilities and property management.",
      lede:
        "This sector runs two billing patterns at once: large volumes of recurring contract and service-charge invoices that repeat monthly or quarterly, and unpredictable reactive works billed as they happen. Both have to be structured correctly, and the recurring side is where volume errors multiply quietly.",
      differentHeading: "Why this is harder than the generic case",
      different: [
        {
          title: "Recurring billing repeats every error",
          body: "A mapping mistake on a recurring invoice template does not happen once — it happens across every unit, every cycle, until someone notices. Getting the recurring run right before go-live matters more than it appears.",
        },
        {
          title: "Invoicing on behalf of owners",
          body: "Where a managing agent bills in the name of an owner or association, whose tax registration appears on the invoice is a question that must be answered correctly before any mapping.",
        },
        {
          title: "Service charges and reactive works behave differently",
          body: "Scheduled service charges and ad hoc repairs have different data availability, approval routes and timing, and they often originate in different systems.",
        },
      ],
      environmentHeading: "The systems environment we usually find",
      environment: [
        {
          title: "A property or FM platform feeding accounting",
          body: "Units, contracts, work orders and schedules in a specialist system, with invoices produced from or alongside it.",
        },
        {
          title: "Large customer counts with thin records",
          body: "Many tenants, unit owners or contract customers, whose tax registration details are frequently incomplete because they never needed to be.",
        },
        {
          title: "Multiple entities and managed portfolios",
          body: "Where different buildings or portfolios sit under different legal entities with different tax positions.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Establishing whose invoice it is",
          body: "The legal and tax question of which entity issues the invoice sits ahead of every technical decision, and it is not always what the current process assumes.",
        },
        {
          title: "Customer data at scale",
          body: "Collecting and verifying tax registration details across a large customer base is a real project, and it is the most common cause of delay in this sector.",
        },
        {
          title: "Testing the recurring run, not one invoice",
          body: "Validation has to cover a full recurring cycle, because that is where the same error appears hundreds of times.",
        },
      ],
      approachHeading: "How we work on this",
      approach: [
        "Establish which entity issues which invoices, and the scope and deadline for each",
        "Assess the recurring billing configuration in detail before anything else",
        "Plan the customer data collection exercise realistically, with timelines",
        "Define handling for service charges, reactive works and any owner-billed arrangements",
        "Select and coordinate an accredited provider suited to recurring high volume",
        "Validate across a full recurring cycle, not a sample",
        "Stay through the first full month-end after go-live",
      ],
      note:
        "Who issues an invoice in an agency or association arrangement is a legal and tax question. It should be confirmed with your advisors, and we will flag it rather than assume it.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "الفوترة الإلكترونية في الإمارات لإدارة المرافق والعقارات.",
      lede:
        "يدير هذا القطاع نمطي فوترة في آن واحد: أحجام كبيرة من فواتير العقود ورسوم الخدمات المتكررة شهريًا أو ربع سنوي، وأعمال طارئة غير متوقعة تُفوتر عند حدوثها. وكلاهما يجب أن يكون مهيكلًا بشكل صحيح، والجانب المتكرر هو حيث تتضاعف الأخطاء بصمت.",
      differentHeading: "لماذا هذه الفئة أصعب من الحالة العامة",
      different: [
        {
          title: "الفوترة المتكررة تكرر كل خطأ",
          body: "خطأ التحويل في قالب فاتورة متكررة لا يقع مرة واحدة — بل يقع عبر كل وحدة وكل دورة، إلى أن ينتبه أحد. وإتقان الدورة المتكررة قبل الإطلاق أهم مما يبدو.",
        },
        {
          title: "الفوترة نيابة عن المُلّاك",
          body: "حين تفوتر شركة الإدارة باسم مالك أو جمعية ملاك، فإن تحديد رقم التسجيل الضريبي الذي يظهر على الفاتورة سؤال يجب الإجابة عنه بدقة قبل أي تحويل.",
        },
        {
          title: "رسوم الخدمات والأعمال الطارئة تتصرف بشكل مختلف",
          body: "رسوم الخدمات المجدولة والإصلاحات الطارئة تختلف في توافر البيانات ومسارات الاعتماد والتوقيت، وتنشأ غالبًا في أنظمة مختلفة.",
        },
      ],
      environmentHeading: "بيئة الأنظمة التي نجدها عادةً",
      environment: [
        {
          title: "منصة عقارات أو إدارة مرافق تغذّي المحاسبة",
          body: "الوحدات والعقود وأوامر العمل والجداول في نظام متخصص، والفواتير تُنتَج منه أو بالتوازي معه.",
        },
        {
          title: "أعداد عملاء كبيرة بسجلات ضعيفة",
          body: "مستأجرون ومُلّاك وحدات وعملاء عقود كثيرون، وبيانات تسجيلهم الضريبي ناقصة غالبًا لأنها لم تكن مطلوبة يومًا.",
        },
        {
          title: "كيانات متعددة ومحافظ مُدارة",
          body: "حيث تقع مبانٍ أو محافظ مختلفة تحت كيانات قانونية مختلفة بأوضاع ضريبية مختلفة.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "تحديد صاحب الفاتورة",
          body: "السؤال القانوني والضريبي عن الكيان الذي يصدر الفاتورة يسبق كل قرار تقني، وليس دائمًا ما تفترضه العملية الحالية.",
        },
        {
          title: "بيانات العملاء على نطاق واسع",
          body: "جمع بيانات التسجيل الضريبي والتحقق منها عبر قاعدة عملاء كبيرة مشروع حقيقي، وهو السبب الأكثر شيوعًا للتأخير في هذا القطاع.",
        },
        {
          title: "اختبار الدورة المتكررة لا فاتورة واحدة",
          body: "يجب أن يغطي التحقق دورة متكررة كاملة، لأن هناك يظهر الخطأ نفسه مئات المرات.",
        },
      ],
      approachHeading: "كيف نعمل على هذا",
      approach: [
        "تحديد أي كيان يصدر أي فواتير، ونطاق وموعد كل منها",
        "تقييم إعداد الفوترة المتكررة بالتفصيل قبل أي شيء آخر",
        "التخطيط الواقعي لعملية جمع بيانات العملاء، بجداول زمنية",
        "تحديد معالجة رسوم الخدمات والأعمال الطارئة وأي ترتيبات فوترة نيابة عن المُلّاك",
        "اختيار مزوّد معتمد يناسب الحجم المتكرر المرتفع والتنسيق معه",
        "التحقق عبر دورة متكررة كاملة، لا عبر عينة",
        "البقاء خلال أول إقفال شهر كامل بعد الإطلاق",
      ],
      note:
        "تحديد من يصدر الفاتورة في ترتيبات الوكالة أو جمعيات الملاك مسألة قانونية وضريبية. وينبغي تأكيدها مع مستشاريكم، وسننبّه إليها لا أن نفترضها.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default facilities;
