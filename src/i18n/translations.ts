export type Lang = 'en' | 'ar';

const en = {
  // Nav
  nav_home: 'Home',
  nav_menu: 'Our Menu',
  nav_branches: 'Branches',
  nav_story: 'Our Story',
  nav_order: 'Order in the App',

  // Hero
  hero_eyebrow: 'Since 1974 · Proudly Saudi',
  hero_title_1: 'AL BAIK',
  hero_title_2: 'البيك',
  hero_sub: 'On our customers\u2019 lips every time, everywhere in the world. The taste Saudi Arabia grew up with — reimagined for the web.',
  hero_cta_menu: 'Explore the menu',
  hero_cta_branches: 'Find a branch',

  // Story strip
  story_eyebrow: 'Since 1974',
  story_title: 'Our Story',
  story_body:
    'The ALBAIK story began in 1974 in Jeddah, when the late Shakour AbuGhazalah saw the need for high-quality, affordable food served fast and courteously in a clean, inviting environment. Putting his hard-earned savings into the venture, he wrote the first chapter of ALBAIK — the first to introduce the Broast chicken concept to all of Saudi Arabia.',
  story_link: 'Read the full story',

  // Purpose
  purpose_eyebrow: 'Driven by our',
  purpose_title: 'ALBAIK Purpose',
  purpose_body:
    'We shall always protect the AMANA that God has blessed us with, and work together to nourish and spread it responsibly, so its goodness can be enjoyed by everyone, everywhere the world over.',
  vision_title: 'Vision',
  vision_body: 'Putting AL BAIK and البيك on our customers\u2019 lips every time, everywhere in the world.',
  mission_title: 'Mission',
  mission_body: '100% ALBAIK Customer Love at all times.',

  // Values
  values_eyebrow: 'Who we are',
  values_title: 'ALBAIK Core Values',
  values_body: 'The ALBAIK values form the basis of the company culture. They ensure the brand, Team Members, and Customers are always protected.',
  value_1: 'Quality of Life',
  value_2: 'Ethics',
  value_3: 'Solidarity',
  value_4: 'Excellence',

  // Signature items
  sig_eyebrow: 'The legends',
  sig_title: 'Signature Favorites',
  sig_body: 'The meals that made the queues famous — and the garlic sauce with a fan base of its own.',
  sig_cta: 'See the full menu',

  // App
  app_eyebrow: 'Skip the queue',
  app_title: 'Order in the ALBAIK App',
  app_body: 'Browse the full menu, order ahead, and pick up fresh. Available on iOS, Android, and Huawei.',

  // Menu page
  menu_title: 'Our Menu',
  menu_sub: 'Every item with calories, in both languages — the information our customers search for every day.',
  menu_search: 'Search the menu\u2026',
  menu_all: 'All',
  menu_spicy_only: 'Spicy only',
  menu_sort_default: 'Featured',
  menu_sort_cal_asc: 'Calories: low to high',
  menu_sort_cal_desc: 'Calories: high to low',
  menu_cal: 'kcal',
  menu_spicy: 'Spicy',
  menu_empty: 'No items match your search. Try a different word or clear the filters.',
  menu_modal_nutrition: 'Nutrition',
  menu_modal_calories: 'Calories',
  menu_modal_order: 'Order in the ALBAIK App',
  menu_close: 'Close',

  cat_chicken: 'Chicken Meals',
  cat_sandwiches: 'Sandwiches & Burgers',
  cat_seafood: 'Seafood',
  cat_sides: 'Sides & Sauces',
  cat_desserts: 'Desserts',
  cat_drinks: 'Beverages',

  // Branches
  branches_title: 'ALBAIK Branches',
  branches_sub: 'Sample of branches across the Kingdom. Filter by city to find yours.',
  branches_all: 'All cities',
  br_dinein: 'Dine-in',
  br_drivethru: 'Drive-thru',
  br_family: 'Family section',
  br_hours: 'Open daily',

  // Story page
  storyp_title: 'A Story of AMANA',
  storyp_sub: 'Fifty years of feeding the Kingdom — from one kitchen in Jeddah to a national icon.',
  tl_1974_t: '1974 — The first chapter',
  tl_1974_b: 'Shakour AbuGhazalah opens in Jeddah, introducing the Broast chicken concept to Saudi Arabia for the very first time.',
  tl_growth_t: 'Growing with the Kingdom',
  tl_growth_b: 'Branch by branch, ALBAIK becomes part of daily life in Jeddah, then Makkah and Madinah — serving pilgrims and families alike.',
  tl_love_t: 'A cultural icon',
  tl_love_b: 'The queues become part of the identity. The garlic sauce becomes legend. ALBAIK grows into the most loved meal in Saudi Arabia.',
  tl_today_t: 'Today — everywhere in the Kingdom',
  tl_today_b: 'From the Red Sea coast to Riyadh and the Eastern Province, the same promise holds: quality food, honest prices, served with love.',
  suggestion_t: 'Built on your suggestions',
  suggestion_b: 'For over 45 years, the suggestion boxes in every outlet have been overflowing. Every comment is analyzed, researched, and tested — the menu our customers enjoy today was shaped by the customers themselves.',

  // Footer
  footer_service: 'Customer Service',
  footer_contact: 'Contact Us',
  footer_links: 'Explore',
  footer_legal: '\u00a9 2026 ALBAIK Food Systems Company. ALBAIK\u00ae and logo are registered trademarks of ELBAIK Food Systems Company S.A.',
  footer_concept: 'Redesign concept by Eiman Wasim — a design proposal, not an official ALBAIK product.',
  footer_saudi: 'Proudly Saudi Made',
};

