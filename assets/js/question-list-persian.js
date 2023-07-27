const persianQuestionsList = [
    { question: "پایتخت برزیل کدام شهر است؟", answer: "برازیلیا" },
    { question: "رنگ یک گوجه‌فرنگی رسیده چیست؟", answer: "قرمز" },
    { question: "زنبورها چه چیزی را برای تهیه عسل جمع آوری می‌کنند؟", answer: "شهد" },
    { question: "۵ ضربدر ۳ چند است؟", answer: "پانزده" },
    { question: "معادل کلمه «بزرگ» چیست؟", answer: "کوچک" },
    { question: "نماد شیمیایی طلا چیست؟", answer: "Au" },
    { question: "حیوانی که «میاو» می‌کند کدام است؟", answer: "گربه" },
    { question: "چه روزی بعد از چهارشنبه می‌آید؟", answer: "پنج‌شنبه" },
    { question: "بزرگ‌ترین قاره دنیا کدام است؟", answer: "آسیا" },
    { question: "کدامیک از جوانه‌ها چرخه‌ی حیات حیوانات هستند؟", answer: "گوسفند" },
    { question: "رنگ چمن تازه ؟", answer: "سبز" },
    { question: "چه چیزی را برای نوشتن روی کاغذ استفاده می‌کنید؟", answer: "خودکار" },
    { question: "معادل کلمه «خوشحال» چیست؟", answer: "غمگین" },
    { question: "چه چیزی را برای پوشیدن به پاها می‌پوشید؟", answer: "کفش" },
    { question: "پایتخت ایتالیا کدام شهر است؟", answer: "روم" },
    { question: "چه چیزی را برای بریدن کاغذ استفاده می‌کنید؟", answer: "قیچی" },
    { question: "معادل کلمه «شب» چیست؟", answer: "روز" },
    { question: "نماد شیمیایی اکسیژن چیست؟", answer: "O" },
    { question: "حیوانی که «واو» می‌کند کدام است؟", answer: "سگ" },
    { question: "چه چیزی بعد از ماه اکتبر می‌آید؟", answer: "نوامبر" },
    { question: "چه چیزی چهارمین سیاره از خورشید است؟", answer: "مریخ" },
    { question: "نوزاد سگ به چه نامی گفته می‌شود؟", answer: "شیربچه" },
    { question: "کوچک‌ترین قاره دنیا کدام است؟", answer: "استرالیا" },
    { question: "رنگ لیمو چیست؟", answer: "زرد" },
    { question: "چه چیزی برای پخت غذا استفاده می‌کنید؟", answer: "اجاق" },
    { question: "معادل کلمه «سرد» چیست؟", answer: "گرم" },
    { question: "چه چیزی را برای پوشیدن بر سر می‌گذارید؟", answer: "کلاه" },
    { question: "پایتخت کشور کانادا کدام شهر است؟", answer: "اتاوا" },
    { question: "چه چیزی را برای پاک کردن خطاهای خودکار استفاده می‌کنید؟", answer: "پاک‌کن" },
    { question: "معادل کلمه «روز» چیست؟", answer: "شب" },
    { question: "نماد شیمیایی هیدروژن چیست؟", answer: "H" },
    { question: "حیوانی که «کواک» می‌کند کدام است؟", answer: "اردک" },
    { question: "چه چیزی بعد از ماه جولای می‌آید؟", answer: "اوت" },
    { question: "چه چیزی ششمین سیاره از خورشید است؟", answer: "زحل" },
    { question: "نوزاد کروکودیل به چه نامی گفته می‌شود؟", answer: "جوجه‌تمساح" },
    { question: "بزرگ‌ترین اقیانوس دنیا کدام است؟", answer: "اقیانوس آرام" },
    { question: "رنگ خورشید چیست؟", answer: "زرد" },
    { question: "چه چیزی برای تایپ روی کامپیوتر استفاده می‌کنید؟", answer: "صفحه‌کلید" },
    { question: "معادل کلمه «ناراحت» چیست؟", answer: "خوشحال" },
    { question: "چه چیزی برای گرم نگه‌داشتن دست‌ها استفاده می‌کنید؟", answer: "دستکش" },
    { question: "پایتخت اسپانیا کدام شهر است؟", answer: "مادرید" },
    { question: "چه چیزی برای اندازه‌گیری زمان استفاده می‌شود؟", answer: "ساعت" },
    { question: "معادل کلمه «روز» چیست؟", answer: "شب" },
    { question: "نماد شیمیایی نیتروژن چیست؟", answer: "N" },
    { question: "حیوانی که «کو» می‌کند کدام است؟", answer: "پرنده" },
    { question: "چه چیزی بعد از ماه مارس می‌آید؟", answer: "آوریل" },
    { question: "چه چیزی هفتمین سیاره از خورشید است؟", answer: "اورانوس" },
    { question: "نوزاد کنگر به چه نامی گفته می‌شود؟", answer: "جوجه‌کنگر" },
    { question: "بزرگ‌ترین اقیانوس جهان کدام است؟", answer: "اقیانوس اطلس" },
    { question: "رنگ یک موز چیست؟", answer: "زرد" },
    { question: "تاج‌الملوک کدام شهر ایرانی است؟", answer: "اصفهان" },
    { question: "معادل کلمه «پرسش» چیست؟", answer: "جواب" },
    { question: "نماد شیمیایی کلسیم چیست؟", answer: "Ca" },
    { question: "حیوانی که «میهن» می‌کند کدام است؟", answer: "پرنده" },
    { question: "چه چیزی بعد از ماه مه می‌آید؟", answer: "ژوئن" },
    { question: "چه چیزی هشتمین سیاره از خورشید است؟", answer: "نپتون" },
    { question: "نوزاد گاو به چه نامی گفته می‌شود؟", answer: "گوساله" },
    { question: "بزرگ‌ترین دریاچه دنیا کدام است؟", answer: "دریاچه خالکوب" },
    { question: "رنگ هوا چیست؟", answer: "بی‌رنگ" },
    { question: "چه چیزی برای شنیدن موسیقی استفاده می‌کنید؟", answer: "هدفون" },
    { question: "معادل کلمه «ناکامی» چیست؟", answer: "موفقیت" },
    { question: "چه چیزی برای حفظ مچ دست استفاده می‌کنید؟", answer: "بند مچ دست" },
    { question: "پایتخت کشور فرانسه کدام شهر است؟", answer: "پاریس" },
    { question: "چه چیزی برای نشاندن روی نقاشی استفاده می‌کنید؟", answer: "خودکار نقاشی" },
    { question: "معادل کلمه «تاریکی» چیست؟", answer: "روشنایی" },
    { question: "نماد شیمیایی مس چیست؟", answer: "Cu" },
    { question: "حیوانی که «بر» می‌کند کدام است؟", answer: "خرس" },
    { question: "چه چیزی بعد از ماه ژوئن می‌آید؟", answer: "ژوئیه" },
    { question: "چه چیزی نهمین سیاره از خورشید است؟", answer: "پلوتو" },
    { question: "نوزاد زرافه به چه نامی گفته می‌شود؟", answer: "چوپانک" },
    { question: "بزرگ‌ترین کوه جهان کدام است؟", answer: "کوه اورست" },
    { question: "رنگ کنار چیست؟", answer: "خاکستری" },
    { question: "چه چیزی برای دیدن تلویزیون استفاده می‌کنید؟", answer: "تلویزیون" },
    { question: "معادل کلمه «تنهایی» چیست؟", answer: "همراهی" },
    { question: "چه چیزی برای پوشاندن دست‌ها استفاده می‌کنید؟", answer: "دستکش" },
    { question: "پایتخت کشور آلمان کدام شهر است؟", answer: "برلین" },
    { question: "چه چیزی برای نوشتن روی تابلو استفاده می‌کنید؟", answer: "خودکار نوشتن" },
    { question: "معادل کلمه «حضور» چیست؟", answer: "غیاب" },
    { question: "نماد شیمیایی سدیم چیست؟", answer: "Na" },
    { question: "حیوانی که «بوم» می‌کند کدام است؟", answer: "خرگوش" },
    { question: "چه چیزی بعد از ماه ژوئیه می‌آید؟", answer: "اوت" },
    { question: "چه چیزی دهمین سیاره از خورشید است؟", answer: "زمین" },
    { question: "نوزاد اسب به چه نامی گفته می‌شود؟", answer: "اسب‌نر" },
    { question: "بزرگ‌ترین جنگل دنیا کدام است؟", answer: "جنگل آمازون" },
    { question: "رنگ آب چیست؟", answer: "بی‌رنگ" },
    { question: "چه چیزی برای گوش‌کردن به موسیقی استفاده می‌کنید؟", answer: "بلندگو" },
    { question: "معادل کلمه «شکست» چیست؟", answer: "پیروزی" },
    { question: "چه چیزی برای حمایت از مچ دست استفاده می‌کنید؟", answer: "بند مچ دست" },
    { question: "پایتخت کشور هلند کدام شهر است؟", answer: "آمستردام" },
    { question: "چه چیزی برای نشاندن روی فرش استفاده می‌کنید؟", answer: "خودکار فرش" },
    { question: "معادل کلمه «شادی» چیست؟", answer: "غم" },
    { question: "نماد شیمیایی پتاسیم چیست؟", answer: "K" },
    { question: "حیوانی که «میو» می‌کند کدام است؟", answer: "گرگ" },
    { question: "چه چیزی بعد از ماه اوت می‌آید؟", answer: "سپتامبر" },
    { question: "چه چیزی یازدهمین سیاره از خورشید است؟", answer: "یورانوس" },
    { question: "نوزاد پاندا به چه نامی گفته می‌شود؟", answer: "جوجه‌پاندا" },
    { question: "بزرگ‌ترین اقیانوس جهان کدام است؟", answer: "اقیانوس اطلس" },
    { question: "رنگ کبریت چیست؟", answer: "قرمز" },
    { question: "چه چیزی برای شنیدن رادیو استفاده می‌کنید؟", answer: "رادیو" },
    { question: "معادل کلمه «تعجب» چیست؟", answer: "عادی" },
    { question: "نماد شیمیایی آهن چیست؟", answer: "Fe" },
    { question: "حیوانی که «هان» می‌کند کدام است؟", answer: "آهو" },
    { question: "چه چیزی بعد از ماه سپتامبر می‌آید؟", answer: "اکتبر" },
    { question: "چه چیزی دوازدهمین سیاره از خورشید است؟", answer: "ناهید" },
    { question: "نوزاد کیسه‌دار به چه نامی گفته می‌شود؟", answer: "کیسه‌دارک" },
    { question: "مشهورترین شخصیت تاریخی ایرانی کدام است؟", answer: "سعدی" },
    { question: "معادل کلمه «فرصت» چیست؟", answer: "محدودیت" },
    { question: "نماد شیمیایی اکسژن چیست؟", answer: "O" },
    { question: "حیوانی که «گاو» می‌کند کدام است؟", answer: "گاو" },
    { question: "چه چیزی بعد از ماه اکتبر می‌آید؟", answer: "نوامبر" },
    { question: "چه چیزی سیزدهمین سیاره از خورشید است؟", answer: "پلوتو" },
    { question: "نوزاد زنبورعسل به چه نامی گفته می‌شود؟", answer: "لارو" },
    { question: "بزرگ‌ترین رودخانه دنیا کدام است؟", answer: "رود نیل" },
    { question: "رنگ بلبلی چیست؟", answer: "آبی" },
    { question: "چه چیزی برای دیدن فیلم استفاده می‌کنید؟", answer: "تلویزیون" },
    { question: "معادل کلمه «عشق» چیست؟", answer: "نفرت" },
    { question: "چه چیزی برای حفاظت از مچ دست استفاده می‌کنید؟", answer: "بند مچ دست" },
    { question: "پایتخت کشور ایتالیا کدام شهر است؟", answer: "روم" },
    { question: "چه چیزی برای نوشتن روی دیوار استفاده می‌کنید؟", answer: "مداد" },
    { question: "معادل کلمه «دلخوری» چیست؟", answer: "خوشحالی" },
    { question: "نماد شیمیایی نیتروژن چیست؟", answer: "N" },
    { question: "حیوانی که «بان» می‌کند کدام است؟", answer: "قو" },
    { question: "چه چیزی بعد از ماه نوامبر می‌آید؟", answer: "دسامبر" },
    { question: "چه چیزی چهاردهمین سیاره از خورشید است؟", answer: "کیرک" },
    { question: "نوزاد خرس قطبی به چه نامی گفته می‌شود؟", answer: "جوجه‌خرس" },
    { question: "بزرگ‌ترین کوهستان جهان کدام است؟", answer: "هیمالیا" },
    { question: "رنگ آبی دریا چیست؟", answer: "آبی" },
    { question: "چه چیزی برای دیدن فیلم‌ها و برنامه‌ها استفاده می‌کنید؟", answer: "لپ‌تاپ" },
    { question: "معادل کلمه «پیروزی» چیست؟", answer: "شکست" },
    { question: "نماد شیمیایی آهن چیست؟", answer: "Fe" },
    { question: "حیوانی که «زالو» می‌کند کدام است؟", answer: "زالو" },
    { question: "چه چیزی بعد از ماه دسامبر می‌آید؟", answer: "ژانویه" },
    { question: "چه چیزی پانزدهمین سیاره از خورشید است؟", answer: "نئپتون" },
    { question: "نوزاد آهو به چه نامی گفته می‌شود؟", answer: "جوجه‌آهو" },
    { question: "بزرگ‌ترین کویر جهان کدام است؟", answer: "کویر سهارا" },
    { question: "رنگ شکوفه‌ی سرخابی چیست؟", answer: "قرمز" },
    { question: "چه چیزی برای دیدن فیلم‌ها و برنامه‌ها استفاده می‌کنید؟", answer: "تبلت" },
    { question: "معادل کلمه «بی‌علاقه» چیست؟", answer: "علاقه‌مند" },
    { question: "نماد شیمیایی آرگون چیست؟", answer: "Ar" },
    { question: "حیوانی که «شیر» می‌کند کدام است؟", answer: "شیر" },
    { question: "چه چیزی بعد از ماه ژانویه می‌آید؟", answer: "فوریه" },
    { question: "چه چیزی شانزدهمین سیاره از خورشید است؟", answer: "دیمتر" },
    { question: "نوزاد خرگوش به چه نامی گفته می‌شود؟", answer: "جوجه‌خرگوش" },
    { question: "بزرگ‌ترین بنای تاریخی جهان کدام است؟", answer: "گنبد خورخوره" },
    { question: "رنگ آبی کبریتی چیست؟", answer: "آبی" },
    { question: "چه چیزی برای دیدن فیلم‌ها و برنامه‌ها استفاده می‌کنید؟", answer: "گوشی هوشمند" },
    { question: "معادل کلمه «خنده» چیست؟", answer: "گریه" },
    { question: "نماد شیمیایی آلومینیوم چیست؟", answer: "Al" },
    { question: "حیوانی که «زاغ» می‌کند کدام است؟", answer: "زاغ" },
    { question: "چه چیزی بعد از ماه فوریه می‌آید؟", answer: "مارس" },
    { question: "چه چیزی هفدهمین سیاره از خورشید است؟", answer: "ارانوس" },
    { question: "نوزاد کفتر به چه نامی گفته می‌شود؟", answer: "جوجه‌کفتر" },
  ];  