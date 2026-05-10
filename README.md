# ROZET Pump Website — React + Vite

A full migration of `rozetpump.com` from WordPress to a modern React + Vite stack. No dashboard / backend — pure frontend with all content in a centralized data file you can edit directly.
🌐 **Live demo:** https://rozetpump.com/

## What's included

- **14 routes** wired with `react-router-dom` v6
- **Hero slider** powered by Swiper (autoplay + fade + pagination + navigation)
- **Sticky header** with multi-level dropdown navigation (mobile-friendly hamburger)
- **8-card product grid** on home + dedicated detail page for each product line
- **Downloads page** with category filtering and 26 PDF datasheets
- **Contact form** (frontend-only — wire to Formspree / FormSubmit / your own backend)
- **Polished design system** — Inter + Poppins fonts, blue + orange palette, full responsive breakpoints
- **All 37 images and 26 PDFs** scraped from the original site, copied into `public/`

## Project structure

```
rozet-react-vite/
├── public/
│   ├── images/       (37 brand images)
│   └── pdfs/         (26 datasheets)
├── src/
│   ├── components/
│   │   ├── Header.jsx          (sticky nav + dropdowns + mobile)
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx      (Swiper)
│   │   ├── ProductGrid.jsx
│   │   ├── ContactForm.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── ProductPage.jsx     (used by all 10 product detail routes)
│   │   ├── Downloads.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── content.js          (★ all site copy lives here)
│   ├── styles/
│   │   └── index.css           (full design system)
│   ├── App.jsx                 (router config)
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Quick start

```bash
npm install
npm run dev      # starts on http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # preview prod build locally
```

## Editing content

**99% of edits happen in `src/data/content.js`.** It exports:

- `siteInfo` — brand name, emails, address, social links
- `heroSlides` — slides on the home hero
- `productCategories` — 8-card grid on home + footer links
- `aboutSections` — about page intro + the 5 pillars
- `productPages` — full content for each of the 10 product detail pages (intro, sections, models, related download)
- `downloads` — the full PDF library shown on `/downloads`
- `mainNav` — header navigation (supports nested submenus)

Edit the strings, save the file, Vite hot-reloads instantly.

### Adding a new product

1. Drop the image in `public/images/` and the PDF in `public/pdfs/`
2. Add an entry to `productCategories` (for the home grid)
3. Add a `productPages["your-slug"] = { ... }` entry
4. Add a `<Route path="/your-slug" element={<ProductPage slug="your-slug" />} />` in `src/App.jsx`
5. Add it to `mainNav` so it shows in the header

## Wiring the contact form

The form currently logs to console and shows a fake success message. To wire it for real, edit `src/components/ContactForm.jsx` and replace the `setTimeout` block with one of:

**FormSubmit (no signup, just an email):**
```js
await fetch('https://formsubmit.co/ajax/your@email.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  body: JSON.stringify(form)
})
```

**Formspree:**
```js
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  body: JSON.stringify(form)
})
```

## Design tokens

All colors, fonts, spacing, and shadows are CSS variables defined at the top of `src/styles/index.css`:

```css
--color-primary: #0a3d7a;       /* navy */
--color-accent:  #e94e1b;       /* orange */
--font-display:  'Poppins'…;
--font-body:     'Inter'…;
--container:     1240px;
```

Change those once and the whole site updates.

## Data scraping (how the assets got here)

The `scrape.py` script in the original `rozet-scraper/` folder uses Playwright to:
1. Visit all 14 pages on `rozetpump.com`
2. Extract every image, PDF link, heading, paragraph, and table
3. Download all referenced files into `assets/images/` and `assets/pdfs/`
4. Save the structured page data as `site_data.json`

To re-run the scrape (e.g. if the source site updates):
```bash
pip install playwright
playwright install chromium
python scrape.py
```

## Tech stack

- React 18.3
- Vite 5.4
- React Router 6.26
- Swiper 11.1 (hero slider)
- Bootstrap Icons (CDN, for icons)
- Google Fonts (Inter + Poppins, CDN)

No CSS framework — vanilla CSS with a design-token-driven system.

## Production deployment

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3+CloudFront, plain Nginx).

Because we use `react-router-dom`'s `BrowserRouter`, you'll need to configure your host to fall back to `index.html` for unknown paths. Vercel and Netlify handle this automatically. For Nginx, add:

```
location / {
  try_files $uri $uri/ /index.html;
}
```

---

Built with the website-builder skill • شريك الأعمال — Business Partner for IT
