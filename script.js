/* ==========================================================================
   Money Hooks by Komal — script.js
   Handles: language switching, mobile nav, scroll reveal, budget calculator,
   FAQ accordion, today's tip randomizer, contact form, back-to-top.
   ========================================================================== */

(function () {
  "use strict";

  /* ----------------------------------------------------------------------
     1. TRANSLATIONS
  ---------------------------------------------------------------------- */
  const translations = {
    en: {
      "nav.about": "About", "nav.mission": "Mission", "nav.videos": "Videos",
      "nav.tips": "Tips", "nav.calculator": "Calculator", "nav.faq": "FAQ", "nav.contact": "Contact",

      "hero.eyebrow": "Financial Educator & Budgeting Coach",
      "hero.tagline": "Small money lessons that quietly change big habits.",
      "hero.intro": "Hello! I'm Komal. I enjoy sharing simple, practical money lessons that help people build better financial habits. My goal is to make budgeting, saving, and smart spending easy to understand through short educational content.",
      "hero.btnVideos": "Watch Videos", "hero.btnContact": "Contact Me",
      "hero.badge1": "Financial Educator", "hero.badge2": "Content Creator", "hero.badge3": "Budgeting Coach",
      "hero.chip1": "Save first", "hero.chip2": "Spend smart",

      "about.eyebrow": "About Komal",
      "about.title": "A little about why I do this",
      "about.p1": "I'm Komal, and money confused me for a long time too. Nobody sat me down and explained how a budget actually works, or why saving a little every month matters more than saving a lot once in a while. I learned most of it the slow way — through trial, error, and a fair share of overspending.",
      "about.p2": "That's really why Money Hooks exists. I wanted to build the resource I wish I'd had — short, honest lessons that explain money in plain language, without jargon or judgment. Whether you're a student getting your first allowance, a parent trying to teach your kids, or just someone who wants a clearer picture of where your money goes, this is a space to learn at your own pace.",
      "about.p3": "My goal isn't to make you an expert overnight. It's to help you build small, steady habits — the kind that quietly add up and make a real difference over time.",

      "mission.eyebrow": "My Mission",
      "mission.title": "Three ideas I keep coming back to",
      "mission.card1Title": "Save Wisely",
      "mission.card1Text": "Saving isn't about giving everything up. It's about setting a little aside first, consistently, so your future self has options.",
      "mission.card2Title": "Spend Smartly",
      "mission.card2Text": "Every purchase is a choice. Spending smart just means pausing long enough to ask if it's a choice you actually want to make.",
      "mission.card3Title": "Build Better Habits",
      "mission.card3Text": "Good money habits aren't built overnight. They're built one small, repeated decision at a time — and that's exactly where I focus.",

      "videos.eyebrow": "Watch & Learn",
      "videos.title": "Featured educational videos",
      "videos.sub": "A hand-picked mix of lessons on budgeting, saving and everyday money decisions.",
      "videos.v1": "Budget Planning", "videos.v2": "Saving Money", "videos.v3": "Smart Spending",
      "videos.v4": "Family Budget", "videos.v5": "Kids Financial Education", "videos.v6": "Financial Discipline",

      "tips.eyebrow": "Quick Wins",
      "tips.title": "Money saving tips you can start today",
      "tips.t1": "Track your expenses — you can't manage what you don't measure.",
      "tips.t2": "Create a monthly budget and treat it like a plan, not a punishment.",
      "tips.t3": "Save before spending — pay your future self first.",
      "tips.t4": "Avoid impulse buying by waiting 24 hours before non-essential purchases.",
      "tips.t5": "Compare prices before shopping, even for small everyday items.",
      "tips.t6": "Build an emergency fund — even a small cushion reduces stress.",

      "calc.eyebrow": "Try It Yourself",
      "calc.title": "Monthly budget calculator",
      "calc.sub": "Enter your numbers below and see where your money stands, instantly.",
      "calc.income": "Monthly Income", "calc.rent": "Rent", "calc.food": "Food",
      "calc.transport": "Transport", "calc.bills": "Bills", "calc.other": "Other Expenses",
      "calc.btn": "Calculate",
      "calc.totalExpenses": "Total Expenses", "calc.remaining": "Remaining Balance", "calc.savings": "Monthly Savings",
      "calc.note": "Fill in the fields above and press Calculate to see your summary.",
      "calc.noteOver": "Your expenses are higher than your income. Consider reviewing your spending.",
      "calc.noteGood": "Nicely balanced! Here's how your month is shaping up.",

      "why.eyebrow": "Why Learn With Me",
      "why.title": "Learning made simple, on purpose",
      "why.i1t": "Easy Language", "why.i1d": "No jargon, no confusing terms — just plain, everyday words.",
      "why.i2t": "Practical Advice", "why.i2d": "Lessons you can actually apply the same day you learn them.",
      "why.i3t": "Short Lessons", "why.i3d": "Focused videos that respect your time and attention.",
      "why.i4t": "Family Friendly", "why.i4d": "Content that works for parents, kids, and everyone in between.",
      "why.i5t": "Beginner Friendly", "why.i5d": "Never assumes prior knowledge — we start from the very basics.",
      "why.i6t": "Real-Life Examples", "why.i6d": "Every lesson is grounded in situations you'll actually face.",

      "todayTip.eyebrow": "Today's Money Tip", "todayTip.btn": "Show another tip",

      "testi.eyebrow": "Testimonials",
      "testi.title": "What people say after learning with me",
      "testi.q1": "\"I always thought budgeting meant giving up everything I enjoy. Komal's lessons showed me it's really just about being intentional. My savings finally look the way I want them to.\"",
      "testi.r1": "University Student",
      "testi.q2": "\"We started using the family budget tips with our kids, and it's opened up conversations about money we never had before. Simple, clear, and genuinely useful.\"",
      "testi.r2": "Parents of two",
      "testi.q3": "\"The budget calculator alone was worth it. Seeing my numbers laid out plainly made me realize where I was leaking money every month.\"",
      "testi.r3": "First-time earner",

      "faq.eyebrow": "Good to Know",
      "faq.title": "Frequently asked questions",
      "faq.q1": "Who is this website for?",
      "faq.a1": "Anyone who wants a clearer relationship with money — students, parents, beginners, or families looking to build better habits together.",
      "faq.q2": "Can beginners learn?",
      "faq.a2": "Absolutely. Every lesson is written and explained for someone starting from zero — no prior finance knowledge needed.",
      "faq.q3": "Are the lessons free?",
      "faq.a3": "Yes, all the video lessons and tips on this website are completely free to watch and learn from.",
      "faq.q4": "How long are the videos?",
      "faq.a4": "Most lessons are short and focused, usually just a few minutes, so you can learn something useful without a big time commitment.",
      "faq.q5": "How can I contact Komal?",
      "faq.a5": "You can use the contact form below, email me directly, or reach out on WhatsApp or social media — details are just below.",

      "contact.eyebrow": "Get In Touch",
      "contact.title": "Let's talk about your money goals",
      "contact.sub": "Questions, feedback, or just want to say hello? I'd love to hear from you.",
      "contact.whatsapp": "(WhatsApp)", "contact.location": "Peshawar, Pakistan",
      "contact.name": "Name", "contact.email": "Email", "contact.message": "Message", "contact.send": "Send Message",
      "contact.sent": "Thank you! Your message has been sent — I'll get back to you soon.",
      "contact.error": "Please fill in every field with a valid message before sending.",

      "footer.privacy": "Privacy Policy", "footer.terms": "Terms",
      "footer.copyRest": "Money Hooks by Komal. All rights reserved."
    },

    ur: {
      "nav.about": "میرے بارے میں", "nav.mission": "مشن", "nav.videos": "ویڈیوز",
      "nav.tips": "تجاویز", "nav.calculator": "کیلکولیٹر", "nav.faq": "سوالات", "nav.contact": "رابطہ",

      "hero.eyebrow": "فنانشل ایجوکیٹر اور بجٹنگ کوچ",
      "hero.tagline": "چھوٹے مالی سبق جو خاموشی سے بڑی عادتیں بدل دیتے ہیں۔",
      "hero.intro": "السلام علیکم! میں کومل ہوں۔ مجھے سادہ اور عملی مالی سبق شیئر کرنا پسند ہے جو لوگوں کو بہتر مالی عادات بنانے میں مدد دیتے ہیں۔ میرا مقصد بجٹ بنانا، بچت کرنا اور سمجھداری سے خرچ کرنا مختصر تعلیمی مواد کے ذریعے آسان بنانا ہے۔",
      "hero.btnVideos": "ویڈیوز دیکھیں", "hero.btnContact": "مجھ سے رابطہ کریں",
      "hero.badge1": "فنانشل ایجوکیٹر", "hero.badge2": "کنٹینٹ کری ایٹر", "hero.badge3": "بجٹنگ کوچ",
      "hero.chip1": "پہلے بچت کریں", "hero.chip2": "سمجھداری سے خرچ کریں",

      "about.eyebrow": "کومل کے بارے میں",
      "about.title": "میں یہ کیوں کرتی ہوں",
      "about.p1": "میں کومل ہوں، اور پیسہ مجھے بھی طویل عرصے تک الجھن میں رکھتا تھا۔ کسی نے مجھے بیٹھ کر یہ نہیں سمجھایا کہ بجٹ اصل میں کیسے کام کرتا ہے، یا ہر ماہ تھوڑی سی بچت کیوں زیادہ اہم ہے۔ میں نے یہ سب کچھ آہستہ آہستہ، آزمائش اور غلطیوں سے سیکھا۔",
      "about.p2": "یہی وجہ ہے کہ منی ہکس بنایا گیا۔ میں وہ وسیلہ بنانا چاہتی تھی جو میں خود چاہتی تھی — مختصر، ایماندار سبق جو پیسے کو سادہ زبان میں سمجھائیں۔ چاہے آپ طالب علم ہوں، والدین ہوں، یا صرف اپنے اخراجات کو بہتر سمجھنا چاہتے ہوں، یہ جگہ آپ کے لیے ہے۔",
      "about.p3": "میرا مقصد آپ کو راتوں رات ماہر بنانا نہیں۔ یہ چھوٹی، مستقل عادات بنانے میں مدد دینا ہے جو وقت کے ساتھ حقیقی فرق پیدا کرتی ہیں۔",

      "mission.eyebrow": "میرا مشن",
      "mission.title": "تین باتیں جو میں ہمیشہ یاد رکھتی ہوں",
      "mission.card1Title": "سمجھداری سے بچت کریں",
      "mission.card1Text": "بچت کا مطلب سب کچھ چھوڑ دینا نہیں۔ اس کا مطلب ہے پہلے تھوڑا سا الگ رکھنا، مستقل مزاجی سے۔",
      "mission.card2Title": "سمجھداری سے خرچ کریں",
      "mission.card2Text": "ہر خریداری ایک انتخاب ہے۔ سمجھداری سے خرچ کرنے کا مطلب ہے رک کر سوچنا کہ کیا یہ واقعی ضروری ہے۔",
      "mission.card3Title": "بہتر عادات بنائیں",
      "mission.card3Text": "اچھی مالی عادات راتوں رات نہیں بنتیں۔ یہ ایک ایک چھوٹے فیصلے سے بنتی ہیں — اور یہی میرا مرکز ہے۔",

      "videos.eyebrow": "دیکھیں اور سیکھیں",
      "videos.title": "منتخب تعلیمی ویڈیوز",
      "videos.sub": "بجٹ سازی، بچت اور روزمرہ کے مالی فیصلوں پر سبق کا انتخاب۔",
      "videos.v1": "بجٹ منصوبہ بندی", "videos.v2": "پیسہ بچانا", "videos.v3": "سمجھدارانہ خرچ",
      "videos.v4": "خاندانی بجٹ", "videos.v5": "بچوں کی مالی تعلیم", "videos.v6": "مالی نظم و ضبط",

      "tips.eyebrow": "فوری فائدے",
      "tips.title": "آج ہی شروع کرنے کے لیے بچت کی تجاویز",
      "tips.t1": "اپنے اخراجات کا حساب رکھیں — جو ناپا نہ جائے اسے سنبھالا نہیں جا سکتا۔",
      "tips.t2": "ماہانہ بجٹ بنائیں اور اسے سزا نہیں بلکہ منصوبہ سمجھیں۔",
      "tips.t3": "خرچ کرنے سے پہلے بچت کریں — پہلے اپنے مستقبل کو ادائیگی کریں۔",
      "tips.t4": "غیر ضروری خریداری سے پہلے 24 گھنٹے انتظار کریں۔",
      "tips.t5": "خریداری سے پہلے قیمتوں کا موازنہ کریں، چھوٹی چیزوں کے لیے بھی۔",
      "tips.t6": "ایمرجنسی فنڈ بنائیں — تھوڑی بچت بھی ذہنی سکون دیتی ہے۔",

      "calc.eyebrow": "خود آزمائیں",
      "calc.title": "ماہانہ بجٹ کیلکولیٹر",
      "calc.sub": "نیچے اپنے اعداد درج کریں اور فوراً دیکھیں کہ آپ کا پیسہ کہاں کھڑا ہے۔",
      "calc.income": "ماہانہ آمدنی", "calc.rent": "کرایہ", "calc.food": "کھانا",
      "calc.transport": "آمدورفت", "calc.bills": "بلز", "calc.other": "دیگر اخراجات",
      "calc.btn": "حساب لگائیں",
      "calc.totalExpenses": "کل اخراجات", "calc.remaining": "باقی بیلنس", "calc.savings": "ماہانہ بچت",
      "calc.note": "اوپر خانے پُر کریں اور خلاصہ دیکھنے کے لیے حساب لگائیں دبائیں۔",
      "calc.noteOver": "آپ کے اخراجات آمدنی سے زیادہ ہیں۔ اپنے اخراجات پر نظرثانی کریں۔",
      "calc.noteGood": "بہترین توازن! یہ رہا آپ کے مہینے کا خلاصہ۔",

      "why.eyebrow": "میرے ساتھ کیوں سیکھیں",
      "why.title": "سیکھنے کو جان بوجھ کر آسان بنایا گیا",
      "why.i1t": "آسان زبان", "why.i1d": "کوئی مشکل اصطلاحات نہیں — صرف سادہ، روزمرہ الفاظ۔",
      "why.i2t": "عملی مشورے", "why.i2d": "ایسے سبق جو آپ اسی دن استعمال کر سکتے ہیں۔",
      "why.i3t": "مختصر سبق", "why.i3d": "توجہ مرکوز رکھنے والی مختصر ویڈیوز۔",
      "why.i4t": "خاندانی دوستانہ", "why.i4d": "والدین اور بچوں دونوں کے لیے مناسب مواد۔",
      "why.i5t": "ابتدائی افراد کے لیے موزوں", "why.i5d": "کسی پیشگی معلومات کی ضرورت نہیں — بالکل بنیاد سے شروع کریں۔",
      "why.i6t": "حقیقی زندگی کی مثالیں", "why.i6d": "ہر سبق ایسے حالات پر مبنی ہے جن کا آپ کو سامنا ہوتا ہے۔",

      "todayTip.eyebrow": "آج کی مالی تجویز", "todayTip.btn": "ایک اور تجویز دکھائیں",

      "testi.eyebrow": "تاثرات",
      "testi.title": "میرے ساتھ سیکھنے کے بعد لوگ کیا کہتے ہیں",
      "testi.q1": "\"میں ہمیشہ سمجھتی تھی کہ بجٹ بنانے کا مطلب ہر چیز چھوڑ دینا ہے۔ کومل کے سبق نے مجھے سکھایا کہ یہ صرف سوچ سمجھ کر فیصلہ کرنے کا نام ہے۔\"",
      "testi.r1": "یونیورسٹی طالبہ",
      "testi.q2": "\"ہم نے اپنے بچوں کے ساتھ خاندانی بجٹ کی تجاویز استعمال کرنا شروع کیں، اور اس نے پیسے پر ایسی گفتگو شروع کروائی جو پہلے کبھی نہیں ہوئی تھی۔\"",
      "testi.r2": "دو بچوں کے والدین",
      "testi.q3": "\"صرف بجٹ کیلکولیٹر ہی کافی تھا۔ اپنے اعداد صاف دیکھ کر مجھے احساس ہوا کہ میرا پیسہ کہاں جا رہا ہے۔\"",
      "testi.r3": "پہلی نوکری والا فرد",

      "faq.eyebrow": "جاننے کے قابل",
      "faq.title": "اکثر پوچھے گئے سوالات",
      "faq.q1": "یہ ویب سائٹ کس کے لیے ہے؟",
      "faq.a1": "ہر وہ شخص جو پیسے کے ساتھ بہتر تعلق چاہتا ہے — طلبہ، والدین، ابتدائی افراد، یا خاندان۔",
      "faq.q2": "کیا ابتدائی افراد سیکھ سکتے ہیں؟",
      "faq.a2": "بالکل۔ ہر سبق ایسے شخص کے لیے لکھا گیا ہے جو صفر سے شروع کر رہا ہو۔",
      "faq.q3": "کیا سبق مفت ہیں؟",
      "faq.a3": "جی ہاں، اس ویب سائٹ پر تمام ویڈیو سبق اور تجاویز مکمل طور پر مفت ہیں۔",
      "faq.q4": "ویڈیوز کتنی طویل ہیں؟",
      "faq.a4": "زیادہ تر سبق مختصر اور واضح ہوتے ہیں، عام طور پر چند منٹ کے۔",
      "faq.q5": "کومل سے رابطہ کیسے کریں؟",
      "faq.a5": "آپ نیچے دیئے گئے فارم، ای میل، واٹس ایپ یا سوشل میڈیا کے ذریعے رابطہ کر سکتے ہیں۔",

      "contact.eyebrow": "رابطہ کریں",
      "contact.title": "آئیے آپ کے مالی اہداف پر بات کریں",
      "contact.sub": "سوالات، رائے، یا صرف سلام کہنا چاہتے ہیں؟ مجھے سن کر خوشی ہوگی۔",
      "contact.whatsapp": "(واٹس ایپ)", "contact.location": "پشاور، پاکستان",
      "contact.name": "نام", "contact.email": "ای میل", "contact.message": "پیغام", "contact.send": "پیغام بھیجیں",
      "contact.sent": "شکریہ! آپ کا پیغام بھیج دیا گیا ہے — میں جلد رابطہ کروں گی۔",
      "contact.error": "براہ کرم بھیجنے سے پہلے تمام خانے درست طریقے سے پُر کریں۔",

      "footer.privacy": "پرائیویسی پالیسی", "footer.terms": "شرائط",
      "footer.copyRest": "منی ہکس بائے کومل۔ جملہ حقوق محفوظ ہیں۔"
    },

    hi: {
      "nav.about": "मेरे बारे में", "nav.mission": "मिशन", "nav.videos": "वीडियो",
      "nav.tips": "टिप्स", "nav.calculator": "कैलकुलेटर", "nav.faq": "सवाल-जवाब", "nav.contact": "संपर्क",

      "hero.eyebrow": "फाइनेंशियल एजुकेटर और बजटिंग कोच",
      "hero.tagline": "छोटे पैसे के सबक जो चुपचाप बड़ी आदतें बदल देते हैं।",
      "hero.intro": "नमस्ते! मैं कोमल हूं। मुझे सरल, व्यावहारिक पैसों के सबक शेयर करना पसंद है जो लोगों को बेहतर वित्तीय आदतें बनाने में मदद करते हैं। मेरा लक्ष्य बजट बनाना, बचत करना और समझदारी से खर्च करना, छोटे शैक्षिक कंटेंट के ज़रिए आसान बनाना है।",
      "hero.btnVideos": "वीडियो देखें", "hero.btnContact": "मुझसे संपर्क करें",
      "hero.badge1": "फाइनेंशियल एजुकेटर", "hero.badge2": "कंटेंट क्रिएटर", "hero.badge3": "बजटिंग कोच",
      "hero.chip1": "पहले बचत करें", "hero.chip2": "समझदारी से खर्च करें",

      "about.eyebrow": "कोमल के बारे में",
      "about.title": "मैं यह क्यों करती हूं",
      "about.p1": "मैं कोमल हूं, और पैसा मुझे भी लंबे समय तक उलझन में रखता था। किसी ने बैठकर मुझे नहीं समझाया कि बजट असल में कैसे काम करता है, या हर महीने थोड़ी बचत करना क्यों ज़्यादा मायने रखता है। मैंने यह सब धीरे-धीरे, गलतियों और अनुभव से सीखा।",
      "about.p2": "यही वजह है कि मनी हुक्स बना। मैं वह संसाधन बनाना चाहती थी जो मुझे खुद चाहिए था — छोटे, ईमानदार सबक जो पैसे को सरल भाषा में समझाएं, बिना किसी जटिल शब्दावली के। चाहे आप छात्र हों, माता-पिता हों, या बस अपने खर्चों को बेहतर समझना चाहते हों, यह जगह आपके लिए है।",
      "about.p3": "मेरा लक्ष्य आपको रातोंरात विशेषज्ञ बनाना नहीं है। यह छोटी, स्थिर आदतें बनाने में मदद करना है — जो समय के साथ असली फर्क लाती हैं।",

      "mission.eyebrow": "मेरा मिशन",
      "mission.title": "तीन बातें जो मैं हमेशा याद रखती हूं",
      "mission.card1Title": "समझदारी से बचत करें",
      "mission.card1Text": "बचत का मतलब सब कुछ छोड़ देना नहीं है। इसका मतलब है पहले थोड़ा अलग रखना, लगातार।",
      "mission.card2Title": "समझदारी से खर्च करें",
      "mission.card2Text": "हर खरीदारी एक विकल्प है। समझदारी से खर्च करने का मतलब है रुककर सोचना कि क्या यह वाकई ज़रूरी है।",
      "mission.card3Title": "बेहतर आदतें बनाएं",
      "mission.card3Text": "अच्छी पैसों की आदतें रातोंरात नहीं बनतीं। ये एक-एक छोटे फैसले से बनती हैं — और यही मेरा फोकस है।",

      "videos.eyebrow": "देखें और सीखें",
      "videos.title": "चुनिंदा शैक्षिक वीडियो",
      "videos.sub": "बजट बनाने, बचत और रोज़मर्रा के पैसों के फैसलों पर चुने हुए सबक।",
      "videos.v1": "बजट योजना", "videos.v2": "पैसे की बचत", "videos.v3": "समझदारी से खर्च",
      "videos.v4": "पारिवारिक बजट", "videos.v5": "बच्चों की वित्तीय शिक्षा", "videos.v6": "वित्तीय अनुशासन",

      "tips.eyebrow": "तुरंत फायदे",
      "tips.title": "आज ही शुरू करने के लिए बचत के टिप्स",
      "tips.t1": "अपने खर्चों का हिसाब रखें — जिसे आप नापते नहीं, उसे संभाल नहीं सकते।",
      "tips.t2": "मासिक बजट बनाएं और इसे सज़ा नहीं, एक योजना समझें।",
      "tips.t3": "खर्च करने से पहले बचत करें — पहले अपने भविष्य को भुगतान करें।",
      "tips.t4": "गैर-ज़रूरी खरीदारी से पहले 24 घंटे रुकें।",
      "tips.t5": "खरीदारी से पहले कीमतों की तुलना करें, छोटी चीज़ों के लिए भी।",
      "tips.t6": "एक इमरजेंसी फंड बनाएं — थोड़ी सी बचत भी तनाव कम करती है।",

      "calc.eyebrow": "खुद आज़माएं",
      "calc.title": "मासिक बजट कैलकुलेटर",
      "calc.sub": "नीचे अपने आंकड़े दर्ज करें और तुरंत देखें आपका पैसा कहां खड़ा है।",
      "calc.income": "मासिक आय", "calc.rent": "किराया", "calc.food": "भोजन",
      "calc.transport": "यातायात", "calc.bills": "बिल", "calc.other": "अन्य खर्च",
      "calc.btn": "गणना करें",
      "calc.totalExpenses": "कुल खर्च", "calc.remaining": "शेष राशि", "calc.savings": "मासिक बचत",
      "calc.note": "ऊपर दिए गए फ़ील्ड भरें और सारांश देखने के लिए गणना करें दबाएं।",
      "calc.noteOver": "आपके खर्च आपकी आय से ज़्यादा हैं। अपने खर्चों की समीक्षा करें।",
      "calc.noteGood": "बढ़िया संतुलन! यह रहा आपके महीने का सारांश।",

      "why.eyebrow": "मेरे साथ क्यों सीखें",
      "why.title": "सीखने को जानबूझकर आसान बनाया गया",
      "why.i1t": "आसान भाषा", "why.i1d": "कोई जटिल शब्दावली नहीं — बस सरल, रोज़मर्रा के शब्द।",
      "why.i2t": "व्यावहारिक सलाह", "why.i2d": "ऐसे सबक जिन्हें आप उसी दिन इस्तेमाल कर सकते हैं।",
      "why.i3t": "छोटे सबक", "why.i3d": "आपके समय और ध्यान का सम्मान करने वाले केंद्रित वीडियो।",
      "why.i4t": "परिवार के अनुकूल", "why.i4d": "माता-पिता और बच्चों दोनों के लिए उपयुक्त कंटेंट।",
      "why.i5t": "शुरुआती लोगों के लिए उपयुक्त", "why.i5d": "किसी पूर्व ज्ञान की ज़रूरत नहीं — बिल्कुल आधार से शुरू करें।",
      "why.i6t": "वास्तविक जीवन के उदाहरण", "why.i6d": "हर सबक उन स्थितियों पर आधारित है जिनका आप सामना करते हैं।",

      "todayTip.eyebrow": "आज का पैसों का टिप", "todayTip.btn": "एक और टिप दिखाएं",

      "testi.eyebrow": "प्रशंसापत्र",
      "testi.title": "मेरे साथ सीखने के बाद लोग क्या कहते हैं",
      "testi.q1": "\"मुझे हमेशा लगता था कि बजट बनाने का मतलब है सब कुछ छोड़ देना। कोमल के सबक ने मुझे दिखाया कि यह असल में सोच-समझकर फैसला लेने के बारे में है।\"",
      "testi.r1": "यूनिवर्सिटी छात्रा",
      "testi.q2": "\"हमने अपने बच्चों के साथ पारिवारिक बजट टिप्स का उपयोग शुरू किया, और इसने पैसों पर ऐसी बातचीत शुरू करवाई जो पहले कभी नहीं हुई थी।\"",
      "testi.r2": "दो बच्चों के माता-पिता",
      "testi.q3": "\"सिर्फ बजट कैलकुलेटर ही काफी था। अपने आंकड़े साफ देखकर मुझे एहसास हुआ कि मेरा पैसा हर महीने कहां जा रहा था।\"",
      "testi.r3": "पहली नौकरी वाला व्यक्ति",

      "faq.eyebrow": "जानने योग्य",
      "faq.title": "अक्सर पूछे जाने वाले सवाल",
      "faq.q1": "यह वेबसाइट किसके लिए है?",
      "faq.a1": "हर वह व्यक्ति जो पैसों के साथ बेहतर रिश्ता चाहता है — छात्र, माता-पिता, शुरुआती लोग, या परिवार।",
      "faq.q2": "क्या शुरुआती लोग सीख सकते हैं?",
      "faq.a2": "बिल्कुल। हर सबक ऐसे व्यक्ति के लिए लिखा गया है जो शून्य से शुरुआत कर रहा हो।",
      "faq.q3": "क्या सबक मुफ़्त हैं?",
      "faq.a3": "जी हां, इस वेबसाइट के सभी वीडियो सबक और टिप्स पूरी तरह मुफ़्त हैं।",
      "faq.q4": "वीडियो कितने लंबे हैं?",
      "faq.a4": "ज़्यादातर सबक छोटे और केंद्रित होते हैं, आमतौर पर बस कुछ मिनट के।",
      "faq.q5": "कोमल से संपर्क कैसे करें?",
      "faq.a5": "आप नीचे दिए गए फॉर्म, ईमेल, व्हाट्सएप या सोशल मीडिया के ज़रिए संपर्क कर सकते हैं।",

      "contact.eyebrow": "संपर्क करें",
      "contact.title": "आइए आपके पैसों के लक्ष्यों पर बात करें",
      "contact.sub": "सवाल, फीडबैक, या बस नमस्ते कहना चाहते हैं? मुझे सुनकर खुशी होगी।",
      "contact.whatsapp": "(व्हाट्सएप)", "contact.location": "पेशावर, पाकिस्तान",
      "contact.name": "नाम", "contact.email": "ईमेल", "contact.message": "संदेश", "contact.send": "संदेश भेजें",
      "contact.sent": "धन्यवाद! आपका संदेश भेज दिया गया है — मैं जल्द ही संपर्क करूंगी।",
      "contact.error": "कृपया भेजने से पहले सभी फ़ील्ड सही तरीके से भरें।",

      "footer.privacy": "प्राइवेसी पॉलिसी", "footer.terms": "नियम",
      "footer.copyRest": "मनी हुक्स बाय कोमल। सर्वाधिकार सुरक्षित।"
    }
  };

  const todayTips = {
    en: [
      "Track your expenses — you can't manage what you don't measure.",
      "Create a monthly budget and treat it like a plan, not a punishment.",
      "Save before spending — pay your future self first.",
      "Avoid impulse buying by waiting 24 hours before non-essential purchases.",
      "Compare prices before shopping, even for small everyday items.",
      "Build an emergency fund — even a small cushion reduces stress.",
      "Review your subscriptions every few months — cancel what you don't use."
    ],
    ur: [
      "اپنے اخراجات کا حساب رکھیں — جو ناپا نہ جائے اسے سنبھالا نہیں جا سکتا۔",
      "ماہانہ بجٹ بنائیں اور اسے سزا نہیں بلکہ منصوبہ سمجھیں۔",
      "خرچ کرنے سے پہلے بچت کریں — پہلے اپنے مستقبل کو ادائیگی کریں۔",
      "غیر ضروری خریداری سے پہلے 24 گھنٹے انتظار کریں۔",
      "خریداری سے پہلے قیمتوں کا موازنہ کریں، چھوٹی چیزوں کے لیے بھی۔",
      "ایمرجنسی فنڈ بنائیں — تھوڑی بچت بھی ذہنی سکون دیتی ہے۔",
      "ہر چند ماہ بعد اپنی سبسکرپشنز کا جائزہ لیں — غیر ضروری منسوخ کریں۔"
    ],
    hi: [
      "अपने खर्चों का हिसाब रखें — जिसे आप नापते नहीं, उसे संभाल नहीं सकते।",
      "मासिक बजट बनाएं और इसे सज़ा नहीं, एक योजना समझें।",
      "खर्च करने से पहले बचत करें — पहले अपने भविष्य को भुगतान करें।",
      "गैर-ज़रूरी खरीदारी से पहले 24 घंटे रुकें।",
      "खरीदारी से पहले कीमतों की तुलना करें, छोटी चीज़ों के लिए भी।",
      "एक इमरजेंसी फंड बनाएं — थोड़ी सी बचत भी तनाव कम करती है।",
      "हर कुछ महीनों में अपनी सब्सक्रिप्शन देखें — जो काम न आए उसे रद्द करें।"
    ]
  };

  let currentLang = "en";

  function applyTranslations(lang) {
    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    document.getElementById("langCurrentLabel").textContent = lang.toUpperCase();
    document.querySelectorAll("#langMenu li").forEach((li) => {
      li.classList.toggle("active", li.getAttribute("data-lang") === lang);
    });
    currentLang = lang;
    // refresh today's tip in the new language, keep same index if possible
    showTodayTip(lastTipIndex);
  }

  /* ----------------------------------------------------------------------
     2. LANGUAGE SWITCHER
  ---------------------------------------------------------------------- */
  const langSwitcher = document.getElementById("langSwitcher");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");

  langToggle.addEventListener("click", () => {
    const open = langSwitcher.classList.toggle("open");
    langToggle.setAttribute("aria-expanded", open);
  });

  langMenu.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      applyTranslations(li.getAttribute("data-lang"));
      langSwitcher.classList.remove("open");
      langToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove("open");
      langToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ----------------------------------------------------------------------
     3. MOBILE NAV
  ---------------------------------------------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");

  hamburger.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", open);
  });

  mainNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mainNav.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* ----------------------------------------------------------------------
     4. SCROLL REVEAL
  ---------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ----------------------------------------------------------------------
     5. BUDGET CALCULATOR
  ---------------------------------------------------------------------- */
  const calcForm = document.getElementById("calcForm");
  const calcNote = document.getElementById("calcNote");

  function formatMoney(n) {
    return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
  }

  calcForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const income = parseFloat(document.getElementById("income").value) || 0;
    const rent = parseFloat(document.getElementById("rent").value) || 0;
    const food = parseFloat(document.getElementById("food").value) || 0;
    const transport = parseFloat(document.getElementById("transport").value) || 0;
    const bills = parseFloat(document.getElementById("bills").value) || 0;
    const other = parseFloat(document.getElementById("other").value) || 0;

    const totalExpenses = rent + food + transport + bills + other;
    const remaining = income - totalExpenses;
    const savings = remaining > 0 ? remaining : 0;

    document.getElementById("resTotal").textContent = formatMoney(totalExpenses);
    document.getElementById("resRemaining").textContent = formatMoney(remaining);
    document.getElementById("resSavings").textContent = formatMoney(savings);

    const dict = translations[currentLang];
    calcNote.textContent = remaining < 0 ? dict["calc.noteOver"] : dict["calc.noteGood"];
  });

  /* ----------------------------------------------------------------------
     6. FAQ ACCORDION
  ---------------------------------------------------------------------- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });

  /* ----------------------------------------------------------------------
     7. TODAY'S MONEY TIP
  ---------------------------------------------------------------------- */
  const todayTipText = document.getElementById("todayTipText");
  const newTipBtn = document.getElementById("newTipBtn");
  let lastTipIndex = Math.floor(Math.random() * todayTips.en.length);

  function showTodayTip(index) {
    const list = todayTips[currentLang];
    lastTipIndex = index % list.length;
    todayTipText.style.opacity = "0";
    setTimeout(() => {
      todayTipText.textContent = list[lastTipIndex];
      todayTipText.style.opacity = "1";
    }, 150);
  }

  newTipBtn.addEventListener("click", () => {
    let next = Math.floor(Math.random() * todayTips[currentLang].length);
    if (next === lastTipIndex) next = (next + 1) % todayTips[currentLang].length;
    showTodayTip(next);
  });

  /* ----------------------------------------------------------------------
     8. CONTACT FORM (front-end only demo)
  ---------------------------------------------------------------------- */
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const message = document.getElementById("cMessage").value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const dict = translations[currentLang];

    if (!name || !emailValid || !message) {
      formStatus.textContent = dict["contact.error"];
      formStatus.style.color = "#ff8a8a";
      return;
    }
    formStatus.textContent = dict["contact.sent"];
    formStatus.style.color = "";
    contactForm.reset();
  });

  /* ----------------------------------------------------------------------
     9. BACK TO TOP
  ---------------------------------------------------------------------- */
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ----------------------------------------------------------------------
     10. INIT
  ---------------------------------------------------------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  showTodayTip(lastTipIndex);
})();
