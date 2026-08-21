export interface DesignItem {
  code: string;
  type: 'logo' | 'cover';
  nameEn: string;
  nameSi: string;
  category: string;
  tags: string[];
  bgGradient: string;
  accentColor: string;
  textColor: string;
  subtitleEn: string;
  subtitleSi: string;
  imageUrl?: string;
}

export const LOGO_DESIGNS: DesignItem[] = [
  {
    code: 'L-1',
    type: 'logo',
    nameEn: 'Minimalist Emblem',
    nameSi: 'සරල සහ නවීන ලාංඡනය',
    category: 'Minimal',
    tags: ['Sleek', 'Modern', 'Clean'],
    bgGradient: 'from-amber-500 to-orange-600',
    accentColor: '#EA580C',
    textColor: '#FFFFFF',
    subtitleEn: 'Clean typography with refined geometric mark',
    subtitleSi: 'පැහැදිලි අකුරු සහ ජ්‍යාමිතික හැඩතල',
    imageUrl: '/logos/logo-1.png'
  },
  {
    code: 'L-2',
    type: 'logo',
    nameEn: 'Luxury Gold Monogram',
    nameSi: 'සුඛෝපභෝගී රන්වන් මොනෝග්‍රෑම්',
    category: 'Luxury',
    tags: ['Premium', 'Gold', 'Elegant'],
    bgGradient: 'from-slate-900 via-neutral-900 to-amber-950',
    accentColor: '#F59E0B',
    textColor: '#FCD34D',
    subtitleEn: 'Interlocked metallic monogram with serif accents',
    subtitleSi: 'රන්වන් පැහැැති සම්භාව්‍ය මෝස්තරය',
    imageUrl: '/logos/logo-2.png'
  },
  {
    code: 'L-3',
    type: 'logo',
    nameEn: 'Modern Crest & Crown',
    nameSi: 'නවීන ඔටුන්න සහ පලිහ ලාංඡනය',
    category: 'Classic',
    tags: ['Royal', 'Heritage', 'Bold'],
    bgGradient: 'from-orange-600 to-rose-700',
    accentColor: '#F97316',
    textColor: '#FFFFFF',
    subtitleEn: 'Royal badge for fashion and boutique brands',
    subtitleSi: 'ඇඳුම් සහ විලාසිතා සඳහා රාජකීය මුද්‍රාව',
    imageUrl: '/logos/logo-3.png'
  },
  {
    code: 'L-4',
    type: 'logo',
    nameEn: 'Vibrant Botanical Floral',
    nameSi: 'කාන්තා සහ රූපලාවන්‍ය මල් මෝස්තරය',
    category: 'Beauty',
    tags: ['Organic', 'Floral', 'Soft'],
    bgGradient: 'from-rose-400 to-orange-400',
    accentColor: '#FB923C',
    textColor: '#FFFFFF',
    subtitleEn: 'Soft floral wreath perfect for cosmetics & gifts',
    subtitleSi: 'රූපලාවන්‍ය සහ ත්‍යාග ව්‍යාපාර සඳහා',
    imageUrl: '/logos/logo-4.png'
  },
  {
    code: 'L-5',
    type: 'logo',
    nameEn: 'Geometric Tech & Store',
    nameSi: 'ඩිජිටල් සහ ටෙක්නොලොජි ලාංඡනය',
    category: 'Tech',
    tags: ['Futuristic', 'Sharp', 'Store'],
    bgGradient: 'from-blue-950 via-slate-900 to-orange-950',
    accentColor: '#38BDF8',
    textColor: '#E0F2FE',
    subtitleEn: 'High-tech hexagonal badge with sharp lines',
    subtitleSi: 'ඉලෙක්ට්‍රොනික් සහ තාක්ෂණික සන්නාම',
    imageUrl: '/logos/logo-5.png'
  },
  {
    code: 'L-6',
    type: 'logo',
    nameEn: 'Handcrafted Signature',
    nameSi: 'අතින් ලියන ලද අත්සන මෝස්තරය',
    category: 'Creative',
    tags: ['Script', 'Bespoke', 'Personal'],
    bgGradient: 'from-stone-800 to-orange-900',
    accentColor: '#FDBA74',
    textColor: '#FFEDD5',
    subtitleEn: 'Elegant handwritten signature style',
    subtitleSi: 'කලාත්මක සහ පෞද්ගලික ස්පර්ශය',
    imageUrl: '/logos/logo-6.png'
  },
  {
    code: 'L-7',
    type: 'logo',
    nameEn: 'Classic Royal Seal',
    nameSi: 'සම්පූර්ණ පාරම්පරික මුද්‍රාව',
    category: 'Vintage',
    tags: ['Stamp', 'Authentic', 'Retro'],
    bgGradient: 'from-red-950 to-orange-800',
    accentColor: '#FECACA',
    textColor: '#FFFFFF',
    subtitleEn: 'Circular authentic stamp with star badges',
    subtitleSi: 'විශ්වාසනීය පැරණි මුද්‍රා මෝස්තරය',
    imageUrl: '/logos/logo-7.png'
  },
  {
    code: 'L-8',
    type: 'logo',
    nameEn: 'Abstract Neo-Gradient',
    nameSi: 'නව්‍ය වර්ණවත් රූපීය ලාංඡනය',
    category: 'Modern',
    tags: ['Gradient', '3D', 'Trendy'],
    bgGradient: 'from-violet-600 via-orange-500 to-amber-400',
    accentColor: '#DDD6FE',
    textColor: '#FFFFFF',
    subtitleEn: 'Dynamic fluid ribbon design for lifestyle products',
    subtitleSi: 'ජීවන රටා සහ විලාසිතා සන්නාම',
    imageUrl: '/logos/logo-8.png'
  },
  {
    code: 'L-9',
    type: 'logo',
    nameEn: 'Baking & Sweet Studio',
    nameSi: 'කේක් සහ අතුරුපස ලාංඡනය',
    category: 'Food',
    tags: ['Sweet', 'Warm', 'Delight'],
    bgGradient: 'from-amber-600 to-orange-500',
    accentColor: '#FEF3C7',
    textColor: '#FFFFFF',
    subtitleEn: 'Warm bakery icon with chef crown detail',
    subtitleSi: 'කේක්, රසකැවිලි සහ ආහාර ව්‍යාපාර සඳහා',
    imageUrl: '/logos/logo-9.png'
  },
  {
    code: 'L-10',
    type: 'logo',
    nameEn: 'Elegant Monoline Shield',
    nameSi: 'එකම රේඛාවෙන් අඳින ලද පලිහ',
    category: 'Minimal',
    tags: ['LineArt', 'Chic', 'Clean'],
    bgGradient: 'from-slate-800 to-zinc-900',
    accentColor: '#FB923C',
    textColor: '#F8FAFC',
    subtitleEn: 'Continuous line art emblem with sleek finish',
    subtitleSi: 'අවම සහ නවීන මෝස්තර ශෛලිය',
    imageUrl: '/logos/logo-10.png'
  }
];

