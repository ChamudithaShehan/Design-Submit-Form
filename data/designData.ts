export interface DesignItem {
  code: string;
  type: 'logo' | 'cover';
  nameEn: string;
  nameSi: string;
  imageUrl?: string;
}

export const LOGO_DESIGNS: DesignItem[] = [
  {
    code: 'L-1',
    type: 'logo',
    nameEn: 'Minimalist Emblem',
    nameSi: 'සරල සහ නවීන ලාංඡනය',

    imageUrl: '/logos/logo-1.png'
  },
  {
    code: 'L-2',
    type: 'logo',
    nameEn: 'Luxury Gold Monogram',
    nameSi: 'සුඛෝපභෝගී රන්වන් මොනෝග්‍රෑම්',

    imageUrl: '/logos/logo-2.png'
  },
  {
    code: 'L-3',
    type: 'logo',
    nameEn: 'Modern Crest & Crown',
    nameSi: 'නවීන ඔටුන්න සහ පලිහ ලාංඡනය',

    imageUrl: '/logos/logo-3.png'
  },
  {
    code: 'L-4',
    type: 'logo',
    nameEn: 'Vibrant Botanical Floral',
    nameSi: 'කාන්තා සහ රූපලාවන්‍ය මල් මෝස්තරය',

    imageUrl: '/logos/logo-4.png'
  },
  {
    code: 'L-5',
    type: 'logo',
    nameEn: 'Geometric Tech & Store',
    nameSi: 'ඩිජිටල් සහ ටෙක්නොලොජි ලාංඡනය',

    imageUrl: '/logos/logo-5.png'
  },
  {
    code: 'L-6',
    type: 'logo',
    nameEn: 'Handcrafted Signature',
    nameSi: 'අතින් ලියන ලද අත්සන මෝස්තරය',

    imageUrl: '/logos/logo-6.png'
  },
  {
    code: 'L-7',
    type: 'logo',
    nameEn: 'Classic Royal Seal',
    nameSi: 'සම්පූර්ණ පාරම්පරික මුද්‍රාව',

    imageUrl: '/logos/logo-7.png'
  },
  {
    code: 'L-8',
    type: 'logo',
    nameEn: 'Abstract Neo-Gradient',
    nameSi: 'නව්‍ය වර්ණවත් රූපීය ලාංඡනය',

    imageUrl: '/logos/logo-8.png'
  },
  {
    code: 'L-9',
    type: 'logo',
    nameEn: 'Baking & Sweet Studio',
    nameSi: 'කේක් සහ අතුරුපස ලාංඡනය',

    imageUrl: '/logos/logo-9.png'
  },
  {
    code: 'L-10',
    type: 'logo',
    nameEn: 'Elegant Monoline Shield',
    nameSi: 'එකම රේඛාවෙන් අඳින ලද පලිහ',

    imageUrl: '/logos/logo-10.png'
  }
];

export const COVER_DESIGNS: DesignItem[] = [
  {
    code: 'C-1',
    type: 'cover',
    nameEn: 'E-Commerce Grid Showcase',
    nameSi: 'භාණ්ඩ එකතුව ප්‍රදර්ශනය කරන කවරය',

    imageUrl: '/covers/Cover Photo-1.png'
  },
  {
    code: 'C-2',
    type: 'cover',
    nameEn: 'Minimalist Fashion Banner',
    nameSi: 'ඇඳුම් විලාසිතා අවම කවරය',

    imageUrl: '/covers/Cover Photo-2.png'
  },
  {
    code: 'C-3',
    type: 'cover',
    nameEn: 'Luxury Gold & Navy Cover',
    nameSi: 'රන් සහ නේවී බ්ලූ සුඛෝපභෝගී කවරය',

    imageUrl: '/covers/Cover Photo-3.png'
  },
  {
    code: 'C-4',
    type: 'cover',
    nameEn: 'Vibrant Discount & Promo Header',
    nameSi: 'විශේෂ වට්ටම් සහ දූපත්මාලා කවරය',

    imageUrl: '/covers/Cover Photo-4.png'
  },
  {
    code: 'C-5',
    type: 'cover',
    nameEn: 'Handmade & Craft Story',
    nameSi: 'අත්කම් සහ හස්ත කර්මාන්ත කවරය',

    imageUrl: '/covers/Cover Photo-5.png'
  },
  {
    code: 'C-6',
    type: 'cover',
    nameEn: 'Cosmetics & Beauty Bloom',
    nameSi: 'රූපලාවන්‍ය සහ ආලේපන කවරය',

    imageUrl: '/covers/Cover Photo-6.png'
  },
  {
    code: 'C-7',
    type: 'cover',
    nameEn: 'Dark Neon Tech Header',
    nameSi: 'නියොන් එළි සහ ඩිජිටල් කවරය',

    imageUrl: '/covers/Cover Photo-7.png'
  },
  {
    code: 'C-8',
    type: 'cover',
    nameEn: 'Bakery & Dessert Showcase',
    nameSi: 'කේක් සහ අතුරුපස කවරය',

    imageUrl: '/covers/Cover Photo-8.png'
  },
  {
    code: 'C-9',
    type: 'cover',
    nameEn: 'Modern Geometry Dual Banner',
    nameSi: 'ජ්‍යාමිතික ද්විත්ව කවර මෝස්තරය',

    imageUrl: '/covers/Cover Photo-9.png'
  },
  {
    code: 'C-10',
    type: 'cover',
    nameEn: 'Premium VIP Club Cover',
    nameSi: 'ප්‍රමුඛ පෙළේ වී.අයි.පී කවරය',

    imageUrl: '/covers/Cover Photo-10.png'
  }
];
