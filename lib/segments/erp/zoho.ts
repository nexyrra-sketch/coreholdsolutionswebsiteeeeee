import type { Segment } from "../types";

const zoho: Segment = {
  kind: "erp",
  slug: "zoho",
  label: { en: "Zoho Books", ar: "Zoho Books" },
  summary: {
    en: "What the UAE mandate means if you invoice from Zoho Books, and what has to change.",
    ar: "ما يعنيه التفويض الإماراتي إن كنتم تصدرون الفواتير من Zoho Books، وما الذي يجب تغييره.",
  },
  content: {
    en: {
      h1: "How UAE e-invoicing affects businesses using Zoho Books.",
      lede: "Zoho Books is a common starting point in the UAE and generally a workable one. The mandate does not require you to leave it. It requires your invoice data to reach an accredited provider in a structured format, with fields your current invoices may not be capturing consistently.",
      differentHeading: "What actually changes, and what does not",
      different: [
        {
          title: "What does not change",
          body: "Your invoicing screen, your workflow and your reporting. Zoho remains where invoices are raised.",
        },
        {
          title: "What does change",
          body: "Invoice data has to be delivered to an accredited provider in the required structured format, carrying buyer tax details and classification a PDF never needed.",
        },
        {
          title: "What has to be verified",
          body: "Whether your Zoho organisation is configured to hold those fields, and whether your customer records are complete enough to validate.",
        },
      ],
      environmentHeading: "Common situations we see",
      environment: [
        {
          title: "Zoho Books alone",
          body: "Usually the most straightforward path, where the work is about data quality and the provider connection.",
        },
        {
          title: "Zoho Books inside a wider Zoho suite",
          body: "Where CRM, Inventory or Subscriptions also touch invoice data, scope extends across those modules.",
        },
        {
          title: "Multiple Zoho organisations",
          body: "One per entity is common in UAE groups, and each carries its own scope and deadline question.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Customer tax registration completeness",
          body: "The single most common blocker, and one you can start fixing before any provider is chosen.",
        },
        {
          title: "Tax and item configuration",
          body: "Inconsistent tax rates or free-text entries where structured values are expected.",
        },
        {
          title: "Automation and templates",
          body: "Recurring invoices and automation rules need checking so a mapping issue is not repeated at scale.",
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
      note: "To be clear about what we are and are not claiming: we do not sell a pre-built Zoho Books product or plugin. We assess your setup, select and coordinate an accredited provider, and make the connection work. Where a provider advertises Zoho Books support, we test whether it fits your configuration rather than taking the claim at face value.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "كيف تؤثر الفوترة الإلكترونية في الإمارات على الأنشطة التي تستخدم Zoho Books.",
      lede: "Zoho Books نقطة انطلاق شائعة في الإمارات وقابلة للعمل عمومًا. والتفويض لا يلزمكم بتركه، بل يلزم بيانات فواتيركم بالوصول إلى مزوّد معتمد بصيغة هيكلية، بحقول قد لا تلتقطها فواتيركم الحالية باتساق.",
      differentHeading: "ما الذي يتغير فعلًا، وما الذي لا يتغير",
      different: [
        {
          title: "ما لا يتغير",
          body: "شاشة الفوترة لديكم وسير عملكم وتقاريركم. ويبقى Zoho مكان إصدار الفواتير.",
        },
        {
          title: "ما يتغير",
          body: "على بيانات الفاتورة أن تصل إلى مزوّد معتمد بالصيغة الهيكلية المطلوبة، حاملةً بيانات المشتري الضريبية والتصنيف الذي لم يحتجه ملف PDF.",
        },
        {
          title: "ما يجب التحقق منه",
          body: "ما إذا كانت مؤسستكم في Zoho مهيأة للاحتفاظ بتلك الحقول، وما إذا كانت سجلات عملائكم مكتملة بما يكفي لاجتياز التحقق.",
        },
      ],
      environmentHeading: "الحالات الشائعة التي نراها",
      environment: [
        {
          title: "Zoho Books وحده",
          body: "عادةً المسار الأيسر، حيث يتعلق العمل بجودة البيانات والاتصال بالمزوّد.",
        },
        {
          title: "Zoho Books ضمن حزمة Zoho أوسع",
          body: "حين تلامس وحدات CRM أو المخزون أو الاشتراكات بيانات الفاتورة أيضًا، يمتد النطاق عبر تلك الوحدات.",
        },
        {
          title: "مؤسسات Zoho متعددة",
          body: "واحدة لكل كيان أمر شائع في مجموعات الإمارات، ولكل منها سؤال نطاقها وموعدها.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "اكتمال التسجيل الضريبي للعملاء",
          body: "العائق الأكثر شيوعًا، ويمكنكم البدء بمعالجته قبل اختيار أي مزوّد.",
        },
        {
          title: "تهيئة الضريبة والأصناف",
          body: "نسب ضريبية غير متسقة أو مدخلات نصية حرة حيث تُتوقع قيم هيكلية.",
        },
        {
          title: "الأتمتة والقوالب",
          body: "تحتاج الفواتير المتكررة وقواعد الأتمتة إلى فحص حتى لا تتكرر مشكلة التحويل على نطاق واسع.",
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
      note: "توضيحًا لما ندّعيه وما لا ندّعيه: نحن لا نبيع منتجًا أو إضافة جاهزة لـ Zoho Books. بل نقيّم إعدادكم، ونختار مزوّدًا معتمدًا وننسّق معه، ونجعل الاتصال يعمل. وحين يعلن مزوّد دعمه لـ Zoho Books، نختبر ما إذا كان يناسب تهيئتكم بدلًا من قبول الادعاء كما هو.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default zoho;
