import type { Segment } from "../types";

const logistics: Segment = {
  kind: "industry",
  slug: "logistics",
  label: { en: "Logistics & freight", ar: "الخدمات اللوجستية والشحن" },
  summary: {
    en: "High invoice counts, disbursements and pass-through charges make the line-level detail the difficult part.",
    ar: "أعداد فواتير مرتفعة، ومصروفات مدفوعة نيابةً، ورسوم تمريرية — ما يجعل التفصيل على مستوى البنود هو الجزء الصعب.",
  },
  content: {
    en: {
      h1: "UAE e-invoicing for logistics and freight forwarding.",
      lede:
        "Freight invoicing is high in volume and unusually detailed at line level. A single shipment invoice can carry freight, handling, customs charges, demurrage and disbursements paid on the customer's behalf — each with a different tax treatment. Structured invoicing requires every one of those lines to be explicit and correct.",
      differentHeading: "Why this is harder than the generic case",
      different: [
        {
          title: "Disbursements and pass-through charges",
          body: "Amounts paid on a customer's behalf are treated differently from your own service charges. That distinction has to be represented properly at line level, and it is one of the most common sources of error in this sector.",
        },
        {
          title: "Volume, and what it does to error rates",
          body: "When a business issues thousands of invoices a month, a validation error affecting one percent of them is not a minor issue — it is a daily operational workload. Getting the mapping right matters more here than almost anywhere else.",
        },
        {
          title: "Charges that arrive after the job",
          body: "Demurrage, storage and detention are often known only after the shipment has moved, producing supplementary invoices and adjustments against work already billed.",
        },
      ],
      environmentHeading: "The systems environment we usually find",
      environment: [
        {
          title: "A freight management system alongside accounting",
          body: "Jobs, shipments and charges live in an operational system; the invoice is produced from or alongside the accounting package. The mapping has to bridge both.",
        },
        {
          title: "Rate structures and tariffs held separately",
          body: "Customer-specific tariffs applied at billing time, sometimes manually, which affects how reliably invoice data can be generated automatically.",
        },
        {
          title: "A mix of local and overseas customers",
          body: "Agents, overseas principals and local shippers require different handling in structured invoices.",
        },
      ],
      issuesHeading: "What tends to need resolving",
      issues: [
        {
          title: "Line-level tax treatment",
          body: "Establishing, per charge type, what the correct treatment is and how it is expressed in the structured format. This is scoping work done with your tax advisor, before any integration.",
        },
        {
          title: "Volume testing rather than sample testing",
          body: "Testing three invoices proves very little at this scale. Validation needs to run across a representative volume, including the awkward charge combinations.",
        },
        {
          title: "Rejection handling as an operational process",
          body: "At high volume, rejections need a defined resolution process and an owner from day one, not an ad hoc response when someone notices.",
        },
      ],
      approachHeading: "How we work on this",
      approach: [
        "Catalogue every charge type actually appearing on invoices, and its treatment",
        "Establish scope and deadlines for each entity in the group",
        "Assess how invoice data flows between the operational and accounting systems",
        "Select and coordinate an accredited provider whose commercial model suits high volume",
        "Map and validate at volume, not on samples",
        "Design the rejection-resolution process before go-live, with a named owner",
        "Stay through the first full month-end after go-live",
      ],
      note:
        "Per-invoice pricing models from providers behave very differently at this volume. Reviewing the commercial terms properly is part of the work, not an afterthought.",
      cta: "Check your readiness",
    },
    ar: {
      h1: "الفوترة الإلكترونية في الإمارات للخدمات اللوجستية والشحن.",
      lede:
        "فوترة الشحن مرتفعة الحجم ومفصّلة على مستوى البنود بشكل غير معتاد. فقد تحمل فاتورة شحنة واحدة أجور شحن ومناولة ورسومًا جمركية وغرامات تأخير ومصروفات مدفوعة نيابة عن العميل — لكل منها معاملة ضريبية مختلفة. وتتطلب الفوترة الهيكلية أن يكون كل بند من هذه صريحًا وصحيحًا.",
      differentHeading: "لماذا هذه الفئة أصعب من الحالة العامة",
      different: [
        {
          title: "المصروفات المدفوعة نيابةً والرسوم التمريرية",
          body: "المبالغ المدفوعة نيابة عن العميل تُعامل بشكل مختلف عن رسوم خدماتكم. ويجب تمثيل هذا التمييز بشكل سليم على مستوى البند، وهو من أكثر مصادر الخطأ شيوعًا في هذا القطاع.",
        },
        {
          title: "الحجم، وأثره على معدلات الخطأ",
          body: "حين تصدر المنشأة آلاف الفواتير شهريًا، فإن خطأ تحقق يصيب واحدًا بالمئة منها ليس مسألة هيّنة — بل عبء تشغيلي يومي. وإتقان التحويل هنا أهم منه في أي مكان آخر تقريبًا.",
        },
        {
          title: "رسوم تصل بعد انتهاء العمل",
          body: "غرامات التأخير والتخزين والاحتجاز لا تُعرف غالبًا إلا بعد تحرك الشحنة، ما ينتج فواتير تكميلية وتسويات على عمل سبقت فوترته.",
        },
      ],
      environmentHeading: "بيئة الأنظمة التي نجدها عادةً",
      environment: [
        {
          title: "نظام إدارة شحن إلى جانب المحاسبة",
          body: "الأعمال والشحنات والرسوم تعيش في نظام تشغيلي؛ والفاتورة تُنتَج من البرنامج المحاسبي أو بالتوازي معه. وعلى التحويل أن يجسر بينهما.",
        },
        {
          title: "هياكل الأسعار والتعرفات محفوظة منفصلة",
          body: "تعرفات خاصة بكل عميل تُطبَّق عند الفوترة، أحيانًا يدويًا، ما يؤثر على مدى إمكانية توليد بيانات الفاتورة آليًا بشكل موثوق.",
        },
        {
          title: "مزيج من العملاء المحليين والخارجيين",
          body: "الوكلاء والموكلون في الخارج والشاحنون المحليون يتطلبون معالجة مختلفة في الفواتير الهيكلية.",
        },
      ],
      issuesHeading: "ما يحتاج عادةً إلى معالجة",
      issues: [
        {
          title: "المعاملة الضريبية على مستوى البند",
          body: "تحديد المعاملة الصحيحة لكل نوع رسم وكيفية التعبير عنها في الصيغة الهيكلية. وهذا عمل تحديد نطاق يُنجَز مع مستشاركم الضريبي، قبل أي تكامل.",
        },
        {
          title: "الاختبار بالحجم لا بالعينة",
          body: "اختبار ثلاث فواتير لا يثبت شيئًا يُذكر عند هذا الحجم. فالتحقق يحتاج أن يجري على حجم تمثيلي، بما فيه تركيبات الرسوم الصعبة.",
        },
        {
          title: "معالجة الرفض كعملية تشغيلية",
          body: "عند الحجم المرتفع، تحتاج حالات الرفض إلى عملية معالجة محددة ومسؤول عنها من اليوم الأول، لا استجابة ارتجالية حين ينتبه أحد.",
        },
      ],
      approachHeading: "كيف نعمل على هذا",
      approach: [
        "حصر كل نوع رسم يظهر فعليًا على الفواتير، ومعاملته",
        "تحديد النطاق والمواعيد لكل كيان في المجموعة",
        "تقييم كيفية تدفق بيانات الفاتورة بين النظام التشغيلي والمحاسبي",
        "اختيار مزوّد معتمد يناسب نموذجه التجاري الحجم المرتفع والتنسيق معه",
        "التحويل والتحقق بالحجم لا بالعينات",
        "تصميم عملية معالجة الرفض قبل الإطلاق، مع مسؤول محدد",
        "البقاء خلال أول إقفال شهر كامل بعد الإطلاق",
      ],
      note:
        "نماذج التسعير لكل فاتورة لدى المزوّدين تتصرف بشكل مختلف تمامًا عند هذا الحجم. ومراجعة الشروط التجارية بجدية جزء من العمل لا أمر ثانوي.",
      cta: "تحقّقوا من جاهزيتكم",
    },
  },
};

export default logistics;
