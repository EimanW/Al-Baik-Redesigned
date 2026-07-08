export type Category = 'chicken' | 'sandwiches' | 'seafood' | 'sides' | 'desserts' | 'drinks';

export interface MenuItem {
  id: string;
  en: string;
  ar: string;
  descEn: string;
  descAr: string;
  calories: number;
  spicy: boolean;
  category: Category;
  featured?: boolean;
}

export const categories: Category[] = ['chicken', 'sandwiches', 'seafood', 'sides', 'desserts', 'drinks'];

export const menu: MenuItem[] = [
  // Chicken meals
  { id: 'chicken-4pc', en: '4-Piece Chicken Meal', ar: 'وجبة دجاج ٤ قطع', descEn: 'Four pieces of the famous crispy Broast chicken with fries, a bun, and garlic sauce.', descAr: 'أربع قطع من دجاج البروست المقرمش الشهير مع البطاطس وخبزة وصلصة الثوم.', calories: 980, spicy: false, category: 'chicken', featured: true },
  { id: 'chicken-4pc-spicy', en: '4-Piece Spicy Chicken Meal', ar: 'وجبة دجاج حار ٤ قطع', descEn: 'The classic four-piece meal with the signature spicy coating.', descAr: 'الوجبة الكلاسيكية بأربع قطع مع التتبيلة الحارة المميزة.', calories: 1000, spicy: true, category: 'chicken' },
  { id: 'chicken-8pc', en: '8-Piece Chicken Meal', ar: 'وجبة دجاج ٨ قطع', descEn: 'Eight pieces of crispy Broast chicken with two buns, fries, and four garlic sauces — built for sharing.', descAr: 'ثماني قطع من دجاج البروست المقرمش مع خبزتين وبطاطس وأربع صلصات ثوم — مثالية للمشاركة.', calories: 1960, spicy: false, category: 'chicken', featured: true },
  { id: 'chicken-8pc-spicy', en: '8-Piece Spicy Chicken Meal', ar: 'وجبة دجاج حار ٨ قطع', descEn: 'The family favorite, spicy and crunchy to perfection.', descAr: 'المفضلة لدى العائلة، حارة ومقرمشة إلى حد الكمال.', calories: 2000, spicy: true, category: 'chicken' },
  { id: 'nuggets-10', en: 'Chicken Nuggets Meal (10 pc)', ar: 'وجبة ناجت الدجاج (١٠ قطع)', descEn: 'Ten golden chicken fillet nuggets with fries and nugget sauce.', descAr: 'عشر قطع ذهبية من ناجت فيليه الدجاج مع البطاطس وصلصة الناجت.', calories: 640, spicy: false, category: 'chicken' },
  { id: 'nuggets-10-spicy', en: 'Spicy Chicken Nuggets Meal', ar: 'وجبة ناجت الدجاج الحار', descEn: 'The nuggets meal with a spicy kick.', descAr: 'وجبة الناجت بنكهة حارة مميزة.', calories: 660, spicy: true, category: 'chicken' },

  // Sandwiches & burgers
  { id: 'big-baik', en: 'Big Baik Sandwich', ar: 'ساندويتش بيج بيك', descEn: 'A ginormous chicken fillet breast with coleslaw, pickles, and sauce in a fresh bun.', descAr: 'صدر فيليه دجاج ضخم مع سلطة الكول سلو والمخلل والصلصة في خبز طازج.', calories: 580, spicy: false, category: 'sandwiches', featured: true },
  { id: 'big-baik-spicy', en: 'Big Baik Spicy', ar: 'بيج بيك حار', descEn: 'The Big Baik with the spicy fillet everyone lines up for.', descAr: 'البيج بيك مع الفيليه الحار الذي يصطف الجميع من أجله.', calories: 600, spicy: true, category: 'sandwiches' },
  { id: 'fillet-cheese', en: 'Chicken Fillet with Cheese', ar: 'فيليه دجاج بالجبن', descEn: 'Chicken fillet breast with cheese, fresh coleslaw, pickles, and sauce.', descAr: 'صدر فيليه دجاج مع الجبن والكول سلو الطازج والمخلل والصلصة.', calories: 540, spicy: false, category: 'sandwiches' },
  { id: 'fillet-cheese-spicy', en: 'Spicy Chicken Fillet with Cheese', ar: 'فيليه دجاج حار بالجبن', descEn: 'The cheesy fillet sandwich, spicy edition.', descAr: 'ساندويتش الفيليه بالجبن، النسخة الحارة.', calories: 560, spicy: true, category: 'sandwiches' },
  { id: 'grilled-fillet', en: 'Grilled Chicken Fillet Sandwich', ar: 'ساندويتش فيليه دجاج مشوي', descEn: 'Grilled chicken fillet with garlic sauce and pickles — the lighter legend.', descAr: 'فيليه دجاج مشوي مع صلصة الثوم والمخلل — الأسطورة الأخف.', calories: 420, spicy: false, category: 'sandwiches' },
  { id: 'nuggets-wrap', en: 'Chicken Nuggets Wrap', ar: 'راب ناجت الدجاج', descEn: 'Chicken fillet nuggets wrapped in Arabic bread with garlic sauce.', descAr: 'ناجت فيليه الدجاج ملفوف بالخبز العربي مع صلصة الثوم.', calories: 510, spicy: false, category: 'sandwiches' },

  // Seafood
  { id: 'fish-burger', en: 'Fish Fillet Burger', ar: 'برجر فيليه السمك', descEn: 'Golden fish fillet with the signature sauce in a soft bun.', descAr: 'فيليه سمك ذهبي مع الصلصة المميزة في خبز طري.', calories: 470, spicy: false, category: 'seafood', featured: true },
  { id: 'fish-meal', en: 'Fish Fillet Meal', ar: 'وجبة فيليه السمك', descEn: 'Crispy fish fillet pieces with fries, bun, and tartar sauce.', descAr: 'قطع فيليه سمك مقرمشة مع البطاطس وخبزة وصلصة التارتار.', calories: 720, spicy: false, category: 'seafood' },
  { id: 'shrimp-meal', en: 'Shrimp Meal (10 pc)', ar: 'وجبة الروبيان (١٠ قطع)', descEn: 'Ten crispy shrimp with fries, bun, and cocktail sauce.', descAr: 'عشر قطع روبيان مقرمشة مع البطاطس وخبزة وصلصة الكوكتيل.', calories: 690, spicy: false, category: 'seafood' },
  { id: 'fish-wrap-spicy', en: 'Spicy Fish Fillet Wrap', ar: 'راب فيليه السمك الحار', descEn: 'A long spicy fish fillet wrapped in Arabic bread with sauce, pickles, and fries.', descAr: 'فيليه سمك حار طويل ملفوف بالخبز العربي مع الصلصة والمخلل والبطاطس.', calories: 550, spicy: true, category: 'seafood' },

  // Sides & sauces
  { id: 'garlic-sauce', en: 'Garlic Sauce', ar: 'صلصة الثوم', descEn: 'The signature garlic sauce that will always have you asking for more.', descAr: 'صلصة الثوم المميزة التي ستجعلك تطلب المزيد دائمًا.', calories: 120, spicy: false, category: 'sides', featured: true },
  { id: 'fries', en: 'French Fries', ar: 'بطاطس مقلية', descEn: 'Golden crispy French fries, served piping hot.', descAr: 'بطاطس مقلية ذهبية مقرمشة، تُقدَّم ساخنة.', calories: 320, spicy: false, category: 'sides' },
  { id: 'fries-spicy', en: 'Spicy Fries', ar: 'بطاطس حارة', descEn: 'Golden fries with a spicy seasoning.', descAr: 'بطاطس ذهبية بتتبيلة حارة.', calories: 330, spicy: true, category: 'sides' },
  { id: 'coleslaw', en: 'Coleslaw Salad', ar: 'سلطة الكول سلو', descEn: 'Shredded cabbage and carrots in a creamy dressing.', descAr: 'ملفوف وجزر مبشور مع صلصة كريمية.', calories: 150, spicy: false, category: 'sides' },
  { id: 'hummus', en: 'Hummus', ar: 'حمص', descEn: 'Creamy and rich, made from crushed chickpeas with tahini.', descAr: 'كريمي وغني، محضّر من الحمص المهروس مع الطحينة.', calories: 180, spicy: false, category: 'sides' },
  { id: 'tahina', en: 'Tahina Sauce', ar: 'صلصة الطحينة', descEn: 'A delicious addition to any of our specialities.', descAr: 'إضافة لذيذة إلى أيٍّ من أطباقنا المميزة.', calories: 130, spicy: false, category: 'sides' },
  { id: 'corn-cup', en: 'Corn in a Cup', ar: 'ذرة في كوب', descEn: 'Sweet corn served warm with a pack of butter.', descAr: 'ذرة حلوة تُقدَّم دافئة مع قطعة زبدة.', calories: 140, spicy: false, category: 'sides' },

  // Desserts
  { id: 'soft-choc', en: 'Soft Serve with Chocolate', ar: 'آيس كريم بالشوكولاتة', descEn: 'Creamy vanilla soft serve topped with chocolate syrup.', descAr: 'آيس كريم فانيلا كريمي مغطى بصوص الشوكولاتة.', calories: 240, spicy: false, category: 'desserts' },
  { id: 'soft-straw', en: 'Soft Serve with Strawberry', ar: 'آيس كريم بالفراولة', descEn: 'Creamy vanilla soft serve topped with strawberry syrup.', descAr: 'آيس كريم فانيلا كريمي مغطى بصوص الفراولة.', calories: 235, spicy: false, category: 'desserts' },
  { id: 'date-cookies', en: 'Saudi Date Cookies (2 pc)', ar: 'كوكيز التمر السعودي (قطعتان)', descEn: 'Premium cookies filled with Saudi dates.', descAr: 'كوكيز فاخر محشو بالتمر السعودي.', calories: 210, spicy: false, category: 'desserts' },

  // Drinks
  { id: 'pepsi', en: 'Pepsi Can (360 ml)', ar: 'بيبسي (٣٦٠ مل)', descEn: 'ALBAIK-branded 360 ml Pepsi can.', descAr: 'علبة بيبسي ٣٦٠ مل بعلامة البيك.', calories: 150, spicy: false, category: 'drinks' },
  { id: 'iced-tea', en: 'Lemon Iced Tea (320 ml)', ar: 'شاي مثلج بالليمون (٣٢٠ مل)', descEn: 'Non-carbonated lemon iced tea.', descAr: 'شاي مثلج بالليمون غير غازي.', calories: 90, spicy: false, category: 'drinks' },
  { id: 'juice', en: 'Fruit Juice', ar: 'عصير فواكه', descEn: 'A selection of mango, orange, apple, and mixed fruit juices.', descAr: 'تشكيلة من عصائر المانجو والبرتقال والتفاح والفواكه المشكلة.', calories: 130, spicy: false, category: 'drinks' },
  { id: 'water', en: 'Mineral Water', ar: 'مياه معدنية', descEn: 'Pure hydration.', descAr: 'انتعاش نقي.', calories: 0, spicy: false, category: 'drinks' },
];
