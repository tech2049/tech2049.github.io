---
title: "رهایی از گوگل و اپل با تمرکز بر امنیت با GrapheneOS
 "
date: 1404-11-28
draft: false
type: post
tags: ["نرم افزار"]
categories: ["Software"]
cover:
  image: "https://s34.picofile.com/file/8490239434/86236.png"
  # can also paste direct link from external site
  # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
  alt: "<alt text>"
  caption: "<text>"
  relative: false # To use relative path for cover image, used in hugo Page-bundles

---

# GrapheneOS چیست

GrapheneOS یک سیستم‌عامل سفارشی و متن‌باز است که با هدف ارائه بالاترین سطح حریم خصوصی و امنیت برای کاربران طراحی شده است. این سیستم بر اساس پروژه متن‌باز اندروید (AOSP) ساخته شده، اما به‌شدت با نسخه‌های استاندارد نرم‌افزارهای گوشی تفاوت دارد. سازندگان آن، یکپارچگی با خدمات گوگل را در سطح سیستم کاملاً حذف کرده‌اند، که باعث می‌شود شرکت‌ها نتوانند کاربران را ردیابی یا داده‌های آن‌ها را جمع‌آوری کنند، و در عین حال محیط کاری مدرن و پایدار فراهم می‌شود.

این سیستم با سخت‌افزاری کردن پیشرفته هسته و اجزای کلیدی، آسیب‌پذیری در برابر حملات هک و سوءاستفاده‌ها را به حداقل می‌رساند. ویژگی منحصر به فرد GrapheneOS امکان اجرای سرویس‌های Google Play در محیط ایزوله (sandbox) است، که به کاربر اجازه می‌دهد اپلیکیشن‌های محبوب را بدون دادن دسترسی‌های گسترده به سیستم استفاده کند. در حال حاضر، پروژه روی گوشی‌های سری Google Pixel تمرکز دارد و از تراشه امنیتی اختصاصی Titan M آن‌ها برای محافظت کامل از داده‌ها استفاده می‌کند.

---

## دستگاه‌های اختصاصی

وقتی من درباره GrapheneOS می‌خواندم، فهرست دستگاه‌های سازگار شامل محصولات چندین تولیدکننده مختلف بود. حالا فقط دستگاه‌های Google Pixel پشتیبانی می‌شوند. این به این معنا نیست که نمی‌توان این سیستم را روی مثلاً یک سامسونگ اجرا کرد، اما سازندگان تضمینی نمی‌دهند که به‌درستی کار کند و شما باید خودتان احتمالاً نسخه مناسب را منتقل (port) کنید. جالب است که سیستمی که از خدمات گوگل آزاد شده، دقیقاً باید روی دستگاه‌های گوگل اجرا شود. اگر کسی بخواهد بیشتر بداند چرا Pixelها بهترین گزینه برای GrapheneOS هستند، پیشنهاد می‌کنم این کلمات کلیدی را جستجو کند: Verified Boot، Titan M، IOMMU، MTE.

### فهرست دستگاه‌های پشتیبانی شده (فوریه ۲۰۲۶)

- Pixel 10 Pro Fold (rango)
- Pixel 10 Pro XL (mustang)
- Pixel 10 Pro (blazer)
- Pixel 10 (frankel)
- Pixel 9a (tegu)
- Pixel 9 Pro Fold (comet)
- Pixel 9 Pro XL (komodo)
- Pixel 9 Pro (caiman)
- Pixel 9 (tokay)
- Pixel 8a (akita)
- Pixel 8 Pro (husky)
- Pixel 8 (shiba)
- Pixel Fold (felix)
- Pixel Tablet (tangorpro)
- Pixel 7a (lynx)
- Pixel 7 Pro (cheetah)
- Pixel 7 (panther)
- Pixel 6a (bluejay)
- Pixel 6 Pro (raven)
- Pixel 6 (oriole)

> مواردی که با بولد مشخص شده‌اند، نه تنها پشتیبانی می‌شوند بلکه توصیه نیز می‌شوند.

---

## انتخاب گوشی هوشمند من

در مرحله انتخاب دستگاه برای تست GrapheneOS، هنوز مطمئن نبودم که چنین راه‌حلی اصلاً برای من مناسب باشد و آیا در بلندمدت با آن کنار خواهم آمد یا نه. بنابراین منطقی نبود که مبلغ قابل توجهی هزینه کنم. به همین دلیل، احتمالاً تنها انتخاب معقول، **Google Pixel 9a** بود. این چند ماه پیش بود، زمانی که هنوز زمان کافی از عرضه مدل‌های سری ۱۰ نگذشته بود تا آن‌ها وارد فهرست دستگاه‌های کاملاً پشتیبانی‌شده شوند. در آن زمان، Pixel 9a تازه‌ترین دستگاه فهرست بود (با پشتیبانی تا ۷ سال!) و علاوه بر آن، قیمت بسیار مناسبی داشت؛ من آن را حدود ۱۶۰۰ زلوتی (~۴۵۰ دلار) خریدم.

با نگاه به گذشته، هنوز هم انتخاب خوبی می‌دانم و قطعاً این مسیر را به هر کسی که در مرحله تصمیم‌گیری درباره سخت‌افزار شروع ماجراجویی با GrapheneOS است، توصیه می‌کنم. تنها چیزی که کمی مرا درباره Pixel 9a آزار می‌دهد، کیفیت عکس‌هایی است که می‌گیرد. من قبل از آن از iPhone 15 Pro و Samsung Galaxy Z Fold 6 استفاده می‌کردم که در این زمینه عالی بودند، بنابراین طبیعی است کمی لوس شده باشم.

