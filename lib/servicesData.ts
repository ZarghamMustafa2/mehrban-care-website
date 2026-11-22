import { ServiceItemData } from "@/components/services/ServiceCard";

export interface DetailedService extends ServiceItemData {
  fullDescEn: string;
  fullDescUr: string;
  includedEn: string[];
  includedUr: string[];
  suitableForEn: string[];
  suitableForUr: string[];
  limitationsEn: string;
  limitationsUr: string;
}

export const servicesData: DetailedService[] = [
  {
    id: "1",
    slug: "daily-care",
    titleKey: "service_1_title",
    descKey: "service_1_desc",
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
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
    limitationsEn: "Non-medical companion service. Caregivers do not administer injections, adjust clinical dosages, or perform surgical dressing.",
    limitationsUr: "یہ ایک غیر طبی رفاقت کی خدمت ہے۔ نگہداشت کار انجیکشن لگانے یا ڈاکٹر کے مشورے کے بغیر ادویات تبدیل کرنے کے مجاز نہیں ہیں۔"
  },
  {
    id: "2",
    slug: "hygiene-care",
    titleKey: "service_2_title",
    descKey: "service_2_desc",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
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
    limitationsEn: "Personal hygiene caregivers strictly protect client dignity. In-depth medical wound care requires our Home Nursing Support team.",
    limitationsUr: "صفائی کے کیئر گیورز مکمل احترام ملحوظ رکھتے ہیں۔ گہرے زخموں کی مرہم پٹی کے لیے ہوم نرسنگ سروس درکار ہوگی۔"
  },
  {
    id: "3",
    slug: "home-nursing",
    titleKey: "service_3_title",
    descKey: "service_3_desc",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
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
    limitationsEn: "All nursing interventions are performed strictly under instructions of a registered physician. Mehrban Care does not diagnose illnesses.",
    limitationsUr: "تمام نرسنگ اقدامات مستند رجسٹرڈ ڈاکٹر کی تحریری ہدایت پر ہوتے ہیں۔ مہربان کیئر خود امراض کی تشخیص نہیں کرتی۔"
  },
  {
    id: "4",
    slug: "monitoring",
    titleKey: "service_4_title",
    descKey: "service_4_desc",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
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
    limitationsEn: "Monitoring is observational. In case of acute medical emergencies, family is notified and emergency ambulance protocols are initiated.",
    limitationsUr: "یہ نگرانی اور ریکارڈ کی سروس ہے۔ ہنگامی صورتحال میں فوری طور پر اہل خانہ کو مطلع اور ایمبولینس سروس کو الرٹ کیا جاتا ہے۔"
  },
  {
    id: "5",
    slug: "doctor-visit",
    titleKey: "service_5_title",
    descKey: "service_5_desc",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
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
    limitationsEn: "We assist with transport and physical accompaniment; we do not operate our own emergency ambulances or clinical vehicles.",
    limitationsUr: "ہم ہمراہی اور نقل و حرکت میں مدد دیتے ہیں۔ ایمرجنسی ایمبولینس سروس اس میں شامل نہیں۔"
  },
  {
    id: "6",
    slug: "physiotherapy",
    titleKey: "service_6_title",
    descKey: "service_6_desc",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
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
    limitationsEn: "Caregivers supervise exercises prescribed by the therapist; they do not diagnose muscular or skeletal injuries independently.",
    limitationsUr: "کیئر گیورز فزیو تھراپسٹ کی تجویز کردہ مشقیں کرواتے ہیں، وہ خود کوئی نیا طریقہ تجویز نہیں کرتے۔"
  },
  {
    id: "7",
    slug: "live-in-care",
    titleKey: "service_7_title",
    descKey: "service_7_desc",
    imageUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80",
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
    limitationsEn: "Requires provision of private, dignified sleeping quarters and meals for the live-in caregiver by the host family.",
    limitationsUr: "24 گھنٹے قیام کرنے والے کیئر گیور کے لیے مناسب کمرہ اور کھانے کا اہتمام میزبان فیملی کے ذمہ ہوتا ہے۔"
  },
  {
    id: "8",
    slug: "overseas-support",
    titleKey: "service_8_title",
    descKey: "service_8_desc",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
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
    limitationsEn: "We coordinate care in designated cities in Pakistan. Time-zone conscious communication scheduled between families and our team.",
    limitationsUr: "ہم پاکستان کے مخصوص شہروں میں خدمات دیتے ہیں۔ وقت کے فرق (ٹائم زون) کو مدنظر رکھ کر رابطے کا وقت طے کیا جاتا ہے۔"
  }
];
