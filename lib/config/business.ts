/**
 * MEHRBAN CARE — CENTRAL BUSINESS CONFIGURATION
 * 
 * Single source of truth for business identity, verified contact channels,
 * operational coverage, business hours, and operational feature flags.
 * 
 * Strict rule: Never invent missing values. Use null or documented empty states
 * for unconfirmed values so placeholder values are never exposed as real data.
 */

export interface OperationalCity {
  id: string;
  nameEn: string;
  nameUr: string;
  status: "active_inquiries" | "advance_registration" | "planned";
  badgeEn: string;
  badgeUr: string;
  descriptionEn: string;
  descriptionUr: string;
}

export interface BusinessConfig {
  identity: {
    nameEn: string;
    nameUr: string;
    taglineEn: string;
    taglineUr: string;
    legalName: string | null; // null pending company incorporation certificate
    establishedYear: null; // null: never fabricate years of experience
    brandLogo: {
      lightSrc: string;
      darkSrc: string;
      symbol: string;
    };
  };
  domain: {
    productionUrl: string;
    previewUrl: string;
    canonicalHostname: string;
  };
  contact: {
    // Official telecommunication lines
    phone: {
      raw: string | null; // null if unassigned
      display: string | null;
      isVerified: boolean;
      statusNoticeEn: string;
      statusNoticeUr: string;
    };
    // Official WhatsApp Business line
    whatsapp: {
      number: string | null; // e.g. "923001234567" when provided by business owner
      display: string | null;
      isVerified: boolean;
      statusNoticeEn: string;
      statusNoticeUr: string;
    };
    // Official corporate email address
    email: {
      address: string | null; // e.g. "care@mehrbancare.pk" when email host is configured
      isVerified: boolean;
      statusNoticeEn: string;
      statusNoticeUr: string;
    };
    // Physical head office address
    officeAddress: {
      fullAddressEn: string | null;
      fullAddressUr: string | null;
      cityEn: string | null;
      countryEn: string;
      countryUr: string;
      isPhysicalOfficeConfirmed: boolean; // false: no fake maps or fictitious physical addresses
      displayNoticeEn: string;
      displayNoticeUr: string;
    };
    // In-home care coordination hours
    businessHours: {
      isConfirmed: boolean;
      hoursEn: string;
      hoursUr: string;
      daysEn: string;
      daysUr: string;
      emergencyProtocolEn: string;
      emergencyProtocolUr: string;
    };
  };
  coverage: {
    cities: OperationalCity[];
    availabilityNoticeEn: string;
    availabilityNoticeUr: string;
  };
  socialLinks: {
    facebook: string | null;
    instagram: string | null;
    linkedin: string | null;
    youtube: string | null;
  };
  features: {
    bookingOnlineInquiriesEnabled: boolean;
    recruitmentApplicationsEnabled: boolean;
    floatingWhatsAppButtonEnabled: boolean;
    displayPhysicalMap: boolean;
  };
}

// Read optional environment variable overrides if provided at build/runtime
const envWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || null;
const envPhoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || null;
const envEmailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || null;

