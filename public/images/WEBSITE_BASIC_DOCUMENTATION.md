# Website Basic Documentation

Date: 10 March 2026
Project: Shanti Ratnam Website

## 1) Project Overview
- Website type: Multi-page clinic website
- Purpose: Clinic branding, service information, consultation/contact flow, and OPD queue management
- Language support: Hindi and English
- Status: Live / Ready for deployment handover

## 2) Technology Stack
- Frontend framework: Next.js 14 (App Router)
- UI library: React 18
- Runtime: Node.js
- Styling: Global CSS with responsive layout
- SEO setup: Metadata, sitemap, robots, canonical routing, redirects

## 3) Domain and Hosting
- Domain provider: Hostinger
- Domain name: [ADD_DOMAIN_NAME]
- Domain login URL: [ADD_HOSTINGER_LOGIN_URL]
- Domain account email/user ID: [ADD_HOSTINGER_USER_ID]
- Domain account password: [ADD_HOSTINGER_PASSWORD]
- DNS managed at: Hostinger DNS panel

- Hosting provider: Vercel
- Vercel project name: [ADD_VERCEL_PROJECT_NAME]
- Vercel team/account: [ADD_VERCEL_ACCOUNT_EMAIL]
- Vercel login URL: https://vercel.com/login
- Vercel account password: [ADD_VERCEL_PASSWORD]
- Production URL: [ADD_PRODUCTION_URL]
- Linked custom domain(s): [ADD_LINKED_DOMAINS]

## 4) Source Code and Access
- Git repository URL: [ADD_REPO_URL]
- Main branch: [ADD_MAIN_BRANCH_NAME]
- Repository owner/admin: [ADD_OWNER_NAME]
- Git platform login ID: [ADD_GIT_ID]
- Git platform password/token: [ADD_GIT_PASSWORD_OR_TOKEN]

## 5) Environment Variables (Production)
Fill from your `.env.local` and deployment settings:

- `QUEUE_AUTH_SECRET`: [ADD_VALUE]
- `QUEUE_RECEPTION_PASSWORD`: [ADD_VALUE]
- `QUEUE_ADMIN_PASSWORD`: [ADD_VALUE]
- `GOOGLE_MAPS_API_KEY`: [ADD_VALUE_IF_USED]
- `GOOGLE_PLACE_ID`: [ADD_VALUE_IF_USED]

Note: Keep secrets only in Vercel Environment Variables and a secure password manager.

## 6) Feature Summary
- Responsive website (mobile, tablet, desktop)
- Shared header/footer and reusable components
- Hindi/English language behavior and locale-aware routing
- Clinic pages (about, services, packages, team, blog, contact, etc.)
- SEO pages and search crawler support
- Custom OPD queue system:
  - Patient registration
  - Live display board
  - Reception panel
  - Admin panel
  - Login/auth flow

## 7) Operational Details
- Queue data store: `data/queue-store.json`
- Daily queue reset option: Available in admin panel
- Staff login path: [ADD_LOGIN_PATH]
- Reception path: [ADD_RECEPTION_PATH]
- Display path: [ADD_DISPLAY_PATH]
- Admin path: [ADD_ADMIN_PATH]

## 8) Renewal and Billing Tracker
- Domain expiry date: [ADD_DATE]
- Domain renewal amount: [ADD_AMOUNT]
- Hosting billing cycle: [Monthly/Yearly]
- Hosting renewal date: [ADD_DATE]
- Hosting renewal amount: [ADD_AMOUNT]

## 9) Client Handover Checklist
- [ ] Hostinger access shared and tested
- [ ] Vercel access shared and tested
- [ ] Domain DNS mapped to Vercel correctly
- [ ] Production URL tested on mobile and desktop
- [ ] Hindi and English pages verified
- [ ] Contact/consultation flow tested
- [ ] Queue flow tested (register -> call -> complete)
- [ ] Credentials saved in password manager
- [ ] Renewal calendar reminders set

## 10) Important Security Notes
- Change all temporary/default passwords after handover.
- Enable 2FA on Hostinger, Vercel, and Git accounts.
- Do not share credentials in WhatsApp chat without encryption.
- Store final credentials in one secure place (password manager + emergency sealed backup).
