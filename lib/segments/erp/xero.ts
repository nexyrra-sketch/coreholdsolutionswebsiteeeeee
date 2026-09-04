import type { Segment } from "../types";

const xero: Segment = {
  kind: "erp",
  slug: "xero",
  label: { en: "Xero", ar: "Xero" },
  summary: {
    en: "What the UAE mandate means if you invoice from Xero, and what has to change.",
    ar: "ما يعنيه التفويض الإماراتي إن كنتم تصدرون الفواتير من Xero، وما الذي يجب تغييره.",
  },
  content: {
    en: {
      h1: "How UAE e-invoicing affects businesses using Xero.",
      lede: "Xero users are usually in a good position: the ledger is clean, the data is accessible, and the practical work is about completeness and the connection rather than the platform. The mandate does not ask you to replace it.",
      differentHeading: "What actually changes, and what does not",
      different: [
        {
          title: "What does not change",
          body: "How you invoice, reconcile and report inside Xero.",
        },
        {
          title: "What does change",
          body: "Structured invoice data must reach an accredited provider, carrying buyer tax details and classification that a PDF invoice never had to hold.",
        },
        {
          title: "What has to be verified",
          body: "Whether your contact records and tax rates are complete and consistent enough for structured invoices to validate first time.",
        },
      ],
      environmentHeading: "Common situations we see",
      environment: [
        {
          title: "Xero with standard UAE VAT setup",
          body: "The most common and most straightforward case.",
        },
        {
          title: "Xero with third-party invoicing apps",
          body: "Where invoices originate in a connected app rather than Xero itself, scope extends to that app.",
        },
        {
          title: "Multiple Xero organisations",
          body: "Separate organisations per entity, each with its own scope and deadline.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Contact records missing tax registration details",
          body: "Very common, and the first thing worth fixing regardless of which provider you eventually appoint.",
        },
        {
          title: "Tax rate consistency",
          body: "Where rates have been applied ad hoc over time rather than from a controlled list.",
        },
        {
          title: "Invoices raised outside Xero",
          body: "Any invoicing happening in spreadsheets or apps needs bringing into scope explicitly.",
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
      note: "To be clear about what we are and are not claiming: we do not sell a pre-built Xero product or plugin. We assess your setup, select and coordinate an accredited provider, and make the connection work. Where a provider advertises Xero support, we test whether it fits your configuration rather than taking the claim at face value.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "كيف تؤثر الفوترة الإلكترونية في الإمارات على الأنشطة التي تستخدم Xero.",
      lede: "مستخدمو Xero في وضع جيد عادةً: الدفتر نظيف، والبيانات متاحة، والعمل العملي يتعلق بالاكتمال والاتصال لا بالمنصة. والتفويض لا يطلب استبدالها.",
      differentHeading: "ما الذي يتغير فعلًا، وما الذي لا يتغير",
      different: [
        {
          title: "ما لا يتغير",
          body: "طريقة الفوترة والمطابقة والتقارير داخل Xero.",
        },
        {
          title: "ما يتغير",
          body: "يجب أن تصل بيانات الفاتورة الهيكلية إلى مزوّد معتمد، حاملةً بيانات المشتري الضريبية والتصنيف الذي لم يكن ملف PDF مضطرًا لحمله.",
        },
        {
          title: "ما يجب التحقق منه",
          body: "ما إذا كانت سجلات جهات الاتصال ونسب الضريبة مكتملة ومتسقة بما يكفي لاجتياز الفواتير الهيكلية التحقق من أول مرة.",
        },
      ],
      environmentHeading: "الحالات الشائعة التي نراها",
      environment: [
        {
          title: "Xero بإعداد ضريبة القيمة المضافة الإماراتية القياسي",
          body: "الحالة الأكثر شيوعًا والأيسر.",
        },
        {
          title: "Xero مع تطبيقات فوترة من طرف ثالث",
          body: "حين تنشأ الفواتير في تطبيق مرتبط لا في Xero نفسه، يمتد النطاق إلى ذلك التطبيق.",
        },
        {
          title: "مؤسسات Xero متعددة",
          body: "مؤسسات منفصلة لكل كيان، لكل منها نطاقها وموعدها.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "سجلات جهات اتصال تنقصها بيانات التسجيل الضريبي",
          body: "شائع جدًا، وأول ما يستحق الإصلاح بغض النظر عن المزوّد الذي ستعيّنونه لاحقًا.",
        },
        {
          title: "اتساق نسب الضريبة",
          body: "حين طُبّقت النسب ارتجالًا بمرور الوقت لا من قائمة مضبوطة.",
        },
        {
          title: "فواتير تُصدر خارج Xero",
          body: "أي فوترة تجري في جداول بيانات أو تطبيقات يجب إدخالها في النطاق صراحةً.",
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
      note: "توضيحًا لما ندّعيه وما لا ندّعيه: نحن لا نبيع منتجًا أو إضافة جاهزة لـ Xero. بل نقيّم إعدادكم، ونختار مزوّدًا معتمدًا وننسّق معه، ونجعل الاتصال يعمل. وحين يعلن مزوّد دعمه لـ Xero، نختبر ما إذا كان يناسب تهيئتكم بدلًا من قبول الادعاء كما هو.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default xero;
