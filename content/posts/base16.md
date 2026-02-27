---
title: "آموزش کامل ساخت تم Base16 برای Windows Terminal و PowerShell"
date: 1404-12-05
draft: false
type: post
tags: ["ویندوز"]
categories: ["software"]
cover:
  image: "https://s34.picofile.com/file/8490365842/powershell_social.png"
  # can also paste direct link from external site
  # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
  alt: "<alt text>"
  caption: "<text>"
  relative: false # To use relative path for cover image, used in hugo Page-bundles

---


# آموزش کامل ساخت تم Base16 برای Windows Terminal و PowerShell

در محیط‌های حرفه‌ای کدنویسی، امنیت و شبکه، شخصی‌سازی ترمینال فقط یک موضوع ظاهری نیست؛  
یک **افزایش بهره‌وری واقعی** محسوب می‌شود.

در این آموزش یاد می‌گیرید چگونه یک تم سفارشی Base16 بسازید و آن را :



اعمال کنید — به صورت مرحله‌به‌مرحله و عملی.

---

# Base16 چیست و چرا مهم است؟

Base16 یک استاندارد رنگ‌بندی شامل 16 رنگ اصلی است که برای محیط‌های توسعه طراحی شده است.

مزایا:

- یکپارچگی رنگ بین ابزارها
- خوانایی بهتر خروجی لاگ‌ها و کد
- مناسب برای محیط‌های Red Team / Blue Team
- امکان ساخت تم اختصاصی سازمانی

در پروژه‌های امنیتی و شبکه که خروجی لاگ و خطا اهمیت زیادی دارد، یک تم درست می‌تواند خوانایی را چند برابر کند.

---

# پیش‌نیازها

قبل از شروع مطمئن شوید:

- Windows 10 یا 11 دارید
- Windows Terminal نصب است
- PowerShell فعال است
- دسترسی به فایل تنظیمات JSON دارید

اختیاری:
- Node.js برای ساخت خودکار تم

---

# مرحله 1 — ساخت تم Base16 سفارشی

یک فایل جدید با نام زیر ایجاد کنید:

```
mytheme.yaml
```

محتوا:

```yaml
scheme: SecDevTheme
author: YourName
base00: "0f111a"
base01: "1a1f2b"
base02: "212733"
base03: "3b4252"
base04: "565f73"
base05: "c0c5ce"
base06: "d8dee9"
base07: "ffffff"
base08: "ff5370"
base09: "f78c6c"
base0A: "ffcb6b"
base0B: "c3e88d"
base0C: "89ddff"
base0D: "82aaff"
base0E: "c792ea"
base0F: "ff9cac"
```

این تم نمونه برای محیط‌های امنیتی با پس‌زمینه تیره طراحی شده است.

---

# مرحله 2 — تبدیل به فرمت Windows Terminal

Windows Terminal از JSON استفاده می‌کند.  
باید رنگ‌ها را به این ساختار تبدیل کنید:

```json
{
  "name": "SecDevTheme",
  "background": "#0f111a",
  "foreground": "#c0c5ce",
  "cursorColor": "#82aaff",
  "selectionBackground": "#212733",

  "black": "#0f111a",
  "red": "#ff5370",
  "green": "#c3e88d",
  "yellow": "#ffcb6b",
  "blue": "#82aaff",
  "purple": "#c792ea",
  "cyan": "#89ddff",
  "white": "#c0c5ce",

  "brightBlack": "#3b4252",
  "brightRed": "#ff5370",
  "brightGreen": "#c3e88d",
  "brightYellow": "#ffcb6b",
  "brightBlue": "#82aaff",
  "brightPurple": "#c792ea",
  "brightCyan": "#89ddff",
  "brightWhite": "#ffffff"
}
```

---

# مرحله 3 — اضافه کردن تم به Windows Terminal

## باز کردن فایل تنظیمات

1. Windows Terminal را باز کنید  
2. Settings  
3. Open JSON file  

![terminal-seting](https://s34.picofile.com/file/8490365776/Screenshot_2026_02_24_233955.png
)



---

## اضافه کردن تم به بخش schemes

در فایل `settings.json` بخش `schemes` را پیدا کنید و کد بالا را اضافه کنید:

```json
"schemes": [
  {
    "name": "SecDevTheme",
    ...
  }
]
```

فایل را ذخیره کنید.

---

# مرحله 4 — اعمال تم روی PowerShell

در همان فایل `settings.json` بخش پروفایل PowerShell را پیدا کنید:

```json
"profiles": {
  "list": [
    {
      "name": "PowerShell",
      "colorScheme": "SecDevTheme"
    }
  ]
}
```



اکنون ترمینال را ری‌استارت کنید.

---

# مرحله 5 — هماهنگ‌سازی رنگ Syntax در PowerShell

برای کنترل رنگ ورودی دستورات، از ماژول PSReadLine استفاده می‌کنیم.

ابتدا نصب:

```powershell
Install-Module PSReadLine -Scope CurrentUser
```

باز کردن پروفایل:

```powershell
notepad $PROFILE
```

اضافه کردن تنظیمات رنگ:

```powershell
Set-PSReadLineOption -Colors @{
  Command = "#82aaff"
  String  = "#c3e88d"
  Number  = "#f78c6c"
  Operator = "#ff5370"
  Variable = "#89ddff"
}
```



---

# روش حرفه‌ای — ساخت خودکار تم با Generator

اگر می‌خواهید چندین تم بسازید:

```bash
npm install -g base16-builder
```

سپس:

```bash
base16-builder -s mytheme.yaml -t windows-terminal
```

---

# بهترین فونت برای محیط‌های امنیت و توسعه

پیشنهاد می‌شود از فونت‌های زیر استفاده کنید:

- Cascadia Code
- Fira Code
- JetBrains Mono

---



# جمع‌بندی

در این مقاله یاد گرفتید:

- ساخت تم Base16
- تبدیل آن به فرمت Windows Terminal
- اعمال روی PowerShell
- تنظیم رنگ Syntax
- استفاده حرفه‌ای در محیط‌های امنیت و توسعه

اکنون می‌توانید یک ترمینال حرفه‌ای، خوانا و شخصی‌سازی‌شده داشته باشید.

---