export const businessConfig: BusinessConfig = {
  identity: {
    nameEn: "Mehrban Care",
    nameUr: "مہربان کیئر",
    taglineEn: "Because Your Loved Ones Deserve the Best Care.",
    taglineUr: "کیونکہ آپ کے پیارے صرف بہترین دیکھ بھال کے حقدار ہیں۔",
    legalName: null, // Unconfirmed entity name; omitted until corporate registration finalized
    establishedYear: null, // Strictly honest: no fabricated founding year
    brandLogo: {
      lightSrc: "/images/brand/logo-light.svg",
      darkSrc: "/images/brand/logo-dark.svg",
      symbol: "Caring Hands & Lotus",
    },
  },
  domain: {
    productionUrl: "https://mehrban-care.vercel.app",
    previewUrl: "https://mehrban-care.vercel.app",
    canonicalHostname: "mehrban-care.vercel.app",
  },
  contact: {
    phone: {
      raw: envPhoneNumber,
      display: envPhoneNumber ? envPhoneNumber : null,
      isVerified: Boolean(envPhoneNumber),
      statusNoticeEn: "Official direct phone line is undergoing carrier registration; please submit inquiries online or via WhatsApp.",
      statusNoticeUr: "سرکاری فون ہیلپ لائن کی باقاعدہ تنصیب جاری ہے؛ برائے مہربانی آن لائن یا واٹس ایپ کے ذریعے رابطہ فرمائیں۔",
    },
    whatsapp: {
      number: envWhatsAppNumber,
      display: envWhatsAppNumber ? `+${envWhatsAppNumber}` : null,
      isVerified: Boolean(envWhatsAppNumber),
      statusNoticeEn: "Direct WhatsApp communication line is currently undergoing official business verification.",
      statusNoticeUr: "براہِ راست واٹس ایپ بزنس لائن کی باضابطہ تصدیق کا عمل جاری ہے۔",
    },
    email: {
      address: envEmailAddress,
      isVerified: Boolean(envEmailAddress),
      statusNoticeEn: "Official domain email routing is being configured for production launch.",
      statusNoticeUr: "ویب سائٹ کی سرکاری ای میل سروس کی حتمی ترتیب جاری ہے۔",
    },
    officeAddress: {
      fullAddressEn: null, // Strictly honest: never invent a street address
      fullAddressUr: null,
      cityEn: null,
      countryEn: "Pakistan",
      countryUr: "پاکستان",
      isPhysicalOfficeConfirmed: false, // Map is hidden until real commercial lease is confirmed
      displayNoticeEn: "Head office registration is in progress. Field services are coordinated by appointment at client premises.",
      displayNoticeUr: "مرکزی دفتر کے باضابطہ پتے کا اندراج جاری ہے۔ گھریلو خدمات کلائنٹ کے گھر پر وزٹ کی بنیاد پر دی جاتی ہیں۔",
    },
    businessHours: {
      isConfirmed: true,
      hoursEn: "8:00 AM – 8:00 PM",
      hoursUr: "صبح 8:00 بجے تا شام 8:00 بجے",
      daysEn: "Monday through Saturday",
      daysUr: "پیر تا ہفتہ",
      emergencyProtocolEn: "On-call coordination for registered 24/7 live-in clients.",
      emergencyProtocolUr: "رجسٹرڈ 24 گھنٹے لائیو ان کلائنٹس کے لیے آن کال کوآرڈینیشن۔",
    },
  },
  coverage: {
    cities: [
      {
        id: "lahore",
        nameEn: "Lahore",
        nameUr: "لاہور",
        status: "active_inquiries",
        badgeEn: "Inquiries Active",
        badgeUr: "رابطے فعال ہیں",
        descriptionEn: "Serving model localities across Lahore subject to caregiver allocation confirmation.",
        descriptionUr: "نگہداشت کار کی دستیابی سے مشروط، لاہور کے مختلف علاقوں میں خدمات۔",
      },
      {
        id: "islamabad",
        nameEn: "Islamabad",
        nameUr: "اسلام آباد",
        status: "active_inquiries",
        badgeEn: "Inquiries Active",
        badgeUr: "رابطے فعال ہیں",
        descriptionEn: "Serving capital sectors subject to schedule and gender matching availability.",
        descriptionUr: "اسلام آباد کے مخصوص سیکٹرز میں نگہداشت کار کی تخصیص کے ساتھ۔",
      },
      {
        id: "rawalpindi",
        nameEn: "Rawalpindi",
        nameUr: "راولپنڈی",
        status: "active_inquiries",
        badgeEn: "Inquiries Active",
        badgeUr: "رابطے فعال ہیں",
        descriptionEn: "Care consultations reviewed for residential neighborhoods across Rawalpindi.",
        descriptionUr: "راولپنڈی کے رہائشی علاقوں کے لیے نگہداشت کی مشاورت۔",
      },
      {
        id: "multan",
        nameEn: "Multan",
        nameUr: "ملتان",
        status: "active_inquiries",
        badgeEn: "Inquiries Active",
        badgeUr: "رابطے فعال ہیں",
        descriptionEn: "Advance inquiries accepted for personal caregiving and scheduled companion visits.",
        descriptionUr: "ذاتی نگہداشت اور شیڈولڈ وزٹس کے لیے ابتدائی استفسار قبول کیے جاتے ہیں۔",
      },
      {
        id: "faisalabad",
        nameEn: "Faisalabad",
        nameUr: "فیصل آباد",
        status: "advance_registration",
        badgeEn: "Advance Registration",
        badgeUr: "پیشگی رجسٹریشن",
        descriptionEn: "Pre-launch registration open for families planning care in upcoming months.",
        descriptionUr: "آنے والے مہینوں کے لیے خاندانوں کی پیشگی رجسٹریشن کھلی ہے۔",
      },
    ],
    availabilityNoticeEn: "Contact Us to Confirm Service Availability (Lahore, Islamabad / Rawalpindi & Multan)",
    availabilityNoticeUr: "سروس دستیابی کی تصدیق کے لیے رابطہ فرمائیں (لاہور، اسلام آباد / راولپنڈی، ملتان)",
  },
  socialLinks: {
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
  },
  features: {
    bookingOnlineInquiriesEnabled: true,
    recruitmentApplicationsEnabled: true,
    floatingWhatsAppButtonEnabled: Boolean(envWhatsAppNumber),
    displayPhysicalMap: false, // Never show a map until commercial address is verified
  },
};

