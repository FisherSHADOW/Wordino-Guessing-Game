const persianQuestionsList = [
  { question: "زنبورها چه چیزی برای تهیه عسل جمع آوری می‌کنند؟", answer: "شهد" },
  { question: "متضاد کلمه «بزرگ» چیست؟", answer: "کوچک" },
  { question: "بزرگ‌ترین قاره دنیا کدام است؟", answer: "اسیا" },
  { question: "متضاد کلمه «خوشحال» چیست؟", answer: "غمگین" },
  { question: "پایتخت ایتالیا کدام شهر است؟", answer: "روم" },
  { question: "چه چیزی برای بریدن کاغذ استفاده می شود؟", answer: "قیچی" },
  { question: "متضاد کلمه «شب» چیست؟", answer: "روز" },
  { question: "بعد از ماه اکتبر چه ماهی است؟", answer: "نوامبر" },
  { question: "چهارمین سیاره از خورشید چیست؟", answer: "مریخ" },
  { question: "کوچک‌ترین قاره دنیا کدام است؟", answer: "استرالیا" },
  { question: "رنگ لیمو چیست؟", answer: "زرد" },
  { question: "متضاد کلمه «سرد» چیست؟", answer: "گرم" },
  { question: "پایتخت کشور کانادا کدام شهر است؟", answer: "اتاوا" },
  { question: "چه چیزی برای گرم نگه‌داشتن دست‌ها استفاده می‌کنید؟", answer: "دستکش" },
  { question: "پایتخت اسپانیا کدام شهر است؟", answer: "مادرید" },
  { question: "چه چیزی برای اندازه‌گیری زمان استفاده می‌شود؟", answer: "ساعت" },
  { question: "هفتمین سیاره از خورشید چیست؟", answer: "اورانوس" },
  { question: "تاج‌الملوک کدام شهر ایرانی است؟", answer: "اصفهان" },
  { question: "نوزاد گاو چه نام دارد؟", answer: "گوساله" },
  { question: "متضاد کلمه «ناکامی» چیست؟", answer: "موفقیت" },
  { question: "پایتخت کشور فرانسه کدام شهر است؟", answer: "پاریس" },
  { question: "پایتخت کشور آلمان کدام شهر است؟", answer: "برلین" },
  { question: "متضاد کلمه «حضور» چیست؟", answer: "غیاب" },
  { question: "متضاد کلمه «شکست» چیست؟", answer: "پیروزی" },
  { question: "پایتخت کشور هلند کدام شهر است؟", answer: "امستردام" },
  { question: "بزرگ‌ترین رودخانه دنیا کدام است؟", answer: "نیل" },
  { question: "متضاد کلمه «عشق» چیست؟", answer: "نفرت" },
  { question: "متضاد کلمه «پیروزی» چیست؟", answer: "شکست" },
  { question: "متضاد کلمه «خنده» چیست؟", answer: "گریه" },
  { question: "چه کسی اولین دستگاه پخش و ضبط صدا را اختراع کرد؟", answer: "ادیسون" },
  { question: "سبکترین فلز موجود در طبیعت کدام است؟", answer: "لیتیوم" },
  { question: "اولین کشوری که انقلاب کمونیستی در آن به وقوع پیوست کدام کشور بود؟", answer: "روسیه" },
  { question: "جزایر هاوایی در کدام اقیانوس قرار دارند؟", answer: "ارام" },
  { question: "استرآباد نام قدیم کدام شهر است؟", answer: "گرگان" },
  { question: "زادگاه گل سوسن زرد کدام کشور است؟", answer: "سیبری" },
  { question: "سرطان اندامهای خون ساز بدن چه نامیده میشود؟", answer: "لوسمی" },
  { question: "طرابلس پایتخت کدام کشور است؟", answer: "لیبی" },
  { question: "مخترع دینامیت چه کسی است؟", answer: "نوبل" },
  { question: "اولین کسی که به چگونگی فرآیند تخمیر پی برد چه کسی بود؟", answer: "پاستور" },
  { question: "کدام حیوان، بزرگترین عضو خانوادهی گربه سانان است؟", answer: "ببر" },
  { question: "آفتاب پرست در چه دسته از حیوانات قرار میگیرد؟", answer: "خزندگان" },
  { question: "نوعی ماهی کوچک اما درنده که در آمازون زندگی میکند؟", answer: "پیرانا" },
  { question: "پلنگ آمریکایی را چه مینامند؟", answer: "جگوار" },
  { question: "کدام پرنده شکاری شکار خود را با صوت جستجو میکند؟", answer: "جغد" },
  { question: "واحد اندازه گیری الماس چیست؟", answer: "قیراط" },
  { question: "سلمان فارسی اهل کدام شهر بود؟", answer: "اصفهان" },
  { question: "کدام نور توسط منشور تجزیه میشود؟", answer: "سفید" },
  { question: "جانوری که قلب آن در سرش میباشد کدام است؟", answer: "میگو" },
  { question: "اولین کشوری که چای را شناخت کدام کشور است؟", answer: "چین" },
  { question: "ماده خارجی دندان که ماده ای سخت و شفاف است چه نامیده میشود؟", answer: "مینا" },
  { question: "تلویزیون رنگی در کدام کشور بوجود آمد؟", answer: "امریکا" },
  { question: "معدن اصلی قلع در کدام کشور وجود دارد؟", answer: "بولیوی" },
  { question: "اولین بار گیاه تنباکو در کدام کشور یافت شد؟", answer: "امریکا" },
  { question: "خالق اثر آنا کارنینا چه کسی است؟", answer: "تولستوی" },
  { question: "اسیدها رنگ کاغذ تورنسل را چه رنگی میکنند؟", answer: "قرمز" },
  { question: "نزدیکترین سیاره به خورشید کدام است؟", answer: "عطارد" },
  { question: "دانشمندی که اعالم کرد اجسام در حال سقوط به سمت زمین، سرعت میگیرند؟", answer: "گالیله" },
  { question: "قلعه ضحاک از بناهای تاریخی کدام دوره است؟", answer: "اشکانیان" },
  { question: "تبدیل گاز به مایع را چه  می گویند؟", answer: "میعان" },
  { question: "حافظ در چه قرنی میزیست؟", answer: "هشتم" },
  { question: "واحد اندازه گیری بار الکتریکی چیست؟", answer: "کولن" },
  { question: "پایتخت بولیوی چه نام دارد؟", answer: "لاپاز" },
  { question: "بندر لنگه در کدام استان ایران قرار دارد؟", answer: "هرمزگان" },
  { question: "خون کدام جانور به رنگ آبی است؟", answer: "میگو" },
  { question: "ورزش بدمینتون از کدام کشور آغاز شده است؟", answer: "هندوستان" },
  { question: "کوچکترین واحد ساختمانی بدن کدام است؟", answer: "سلول" },
  { question: "عمیق ترین دریاچه جهان کدام است؟", answer: "بایکال" },
  { question: "کدام حشره بیشترین طول عمر را دارد؟", answer: "موریانه" },
  { question: "شهر بهارنارنج لقب کدام شهر ایران است؟", answer: "بابل" },
  { question: "دومین عنصر فراوان پس از اکسیژن در روی زمین چیست؟", answer: "سیلیسیم" },
  { question: "پایتخت ترکیه؟", answer: "انکارا" },
  { question: "نویسنده شاهنامه کیست؟", answer: "فردوسی" },
  { question: "یک نام دیگر برای کامپیوتر؟", answer: "کامپیوتر" },
  { question: "نام یک سیستم عامل رایانه؟", answer: "ویندوز" },
  { question: "پایتخت ژاپن؟", answer: "توکیو" },
  { question: "نام بزرگ‌ترین کشور جهان؟", answer: "روسیه" },
  { question: "کشور معروف به کشور خورشید؟", answer: "ژاپن" },
  { question: "نام یک نقاش مشهور؟", answer: "پیکاسو" },
  { question: "نام یک زبان برنامه‌نویسی؟", answer: "پایتون" },
  { question: "نام یک عنصر شیمیایی فلزی؟", answer: "اهن" },
  { question: "واحد پول تانزانیا چیست؟", answer: "شیلینگ" },
  { question: "از خشکبار پرمصرف", answer: "گردو" },
  { question: "پایتخت کشور اوگاندا چیست؟", answer: "کامیلا" },
  { question: "میوه جالیزی سالاد چیست؟", answer: "خیار" },
  { question: "اولین انسان ماهنورد کیست؟", answer: "ارمسترانگ" },
  { question: "پدر تاریخ نویسی چه نام دارد؟", answer: "هرودوت" },
  { question: "خروس جنگی چه نام دارد؟", answer: "لاری" },
  { question: "پرطرفدارترین ورزش جهان چیست؟", answer: "فوتبال" },
  { question: "ظرف جوش آوردن آب چیست؟", answer: "کتری" },
  { question: "نام نوعی شنا", answer: "قورباغه" },
  { question: "نوعی از از بندپایان", answer: "عنکبوت" },
  { question: "ظرف دم کردن چای", answer: "قوری" },
  { question: "دفتر سالنامه چه نام دارد؟", answer: "سررسید" },
  { question: "نام دیگر آلرژی؟", answer: "حساسیت" },
  { question: "تیم فوتبال اصفهان چه نام دارد؟", answer: "سپاهان" },
  { question: "ماه پنجم تقویم ایرانی؟", answer: "مرداد" },
  { question: "پایتخت کشور ماتادورها", answer: "مادرید" },
  { question: "انتهای تفنگ چه نام دارد؟", answer: "قنداق" },
  { question: "وسیله نقلیه اعماق دریا", answer: "زیردریایی" },
  { question: "کشور اروپایی پادشاهی", answer: "انگلستان" },
  { question: "از خشکبار معروف ایران", answer: "پسته" },
  { question: "نام دیگر لیسانس", answer: "کارشناسی" },
  { question: "آرامگاه باباطاهر عریان در کدام شهر قرار دارد؟", answer: "همدان" },
  { question: "گیاه جایگزین گوشت چیست؟", answer: "سویا" },
  { question: "نام دیگر محافظ شخصی؟", answer: "بادیگارد" },
  { question: "ترمز کشتی چه نام دارد؟", answer: "لنگر" },
  { question: "نوزاد برخی حشرات را می گویند", answer: "لارو" },
  { question: " به خوراک برگ پیچ چه می گویند؟", answer: "دلمه" },
  { question: "ماشین جنگی توپدار", answer: "تانک" },
  { question: "وسیله رصد ستاره ها؟", answer: "تلسکوپ" },
  { question: "آب نیمه گرم؟", answer: "ولرم" },
  { question: "سازمان پشتیبان حوادث چه نام دارد؟", answer: "بیمه" },
  { question: "نیروی نظامی ملی؟", answer: "ارتش" },
  { question: "منطقه ای انبوه از گیاه چه می گویند؟", answer: "جنگل" },
  { question: "از آثار بعد از سوختگی؟", answer: "تاول" },
  { question: "فلز سبک پرمصرف", answer: "الومینیوم" },
  { question: "مروارید سیاه خزر", answer: "خاویار" },
  { question: "باران منجمد چه نام دارد؟", answer: "تگرگ" },
  { question: "نام دیگر عقیده", answer: "باور" },
];  