const ar: Record<TranslationKey, string> = {
  nav_home: 'الرئيسية',
  nav_menu: 'قائمتنا',
  nav_branches: 'الفروع',
  nav_story: 'قصتنا',
  nav_order: 'اطلب من التطبيق',

  hero_eyebrow: 'منذ ١٩٧٤ · صنع في السعودية بكل فخر',
  hero_title_1: 'AL BAIK',
  hero_title_2: 'البيك',
  hero_sub: 'على شفاه عملائنا في كل مرة، وفي كل مكان حول العالم. الطعم الذي كبرت معه المملكة — بتجربة رقمية جديدة.',
  hero_cta_menu: 'استكشف القائمة',
  hero_cta_branches: 'ابحث عن فرع',

  story_eyebrow: 'منذ ١٩٧٤',
  story_title: 'قصتنا',
  story_body:
    'بدأت قصة البيك عام ١٩٧٤ في مدينة جدة، عندما رأى المرحوم شكور أبو غزالة الحاجة إلى طعامٍ عالي الجودة وبأسعار مناسبة، يُقدَّم بسرعة ولباقة في بيئة نظيفة ومرحّبة. وضع كل مدخراته في هذا المشروع، وكتب الفصل الأول من قصة البيك — أول من قدّم مفهوم دجاج البروست في المملكة العربية السعودية.',
  story_link: 'اقرأ القصة كاملة',

  purpose_eyebrow: 'يقودنا',
  purpose_title: 'هدف البيك',
  purpose_body:
    'سنحافظ دائمًا على الأمانة التي أنعم الله بها علينا، وسنعمل معًا على تنميتها ونشرها بمسؤولية، لكي ينعم بخيرها الجميع في كل مكان حول العالم.',
  vision_title: 'رؤيتنا',
  vision_body: 'وضع AL BAIK و البيك على شفاه عملائنا في كل مرة، وفي كل مكان حول العالم.',
  mission_title: 'رسالتنا',
  mission_body: 'حب عملاء البيك ١٠٠٪ في كل الأوقات.',

  values_eyebrow: 'من نحن',
  values_title: 'قيم البيك الأساسية',
  values_body: 'تشكّل قيم البيك أساس ثقافة الشركة، وتضمن حماية العلامة التجارية وأعضاء الفريق والعملاء في كل الأوقات.',
  value_1: 'جودة الحياة',
  value_2: 'الأخلاق',
  value_3: 'التضامن',
  value_4: 'التميّز',

  sig_eyebrow: 'الأساطير',
  sig_title: 'الأطباق المميزة',
  sig_body: 'الوجبات التي جعلت الطوابير مشهورة — وصلصة الثوم التي لها جمهورها الخاص.',
  sig_cta: 'شاهد القائمة كاملة',

  app_eyebrow: 'تجاوز الطابور',
  app_title: 'اطلب من تطبيق البيك',
  app_body: 'تصفّح القائمة كاملة، اطلب مسبقًا، واستلم طلبك طازجًا. متوفر على iOS وAndroid وHuawei.',

  menu_title: 'قائمتنا',
  menu_sub: 'كل صنف مع سعراته الحرارية، وباللغتين — المعلومات التي يبحث عنها عملاؤنا كل يوم.',
  menu_search: 'ابحث في القائمة…',
  menu_all: 'الكل',
  menu_spicy_only: 'الحار فقط',
  menu_sort_default: 'المميز',
  menu_sort_cal_asc: 'السعرات: من الأقل للأعلى',
  menu_sort_cal_desc: 'السعرات: من الأعلى للأقل',
  menu_cal: 'سعرة',
  menu_spicy: 'حار',
  menu_empty: 'لا توجد نتائج مطابقة لبحثك. جرّب كلمة أخرى أو امسح عوامل التصفية.',
  menu_modal_nutrition: 'القيمة الغذائية',
  menu_modal_calories: 'السعرات الحرارية',
  menu_modal_order: 'اطلب من تطبيق البيك',
  menu_close: 'إغلاق',

  cat_chicken: 'وجبات الدجاج',
  cat_sandwiches: 'الساندويتشات والبرجر',
  cat_seafood: 'المأكولات البحرية',
  cat_sides: 'الأطباق الجانبية والصلصات',
  cat_desserts: 'الحلويات',
  cat_drinks: 'المشروبات',

  branches_title: 'فروع البيك',
  branches_sub: 'نماذج من الفروع في أنحاء المملكة. صفِّ حسب المدينة للعثور على فرعك.',
  branches_all: 'كل المدن',
  br_dinein: 'تناول في الفرع',
  br_drivethru: 'الاستلام من السيارة',
  br_family: 'قسم العائلات',
  br_hours: 'يوميًا',

  storyp_title: 'قصة أمانة',
  storyp_sub: 'خمسون عامًا من إطعام المملكة — من مطبخ واحد في جدة إلى أيقونة وطنية.',
  tl_1974_t: '١٩٧٤ — الفصل الأول',
  tl_1974_b: 'يفتتح شكور أبو غزالة مطعمه في جدة، مقدّمًا مفهوم دجاج البروست إلى المملكة العربية السعودية لأول مرة.',
  tl_growth_t: 'ننمو مع المملكة',
  tl_growth_b: 'فرعًا بعد فرع، يصبح البيك جزءًا من الحياة اليومية في جدة، ثم مكة المكرمة والمدينة المنورة — يخدم الحجاج والعائلات على حد سواء.',
  tl_love_t: 'أيقونة ثقافية',
  tl_love_b: 'تصبح الطوابير جزءًا من الهوية، وتتحول صلصة الثوم إلى أسطورة. ينمو البيك ليصبح الوجبة الأكثر حبًا في السعودية.',
  tl_today_t: 'اليوم — في كل أنحاء المملكة',
  tl_today_b: 'من ساحل البحر الأحمر إلى الرياض والمنطقة الشرقية، يبقى الوعد نفسه: طعام عالي الجودة، بأسعار صادقة، يُقدَّم بحب.',
  suggestion_t: 'بُني على اقتراحاتكم',
  suggestion_b: 'لأكثر من ٤٥ عامًا، ظلّت صناديق الاقتراحات في كل فروعنا ممتلئة. كل اقتراح يُحلَّل ويُدرَس ويُختبَر — القائمة التي يستمتع بها عملاؤنا اليوم صنعها العملاء أنفسهم.',

  footer_service: 'خدمة العملاء',
  footer_contact: 'اتصل بنا',
  footer_links: 'استكشف',
  footer_legal: '© ٢٠٢٦ شركة أنظمة الأغذية البيك. البيك® والشعار علامتان تجاريتان مسجلتان لشركة ELBAIK Food Systems Company S.A.',
  footer_concept: 'تصور إعادة تصميم من إيمان وسيم — مقترح تصميمي وليس منتجًا رسميًا من البيك.',
  footer_saudi: 'صنع في السعودية بكل فخر',
};

export type TranslationKey = keyof typeof en;

export const translations: Record<Lang, Record<TranslationKey, string>> = { en, ar };
