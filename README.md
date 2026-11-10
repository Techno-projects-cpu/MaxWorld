# Max World

Landing page for **Max World** — CC cameras, complete CCTV systems and laptop
sales & service in Khammam, Telangana. Owned by Shaik Eliyas.

Indera Nagar, near Ek Minar Masjid, Khammam · Open daily 10:00 AM – 8:00 PM

## Stack

- Next.js 16 (App Router, static prerender) + React 19 + TypeScript
- No CSS framework — hand-rolled minimal design system in `app/globals.css`
- No backend — the lead form composes a prefilled WhatsApp / email enquiry

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
```

## Build & serve

```bash
npm run build
npm run start -- -H 0.0.0.0 -p 3000
```

## Editing business details

All phone numbers, address, hours, brands, stats and social links live in
[`lib/site.ts`](./lib/site.ts) — change them there and the whole site
(contact panel, footer, JSON-LD, CTAs) updates.

Logo assets (`public/images/symbol*.png`) are derived from the shop's real
logo; `app/icon.png` is the tab icon.
