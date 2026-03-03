# Shanti-Ratnam Next.js Redesign

This is the new `Next.js` version of the website with:
- Responsive UI for phone, tablet, iPad, and desktop
- Shared header/footer across all pages
- Floating "Book Appointment" widget on every page
- SEO-ready metadata, sitemap, and robots
- Bilingual routing (`/en`, `/hi`)
- Integrated OPD queue management (QR registration + live display + reception/admin panels)

## Run Locally

```bash
cd "d:\shanti ratnam\new-site-next"
npm install
npm run dev
```

Open `http://localhost:3000`.

## Pages

- `/`
- `/about-us`
- `/facilities`
- `/disease-treated`
- `/treatment`
- `/package`
- `/gallery`
- `/team`
- `/blog`
- `/contact-us`

## Queue Management (Integrated)

Queue pages (locale-aware):
- `/en/queue/register` and `/hi/queue/register` -> Patient QR registration form
- `/en/queue/display` and `/hi/queue/display` -> Live waiting-area display board
- `/en/queue/reception` and `/hi/queue/reception` -> Reception control panel
- `/en/queue/admin` and `/hi/queue/admin` -> Admin settings panel
- `/en/queue/login` and `/hi/queue/login` -> Staff login

### How Non-Technical Staff Use It

1. Reception opens `queue/reception` and signs in.
2. Patient scans QR and fills `queue/register` form.
3. Patient gets token instantly (example: `D-012`).
4. Reception uses `Call Next` and status buttons (In Consultation, Complete, Skip, Recall).
5. Waiting area screen shows `queue/display` in full screen.
6. At day start/end, admin can reset queue from `queue/admin`.

### Queue Data Storage

- Current implementation stores queue data in local file:
  - `data/queue-store.json`
- This is good for single-server operation.
- For multi-branch or high-scale use, move to database (Supabase/Postgres/MySQL).

### Required Environment Variables

Create `.env.local` (see `.env.example`) and set:
- `QUEUE_AUTH_SECRET`
- `QUEUE_RECEPTION_PASSWORD`
- `QUEUE_ADMIN_PASSWORD`

If these are not set, development defaults are used (not recommended for production).

## Doctor Photo / Signature Placement

Place doctor assets in:
- `public/images/doctors/`

Current placeholder files:
- `doctor-placeholder.svg`
- `signature-placeholder.svg`

To use real images:
1. Add files in `public/images/doctors/` (for example `dr-saurabh-photo.jpg`, `dr-saurabh-signature.png`)
2. Update paths in `lib/siteData.js`:
   - `mdDeskContent.photoPath`
   - `mdDeskContent.signaturePath`
