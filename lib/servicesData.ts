import { ServiceItemData } from "@/components/services/ServiceCard";

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface DetailedService extends ServiceItemData {
  category: "daily" | "clinical" | "specialized";
  categoryNameEn: string;
  categoryNameUr: string;
  fullDescEn: string;
  fullDescUr: string;
  includedEn: string[];
  includedUr: string[];
  suitableForEn: string[];
  suitableForUr: string[];
  benefitsEn: string[];
  benefitsUr: string[];
  processEn: ServiceProcessStep[];
  processUr: ServiceProcessStep[];
  limitationsEn: string;
  limitationsUr: string;
  relatedSlugs: string[];
}

export const servicesData: DetailedService[] = [
  {
    id: "1",
    slug: "daily-care",
    category: "daily",
    categoryNameEn: "Daily Living & Companionship",
    categoryNameUr: "روزمرہ معمولات و رفاقت",
    titleKey: "service_1_title",
    descKey: "service_1_desc",
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Respectful companionship & reading",
      "Mealtime prep & hydration prompts",
      "Gentle indoor walking assistance",
      "Routine daytime supervision"
    ],
    featuresUr: [
      "ہمدردانہ رفاقت اور کتاب خوانی",
      "کھانے اور پانی کے اوقات کی یاد دہانی",
      "محفوظ انڈور چہل قدمی میں معاونت",
      "دن بھر کی پروقار رفاقت"
    ],
    fullDescEn: "Daily elderly care is designed for seniors who value remaining independent in their cherished home but benefit from regular, attentive companionship and light daily support. Our caregivers provide gentle assistance with daily domestic rhythms, conversations, light mobility, and ensuring meals are enjoyed on time.",
    fullDescUr: "روزمرہ بزرگ دیکھ بھال ان معزز بزرگوں کے لیے ہے جو اپنے گھر میں خودمختار رہنا چاہتے ہیں مگر دن کے اوقات میں مخلص رفاقت، کھانے کی یاد دہانی اور ہلکی پھلکی مدد کی ضرورت محسوس کرتے ہیں۔ ہمارے کیئر گیورز دلجوئی اور وقار کے ساتھ بزرگوں کا خیال رکھتے ہیں۔",
    includedEn: [
      "Attentive companionship and meaningful social conversation",
      "Assistance with serving meals and nutritional hydration",
      "Accompanying seniors during indoor prayer times and routine strolls",
      "Light organization of the senior's immediate living area",
      "Regular updates shared with designated family members"
    ],
    includedUr: [
      "مخلص رفاقت اور دل کو چھو لینے والی گفتگو",
      "کھانا پیش کرنے اور پانی کی وافر مقدار پینے میں مدد",
      "نماز کے اوقات اور گھر میں محفوظ چہل قدمی میں ہمراہی",
      "بزرگ کے کمرے اور بیٹھنے کی جگہ کی ہلکی پھلکی ترتیب",
      "اہل خانہ کو روزمرہ احوال کی باقاعدہ آگاہی"
    ],
    suitableForEn: [
      "Seniors living alone whose children are at work during daytime hours",
      "Elderly individuals who feel isolated or lonely",
      "Seniors needing gentle encouragement for regular meals and routines"
    ],
    suitableForUr: [
      "تنہا رہنے والے بزرگ جن کے بچے دن کے اوقات میں ملازمت پر ہوں",
      "وہ بزرگ جو تنہائی یا اداسی کا شکار ہوں",
      "وہ افراد جنہیں روزمرہ کھانے پینے کے معمولات میں ہلکی یاد دہانی کی ضرورت ہو"
    ],
    benefitsEn: [
      "Reduces loneliness and uplifts cognitive spirit through regular dialogue",
      "Ensures consistent nutrition and hydration throughout the day",
      "Provides family members with peace of mind while away at work",
      "Maintains the senior's personal domestic independence"
    ],
    benefitsUr: [
      "روزانہ بات چیت کے ذریعے تنہائی اور اداسی میں واضح کمی",
      "دن بھر متوازن خوراک اور پانی کے باقاعدہ استعمال کی یقین دہانی",
      "ملازمت پر موجود بچوں کے لیے مکمل ذہنی اطمینان",
      "بزرگ کے گھریلو معمولات اور خود مختاری کا تحفظ"
    ],
    processEn: [
      { step: "1", title: "Routine Consultation", desc: "We review senior's meal habits, prayer timings, and conversation preferences." },
      { step: "2", title: "Caregiver Matching", desc: "A culturally aligned male or female companion is assigned." },
      { step: "3", title: "Initial Accompaniment", desc: "Care commences with supervisor oversight to establish a warm rapport." },
      { step: "4", title: "Daily Family Briefs", desc: "Summary reports delivered to family members via WhatsApp." }
    ],
    processUr: [
      { step: "1", title: "معمولات کی مشاورت", desc: "کھانے پینے کے اوقات، نماز اور بزرگ کی پسند ناپسند کا جائزہ۔" },
      { step: "2", title: "ہم مزاج کیئر گیور کا انتخاب", desc: "تہذیبی و خاندانی اقدار سے ہم آہنگ عملے کی تعیناتی۔" },
      { step: "3", title: "نگہداشت کا آغاز", desc: "سپروائزر کی زیر نگرانی باوقار انداز میں خدمت کا آغاز۔" },
      { step: "4", title: "روزانہ فیملی بریفنگ", desc: "واٹس ایپ کے ذریعے ہر وزٹ کی تفصیلی رپورٹ کی ترسیل۔" }
    ],
    limitationsEn: "Non-medical companion service. Caregivers do not administer injections, adjust clinical dosages, or perform surgical dressing.",
    limitationsUr: "یہ ایک غیر طبی رفاقت کی خدمت ہے۔ نگہداشت کار انجیکشن لگانے یا ڈاکٹر کے مشورے کے بغیر ادویات تبدیل کرنے کے مجاز نہیں ہیں۔",
    relatedSlugs: ["hygiene-care", "monitoring", "doctor-visit"]
  },
  {
    id: "2",
    slug: "hygiene-care",
    category: "daily",
    categoryNameEn: "Personal Care & Hygiene",
    categoryNameUr: "ذاتی صفائی اور طہارت",
    titleKey: "service_2_title",
    descKey: "service_2_desc",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Respectful sponge or shower assistance",
      "Dressing & personal grooming",
      "Restroom & incontinence assistance",
      "Skincare & pressure sore prevention"
    ],
    featuresUr: [
      "مکمل پردے کے ساتھ غسل میں مدد",
      "لباس کی تبدیلی اور ذاتی صفائی",
      "واش روم کے محفوظ استعمال میں مدد",
      "جلد کی حفاظت اور بیڈ سورز سے بچاؤ"
    ],
    fullDescEn: "Personal hygiene assistance requires the highest standard of tact, dignity, and cultural sensitivity. Our trained male caregivers for elderly gentlemen and female caregivers for elderly ladies provide respectful support with bathing, oral care, clothes changing, and restroom assistance with complete privacy.",
    fullDescUr: "ذاتی صفائی کی دیکھ بھال میں حیا، وقار اور کمال درجے کی نفاست کی ضرورت ہوتی ہے۔ بزرگ حضرات کے لیے مرد اور معزز خواتین کے لیے باحجاب خواتین کیئر گیورز غسل، کپڑے بدلنے، اور ذاتی طہارت میں پردے کے اصولوں کے تحت خدمت انجام دیتے ہیں۔",
    includedEn: [
      "Safe transfer and assistance during showers or gentle bed-sponge baths",
      "Hair combing, nail trimming assistance, and shaving support for gentlemen",
      "Respectful assistance with restroom visits and adult diaper changes",
      "Regular repositioning to protect sensitive skin and prevent bedsores"
    ],
    includedUr: [
      "باتھ روم میں پھسلنے سے بچاؤ اور محفوظ غسل یا اسفنج باتھ",
      "بال سنوارنا، ناخن تراشنا اور بزرگ حضرات کے لیے شیو بنوانے میں مدد",
      "واش روم کے استعمال اور ڈائپر کی بروقت اور باوقار تبدیلی",
      "بستری مریضوں کی کروٹ بدلنا تاکہ زخم (Bed sores) نہ بنیں"
    ],
    suitableForEn: [
      "Seniors with limited mobility, arthritis, or Parkinson's disease",
      "Bedbound seniors requiring specialized skin care and repositioning",
      "Post-operative patients temporarily unable to shower unassisted"
    ],
    suitableForUr: [
      "جوڑوں کے درد، فالج یا پارکنسن کے مریض بزرگ",
      "بستر پر مستقل رہنے والے مریض جنہیں جلد کی دیکھ بھال درکار ہو",
      "سرجری کے بعد عارضی طور پر کمزوری کا شکار افراد"
    ],
    benefitsEn: [
      "Protects self-respect through dedicated same-gender caregiver matching",
      "Significantly minimizes bathroom slipping and dangerous fall hazards",
      "Prevents skin breakdown and uncomfortable bedsores",
      "Maintains clean, comfortable, and dignified day-to-day hygiene"
    ],
    benefitsUr: [
      "ہم جنس کیئر گیور کے ذریعے مکمل پردے اور عزتِ نفس کا تحفظ",
      "باتھ روم میں گرنے اور پھسلنے کے خطرناک حادثات سے مکمل بچاؤ",
      "جلد کے زخموں اور تکلیف دہ بیڈ سورز کی باقاعدہ روک تھام",
      "صاف ستھرا، باوقار اور پرسکون احساسِ زندگی"
    ],
    processEn: [
      { step: "1", title: "Hygiene Needs Audit", desc: "Understanding senior's mobility limitations and bathroom setup." },
      { step: "2", title: "Bathroom Safety Check", desc: "Assessing floor mats, shower seating, and hot water precautions." },
      { step: "3", title: "Discreet Assistance", desc: "Delivering bathing or sponge care with strict modesty standards." },
      { step: "4", title: "Comfort Verification", desc: "Ensuring senior is clean, dry, properly dressed, and relaxed." }
    ],
    processUr: [
      { step: "1", title: "ضروریات کا جائزہ", desc: "جسمانی نقل و حرکت اور باتھ روم کے انتظامات کا معائنہ۔" },
      { step: "2", title: "حفاظتی انتظامات", desc: "پھسلن سے بچاؤ کے میٹس، شاور چیئر اور گرم پانی کی جانچ۔" },
      { step: "3", title: "باوقار معاونت", desc: "پردے کے مکمل تقاضوں کے ساتھ غسل یا اسفنج باتھ کی فراہمی۔" },
      { step: "4", title: "راحت کی تسلی", desc: "لباس کی تبدیلی اور بزرگ کے مکمل آرام اور سکون کا اطمینان۔" }
    ],
    limitationsEn: "Personal hygiene caregivers strictly protect client dignity. In-depth medical wound care requires our Home Nursing Support team.",
    limitationsUr: "صفائی کے کیئر گیورز مکمل احترام ملحوظ رکھتے ہیں۔ گہرے زخموں کی مرہم پٹی کے لیے ہوم نرسنگ سروس درکار ہوگی۔",
    relatedSlugs: ["daily-care", "live-in-care", "monitoring"]
  },
  {
    id: "3",
    slug: "home-nursing",
    category: "clinical",
    categoryNameEn: "Health & Clinical Oversight",
    categoryNameUr: "طبی و نرسنگ معاونت",
    titleKey: "service_3_title",
    descKey: "service_3_desc",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Post-hospital discharge support",
      "Medication schedule management",
      "Supervised catheter & wound care",
      "Systematic recovery chart logging"
    ],
    featuresUr: [
      "ہسپتال سے ڈسچارج کے بعد بحالی",
      "ادویات کے باقاعدہ اوقات کی نگرانی",
      "کی تھیٹر اور زخموں کی ڈریسنگ معاونت",
      "صحت کی باقاعدہ میڈیکل چارٹنگ"
    ],
    fullDescEn: "Following a hospital stay or severe illness, the transition back to home requires careful nursing coordination. Our qualified home nursing personnel assist with clinical directives issued by the patient's treating physician, ensuring safe recovery in a comfortable domestic environment.",
    fullDescUr: "ہسپتال سے واپسی پر گھر کا ماحول صحت یابی میں سب سے معاون ہوتا ہے بشرطیکہ طبی ہدایات پر سختی سے عمل ہو۔ ہمارا مستند نرسنگ عملہ معالج ڈاکٹر کی جاری کردہ ہدایات کے مطابق ہوم نرسنگ معاونت فراہم کرتا ہے۔",
    includedEn: [
      "Administering prescribed oral and injectable medications per doctor orders",
      "Aseptic dressing changes for surgical incisions and pressure wounds",
      "Monitoring Foley catheters, ostomy pouches, and oxygen concentrators",
      "Maintaining systematic recovery logs to share with treating physicians"
    ],
    includedUr: [
      "ڈاکٹر کے نسخے کے مطابق ادویات اور تجویز کردہ انجیکشنز کی فراہمی",
      "سرجیکل کٹس اور زخموں کی جراثیم سے پاک ڈریسنگ",
      "کی تھیٹر، یورین بیگ اور آکسیجن کے نظام کی باقاعدہ جانچ",
      "ڈاکٹر کے معائنے کے لیے تفصیلی ریکوری چارٹ کا اندراج"
    ],
    suitableForEn: [
      "Patients newly discharged from the hospital after surgery or stroke",
      "Seniors requiring daily wound dressing or IV hydration per prescription",
      "Families seeking professional oversight over complicated drug regimes"
    ],
    suitableForUr: [
      "سرجری یا فالج کے بعد ہسپتال سے گھر منتقل ہونے والے بزرگ",
      "وہ مریض جنہیں روزانہ جراثیم کش پٹی یا تجویز شدہ ڈرپ کی ضرورت ہو",
      "وہ خاندان جنہیں ادویات کے پیچیدہ شیڈول میں پروفیشنل نگرانی چاہیے"
    ],
    benefitsEn: [
      "Prevents hospital readmissions through disciplined clinical adherence",
      "Provides professional medication precision and wound management",
      "Bridges hospital discharge instructions into domestic recovery",
      "Offers continuous clinical reassurance for worried family members"
    ],
    benefitsUr: [
      "ڈاکٹر کی ہدایات پر سخت عمل درآمد کے ذریعے دوبارہ ہسپتال داخلے سے بچاؤ",
      "ادویات کی درست خوراک اور زخموں کی باقاعدہ طبی نگہداشت",
      "ہسپتال سے گھر واپسی کے بعد بحالی کا محفوظ اور پرسکون سفر",
      "اہل خانہ کے لیے تجربہ کار نرسنگ عملے کی مسلسل موجودگی کا اطمینان"
    ],
    processEn: [
      { step: "1", title: "Discharge Order Review", desc: "Analyzing physician prescriptions and treatment roadmaps." },
      { step: "2", title: "Nurse Assignment", desc: "Allocating a PNC-registered or qualified clinical caregiver." },
      { step: "3", title: "Sterile Procedure Execution", desc: "Conducting wound dressing, catheter checks, and IV routines." },
      { step: "4", title: "Physician Progress Charting", desc: "Sharing organized clinical recovery trends with family and doctors." }
    ],
    processUr: [
      { step: "1", title: "ڈسچارج ہدایات کا مطالعہ", desc: "معالج ڈاکٹر کے نسخے اور ریکوری چارٹ کا تفصیلی جائزہ۔" },
      { step: "2", title: "کوالیفائیڈ نرس کی تعیناتی", desc: "پی این سی سے رجسٹرڈ یا تجربہ کار نرسنگ اسٹاف کی فراہمی۔" },
      { step: "3", title: "جراثیم سے پاک طریقہ کار", desc: "زخموں کی صفائی، ڈریسنگ اور تجویز کردہ ادویات کی فراہمی۔" },
      { step: "4", title: "طبی چارٹ کی تیاری", desc: "ڈاکٹر اور اہل خانہ کے لیے صحت یابی کی روزمرہ رپورٹنگ۔" }
    ],
    limitationsEn: "All nursing interventions are performed strictly under instructions of a registered physician. Mehrban Care does not diagnose illnesses.",
    limitationsUr: "تمام نرسنگ اقدامات مستند رجسٹرڈ ڈاکٹر کی تحریری ہدایت پر ہوتے ہیں۔ مہربان کیئر خود امراض کی تشخیص نہیں کرتی۔",
    relatedSlugs: ["monitoring", "physiotherapy", "live-in-care"]
  },
  {
    id: "4",
    slug: "monitoring",
    category: "clinical",
    categoryNameEn: "Health & Clinical Oversight",
    categoryNameUr: "طبی و نرسنگ معاونت",
    titleKey: "service_4_title",
    descKey: "service_4_desc",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Digital blood pressure measurement",
      "Glucometer blood sugar recording",
      "Pulse oximetry & body temperature",
      "Digital health logs for family & doctor"
    ],
    featuresUr: [
      "ڈیجیٹل بلڈ پریشر کی درست پیمائش",
      "گلوکو میٹر سے شوگر لیول کا اندراج",
      "نبض، آکسیجن اور درجہ حرارت کا ریکارڈ",
      "اہل خانہ اور ڈاکٹر کے لیے ہیلتھ چارٹ"
    ],
    fullDescEn: "Managing chronic conditions like hypertension and type-2 diabetes requires disciplined daily tracking. Our staff maintains clear, accurate logs of vitals taken before and after meals, allowing physicians to detect patterns and make timely clinical adjustments.",
    fullDescUr: "بلڈ پریشر اور ذیابیطس جیسے دائمی امراض کا اصل علاج روزانہ کی سخت نگرانی ہے۔ ہمارا عملہ نہار منہ اور کھانے کے بعد شوگر اور بلڈ پریشر کا باقاعدہ چارٹ بناتا ہے تاکہ ڈاکٹر بروقت ادویات میں ضروری ردوبدل کر سکیں۔",
    includedEn: [
      "Morning fasting and postprandial blood glucose checks",
      "Resting blood pressure and heart rate documentation",
      "Blood oxygen saturation (SpO2) and temperature monitoring",
      "Alerting family members immediately if readings cross agreed thresholds"
    ],
    includedUr: [
      "صبح نہار منہ اور کھانے کے 2 گھنٹے بعد بلڈ شوگر کی جانچ",
      "پرسکون حالت میں بلڈ پریشر اور نبض کی پیمائش کا اندراج",
      "آکسیجن کی مقدار اور جسمانی درجہ حرارت کی باقاعدہ جانچ",
      "کسی بھی غیر معمولی ریڈنگ پر فوری طور پر اہل خانہ کو الرٹ دینا"
    ],
    suitableForEn: [
      "Seniors with fluctuating blood pressure or diabetic instability",
      "Patients whose physicians have requested continuous 14-day vital logs",
      "Overseas family members needing objective daily biometric reassurance"
    ],
    suitableForUr: [
      "وہ بزرگ جن کا بلڈ پریشر یا شوگر اچانک کم یا زیادہ ہوتا ہو",
      "وہ مریض جن کے معالج نے دو ہفتے کا مسلسل چارٹ طلب کیا ہو",
      "بیرون ملک مقیم بیٹے اور بیٹیاں جو والدین کی صحت کے اعداد و شمار دیکھنا چاہیں"
    ],
    benefitsEn: [
      "Provides verified objective biometric data for physician consultations",
      "Detects silent hypertensive spikes before complications arise",
      "Maintains organized historical health records without family guesswork",
      "Generates immediate alert notifications for unusual spikes or drops"
    ],
    benefitsUr: [
      "ڈاکٹر کے معائنے کے لیے مصدقہ اور مستند میڈیکل چارٹ کی تیاری",
      "بلڈ پریشر میں اچانک خطرناک اضافے کی بروقت شناخت اور بچاؤ",
      "کاغذات یا زبانی یادداشت کے بغیر منظم کمپیوٹرائزڈ ریکارڈ",
      "غیر معمولی ریڈنگ کی صورت میں اہل خانہ کو فوری اطلاع"
    ],
    processEn: [
      { step: "1", title: "Threshold Setup", desc: "Recording senior's target BP and glucose parameters set by their doctor." },
      { step: "2", title: "Scheduled Daily Checks", desc: "Taking readings at calibrated resting times before/after meals." },
      { step: "3", title: "Log Entry", desc: "Documenting values in senior's dedicated health chart." },
      { step: "4", title: "Family Dispatch", desc: "Forwarding biometric updates directly to family WhatsApp channels." }
    ],
    processUr: [
      { step: "1", title: "طبی اہداف کا تعین", desc: "ڈاکٹر کے تجویز کردہ محفوظ بلڈ پریشر اور شوگر اہداف کا اندراج۔" },
      { step: "2", title: "مقررہ اوقات پر پیمائش", desc: "نہار منہ اور کھانے کے بعد پرسکون حالت میں درست ریڈنگ۔" },
      { step: "3", title: "لاگ بک میں باقاعدہ اندراج", desc: "تمام ویلیوز کا ہیلتھ ریکارڈ میں وقت کے ساتھ اندراج۔" },
      { step: "4", title: "اہل خانہ کو ترسیل", desc: "واٹس ایپ گروپ میں روزانہ رزلٹ کی فوری ترسیل۔" }
    ],
    limitationsEn: "Monitoring is observational. In case of acute medical emergencies, family is notified and emergency ambulance protocols are initiated.",
    limitationsUr: "یہ نگرانی اور ریکارڈ کی سروس ہے۔ ہنگامی صورتحال میں فوری طور پر اہل خانہ کو مطلع اور ایمبولینس سروس کو الرٹ کیا جاتا ہے۔",
    relatedSlugs: ["home-nursing", "doctor-visit", "daily-care"]
  },
  {
    id: "5",
    slug: "doctor-visit",
    category: "daily",
    categoryNameEn: "Daily Living & Companionship",
    categoryNameUr: "روزمرہ معمولات و رفاقت",
    titleKey: "service_5_title",
    descKey: "service_5_desc",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Door-to-door clinic accompaniment",
      "Wheelchair handling & transport help",
      "Prescription note recording",
      "Post-visit summary to family"
    ],
    featuresUr: [
      "گھر سے کلینک تک باوقار ہمراہی",
      "وہیل چیئر اور گاڑی میں بیٹھنے کی مدد",
      "ڈاکٹر کی ہدایات کا تحریری ریکارڈ",
      "ملاقات کے بعد تفصیلی رپورٹ اہل خانہ کو"
    ],
    fullDescEn: "Visiting busy medical centers in Pakistani cities can be exhausting and disorienting for elderly parents. Our assistants escort the senior safely from their doorstep to the doctor's office, handle waiting room logistics, take notes during consultations, and ensure safe return home.",
    fullDescUr: "شہر کے پرہجوم ہسپتالوں اور کلینکس میں جانا بزرگوں کے لیے سخت تھکا دینے والا مرحلہ ہوتا ہے۔ ہمارا معاون بزرگ کو گھر کے دروازے سے باحفاظت لے کر جاتا ہے، پرچی اور قطار کے معاملات دیکھتا ہے اور ڈاکٹر کی ہدایات نوٹ کر کے واپس لاتا ہے۔",
    includedEn: [
      "Punctual arrival and gentle assistance boarding private or taxi transport",
      "Wheelchair navigation across hospitals, labs, and diagnostic centers",
      "Respectful listening and documentation of the physician's instructions",
      "Picking up newly prescribed medicines and delivering them home safely"
    ],
    includedUr: [
      "وقت پر پہنچنا اور گاڑی یا ٹیکسی میں سہولت کے ساتھ بٹھانا",
      "ہسپتال، لیبارٹری اور معائنے کے کمرے تک وہیل چیئر کی مدد",
      "ڈاکٹر کی تمام ہدایات اور ٹیسٹس کو توجہ سے سن کر نوٹ کرنا",
      "واپسی پر تجویز کردہ ادویات میڈیکل اسٹور سے لے کر گھر پہنچانا"
    ],
    suitableForEn: [
      "Seniors whose children live overseas or are committed at office during clinic hours",
      "Elderly individuals who feel anxious visiting medical centers alone",
      "Patients needing diagnostic blood tests or radiological scans"
    ],
    suitableForUr: [
      "وہ بزرگ جن کے بچے ملازمت کے اوقات یا بیرون ملک ہونے کی وجہ سے ساتھ نہیں جا سکتے",
      "وہ بزرگ جو کلینک جاتے ہوئے گھبراہٹ کا شکار ہوتے ہیں",
      "وہ مریض جن کے مختلف لیب ٹیسٹس یا ایکسرے/الٹراساؤنڈ ہونے ہوں"
    ],
    benefitsEn: [
      "Eliminates hospital anxiety through patient, step-by-step guidance",
      "Ensures doctor's instructions are not misunderstood or forgotten",
      "Handles heavy hospital doors, elevators, and wheelchair ramps",
      "Sends full post-consultation briefing to working or overseas children"
    ],
    benefitsUr: [
      "ہسپتال کی لمبی قطاروں اور پریشانی سے بزرگ کو محفوظ رکھنا",
      "ڈاکٹر کی ہدایات کو نوٹ کر کے صحیح معلومات اہل خانہ تک پہنچانا",
      "وہیل چیئر، لفٹ اور دروازوں کو سہولت سے عبور کرنے میں مدد",
      "پردیس یا دفتر میں موجود بچوں کو ڈاکٹر کے مشورے کی فوری سمری"
    ],
    processEn: [
      { step: "1", title: "Trip Scheduling", desc: "Confirming appointment time, clinic address, and test requirements." },
      { step: "2", title: "Doorstep Pickup", desc: "Assisting senior safely into vehicle with walking cane or wheelchair." },
      { step: "3", title: "Consultation Support", desc: "Navigating hospital waiting areas and noting doctor recommendations." },
      { step: "4", title: "Safe Homecoming", desc: "Returning home, organizing new medicines, and debriefing family." }
    ],
    processUr: [
      { step: "1", title: "وقت کی تصدیق", desc: "ڈاکٹر کے اپائنٹمنٹ، کلینک کے پتے اور ٹیسٹس کی پیشگی تیاری۔" },
      { step: "2", title: "گھر سے روانگی", desc: "گاڑی میں آرام سے بٹھانا اور وہیل چیئر یا لاٹھی کا انتظام۔" },
      { step: "3", title: "معائنے میں ہمراہی", desc: "ہسپتال کے ویٹنگ ایریا میں مدد اور ڈاکٹر کی باتیں نوٹ کرنا۔" },
      { step: "4", title: "باحفاظت واپسی", desc: "گھر واپسی، نئی ادویات کی ترتیب اور خاندان کو مکمل آگاہی۔" }
    ],
    limitationsEn: "We assist with transport and physical accompaniment; we do not operate our own emergency ambulances or clinical vehicles.",
    limitationsUr: "ہم ہمراہی اور نقل و حرکت میں مدد دیتے ہیں۔ ایمرجنسی ایمبولینس سروس اس میں شامل نہیں۔",
    relatedSlugs: ["monitoring", "daily-care", "overseas-support"]
  },
  {
    id: "6",
    slug: "physiotherapy",
    category: "clinical",
    categoryNameEn: "Health & Clinical Oversight",
    categoryNameUr: "طبی و نرسنگ معاونت",
    titleKey: "service_6_title",
    descKey: "service_6_desc",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Coordination with licensed therapists",
      "Daily exercise routine encouragement",
      "Post-stroke mobility exercises",
      "Fall prevention training & support"
    ],
    featuresUr: [
      "مستند فزیو تھراپسٹ کے ساتھ کوآرڈینیشن",
      "روزانہ کی تجویز کردہ ورزشوں کی ترغیب",
      "فالج کے بعد بحالی کی مشقوں میں مدد",
      "گرنے سے بچاؤ کی متوازن مشقیں"
    ],
    fullDescEn: "Regaining mobility after orthopedic surgery, fracture recovery, or neurological events requires consistency. Our caregivers coordinate with certified physiotherapists and provide daily supervision to ensure prescribed stretching and balance exercises are carried out safely between clinic sessions.",
    fullDescUr: "ہڈیوں کے آپریشن، فریکچر یا فالج کے بعد دوبارہ چلنے پھرنے کے لیے مسلسل مشق کی ضرورت ہوتی ہے۔ ہمارا عملہ کوالیفائیڈ فزیو تھراپسٹ کے پلان کے مطابق روزانہ بزرگ کو ورزش کروانے میں مدد دیتا ہے تاکہ وہ دوبارہ قدموں پر کھڑے ہو سکیں۔",
    includedEn: [
      "Scheduling home visits by qualified, vetted physiotherapists",
      "Supporting the senior during recommended daily range-of-motion drills",
      "Encouraging consistent posture correction and safe walking technique",
      "Tracking daily stamina improvements and reporting to the family"
    ],
    includedUr: [
      "مستند فزیو تھراپسٹ کے گھریلو وزٹس کی ترتیب",
      "ڈاکٹر کی بتائی ہوئی ورزشوں کے دوران سہارا دینا اور حفاظت کرنا",
      "چلنے پھرنے کے دوران متوازن انداز کی مشق میں مدد",
      "روزمرہ بہتری اور توانائی کا ریکارڈ اہل خانہ تک پہنچانا"
    ],
    suitableForEn: [
      "Seniors recovering from hip replacement or knee surgery",
      "Stroke survivors working to regain hand or leg movement",
      "Elderly individuals experiencing balance loss and fear of falling"
    ],
    suitableForUr: [
      "گھٹنے یا کولہے کے آپریشن کے بعد صحت یاب ہونے والے بزرگ",
      "فالج کے بعد ہاتھ یا پاؤں کی حرکت بحال کرنے کی کوشش کرنے والے مریض",
      "وہ معززین جو کمزوری کی وجہ سے گرنے کے خوف میں مبتلا ہوں"
    ],
    benefitsEn: [
      "Accelerates post-operative joint mobility and muscle strength",
      "Builds senior confidence in standing and walking independently",
      "Prevents joint stiffness and physical deterioration from prolonged bed rest",
      "Ensures exercises are done safely without straining weak limbs"
    ],
    benefitsUr: [
      "آپریشن کے بعد جوڑوں اور پٹھوں کی طاقت میں تیز رفتار بحالی",
      "بزرگ میں خود اعتمادی پیدا کرنا تاکہ وہ بغیر خوف کے چل سکیں",
      "مسلسل لیٹے رہنے کی وجہ سے پیدا ہونے والی سختی کی روک تھام",
      "بغیر کسی جھٹکے یا چوٹ کے محفوظ انداز میں ورزش کی تکمیل"
    ],
    processEn: [
      { step: "1", title: "Therapy Assessment", desc: "Collaborating with treating orthopedic doctor or licensed physical therapist." },
      { step: "2", title: "Home Exercise Routine", desc: "Scheduling therapist visits and defining daily range-of-motion drills." },
      { step: "3", title: "Caregiver Supervision", desc: "Assisting senior through safe daily repetitions between therapist calls." },
      { step: "4", title: "Milestone Tracking", desc: "Documenting walking distance, balance progress, and muscle stamina." }
    ],
    processUr: [
      { step: "1", title: "علاج کا جائزہ", desc: "معالج آرتھوپیڈک سرجن یا فزیو تھراپسٹ کی ہدایات کا مطالعہ۔" },
      { step: "2", title: "ورزشوں کا شیڈول", desc: "ہفتہ وار فزیو وزٹس اور روزانہ کی ہلکی پھلکی مشقوں کا تعین۔" },
      { step: "3", title: "کیئر گیور کی معاونت", desc: "فزیو سیشنز کے درمیانی دنوں میں محفوظ ریپیٹیشنز میں مدد۔" },
      { step: "4", title: "بہتری کی مانیٹرنگ", desc: "چلنے کے فاصلے، توازن اور پٹھوں کی مضبوطی کا باقاعدہ اندراج۔" }
    ],
    limitationsEn: "Caregivers supervise exercises prescribed by the therapist; they do not diagnose muscular or skeletal injuries independently.",
    limitationsUr: "کیئر گیورز فزیو تھراپسٹ کی تجویز کردہ مشقیں کرواتے ہیں، وہ خود کوئی نیا طریقہ تجویز نہیں کرتے۔",
    relatedSlugs: ["home-nursing", "daily-care", "monitoring"]
  },
  {
    id: "7",
    slug: "live-in-care",
    category: "specialized",
    categoryNameEn: "Specialized & 24/7 Live-In",
    categoryNameUr: "ہمہ وقتی اور 24 گھنٹے نگہداشت",
    titleKey: "service_7_title",
    descKey: "service_7_desc",
    imageUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1200&q=85",
    features: [
      "12-hour shifts or 24/7 dedicated live-in",
      "Nighttime wakefulness & restroom safety",
      "Continuous companionship & nourishment",
      "Supervisor oversight & caregiver relief"
    ],
    featuresUr: [
      "12 گھنٹے کی شفٹ یا 24 گھنٹے لائیو ان نگہداشت",
      "رات کے وقت بیداری اور واش روم کی حفاظت",
      "مسلسل رفاقت، بروقت کھانا اور ادویات",
      "سپر وائزر کی باقاعدہ جانچ اور متبادل عملہ"
    ],
    fullDescEn: "When a senior requires continuous vigilance day and night, our full-day and live-in arrangements provide around-the-clock peace of mind. A dedicated, background-verified caregiver resides in the home (or alternates on 12-hour shifts) to assist with all facets of living and nighttime safety.",
    fullDescUr: "جب بزرگ کو دن رات مسلسل توجہ اور نگرانی کی ضرورت ہو، تو ہماری فل ڈے یا 24 گھنٹے کی سروس بہترین حل ہے۔ تصدیق شدہ کیئر گیور گھر میں قیام کر کے رات کی بیداری، دن کے معمولات اور بزرگ کی ہر ضرورت کا خلوص سے خیال رکھتا ہے۔",
    includedEn: [
      "Continuous 24-hour presence or coordinated 12-hour day/night shifts",
      "Assistance with morning awakening, grooming, meals, and nighttime bed routines",
      "Immediate assistance when the senior wakes up during the night to use the restroom",
      "Scheduled relief days managed smoothly without gaps in care"
    ],
    includedUr: [
      "24 گھنٹے کی مسلسل موجودگی یا 12 گھنٹے کی شفٹوں کا منظم انتظام",
      "صبح بیدار ہونے سے لے کر رات سونے تک کے تمام معمولات میں مدد",
      "رات کو واش روم جانے کے لیے آنکھ کھلنے پر فوری دست یابی",
      "کیئر گیور کی چھٹی کے دن متبادل عملے کا بروقت اور بغیر تعطل بندوبست"
    ],
    suitableForEn: [
      "Seniors with advanced dementia, Alzheimer's, or severe cognitive decline",
      "Completely bedbound seniors requiring 24/7 care and repositioning",
      "Elderly parents whose primary family members live abroad"
    ],
    suitableForUr: [
      "ڈیمینشیا یا الزائمر میں مبتلا بزرگ جنہیں مسلسل نگرانی چاہیے",
      "مکمل طور پر بستر کے محتاج مریض جنہیں چوبیس گھنٹے کی مدد درکار ہو",
      "وہ والدین جن کے بچے بیرون ملک مقیم ہیں اور گھر میں کوئی دوسرا فرد نہیں"
    ],
    benefitsEn: [
      "Unbroken 24-hour physical and emotional safety for vulnerable seniors",
      "Eliminates fear of midnight falls during unattended restroom trips",
      "Ensures bedbound seniors are repositioned regularly every 2–3 hours",
      "Provides relief coverage to prevent caregiver burnout"
    ],
    benefitsUr: [
      "کمزور بزرگ کے لیے دن رات مسلسل تحفظ اور خاندانی سکون",
      "رات کے اندھیرے میں باتھ روم جاتے ہوئے گرنے کے خطرے کا خاتمہ",
      "بستری مریضوں کی باقاعدگی سے کروٹ بدلنا تاکہ زخم نہ بنیں",
      "کیئر گیور کی چھٹی پر متبادل اسٹاف کی فوری اور یقینی فراہمی"
    ],
    processEn: [
      { step: "1", title: "Comprehensive Home Audit", desc: "Reviewing living quarters, senior's nocturnal habits, and care routines." },
      { step: "2", title: "Vetted Staff Deployment", desc: "Deploying background-checked, vetted live-in or 12-hour shift caregivers." },
      { step: "3", title: "Clinical Supervision", desc: "Weekly visits by our supervisor to assess care quality and hygiene." },
      { step: "4", title: "Unbroken Shift Handover", desc: "Organizing relief schedules so the senior is never left unattended." }
    ],
    processUr: [
      { step: "1", title: "رہائشی ماحول کا جائزہ", desc: "بزرگ کے کمرے، رات کے معمولات اور نگہداشت کے تقاضوں کی جانچ۔" },
      { step: "2", title: "تصدیق شدہ عملے کی تعیناتی", desc: "مکمل چھان بین کے بعد 24 گھنٹے یا 12 گھنٹے شفٹ کیئر گیور کی ماموری۔" },
      { step: "3", title: "ہفتہ وار سپروائزری وزٹ", desc: "نگہداشت کے معیار اور بزرگ کی تسلی کے لیے فیلڈ سپروائزر کا معائنہ۔" },
      { step: "4", title: "بغیر تعطل متبادل انتظام", desc: "چھٹی کے اوقات میں دوسرے کیئر گیور کی بروقت منتقلی۔" }
    ],
    limitationsEn: "Requires provision of private, dignified sleeping quarters and meals for the live-in caregiver by the host family.",
    limitationsUr: "24 گھنٹے قیام کرنے والے کیئر گیور کے لیے مناسب کمرہ اور کھانے کا اہتمام میزبان فیملی کے ذمہ ہوتا ہے۔",
    relatedSlugs: ["hygiene-care", "home-nursing", "overseas-support"]
  },
  {
    id: "8",
    slug: "overseas-support",
    category: "specialized",
    categoryNameEn: "Specialized & 24/7 Live-In",
    categoryNameUr: "ہمہ وقتی اور اوورسیز سہولت",
    titleKey: "service_8_title",
    descKey: "service_8_desc",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Digital WhatsApp care briefings",
      "Video call assistance for parents",
      "Prescription restocking coordination",
      "Dedicated overseas family care manager"
    ],
    featuresUr: [
      "واٹس ایپ پر ہر وزٹ کی تفصیلی سمری",
      "والدین کو ویڈیو کال ملوانے میں مدد",
      "ماہانہ ادویات کی خریداری اور انتظام",
      "اوورسیز فیملی کے لیے مخصوص مینیجر"
    ],
    fullDescEn: "Specially tailored for overseas Pakistanis in the Gulf, UK, North America, and Europe. We bridge thousands of miles with transparent communication, digital visit updates, direct Care Manager access, and verified home care so you know your parents are cherished.",
    fullDescUr: "بیرون ملک مقیم پاکستانیوں کے لیے خاص طور پر تیار کردہ پروگرام۔ ہزاروں میل کے فاصلے کے باوجود آپ اپنے والدین کے ہر لمحے سے باخبر رہتے ہیں۔ ہم شفاف اپ ڈیٹس اور مخلص نگہداشت کے ذریعے پردیسیوں کے دل کا سکون بنتے ہیں۔",
    includedEn: [
      "Structured WhatsApp summaries with photos (with family consent) after key visits",
      "Direct line to an English/Urdu speaking Care Coordinator in Pakistan",
      "Monthly medication inventory audits to ensure supplies never run low",
      "Assisting parents in scheduling and answering WhatsApp video calls with children abroad"
    ],
    includedUr: [
      "فیملی کی اجازت سے ہر اہم وزٹ کی باقاعدہ واٹس ایپ سمری اور رپورٹس",
      "پاکستان میں موجود کیئر کوآرڈینیٹر سے براہ راست بات چیت کی سہولت",
      "ماہانہ ادویات کا معائنہ تاکہ کوئی بھی ضروری دوا ختم نہ ہو",
      "والدین کو ویڈیو کال آن کر کے بچوں سے سکون سے بات کروانے میں تعاون"
    ],
    suitableForEn: [
      "Non-resident Pakistani professionals whose parents live alone in Pakistan",
      "Families preparing for pilgrimage (Hajj/Umrah) seeking temporary care",
      "Overseas siblings coordinating collective care for an aging parent"
    ],
    suitableForUr: [
      "پردیس میں مقیم پاکستانی جن کے والدین پاکستان میں اکیلے رہتے ہیں",
      "حج یا عمرہ کے سفر پر جانے والے افراد جنہیں بزرگوں کے لیے عارضی دیکھ بھال چاہیے",
      "وہ بہن بھائی جو باہر بیٹھ کر مشترکہ طور پر والدین کی دیکھ بھال منظم کرنا چاہتے ہوں"
    ],
    benefitsEn: [
      "Relieves daily worry and guilt for sons and daughters working overseas",
      "Provides verified boots-on-the-ground support during unexpected health dips",
      "Enables smooth family video calling for elderly parents who struggle with tech",
      "Establishes a single accountable liaison in Pakistan for all care matters"
    ],
    benefitsUr: [
      "پردیس میں مقیم بچوں کے لیے روزمرہ بے چینی اور خوف کا خاتمہ",
      "طبیعت میں اتار چڑھاؤ کے وقت پاکستان میں ایک قابل اعتماد ادارے کی موجودگی",
      "ٹیکنالوجی سے ناواقف بزرگوں کو بچوں سے ویڈیو کال پر آسانی سے بات کروانا",
      "نگہداشت کے تمام معاملات کے لیے پاکستان میں ایک بااعتماد فوکل پرسن"
    ],
    processEn: [
      { step: "1", title: "Time-Zone Aligned Call", desc: "Consulting with children in UK, Gulf, US, or Canada." },
      { step: "2", title: "In-Person Parent Visit", desc: "Meeting elderly parents at their home in Pakistan to establish trust." },
      { step: "3", title: "WhatsApp Channel Setup", desc: "Creating dedicated family reporting group with Care Coordinator." },
      { step: "4", title: "Ongoing Peace of Mind", desc: "Delivering continuous visit summaries and medicine updates." }
    ],
    processUr: [
      { step: "1", title: "ٹائم زون کے مطابق گفتگو", desc: "برطانیہ، خلیج، امریکہ یا کینیڈا کے مقامی اوقات پر بچوں سے مشاورت۔" },
      { step: "2", title: "والدین سے ملاقات", desc: "پاکستان میں والدین کے گھر جا کر اپنائیت اور اعتماد کا رشتہ قائم کرنا۔" },
      { step: "3", title: "واٹس ایپ رپورٹنگ گروپ", desc: "کیئر کوآرڈینیٹر کے ساتھ مخصوص فیملی چینل کی تشکیل۔" },
      { step: "4", title: "مسلسل دلی سکون", desc: "ہر وزٹ پر والدین کی خیریت، ادویات اور معمولات کی باقاعدہ ترسیل۔" }
    ],
    limitationsEn: "We coordinate care in designated cities in Pakistan. Time-zone conscious communication scheduled between families and our team.",
    limitationsUr: "ہم پاکستان کے مخصوص شہروں میں خدمات دیتے ہیں۔ وقت کے فرق (ٹائم زون) کو مدنظر رکھ کر رابطے کا وقت طے کیا جاتا ہے۔",
    relatedSlugs: ["live-in-care", "doctor-visit", "monitoring"]
  }
];
