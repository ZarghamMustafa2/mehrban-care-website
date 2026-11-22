export type Language = "en" | "ur";

export interface TranslationItem {
  en: string;
  ur: string;
}

export const translations: Record<string, TranslationItem> = {
  // Brand
  brand_name: {
    en: "Mehrban Care",
    ur: "مہربان کیئر",
  },
  brand_tagline: {
    en: "Elderly Home Care Services",
    ur: "بزرگوں کی باوقار گھریلو دیکھ بھال",
  },

  // Navigation
  nav_home: {
    en: "Home",
    ur: "صفحہ اول",
  },
  nav_about: {
    en: "About Us",
    ur: "ہمارے بارے میں",
  },
  nav_services: {
    en: "Services",
    ur: "خدمات",
  },
  nav_care_plans: {
    en: "Care Plans",
    ur: "نگہداشت کے منصوبے",
  },
  nav_overseas: {
    en: "Overseas Families",
    ur: "بیرون ملک خاندان",
  },
  nav_how_it_works: {
    en: "How It Works",
    ur: "طریقہ کار",
  },
  nav_careers: {
    en: "Careers",
    ur: "ملازمتیں",
  },
  nav_faq: {
    en: "FAQ",
    ur: "عمومی سوالات",
  },
  nav_contact: {
    en: "Contact",
    ur: "رابطہ",
  },
  nav_book_care: {
    en: "Book Care",
    ur: "دیکھ بھال بک کریں",
  },
  nav_call_support: {
    en: "Speak with Care Advisor",
    ur: "کیئر ایڈوائزر سے بات کریں",
  },

  // Hero Section
  hero_badge: {
    en: "Dignified In-Home Care for Pakistani Seniors",
    ur: "پاکستانی بزرگوں کے لیے باوقار گھریلو دیکھ بھال",
  },
  hero_headline: {
    en: "Your Loved Ones Deserve the Best Care at Home.",
    ur: "آپ کے پیارے گھر کے سکون میں بہترین دیکھ بھال کے حقدار ہیں۔",
  },
  hero_subheadline: {
    en: "Compassionate elderly care, personalized support, and peace of mind for families who want the very best for their loved ones.",
    ur: "ہمدردانہ گھریلو دیکھ بھال، انفرادی توجہ، اور اُن تمام خاندانوں کے لیے دلی اطمینان جو اپنے بزرگوں کے لیے صرف بہترین چاہتے ہیں۔",
  },
  hero_cta_primary: {
    en: "Book a Care Assessment",
    ur: "نگہداشت جائزہ بک کریں",
  },
  hero_cta_secondary: {
    en: "Explore Our Services",
    ur: "ہماری خدمات دیکھیں",
  },
  hero_stat_1_label: {
    en: "Care Commitment",
    ur: "دیکھ بھال کا عزم",
  },
  hero_stat_1_val: {
    en: "Compassionate & Safe",
    ur: "محفوظ اور ہمدردانہ",
  },
  hero_stat_2_label: {
    en: "Caregiver Screening",
    ur: "نگہداشت کاروں کی جانچ",
  },
  hero_stat_2_val: {
    en: "Vetted & Trained",
    ur: "تربیت یافتہ اور تصدیق شدہ",
  },
  hero_stat_3_label: {
    en: "Family Peace of Mind",
    ur: "اہل خانہ کا اطمینان",
  },
  hero_stat_3_val: {
    en: "Transparent Updates",
    ur: "مسلسل باخبر اور شفاف",
  },

  // Trust Intro
  trust_eyebrow: {
    en: "OUR CARE PHILOSOPHY",
    ur: "ہمارا فلسفہ دیکھ بھال",
  },
  trust_heading: {
    en: "Care That Feels Like Family",
    ur: "ایسی دیکھ بھال جو بالکل اپنے خاندان جیسی ہو",
  },
  trust_body_1: {
    en: "At Mehrban Care, we recognize that aging is a sacred journey best spent in the warmth, comfort, and familiarity of one's own home. Our mission is to preserve the dignity, autonomy, and emotional wellbeing of your elderly parents.",
    ur: "مہربان کیئر میں ہم سمجھتے ہیں کہ عمر رسیدگی ایک مقدس سفر ہے جسے اپنے ہی مانوس اور پُرسکون گھر کی چاردیواری میں بسر ہونا چاہیے۔ ہمارا مقصد بزرگوں کے وقار، خود مختاری اور جذباتی راحت کو برقرار رکھنا ہے۔",
  },
  trust_body_2: {
    en: "We believe in individually planned care—tailoring our male and female caregivers to respect each senior's personal routine, prayer times, dietary habits, and personal preferences, giving families complete peace of mind.",
    ur: "ہم ہر فرد کے لیے خصوصی نگہداشت کے قائل ہیں—جہاں مرد اور خواتین نگہداشت کار بزرگوں کے روزمرہ معمولات، نماز کے اوقات، خوراک اور ذاتی ترجیحات کا احترام کرتے ہوئے خدمت انجام دیتے ہیں۔",
  },

  // Pillar Highlights
  pillar_1_title: {
    en: "Dignity & Respect",
    ur: "وقار اور بے لوث احترام",
  },
  pillar_1_desc: {
    en: "Every interaction is grounded in cultural reverence for our elders, honoring their privacy and independence.",
    ur: "ہر ملاقات میں بزرگوں کے احترام، ان کی نجی زندگی اور آزادی کو اولین ترجیح دی جاتی ہے۔",
  },
  pillar_2_title: {
    en: "Rigorous Verification",
    ur: "سخت تصدیقی عمل",
  },
  pillar_2_desc: {
    en: "Multi-step background screening, reference checks, and comprehensive eldercare training for caregivers.",
    ur: "نگہداشت کاروں کی تفصیلی پس منظر کی تصدیق، حوالہ جات کی جانچ اور بزرگوں کی نگہداشت کی تربیت۔",
  },
  pillar_3_title: {
    en: "Personalized Plans",
    ur: "انفرادی کیئر پلان",
  },
  pillar_3_desc: {
    en: "Care plans carefully crafted around medical instructions, mobility needs, and daily lifestyle choices.",
    ur: "طبی ہدایات، جسمانی نقل و حرکت کی ضروریات اور روزمرہ زندگی کے مطابق تیار کردہ نگہداشت پلان۔",
  },
  pillar_4_title: {
    en: "Overseas Connection",
    ur: "بیرون ملک خاندانوں سے ربط",
  },
  pillar_4_desc: {
    en: "Structured visit summaries and timely family communication keeping overseas children reassured and informed.",
    ur: "ہر وزٹ کی تفصیلی سمری اور بر وقت رابطہ جو پردیس میں مقیم بچوں کو ہر لمحہ مطمئن رکھتا ہے۔",
  },

  // Services Overview
  services_eyebrow: {
    en: "DEDICATED HOME ASSISTANCE",
    ur: "گھریلو دیکھ بھال کی خدمات",
  },
  services_heading: {
    en: "Comprehensive In-Home Care Services",
    ur: "بزرگوں کے لیے جامع اور باوقار خدمات",
  },
  services_subheading: {
    en: "From light daily assistance to continuous live-in companionship, we deliver personalized support crafted for your family's needs.",
    ur: "روزمرہ کی ہلکی مدد سے لے کر ہمہ وقتی نگہداشت تک، ہم آپ کے خاندان کی ضروریات کے عین مطابق خدمات فراہم کرتے ہیں۔",
  },

  // 8 Specific Services
  service_1_title: {
    en: "Daily Elderly Care",
    ur: "روزمرہ بزرگ دیکھ بھال",
  },
  service_1_desc: {
    en: "Attentive companionship, meal assistance, gentle mobility support, and routine daytime accompaniment in the comfort of home.",
    ur: "گھر کے پرسکون ماحول میں بزرگوں کی دلجوئی، کھانے پینے میں مدد، محفوظ چہل قدمی اور دن بھر کی ہمدردانہ رفاقت۔",
  },
  service_2_title: {
    en: "Personal Hygiene & Assistance",
    ur: "ذاتی صفائی اور وقار پر مبنی معاونت",
  },
  service_2_desc: {
    en: "Respectful assistance with bathing, grooming, dressing, restroom assistance, and skincare handled with utmost privacy and dignity.",
    ur: "غسل، لباس کی تبدیلی، ذاتی صفائی اور واش روم کے استعمال میں مکمل پردہ داری اور وقار کے ساتھ تربیت یافتہ مدد۔",
  },
  service_3_title: {
    en: "Home Nursing Support",
    ur: "گھریلو نرسنگ معاونت",
  },
  service_3_desc: {
    en: "Post-hospital recovery support, wound care assistance, catheter monitoring support, and medication schedule management by trained nurses.",
    ur: "ہسپتال سے واپسی کے بعد بحالی، پٹی تبدیل کرنے میں معاونت، اور مستند اسٹاف کے ذریعے ادویات کے نظام الاوقات کی نگرانی۔",
  },
  service_4_title: {
    en: "Blood Pressure & Sugar Monitoring",
    ur: "بلڈ پریشر اور شوگر مانیٹرنگ",
  },
  service_4_desc: {
    en: "Regular recording of vital signs, blood glucose tracking, temperature monitoring, and systematic health logs shared with doctors and family.",
    ur: "روزانہ بلڈ پریشر، شوگر لیول اور اہم علامات کا باقاعدہ اندراج اور ریکارڈ جو ڈاکٹر اور فیملی کے ساتھ شیئر کیا جاتا ہے۔",
  },
  service_5_title: {
    en: "Doctor Visit Assistance",
    ur: "ڈاکٹر کے معائنے میں ہمراہی",
  },
  service_5_desc: {
    en: "Door-to-door escorting to clinics, laboratory appointments, wheelchair assistance, and note-taking during physician consultations.",
    ur: "گھر سے کلینک اور ہسپتال تک باحفاظت ہمراہی، وہیل چیئر کی مدد اور ڈاکٹر کی ہدایات کو نوٹ کر کے اہل خانہ تک پہنچانا۔",
  },
  service_6_title: {
    en: "Physiotherapy Coordination",
    ur: "فزیو تھراپی اور ری ہیب معاونت",
  },
  service_6_desc: {
    en: "Assisting qualified physiotherapists with scheduled home exercises, mobility routines, and post-stroke rehabilitation encouragement.",
    ur: "ماہر فزیو تھراپسٹ کے تجویز کردہ معمولات اور ورزشوں میں تعاون تاکہ بزرگوں کی جسمانی حرکت اور چستی برقرار رہے۔",
  },
  service_7_title: {
    en: "Full-Day / Live-in Care",
    ur: "ہمہ وقتی / 24 گھنٹے لائیو ان کیئر",
  },
  service_7_desc: {
    en: "Dedicated 12-hour or 24-hour round-the-clock caregiver presence providing uninterrupted safety, nighttime assistance, and peace of mind.",
    ur: "12 گھنٹے یا 24 گھنٹے کے لیے مخصوص نگہداشت کار جو رات کے وقت بیداری، ہنگامی حفاظت اور مسلسل معاونت فراہم کرے۔",
  },
  service_8_title: {
    en: "Overseas Family Support",
    ur: "بیرون ملک مقیم خاندانوں کے لیے سہولت",
  },
  service_8_desc: {
    en: "Tailored for expatriate sons and daughters. Scheduled visit reporting, WhatsApp updates, and proactive parent care coordination.",
    ur: "پردیس میں مقیم پاکستانیوں کے لیے خصوصی سہولت۔ واٹس ایپ اپ ڈیٹس، وزٹ رپورٹس اور والدین کی باقاعدہ دیکھ بھال کی تفصیلی نگرانی۔",
  },

  // Why Choose Us
  why_eyebrow: {
    en: "THE MEHRBAN STANDARD",
    ur: "مہربان کیئر کے پختہ معیارات",
  },
  why_heading: {
    en: "Why Families Place Their Trust in Mehrban Care",
    ur: "خاندان اپنے پیاروں کے لیے ہم پر کیوں بھروسا کرتے ہیں؟",
  },
  why_item_1_title: {
    en: "Compassionate, Respectful Assistance",
    ur: "ہمدردانہ اور باوقار خدمت",
  },
  why_item_1_desc: {
    en: "Care is delivered with the warmth and cultural courtesy you would expect from your own devoted family members.",
    ur: "ہمارا عملہ بزرگوں کے ساتھ اسی محبت اور تہذیب سے پیش آتا ہے جس کی امید اپنے مخلص رشتے داروں سے کی جاتی ہے۔",
  },
  why_item_2_title: {
    en: "Personalized Care Planning",
    ur: "انفرادی کیئر پلاننگ",
  },
  why_item_2_desc: {
    en: "No rigid packages. We adapt care schedules around your loved one's specific medical directives, routines, and comfort.",
    ur: "کوئی غیر لچکدار طریقہ نہیں۔ ہم بزرگ کی طبی ہدایات، روزمرہ معمول اور آرام کے مطابق کیئر پلان مرتب کرتے ہیں۔",
  },
  why_item_3_title: {
    en: "Caregiver Screening & Verification",
    ur: "نگہداشت کاروں کی جامع تصدیق",
  },
  why_item_3_desc: {
    en: "We perform background checks, identity verification, reference audits, and safety protocol orientation for all caregivers.",
    ur: "ہم ہر کیئر گیور کے شناختی کوائف، پولیس ویریفکیشن اور سابقہ حوالہ جات کی جانچ پڑتال کا کڑا نظام رکھتے ہیں۔",
  },
  why_item_4_title: {
    en: "Dedicated Family Communication",
    ur: "خاندان کے ساتھ مسلسل رابطہ",
  },
  why_item_4_desc: {
    en: "Families receive regular summaries and direct communication channels so you are always informed about your parent's day.",
    ur: "اہل خانہ کو باقاعدہ اپ ڈیٹس ملتی ہیں تاکہ آپ کو اپنے والدین کی صحت اور معمولات کی ہر لمحہ خبر رہے۔",
  },
  why_item_5_title: {
    en: "Flexible Care Arrangements",
    ur: "لچکدار اوقات کار",
  },
  why_item_5_desc: {
    en: "Whether you require a few hours of weekly companionship or comprehensive 24/7 support, our care adapts to your needs.",
    ur: "چند گھنٹوں کی ہفتہ وار رفاقت ہو یا 24 گھنٹے کی مسلسل دیکھ بھال، ہماری سروس آپ کی ترجیح کے مطابق ڈھل جاتی ہے۔",
  },
  why_item_6_title: {
    en: "Elderly Dignity & Privacy",
    ur: "بزرگوں کی رازداری اور وقار کا تحفظ",
  },
  why_item_6_desc: {
    en: "We protect our clients' self-esteem, domestic confidentiality, and personal choices with uncompromising integrity.",
    ur: "ہم اپنے معزز بزرگوں کے خود اعتمادی، گھریلو رازداری اور نجی زندگی کے تقدس کو ہر صورت مقدم رکھتے ہیں۔",
  },

  // How it works
  hiw_eyebrow: {
    en: "A SIMPLE, TRANSPARENT JOURNEY",
    ur: "آسان اور شفاف طریقہ کار",
  },
  hiw_heading: {
    en: "How In-Home Care Works With Us",
    ur: "ہماری دیکھ بھال کا مرحلہ وار نظام",
  },
  hiw_step_1_title: {
    en: "1. Request Care",
    ur: "1. نگہداشت کی درخواست",
  },
  hiw_step_1_desc: {
    en: "Reach out via our online booking form or telephone. Tell us about your loved one's location and basic assistance requirements.",
    ur: "ہماری آن لائن درخواست یا فون کے ذریعے رابطہ کریں۔ ہمیں بزرگ کی رہائش اور بنیادی ضروریات سے آگاہ فرمائیں۔",
  },
  hiw_step_2_title: {
    en: "2. Discuss Your Needs",
    ur: "2. ضروریات کا باہمی تبادلہ",
  },
  hiw_step_2_desc: {
    en: "Our care coordinator holds a detailed family consultation to review health routines, dietary preferences, and schedules.",
    ur: "ہمارا کیئر کوآرڈینیٹر آپ سے بات چیت کر کے صحت، خوراک، معمولات اور شیڈول کا تفصیلی جائزہ لیتا ہے۔",
  },
  hiw_step_3_title: {
    en: "3. Receive a Personalized Plan",
    ur: "3. ذاتی کیئر پلان کی تیاری",
  },
  hiw_step_3_desc: {
    en: "We tailor a customized care roadmap outlining specific duties, visit durations, and caregiver profile recommendations.",
    ur: "ہم آپ کی ضروریات کے عین مطابق ایک جامع کیئر پلان اور موزوں ترین نگہداشت کار کا انتخاب تجویز کرتے ہیں۔",
  },
  hiw_step_4_title: {
    en: "4. Begin Care & Stay Informed",
    ur: "4. دیکھ بھال کا آغاز اور رابطہ",
  },
  hiw_step_4_desc: {
    en: "Care begins under professional supervision, with structured visit feedback keeping family members closely updated.",
    ur: "پیشہ ورانہ نگرانی میں دیکھ بھال کا آغاز ہوتا ہے، اور ہر وزٹ کے بعد اہل خانہ کو مسلسل تفصیلات فراہم کی جاتی ہیں۔",
  },

  // Overseas Families Section
  overseas_eyebrow: {
    en: "FOR EXPATS & OVERSEAS PAKISTANIS",
    ur: "پردیس میں مقیم پاکستانیوں کے لیے",
  },
  overseas_heading: {
    en: "Distance Should Never Mean Worry.",
    ur: "فاصلے کبھی فکر اور بے چینی کی وجہ نہ بنیں۔",
  },
  overseas_subheading: {
    en: "Miles Apart. Always Connected Through Care.",
    ur: "دوریاں ہزاروں میل کی، دیکھ بھال ہمیشہ قریب۔",
  },
  overseas_p1: {
    en: "Living in the UK, UAE, USA, Canada, Saudi Arabia, or elsewhere in the world while elderly parents remain in Pakistan is an emotional burden carried by thousands of overseas families. You worry about missed medicines, sudden falls, poor meals, and silent loneliness.",
    ur: "برطانیہ، خلیجی ممالک، امریکہ، کینیڈا یا دنیا کے کسی بھی کونے میں رہتے ہوئے جب بزرگ والدین پاکستان میں اکیلے ہوں، تو ہر لمحہ ایک انجانا خوف ستاتا ہے۔ ادویات کا چھوٹ جانا، اچانک طبیعت کی خرابی یا تنہائی کا احساس ہر پردیسی کے دل پر بوجھ ہوتا ہے۔",
  },
  overseas_p2: {
    en: "Mehrban Care serves as your reliable eyes, ears, and caring hands on the ground in Pakistan. We provide organized caregiver visits, transparent family reporting, and respectful companionship so you can focus on your life knowing your parents are treated with royal dignity.",
    ur: "مہربان کیئر پاکستان میں آپ کے والدین کے لیے مخلص نگہبان اور آپ کی آنکھیں بن کر کام کرتی ہے۔ ہم باقاعدہ نگہداشت، فوری واٹس ایپ اپ ڈیٹس اور دلجوئی کے ساتھ یہ یقینی بناتے ہیں کہ آپ کے والدین کا ہر لمحہ باوقار اور محفوظ رہے۔",
  },
  overseas_feature_1: {
    en: "Regular structured WhatsApp summaries after visits",
    ur: "ہر وزٹ کے بعد تفصیلی واٹس ایپ سمری اور رپورٹ",
  },
  overseas_feature_2: {
    en: "Direct communication with dedicated Care Advisors",
    ur: "مخصوص کیئر ایڈوائزر سے براہِ راست رابطہ",
  },
  overseas_feature_3: {
    en: "Coordinated doctor appointments and prescription pickups",
    ur: "ڈاکٹر کے اپائنٹمنٹس اور ادویات کی فراہمی میں مکمل مدد",
  },
  overseas_feature_4: {
    en: "Assistance with video calling loved ones abroad",
    ur: "بزرگوں کو پردیس میں بچوں سے ویڈیو کال پر بات کروانے میں تعاون",
  },

  // Care Plans Preview
  plans_eyebrow: {
    en: "FLEXIBLE CARE ARRANGEMENTS",
    ur: "لچکدار نگہداشت کے منصوبے",
  },
  plans_heading: {
    en: "Care Packages Tailored to Your Needs",
    ur: "آپ کے بزرگ کی ضرورت کے مطابق نگہداشت پیکجز",
  },
  plans_subheading: {
    en: "Every family's circumstances are unique. We offer structured packages designed around your loved one's specific lifestyle and requirements.",
    ur: "ہر خاندان کے حالات مختلف ہوتے ہیں۔ ہم آپ کے پیاروں کے روزمرہ معمول کے مطابق خصوصی منصوبے پیش کرتے ہیں۔",
  },
  plan_1_name: {
    en: "Essential Visit",
    ur: "ضروری وزٹ پلان",
  },
  plan_1_desc: {
    en: "Ideal for seniors who are largely independent but require structured daytime check-ins, vital monitoring, or medication reminders.",
    ur: "ان بزرگوں کے لیے بہترین جو کافی حد تک خود کفیل ہیں مگر دن میں ایک بار چیک ان، بی پی/شوگر چیک اور ادویات یاد دہانی کی ضرورت ہے۔",
  },
  plan_1_duration: {
    en: "2 to 4 Hours per Visit",
    ur: "2 سے 4 گھنٹے فی وزٹ",
  },
  plan_2_name: {
    en: "Daily Care",
    ur: "روزانہ کیئر پلان",
  },
  plan_2_desc: {
    en: "Comprehensive half-day or extended daytime support focusing on personal grooming, meals, exercise routines, and companionship.",
    ur: "نصف دن یا طویل دن کی مکمل دیکھ بھال جس میں ذاتی صفائی، کھانا کھلانا، ہلکی ورزش اور دلجوئی شامل ہے۔",
  },
  plan_2_duration: {
    en: "6 to 8 Hours per Day",
    ur: "6 سے 8 گھنٹے روزانہ",
  },
  plan_3_name: {
    en: "Full-Day / Live-in Care",
    ur: "ہمہ وقتی / 24 گھنٹے لائیو ان کیئر",
  },
  plan_3_desc: {
    en: "Continuous dedicated caregiving for seniors needing assistance throughout the day and nighttime safety presence.",
    ur: "مسلسل اور ہمہ وقتی نگہداشت ان بزرگوں کے لیے جنہیں دن رات مسلسل توجہ اور رات کے وقت حفاظت کی ضرورت ہے۔",
  },
  plan_3_duration: {
    en: "12 Hours Shift or 24/7 Live-in",
    ur: "12 گھنٹے شفٹ یا 24 گھنٹے مستقل",
  },
  plan_cta: {
    en: "Request a Custom Quote",
    ur: "کوٹیشن طلب کریں",
  },
  plan_note: {
    en: "* Service fees are quoted individually based on city, required skill level, and schedule. No hidden costs.",
    ur: "* خدمات کے اخراجات شہر، مطلوبہ مہارت اور اوقات کار کے مطابق انفرادی طور پر طے کیے جاتے ہیں۔",
  },

  // FAQ Preview
  faq_eyebrow: {
    en: "FREQUENTLY ASKED QUESTIONS",
    ur: "عام طور پر پوچھے جانے والے سوالات",
  },
  faq_heading: {
    en: "Questions Families Commonly Ask",
    ur: "خاندانوں کے عمومی سوالات اور شفاف جوابات",
  },

  // Final CTA
  cta_heading: {
    en: "Give Your Loved Ones the Care They Deserve.",
    ur: "اپنے پیاروں کو وہ محبت اور نگہداشت دیں جس کے وہ حقدار ہیں۔",
  },
  cta_subheading: {
    en: "Speak with our compassionate care advisors today. We'll listen to your family's needs and craft a personalized care plan.",
    ur: "آج ہی ہمارے مشیرِ نگہداشت سے گفتگو فرمائیں۔ ہم آپ کی بات سنیں گے اور آپ کے بزرگ کے لیے بہترین منصوبہ تجویز کریں گے۔",
  },
  cta_btn_book: {
    en: "Book Care Assessment",
    ur: "نگہداشت جائزہ بک کریں",
  },
  cta_btn_contact: {
    en: "Contact Our Advisors",
    ur: "ہم سے رابطہ کریں",
  },

  // Footer
  footer_desc: {
    en: "Mehrban Care is Pakistan's premier elderly home care organization, delivering compassionate, dignified, and professional in-home assistance for seniors and peace of mind for families worldwide.",
    ur: "مہربان کیئر پاکستان میں بزرگوں کی باوقار گھریلو دیکھ بھال کا معتبر ادارہ ہے جو پردیس اور اندرونِ ملک مقیم خاندانوں کے پیاروں کے لیے محفوظ اور بااعتماد خدمات فراہم کرتا ہے۔",
  },
  footer_quick_links: {
    en: "Quick Links",
    ur: "اہم روابط",
  },
  footer_services: {
    en: "Our Services",
    ur: "ہماری خدمات",
  },
  footer_legal: {
    en: "Standards & Privacy",
    ur: "معیارات و رازداری",
  },
  footer_privacy: {
    en: "Privacy Policy",
    ur: "پرائیویسی پالیسی",
  },
  footer_terms: {
    en: "Service Standards",
    ur: "سروس کے ضوابط",
  },
  footer_disclaimer_title: {
    en: "Non-Medical Care Notice:",
    ur: "ضروری طبی وضاحت:",
  },
  footer_disclaimer: {
    en: "Mehrban Care provides non-medical personal assistance, companion care, and coordinated health support. Our caregivers do not prescribe medicines or replace licensed medical physicians.",
    ur: "مہربان کیئر غیر طبی ذاتی معاونت، ہمدردانہ رفاقت اور صحت کی عمومی دیکھ بھال فراہم کرتی ہے۔ ہمارا عملہ ادویات تجویز نہیں کرتا اور نہ ہی کسی مستند ڈاکٹر کا متبادل ہے۔",
  },
  footer_copyright: {
    en: "© 2026 Mehrban Care. All rights reserved. Crafted with compassion for Pakistani families.",
    ur: "© 2026 مہربان کیئر۔ جملہ حقوق محفوظ ہیں۔ پاکستانی خاندانوں کے لیے خلوص سے تیار کردہ۔",
  },

  // Form Fields & Validation
  form_full_name: {
    en: "Full Name",
    ur: "مکمل نام",
  },
  form_phone: {
    en: "Contact Phone Number",
    ur: "فون نمبر",
  },
  form_whatsapp: {
    en: "WhatsApp Number (Especially for Overseas)",
    ur: "واٹس ایپ نمبر (خصوصاً بیرون ملک مقیم افراد کے لیے)",
  },
  form_city: {
    en: "City in Pakistan",
    ur: "پاکستان میں شہر",
  },
  form_service_needed: {
    en: "Required Care Service",
    ur: "مطلوبہ نگہداشت سروس",
  },
  form_duration: {
    en: "Preferred Duration",
    ur: "مطلوبہ دورانیہ",
  },
  form_start_date: {
    en: "Preferred Start Date",
    ur: "متوقع آغاز کی تاریخ",
  },
  form_notes: {
    en: "Additional Notes or Senior's Needs",
    ur: "بزرگ کی مخصوص ضروریات یا اضافی معلومات",
  },
  form_consent: {
    en: "I agree to be contacted by a Mehrban Care advisor regarding this care assessment.",
    ur: "میں اس نگہداشت کے جائزے کے سلسلے میں مہربان کیئر کے مشیر کی جانب سے رابطے کی رضامندی دیتا/دیتی ہوں۔",
  },
  form_submit: {
    en: "Submit Care Request",
    ur: "درخواست جمع کروائیں",
  },
  form_submitting: {
    en: "Preparing Request...",
    ur: "درخواست تیار ہو رہی ہے...",
  },
  form_phase1_notice: {
    en: "Phase 1 Preview: Form validation is active. Live database submission connects in Phase 2 backend integration.",
    ur: "فیز 1 پیش منظر: فارم کی جانچ پڑتال فعال ہے۔ ڈیٹا بیس کا براہِ راست رابطہ فیز 2 میں قائم ہوگا۔",
  },

  // Multi-Step Wizard Keys
  wizard_step_1: {
    en: "Personal Details",
    ur: "ذاتی کوائف",
  },
  wizard_step_2: {
    en: "Required Care Service",
    ur: "مطلوبہ سروس اور ترجیحات",
  },
  wizard_step_3: {
    en: "Location & Schedule",
    ur: "مقام اور شیڈول",
  },
  wizard_step_4: {
    en: "Review Information",
    ur: "جائزہ اور تصدیق",
  },
  wizard_btn_next: {
    en: "Continue to Next Step",
    ur: "اگلے مرحلے پر جائیں",
  },
  wizard_btn_back: {
    en: "Back to Previous Step",
    ur: "پچھلے مرحلے پر واپس جائیں",
  },
  wizard_btn_confirm: {
    en: "Confirm & Verify Request",
    ur: "درخواست کی تصدیق کریں",
  },
  wizard_relationship: {
    en: "Your Relationship to the Senior",
    ur: "بزرگ کے ساتھ آپ کا رشتہ",
  },
  wizard_mobility_level: {
    en: "Senior's Current Mobility Level",
    ur: "بزرگ کی چلنے پھرنے کی موجودہ حالت",
  },
  wizard_caregiver_pref: {
    en: "Caregiver Gender Preference",
    ur: "نگہداشت کار کی مطلوبہ جنس",
  },
  wizard_address_area: {
    en: "Town / Sector / Residential Area",
    ur: "رہائشی علاقہ / ٹاؤن / سیکٹر",
  },
  wizard_shift_time: {
    en: "Preferred Daily Shift Timing",
    ur: "مطلوبہ روزمرہ اوقات (شفٹ)",
  },
  wizard_review_notice: {
    en: "Please review the details below. In Phase 1, our frontend validation verifies all required fields. Online database synchronization will activate in Phase 2.",
    ur: "براہ کرم درج ذیل تفصیلات کا جائزہ لیں۔ فیز 1 میں فرنٹ اینڈ جانچ پڑتال تمام خانوں کی تصدیق کرتی ہے۔ آن لائن ڈیٹا بیس کا باقاعدہ رابطہ فیز 2 میں چالو ہوگا۔",
  },

  // Mobile Bottom Action Bar
  mobile_cta_call: {
    en: "Call Advisor",
    ur: "مشیر سے رابطہ",
  },
  mobile_cta_book: {
    en: "Book Care",
    ur: "کیئر بک کریں",
  },
  mobile_cta_whatsapp: {
    en: "WhatsApp",
    ur: "واٹس ایپ",
  },

  // General Interactive UI
  btn_back_to_top: {
    en: "Back to top",
    ur: "اوپر جائیں",
  },
  services_filter_all: {
    en: "All Services",
    ur: "تمام خدمات",
  },
  services_filter_daily: {
    en: "Daily Living & Companionship",
    ur: "روزمرہ معمولات و رفاقت",
  },
  services_filter_clinical: {
    en: "Health & Nursing Oversight",
    ur: "طبی و نرسنگ معاونت",
  },
  services_filter_specialized: {
    en: "Specialized & 24/7 Live-In",
    ur: "ہمہ وقتی اور اوورسیز سہولت",
  },
};

export type TranslationKey = keyof typeof translations;
