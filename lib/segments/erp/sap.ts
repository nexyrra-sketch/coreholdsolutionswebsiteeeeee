import type { Segment } from "../types";

const sap: Segment = {
  kind: "erp",
  slug: "sap",
  label: { en: "SAP", ar: "SAP" },
  summary: {
    en: "Scoping, custom fields and change control make SAP environments a design exercise before an integration.",
    ar: "تحديد النطاق والحقول المخصصة وضبط التغيير تجعل بيئات SAP تمرينًا تصميميًا قبل أن تكون تكاملًا.",
  },
  content: {
    en: {
      h1: "How UAE e-invoicing affects businesses running SAP.",
      lede: "With SAP the technical path is well understood; the difficulty is that no two SAP instances are the same. What matters is your configuration, your custom fields, your document types and your release process — not the product name on the licence.",
      differentHeading: "What actually changes, and what does not",
      different: [
        {
          title: "What does not change",
          body: "Your core finance processes and the way SAP runs your business.",
        },
        {
          title: "What does change",
          body: "Billing documents have to yield structured invoice data in the required format, delivered to an accredited provider, with fields that may not currently be populated.",
        },
        {
          title: "What has to be designed",
          body: "How the extraction works against your document types, and how the change fits your existing transport and testing discipline.",
        },
      ],
      environmentHeading: "Common situations we see",
      environment: [
        {
          title: "SAP S/4HANA or ECC",
          body: "The version materially changes the options available, and it is the first thing to establish.",
        },
        {
          title: "Heavy customisation",
          body: "Custom billing document types and Z-fields are normal and need cataloguing before mapping.",
        },
        {
          title: "Multiple company codes",
          body: "Each may carry its own tax registration, scope and deadline.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Establishing which document types are in scope",
          body: "Not every billing document is an invoice for this purpose, and getting that boundary right early avoids rework.",
        },
        {
          title: "Fields the format needs that SAP is not currently populating",
          body: "Common, and usually a configuration and master-data task rather than development.",
        },
        {
          title: "Fitting the work into release cycles",
          body: "An ERP running the business cannot absorb ad hoc changes; the integration has to respect existing governance.",
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
      note: "To be clear about what we are and are not claiming: we do not sell a pre-built SAP product or plugin. We assess your setup, select and coordinate an accredited provider, and make the connection work. Where a provider advertises SAP support, we test whether it fits your configuration rather than taking the claim at face value.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "كيف تؤثر الفوترة الإلكترونية في الإمارات على الأنشطة التي تشغّل SAP.",
      lede: "مع SAP يكون المسار التقني مفهومًا جيدًا؛ لكن الصعوبة أن لا نسختين من SAP متطابقتان. وما يهم هو تهيئتكم وحقولكم المخصصة وأنواع مستنداتكم وعملية الإصدار لديكم — لا اسم المنتج على الترخيص.",
      differentHeading: "ما الذي يتغير فعلًا، وما الذي لا يتغير",
      different: [
        {
          title: "ما لا يتغير",
          body: "عملياتكم المالية الأساسية وطريقة إدارة SAP لأعمالكم.",
        },
        {
          title: "ما يتغير",
          body: "على مستندات الفوترة أن تنتج بيانات فاتورة هيكلية بالصيغة المطلوبة، تُسلَّم إلى مزوّد معتمد، بحقول قد لا تكون مملوءة حاليًا.",
        },
        {
          title: "ما يجب تصميمه",
          body: "كيفية عمل الاستخراج مقابل أنواع مستنداتكم، وكيف يتوافق التغيير مع انضباط النقل والاختبار القائم لديكم.",
        },
      ],
      environmentHeading: "الحالات الشائعة التي نراها",
      environment: [
        {
          title: "SAP S/4HANA أو ECC",
          body: "الإصدار يغيّر الخيارات المتاحة جوهريًا، وهو أول ما يجب تحديده.",
        },
        {
          title: "تخصيص كثيف",
          body: "أنواع مستندات فوترة مخصصة وحقول Z أمر طبيعي ويحتاج حصرًا قبل التحويل.",
        },
        {
          title: "رموز شركات متعددة",
          body: "قد يحمل كل منها تسجيله الضريبي ونطاقه وموعده.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "تحديد أنواع المستندات ضمن النطاق",
          body: "ليس كل مستند فوترة فاتورة لهذا الغرض، وضبط هذا الحد مبكرًا يجنّب إعادة العمل.",
        },
        {
          title: "حقول تتطلبها الصيغة ولا يملؤها SAP حاليًا",
          body: "أمر شائع، وهو عادةً مهمة تهيئة وبيانات أساسية لا تطوير.",
        },
        {
          title: "ملاءمة العمل لدورات الإصدار",
          body: "نظام يدير الأعمال لا يحتمل تغييرات ارتجالية؛ وعلى التكامل احترام الحوكمة القائمة.",
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
      note: "توضيحًا لما ندّعيه وما لا ندّعيه: نحن لا نبيع منتجًا أو إضافة جاهزة لـ SAP. بل نقيّم إعدادكم، ونختار مزوّدًا معتمدًا وننسّق معه، ونجعل الاتصال يعمل. وحين يعلن مزوّد دعمه لـ SAP، نختبر ما إذا كان يناسب تهيئتكم بدلًا من قبول الادعاء كما هو.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default sap;
