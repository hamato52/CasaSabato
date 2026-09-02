# Casa Sabato

موقع تعريفي لمكتب استشارات وبناء هوية بصرية لبراندات الملابس — **From Vision to System**.

A one-page marketing site for a brand consultancy & visual identity studio working with
clothing brands. Bilingual (Arabic default, English toggle), fully responsive, no build step.

---

## التشغيل / Running

الموقع HTML/CSS/JS ثابت — لا يحتاج أي أدوات بناء. افتح `index.html` مباشرة، أو شغّل خادماً محلياً:

```bash
npx http-server -p 8080 .
# ثم افتح http://localhost:8080
```

## البنية / Structure

```
index.html              الصفحة الكاملة (النص العربي مكتوب داخل HTML)
assets/css/styles.css   التنسيقات — متغيرات الألوان والخطوط في :root
assets/js/main.js       تبديل اللغة، القائمة، ظهور العناصر، نموذج التواصل
assets/img/             الأيقونة وصورة المشاركة
```

## التعديل / Customising

**البيانات التي يجب تغييرها قبل النشر:**

| المكان | القيمة الحالية |
|---|---|
| `index.html` — قسم `#contact` | `hello@casasabato.com` · `https://wa.me/000000000` · رابط Instagram |
| `assets/js/main.js` — ثابت `MAILTO` | `hello@casasabato.com` |

**الألوان والخطوط:** كلها متغيّرات في أعلى `styles.css` تحت `:root`
(`--ink`, `--bone`, `--clay`, `--line`, وعائلات الخطوط `--ar` / `--la` / `--sf`).

**النصوص:** النص العربي مكتوب مباشرة في `index.html`. الترجمة الإنجليزية في كائن `EN`
داخل `main.js`، مرتبطة بنفس مفاتيح `data-i18n`. أي نص جديد يحتاج مفتاحاً في الاثنين معاً.

## ملاحظات / Notes

- اللغة الافتراضية عربية (RTL)، ويُحفظ اختيار الزائر في `localStorage`.
- نموذج التواصل يفتح برنامج البريد لدى الزائر عبر `mailto:` — لا يحتاج خادماً.
  لاستقبال الرسائل مباشرة، اربطه بخدمة مثل Formspree أو دالة serverless.
- الخطوط من Google Fonts؛ إن أردت عمل الموقع دون إنترنت، نزّلها محلياً إلى `assets/`.
- يحترم `prefers-reduced-motion`، ويعمل بدون JavaScript (يعرض النسخة العربية كاملة).