---

## نصب GrapheneOS

### چیزهایی که نیاز داریم

- یک گوشی سازگار؛ در مورد من **Google Pixel 9a**
- یک کابل برای اتصال گوشی به کامپیوتر؛ هر کابلی مناسب نیست و باید علاوه بر شارژ، انتقال داده هم انجام دهد.
- یک کامپیوتر با مرورگر مبتنی بر Chromium (مثل Google Chrome، Brave، Microsoft Edge یا Vivaldi). توصیه می‌شود از ویندوز 10 یا 11 استفاده کنید.

### آماده‌سازی گوشی

1. گوشی نو را روشن یا گوشی استفاده‌شده را به تنظیمات کارخانه برگردانید:
2. مراحل اولیه راه‌اندازی تا رسیدن به صفحه اصلی انجام شود؛ فقط حداقل کارهای لازم:
- تغییر زبان در صفحه خوش‌آمدگویی
- رد کردن تنظیم سیم‌کارت
- عدم اتصال به وای‌فای
- تنظیم تاریخ و ساعت
- خاموش کردن خدمات گوگل
- تنظیم PIN ساده (مثلاً 12345)
- رد کردن تنظیم بیومتریک
3. به‌روزرسانی سیستم‌عامل گوشی:
4. فعال کردن گزینه توسعه‌دهنده و OEM unlocking:

### باز کردن بوت‌لودر

1. گوشی را خاموش کنید و با دکمه پاور و کاهش صدا Fastboot Mode را فعال کنید.
2. گوشی را به کامپیوتر وصل کنید.
3. مرورگر Chromium را باز و به [GrapheneOS Install](https://grapheneos.org/install/web) بروید.
4. Unlock bootloader را انتخاب و مراحل را دنبال کنید.

### دانلود و فلش کردن سیستم

1. به بخش Obtaining factory images بروید و **Download release** را انتخاب کنید.
2. بعد از دانلود، بخش Flashing factory images → Flash release را انتخاب کنید.
3. تا پایان فرآیند، کابل را جدا نکنید و به گوشی یا کامپیوتر دست نزنید.

---

## قفل دوباره بوت‌لودر

- در Fastboot Mode، پیام **Start** را ببینید و با پاور وارد سیستم شوید.
- مراحل استاندارد:
- صفحه خوش‌آمدگویی
- انتخاب زبان و منطقه زمانی
- اتصال به وای‌فای و سیم‌کارت
- امن کردن گوشی با اثر انگشت
- فشار دادن **Start** و ورود به صفحه اصلی
- دوباره Fastboot Mode → Lock bootloader → تأیید با دکمه‌های صدا و پاور

---

## بازگرداندن قفل OEM

1. Settings → About phone → Build number (7 بار لمس)
2. Settings → System → Developer options → OEM unlocking را غیرفعال کنید
3. ری‌استارت دستگاه

---

## دیدگاه من درباره استفاده از GrapheneOS

GrapheneOS مصالحه‌ای بین راحتی و حریم خصوصی است. هیچ مسیر واحدی وجود ندارد و هر کس باید خودش تست کند و تصمیم بگیرد. تجربه من تاکنون حدود ۳ ماه است.

---

## پروفایل کاربری اضافی

- ساخت پروفایل دوم: 
- اپ‌های وابسته به گوگل در پروفایل Owner نصب شده‌اند.
- اپ‌های دیگر و زندگی دیجیتال در پروفایل Tommy قرار دارد.

---

## Obtainium

- ابزار اصلی دریافت فایل‌های نصب .apk و به‌روزرسانی اپ‌ها
- فهرست اپ‌های متن‌باز:
- AntennaPod, Aurora Store, Bitwarden, Brave, Breezy Weather, Catima, Collabora Office, DAVx2, Ente Auth, FairScan, Feeder, Home Assistant, Klawiatura FUTO, Librera, Obtainium, Organic Maps, Pachli, Signal, Simplenote, Stremio, Thunderbird

---

## Aurora Store

- کلاینت متن‌باز Google Play برای دانلود اپ بدون GMS
- ویژگی‌ها:
- حریم خصوصی
- امنیت
- دور زدن محدودیت‌های منطقه‌ای
- متن‌باز بودن

---

## فهرست اپ‌هایی که بدون GMS کارکرد آن‌ها را بررسی کرده‌ام

- Allegro, Apple Music, Apple TV, Biedronka, Bolt, Booksy, BPme, CityParkApp, Decathlon, DeepL, Discord, Duolingo, DWService, Ekstraliga, epark, Formula 1, Geoportal Mobile, GitHub, اپ شهرداری, Jakdojade, Lidl Plus, LiveKid, Messenger, OLX, OpenVPN, park4night, Pepper, Perplexity, Synology Photos, Pocket Casts, Reddit, Reolink, SmartLife, Tapo, Termius, Tether, TickTick, TV Time, Zepp, ZeroTier

---

## کنترل کامل دسترسی اپ‌ها

- مدیریت مجوزها:
- داشبورد حریم خصوصی (**Privacy dashboard**) برای بررسی دسترسی‌ها

---

## فضای خصوصی (Private Space)

- مسیر: `Settings → Security & privacy → Private space`
- اپ‌های وابسته به GMS که نیاز به دسترسی خصوصی دارند، در این فضا نگهداری می‌شوند.

### فهرست اپ‌ها در فضای خصوصی من

- **Google Drive, Finax, IKO, InPost Mobile, mBank, mObywatel, Mój T-Mobile, Orlen Vitay, Revolut, Santander, Play Store, XTB**
