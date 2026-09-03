import type { Article } from "../types";

export const uaeEInvoicingPenalties: Article = {
  slug: "uae-e-invoicing-penalties",
  published: "2026-09-03",
  readingMinutes: 6,
  content: {
    en: {
      title: "What missing your UAE e-invoicing deadline actually costs",
      description:
        "The UAE has published its e-invoicing penalty schedule in Cabinet Decision No. 106 of 2025. Here is every fine, what triggers it, and how the amounts stack up over a year of doing nothing.",
      intro:
        "For most of 2025 the honest answer to 'what happens if we miss the deadline' was that nobody could give you a number. That changed when Cabinet Decision No. 106 of 2025 was published. There are now six specific violations with six specific fines, and the structure of them tells you something useful about what the Federal Tax Authority is actually policing.",
      body: [
        { type: "h2", text: "The six penalties" },
        {
          type: "p",
          text: "These are the violations and amounts as published by the Ministry of Finance. Nothing here is our interpretation of the numbers — the numbers are the numbers.",
        },
        {
          type: "table",
          head: ["Violation", "Penalty"],
          rows: [
            [
              "Failure to implement the Electronic Invoicing System, or to appoint an Accredited Service Provider, within the prescribed timeline",
              "AED 5,000 per month, or part of a month",
            ],
            [
              "Failure to issue or transmit an electronic invoice through the system within the prescribed timeline",
              "AED 100 per invoice, capped at AED 5,000 per month",
            ],
            [
              "Failure to issue or transmit an electronic credit note through the system within the prescribed timeline",
              "AED 100 per credit note, capped at AED 5,000 per month",
            ],
            [
              "Issuer's failure to notify the Authority of a system failure within the prescribed timeline",
              "AED 1,000 per day, or part of a day",
            ],
            [
              "Recipient's failure to notify the Authority of a system failure within the prescribed timeline",
              "AED 1,000 per day, or part of a day",
            ],
            [
              "Failure to notify your Accredited Service Provider of changes to your data within the prescribed timeline",
              "AED 1,000 per day, or part of a day",
            ],
          ],
          note: "Source: Cabinet Decision No. 106 of 2025, as published by the Ministry of Finance.",
        },
        { type: "h2", text: "The one that catches people" },
        {
          type: "p",
          text: "The first line is the one that matters most, and it is the one businesses tend to misread. AED 5,000 a month sounds survivable — an annoyance, not an emergency. The problem is the phrase 'or part of a month', and the fact that the clock starts at your deadline, not at the moment somebody notices.",
        },
        {
          type: "p",
          text: "If your appointment deadline is 31 March 2027 and you appoint a provider on 2 April, you are into a new month, and that is a charge. Nothing about the penalty requires the Authority to contact you first, and nothing about it pauses while you are getting quotes or waiting for a provider to come back to you. It simply runs.",
        },
        { type: "h2", text: "What a year of drift looks like" },
        {
          type: "p",
          text: "Take a business under AED 50 million in annual revenue — so an appointment deadline of 31 March 2027 and a go-live date of 1 July 2027. Say it does nothing until December 2027, which is not an unusual amount of slippage for a compliance project that nobody owns internally.",
        },
        {
          type: "ul",
          items: [
            "April through November 2027 with no provider appointed and no system implemented: eight months at AED 5,000 — AED 40,000.",
            "July through November 2027, now also past the go-live date and not transmitting invoices: at 50 or more invoices a month, that hits the AED 5,000 monthly cap every month — AED 25,000.",
            "Running total by the start of December 2027: roughly AED 65,000, before anyone has looked at whether the credit-note line applies as well.",
          ],
        },
        {
          type: "callout",
          title: "Read this as an illustration, not a ruling",
          text: "How these penalties are applied in a specific case is the Federal Tax Authority's call, not ours. The arithmetic above assumes both lines run concurrently once you are past go-live, and assumes enough invoice volume to reach the monthly cap. Your own exposure depends on your dates, your volumes, and the Authority's assessment. If you want a number you can put in front of a board, that is a conversation with your tax advisor — and we will happily sit in it.",
        },
        { type: "h2", text: "When your deadlines actually fall" },
        {
          type: "p",
          text: "The penalties only mean something once you know which dates apply to you. There are three bands, and the appointment date is always the earlier of the two — the one worth putting in a calendar.",
        },
        {
          type: "table",
          head: ["Who you are", "Appoint a provider by", "Live by"],
          rows: [
            ["Annual revenue of AED 50 million or more", "30 October 2026", "1 January 2027"],
            ["Annual revenue under AED 50 million", "31 March 2027", "1 July 2027"],
            ["Government entities", "31 March 2027", "1 October 2027"],
          ],
          note: "The 30 October 2026 appointment date for large businesses was extended from an original 31 July 2026. The 1 January 2027 go-live date did not move.",
        },
        {
          type: "p",
          text: "Voluntary adoption ahead of your date is allowed and carries no penalty. The penalty regime bites only once you are mandatorily in scope and have missed a prescribed timeline.",
        },
        { type: "h2", text: "What the penalty structure tells you" },
        {
          type: "p",
          text: "Look at where the money is. The heaviest recurring charge is not for getting an invoice wrong — it is for not having appointed a provider and stood the system up. The per-invoice fines are capped at AED 5,000 a month; the appointment failure is AED 5,000 a month on its own, uncapped in duration, and runs for as long as you are not compliant.",
        },
        {
          type: "p",
          text: "That is a deliberate signal. The Authority is not primarily trying to fine you for imperfect invoices in your first weeks of operation. It is trying to make sure that, by the date, you have a provider and a working connection. Which means the expensive mistake is not a technical one. It is a scheduling one.",
        },
        { type: "h2", text: "The quiet lines at the bottom" },
        {
          type: "p",
          text: "The last three violations are the ones almost nobody plans for, because they are not about the launch — they are about the years afterwards. Two of them are about telling the Authority when your system fails, and they cost AED 1,000 a day. The third is about telling your provider when your own data changes.",
        },
        {
          type: "p",
          text: "That last one is worth sitting with. Change your trade licence details, restructure an entity, change a TRN, and you now have a notification obligation with a daily fine attached. This is not something an integration project closes out. It is an operating responsibility that someone has to own permanently, which is precisely the part most businesses have not thought about yet.",
        },
        { type: "h2", text: "What to do about it" },
        {
          type: "p",
          text: "If your revenue is at or above AED 50 million, your appointment deadline is 30 October 2026 and the useful question is whether the provider you are about to choose is the right one — because switching later is a second integration, not an administrative change.",
        },
        {
          type: "p",
          text: "If you are under AED 50 million, you have until 31 March 2027, and the honest advice is that the date is not the constraint. The constraint is that provider selection, data mapping and a real test cycle take longer than people expect, and everyone in the country under the threshold shares the same deadline. The queue in early 2027 will not be short.",
        },
        {
          type: "p",
          text: "CoreholdSolutions holds no reseller margin with any accredited provider, which is the entire reason our recommendation is worth anything. If you want to know which providers actually fit your systems and your volumes, that is the conversation to have.",
        },
      ],
      sources: [
        {
          label: "Cabinet Decision No. 106 of 2025 on Violations and Administrative Penalties — Ministry of Finance (PDF)",
          url: "https://mof.gov.ae/wp-content/uploads/2025/12/Cabinet-Decision-Violations-and-Penalties-eInvoicing-final-version-en-8.12.25.pdf",
        },
        {
          label: "Cabinet Decision No. 106 of 2025 — Federal Tax Authority legislation library (PDF)",
          url: "https://tax.gov.ae/Datafolder/Files/Legislation/2025/Cabinet%20Decision%20No.%20106%20of%202025.pdf",
        },
      ],
    },
    ar: {
      title: "ما الذي يكلّفه فعليًا تفويت موعد الفوترة الإلكترونية في الإمارات",
      description:
        "نشرت الإمارات جدول عقوبات الفوترة الإلكترونية بموجب قرار مجلس الوزراء رقم 106 لسنة 2025. إليكم كل غرامة، وما الذي يستوجبها، وكيف تتراكم المبالغ خلال عام كامل من التقاعس.",
      intro:
        "لمعظم عام 2025 كانت الإجابة الصادقة عن سؤال «ماذا يحدث إذا فوّتنا الموعد النهائي» أن لا أحد يستطيع إعطاءكم رقمًا. تغيّر ذلك مع نشر قرار مجلس الوزراء رقم 106 لسنة 2025. توجد الآن ست مخالفات محددة بست غرامات محددة، وبنية هذه الغرامات تخبركم بشيء مفيد عمّا تراقبه الهيئة الاتحادية للضرائب فعليًا.",
      body: [
        { type: "h2", text: "العقوبات الست" },
        {
          type: "p",
          text: "هذه هي المخالفات والمبالغ كما نشرتها وزارة المالية. لا شيء هنا هو تفسيرنا للأرقام — الأرقام هي الأرقام.",
        },
        {
          type: "table",
          head: ["المخالفة", "الغرامة"],
          rows: [
            [
              "التخلّف عن تطبيق نظام الفوترة الإلكترونية، أو عن تعيين مزوّد خدمة معتمد، ضمن المهلة الزمنية المقررة",
              "5,000 درهم عن كل شهر أو جزء من شهر",
            ],
            [
              "التخلّف عن إصدار أو إرسال فاتورة إلكترونية عبر النظام ضمن المهلة الزمنية المقررة",
              "100 درهم عن كل فاتورة، بحد أقصى 5,000 درهم شهريًا",
            ],
            [
              "التخلّف عن إصدار أو إرسال إشعار دائن إلكتروني عبر النظام ضمن المهلة الزمنية المقررة",
              "100 درهم عن كل إشعار دائن، بحد أقصى 5,000 درهم شهريًا",
            ],
            [
              "تخلّف مُصدر الفاتورة عن إبلاغ الهيئة بعطل في النظام ضمن المهلة الزمنية المقررة",
              "1,000 درهم عن كل يوم أو جزء من يوم",
            ],
            [
              "تخلّف مُستلم الفاتورة عن إبلاغ الهيئة بعطل في النظام ضمن المهلة الزمنية المقررة",
              "1,000 درهم عن كل يوم أو جزء من يوم",
            ],
            [
              "التخلّف عن إبلاغ مزوّدكم المعتمد بالتغييرات في بياناتكم ضمن المهلة الزمنية المقررة",
              "1,000 درهم عن كل يوم أو جزء من يوم",
            ],
          ],
          note: "المصدر: قرار مجلس الوزراء رقم 106 لسنة 2025، كما نشرته وزارة المالية.",
        },
        { type: "h2", text: "البند الذي يوقع أصحاب الأعمال" },
        {
          type: "p",
          text: "البند الأول هو الأهم، وهو الذي تميل المنشآت إلى سوء قراءته. مبلغ 5,000 درهم شهريًا يبدو محتملًا — إزعاجًا لا أزمة. المشكلة في عبارة «أو جزء من شهر»، وفي أن الساعة تبدأ من موعدكم النهائي، لا من لحظة ملاحظة أحد للأمر.",
        },
        {
          type: "p",
          text: "إذا كان موعد تعيينكم 31 مارس 2027 وعيّنتم مزوّدًا في 2 أبريل، فأنتم في شهر جديد، وهذا يعني رسمًا. لا شيء في العقوبة يستوجب أن تتواصل الهيئة معكم أولًا، ولا شيء فيها يتوقف بينما تحصلون على عروض أسعار أو تنتظرون رد مزوّد. إنها تسري ببساطة.",
        },
        { type: "h2", text: "كيف يبدو عام كامل من التأجيل" },
        {
          type: "p",
          text: "لنأخذ منشأة بإيرادات سنوية أقل من 50 مليون درهم — أي موعد تعيين في 31 مارس 2027 وموعد تفعيل في 1 يوليو 2027. ولنفترض أنها لا تفعل شيئًا حتى ديسمبر 2027، وهو تأخير غير استثنائي لمشروع امتثال لا يملك أحد داخل المنشأة مسؤوليته.",
        },
        {
          type: "ul",
          items: [
            "من أبريل حتى نوفمبر 2027 دون تعيين مزوّد ودون تطبيق النظام: ثمانية أشهر بواقع 5,000 درهم — أي 40,000 درهم.",
            "من يوليو حتى نوفمبر 2027، وقد تجاوزت الآن موعد التفعيل أيضًا دون إرسال فواتير: عند 50 فاتورة أو أكثر شهريًا، يصل ذلك إلى الحد الأقصى الشهري البالغ 5,000 درهم كل شهر — أي 25,000 درهم.",
            "الإجمالي التراكمي بحلول بداية ديسمبر 2027: نحو 65,000 درهم، قبل أن ينظر أحد في إمكانية سريان بند إشعارات الدائن كذلك.",
          ],
        },
        {
          type: "callout",
          title: "اقرؤوا هذا كتوضيح لا كحكم قطعي",
          text: "كيفية تطبيق هذه العقوبات في حالة بعينها هو قرار الهيئة الاتحادية للضرائب، لا قرارنا. تفترض الحسابات أعلاه أن البندين يسريان معًا بعد تجاوز موعد التفعيل، وأن حجم الفواتير يكفي للوصول إلى الحد الأقصى الشهري. تعرّضكم الفعلي يعتمد على مواعيدكم وأحجامكم وتقييم الهيئة. إن أردتم رقمًا تعرضونه على مجلس إدارتكم، فتلك محادثة مع مستشاركم الضريبي — وسيسعدنا حضورها معكم.",
        },
        { type: "h2", text: "متى تقع مواعيدكم فعليًا" },
        {
          type: "p",
          text: "لا تعني العقوبات شيئًا إلا بعد معرفة المواعيد التي تنطبق عليكم. توجد ثلاث شرائح، وموعد التعيين هو دائمًا الأقرب من الاثنين — وهو الأجدر بوضعه في التقويم.",
        },
        {
          type: "table",
          head: ["من أنتم", "عيّنوا مزوّدًا بحلول", "فعّلوا بحلول"],
          rows: [
            ["إيرادات سنوية 50 مليون درهم فأكثر", "30 أكتوبر 2026", "1 يناير 2027"],
            ["إيرادات سنوية أقل من 50 مليون درهم", "31 مارس 2027", "1 يوليو 2027"],
            ["الجهات الحكومية", "31 مارس 2027", "1 أكتوبر 2027"],
          ],
          note: "تم تمديد موعد التعيين للشركات الكبرى في 30 أكتوبر 2026 من موعد أصلي في 31 يوليو 2026. أما موعد التفعيل في 1 يناير 2027 فلم يتغيّر.",
        },
        {
          type: "p",
          text: "التبني الطوعي قبل موعدكم مسموح ولا يترتب عليه أي عقوبة. لا يسري نظام العقوبات إلا بعد دخولكم النطاق الإلزامي وتفويتكم مهلة مقررة.",
        },
        { type: "h2", text: "ما تخبركم به بنية العقوبات" },
        {
          type: "p",
          text: "انظروا إلى أين تتجه الأموال. أثقل رسم متكرر ليس عن إصدار فاتورة بشكل خاطئ — بل عن عدم تعيين مزوّد وعدم إنشاء النظام. غرامات الفاتورة الواحدة محدودة بسقف 5,000 درهم شهريًا؛ أما تخلّف التعيين فهو 5,000 درهم شهريًا بمفرده، دون سقف زمني، ويستمر طالما بقيتم غير ممتثلين.",
        },
        {
          type: "p",
          text: "هذه إشارة مقصودة. الهيئة لا تحاول أساسًا تغريمكم على فواتير غير مثالية في أسابيعكم الأولى من التشغيل. إنها تحاول التأكد من أن لديكم، بحلول الموعد، مزوّدًا واتصالًا يعمل. ما يعني أن الخطأ المكلف ليس خطأً تقنيًا. إنه خطأ في الجدولة.",
        },
        { type: "h2", text: "البنود الهادئة في الأسفل" },
        {
          type: "p",
          text: "المخالفات الثلاث الأخيرة هي التي لا يخطط لها أحد تقريبًا، لأنها لا تتعلق بالإطلاق — بل بالسنوات التي تليه. اثنتان منها تتعلقان بإبلاغ الهيئة عند تعطّل نظامكم، وتكلّف كل منهما 1,000 درهم يوميًا. أما الثالثة فتتعلق بإبلاغ مزوّدكم عند تغيّر بياناتكم الخاصة.",
        },
        {
          type: "p",
          text: "هذه الأخيرة تستحق التوقف عندها. غيّروا تفاصيل رخصتكم التجارية، أو أعيدوا هيكلة كيان، أو غيّروا رقمًا ضريبيًا، وستكون لديكم فجأة التزام إبلاغ مرتبط بغرامة يومية. هذا ليس أمرًا يُغلق ملفه بانتهاء مشروع التكامل. إنها مسؤولية تشغيلية دائمة يجب أن يملكها أحد على الدوام — وهذا تحديدًا الجزء الذي لم تفكر فيه معظم المنشآت بعد.",
        },
        { type: "h2", text: "ما ينبغي فعله حيال ذلك" },
        {
          type: "p",
          text: "إذا كانت إيراداتكم 50 مليون درهم فأكثر، فموعد تعيينكم هو 30 أكتوبر 2026، والسؤال المفيد هو ما إذا كان المزوّد الذي توشكون على اختياره هو المناسب فعلًا — لأن التبديل لاحقًا يعني تكاملًا ثانيًا، لا تعديلًا إداريًا.",
        },
        {
          type: "p",
          text: "وإذا كانت إيراداتكم أقل من 50 مليون درهم، فأمامكم حتى 31 مارس 2027، والنصيحة الصادقة أن الموعد ليس هو القيد الحقيقي. القيد هو أن اختيار المزوّد وتحويل البيانات ودورة اختبار حقيقية تستغرق وقتًا أطول مما يتوقعه الناس، وكل من هو دون هذا الحد في البلاد يشارككم الموعد نفسه. لن تكون القائمة قصيرة في أوائل 2027.",
        },
        {
          type: "p",
          text: "لا تحتفظ كورهولد سوليوشنز بأي هامش إعادة بيع مع أي مزوّد معتمد، وهذا هو السبب الكامل الذي يجعل توصيتنا ذات قيمة. إن أردتم معرفة أي المزوّدين يناسب فعليًا أنظمتكم وأحجامكم، فتلك هي المحادثة التي ينبغي أن نجريها.",
        },
      ],
      sources: [
        {
          label:
            "قرار مجلس الوزراء رقم 106 لسنة 2025 بشأن المخالفات والجزاءات الإدارية — وزارة المالية (PDF)",
          url: "https://mof.gov.ae/wp-content/uploads/2025/12/Cabinet-Decision-Violations-and-Penalties-eInvoicing-final-version-en-8.12.25.pdf",
        },
        {
          label: "قرار مجلس الوزراء رقم 106 لسنة 2025 — مكتبة التشريعات لدى الهيئة الاتحادية للضرائب (PDF)",
          url: "https://tax.gov.ae/Datafolder/Files/Legislation/2025/Cabinet%20Decision%20No.%20106%20of%202025.pdf",
        },
      ],
    },
  },
};