export const COVER_DESIGNS: DesignItem[] = [
  {
    code: 'C-1',
    type: 'cover',
    nameEn: 'E-Commerce Grid Showcase',
    nameSi: 'භාණ්ඩ එකතුව ප්‍රදර්ශනය කරන කවරය',
    category: 'Store Header',
    tags: ['Multi-Product', 'Sales', 'Clean Grid'],
    bgGradient: 'from-orange-600 via-orange-500 to-amber-500',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF',
    subtitleEn: 'Feature top products, discount badge & call to action',
    subtitleSi: 'ප්‍රධාන භාණ්ඩ සහ වට්ටම් ප්‍රදර්ශනය',
    imageUrl: '/covers/Cover Photo-1.png'
  },
  {
    code: 'C-2',
    type: 'cover',
    nameEn: 'Minimalist Fashion Banner',
    nameSi: 'ඇඳුම් විලාසිතා අවම කවරය',
    category: 'Showcase',
    tags: ['Fashion', 'Editorial', 'Sleek'],
    bgGradient: 'from-zinc-900 via-stone-900 to-orange-950',
    accentColor: '#FDBA74',
    textColor: '#FFFFFF',
    subtitleEn: 'High-end editorial layout with bold title overlay',
    subtitleSi: 'ඉහළ ප්‍රමිතියේ ඇඳුම් පේජ් සඳහා',
    imageUrl: '/covers/Cover Photo-2.png'
  },
  {
    code: 'C-3',
    type: 'cover',
    nameEn: 'Luxury Gold & Navy Cover',
    nameSi: 'රන් සහ නේවී බ්ලූ සුඛෝපභෝගී කවරය',
    category: 'Boutique',
    tags: ['Gold Accent', 'Boutique', 'Royal'],
    bgGradient: 'from-slate-950 via-blue-950 to-amber-950',
    accentColor: '#F59E0B',
    textColor: '#FDE68A',
    subtitleEn: 'Deep navy background with shimmering gold trim',
    subtitleSi: 'රාජකීය නේවී සහ රන්වන් එකතුව',
    imageUrl: '/covers/Cover Photo-3.png'
  },
  {
    code: 'C-4',
    type: 'cover',
    nameEn: 'Vibrant Discount & Promo Header',
    nameSi: 'විශේෂ වට්ටම් සහ දූපත්මාලා කවරය',
    category: 'Promo',
    tags: ['Offer', 'Islandwide Delivery', 'Bright'],
    bgGradient: 'from-orange-500 via-amber-500 to-rose-500',
    accentColor: '#FEF08A',
    textColor: '#FFFFFF',
    subtitleEn: 'Highlighted islandwide delivery & order badges',
    subtitleSi: 'දිවයින පුරා බෙදාහැරීම් විස්තර සහිතව',
    imageUrl: '/covers/Cover Photo-4.png'
  },
  {
    code: 'C-5',
    type: 'cover',
    nameEn: 'Handmade & Craft Story',
    nameSi: 'අත්කම් සහ හස්ත කර්මාන්ත කවරය',
    category: 'Lifestyle',
    tags: ['Artisanal', 'Warm', 'Custom'],
    bgGradient: 'from-amber-900 via-orange-800 to-stone-900',
    accentColor: '#FFEDD5',
    textColor: '#FFFFFF',
    subtitleEn: 'Warm rustic look with social contacts banner',
    subtitleSi: 'නිවසේදී සාදන ලද නිෂ්පාදන සඳහා',
    imageUrl: '/covers/Cover Photo-5.png'
  },
  {
    code: 'C-6',
    type: 'cover',
    nameEn: 'Cosmetics & Beauty Bloom',
    nameSi: 'රූපලාවන්‍ය සහ ආලේපන කවරය',
    category: 'Boutique',
    tags: ['Cosmetics', 'Glow', 'Pink & Orange'],
    bgGradient: 'from-rose-500 via-orange-400 to-amber-300',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF',
    subtitleEn: 'Soft radiant banner for skin care & makeup',
    subtitleSi: 'රූපලාවන්‍ය සහ කාන්තා භාණ්ඩ',
    imageUrl: '/covers/Cover Photo-6.png'
  },
  {
    code: 'C-7',
    type: 'cover',
    nameEn: 'Dark Neon Tech Header',
    nameSi: 'නියොන් එළි සහ ඩිජිටල් කවරය',
    category: 'Store Header',
    tags: ['Gadgets', 'Dark Theme', 'Glow'],
    bgGradient: 'from-slate-950 via-slate-900 to-orange-950',
    accentColor: '#FB923C',
    textColor: '#F8FAFC',
    subtitleEn: 'Sleek dark theme banner for mobile & tech items',
    subtitleSi: 'ජංගම දුරකථන සහ තාක්ෂණික අයිතම',
    imageUrl: '/covers/Cover Photo-7.png'
  },
  {
    code: 'C-8',
    type: 'cover',
    nameEn: 'Bakery & Dessert Showcase',
    nameSi: 'කේක් සහ අතුරුපස කවරය',
    category: 'Showcase',
    tags: ['Cakes', 'Sweet', 'Pastry'],
    bgGradient: 'from-orange-700 via-amber-600 to-yellow-600',
    accentColor: '#FEF3C7',
    textColor: '#FFFFFF',
    subtitleEn: 'Mouth-watering layout showcasing cake catalog',
    subtitleSi: 'කේක් නිර්මාණ සහ අතුරුපස ප්‍රදර්ශනය',
    imageUrl: '/covers/Cover Photo-8.png'
  },
  {
    code: 'C-9',
    type: 'cover',
    nameEn: 'Modern Geometry Dual Banner',
    nameSi: 'ජ්‍යාමිතික ද්විත්ව කවර මෝස්තරය',
    category: 'Promo',
    tags: ['Modern', 'Diagonal', 'Sharp'],
    bgGradient: 'from-stone-900 via-orange-900 to-amber-900',
    accentColor: '#F97316',
    textColor: '#FFFFFF',
    subtitleEn: 'Diagonal color split with central feature logo box',
    subtitleSi: 'ද්විත්ව වර්ණ සහ පාලන ලාංඡන කොටස',
    imageUrl: '/covers/Cover Photo-9.png'
  },
  {
    code: 'C-10',
    type: 'cover',
    nameEn: 'Premium VIP Club Cover',
    nameSi: 'ප්‍රමුඛ පෙළේ වී.අයි.පී කවරය',
    category: 'Boutique',
    tags: ['VIP', 'Gold Trim', 'Elite'],
    bgGradient: 'from-zinc-950 via-neutral-900 to-amber-950',
    accentColor: '#F59E0B',
    textColor: '#FEF3C7',
    subtitleEn: 'High luxury design with gold standard border badges',
    subtitleSi: 'ඉහළ සුඛෝපභෝගී VIP සන්නාම කවරය',
    imageUrl: '/covers/Cover Photo-10.png'
  }
];