/**
 * Context-specific WhatsApp pre-filled inquiry generator
 * Sanitizes context and avoids leaking any sensitive medical data.
 */
export function getWhatsAppInquiryUrl(
  topic: "general" | "elderly_care" | "care_plans" | "overseas" | "careers",
  lang: "en" | "ur" = "en",
  customParam?: string
): string | null {
  const number = businessConfig.contact.whatsapp.number;
  if (!number) {
    return null; // Do not generate fake or nonfunctional links if unconfigured
  }

  const cleanNumber = number.replace(/[^0-9]/g, "");

  const messages: Record<string, { en: string; ur: string }> = {
    general: {
      en: "Hello Mehrban Care, I would like to inquire about your elderly home-care services.",
      ur: "السلام علیکم مہربان کیئر، میں بزرگوں کی گھریلو دیکھ بھال کی خدمات کے بارے میں معلومات حاصل کرنا چاہتا/چاہتی ہوں۔",
    },
    elderly_care: {
      en: "Hello Mehrban Care, I would like to inquire about elderly care assistance for my parents.",
      ur: "السلام علیکم مہربان کیئر، میں اپنے والدین کے لیے بزرگ نگہداشت کی خدمات پر بات کرنا چاہتا/چاہتی ہوں۔",
    },
    care_plans: {
      en: customParam
        ? `Hello Mehrban Care, I would like to know more about the ${customParam} package.`
        : "Hello Mehrban Care, I would like to request a personalized quote for your care packages.",
      ur: customParam
        ? `السلام علیکم مہربان کیئر، میں ${customParam} پیکیج کے بارے میں تفصیلی معلومات اور کوٹیشن جاننا چاہتا/چاہتی ہوں۔`
        : "السلام علیکم مہربان کیئر، میں آپ کے کیئر پیکجز کی انفرادی کوٹیشن حاصل کرنا چاہتا/چاہتی ہوں۔",
    },
    overseas: {
      en: "Hello Mehrban Care, I am an overseas Pakistani inquiring about home-care arrangements for my parents living in Pakistan.",
      ur: "السلام علیکم مہربان کیئر، میں بیرون ملک مقیم پاکستانی ہوں اور پاکستان میں مقیم اپنے والدین کی گھریلو دیکھ بھال کے انتظامات پر مشاورت چاہتا/چاہتی ہوں۔",
    },
    careers: {
      en: customParam
        ? `Hello Mehrban Care, I am interested in applying for the ${customParam} role.`
        : "Hello Mehrban Care, I am interested in your available caregiver and nursing positions.",
      ur: customParam
        ? `السلام علیکم مہربان کیئر، میں ${customParam} کی آسامی کے لیے درخواست دینے میں دلچسپی رکھتا/رکھتی ہوں۔`
        : "السلام علیکم مہربان کیئر، میں آپ کے پاس دستیاب کیئر گیور اور نرسنگ کی اسامیوں کے لیے رابطہ کر رہا/رہی ہوں۔",
    },
  };

  const text = messages[topic]?.[lang] || messages.general[lang];
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
