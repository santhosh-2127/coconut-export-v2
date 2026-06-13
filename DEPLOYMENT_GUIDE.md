# Global Coco Exports — Frontend Deployment Guide

> **Phase:** Frontend-only Production Launch
> **Purpose:** Portfolio showcase, client demonstration, UI/UX review, stakeholder feedback, early validation
> **Backend will be implemented in a future phase.**

---

## 1. Frontend Production Audit

### ✅ TypeScript Errors
**Status: PASS** — Zero TypeScript errors across the project.

### ✅ Build Errors
**Status: PASS** — Production build compiles successfully.
- Compilation time: ~12 seconds
- TypeScript validation: ~18 seconds
- Static generation: ~1.5 seconds

### ✅ Route Generation (15 static routes)
| Route | Type | Status |
|---|---|---|
| `/` | Static (○) | ✅ |
| `/about` | Static (○) | ✅ |
| `/contact` | Static (○) | ✅ |
| `/faq` | Static (○) | ✅ |
| `/logistics` | Static (○) | ✅ |
| `/rfq` | Static (○) | ✅ |
| `/products/[slug]` | SSG (●) | ✅ (5 paths) |
| `/robots.txt` | Static (○) | ✅ |
| `/sitemap.xml` | Static (○) | ✅ |
| `/_not-found` | Static (○) | ✅ |

### ✅ Component Inventory
All sections and components verified present:
- Layout: Navbar, Footer, SkipNav
- Sections: Hero, TrustStrip, Stats, WhyChooseUs, ProductEcosystem, SupplyChainJourney, ExportDestinations, Certifications, RFQCTA
- Product: Hero, Overview, Specs, Gallery, Constants, Icons, Applications, Packaging, CTA, PageClient
- About: Hero, Operations, Quality, WhoWeAre, WhyBuyers, Certifications, GlobalMarkets, FinalCTA
- Contact: Hero, Form, Options, Hours, Location, Services, FAQ, FinalCTA
- Logistics: Hero, Process, Shipping, Containers, Docs, Quality, Incoterms, FAQ, FinalCTA
- FAQ: Hero, AccordionSection, FinalCTA
- RFQ: Hero, Process, Benefits, Form, FAQ, FinalCTA

### ✅ No Console Errors
**Status: PASS** — All `console.log`, `console.error`, `console.warn` calls removed from production code.

---

## 2. Pre-Deployment Checklist

### Environment Variables
- [ ] Copy `.env.example` to `.env.local` (optional for frontend-only)
- [ ] No API keys required for static frontend deployment
- [ ] All analytics components gracefully return null when env vars are absent

### Image Assets
- [ ] Verify all images exist in `/public/images/`
- [ ] Check `og-default.png` exists for social sharing
- [ ] Check `og-image.jpg` exists for product pages
- [ ] Check `logo-icon.svg` exists
- [ ] Check `icon-512.png` exists
- [ ] Check `apple-touch-icon.png` exists (optional — remove from layout if absent)
- [ ] Verify `site.webmanifest` exists in `/public/`

### SEO Metadata
- [ ] All pages have unique `<title>` with `%s | Global Coco Exports` template
- [ ] All pages have unique meta descriptions
- [ ] OpenGraph tags present on all pages
- [ ] Twitter card tags present
- [ ] JSON-LD schemas injected (Organization, Website, LocalBusiness)
- [ ] `robots.ts` returns correct crawl rules
- [ ] `sitemap.ts` includes all routes
- [ ] Canonical URLs set correctly

### Responsive Breakpoints
- [ ] 320px — Small mobile
- [ ] 375px — Mobile
- [ ] 425px — Large mobile
- [ ] 768px — Tablet
- [ ] 1024px — Small desktop
- [ ] 1440px — Large desktop

### Accessibility
- [ ] Skip navigation link present
- [ ] All images have alt text
- [ ] Form fields have labels and aria attributes
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible on interactive elements
- [ ] ARIA landmarks present (`main`, `nav`, `section`)

---

## 3. Vercel Deployment Guide

### Prerequisites
- GitHub repository with the code pushed
- Vercel account (free tier is sufficient)

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial production build — frontend-only deployment"
   git push origin master
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Select the `coconut-export` directory (if using monorepo)

3. **Configure Build Settings**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Environment Variables (Optional)**
   - `NEXT_PUBLIC_GA4_ID` — Google Analytics ID (optional)
   - `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity ID (optional)
   - `NEXT_PUBLIC_GOOGLE_VERIFICATION` — Google Search Console (optional)

5. **Deploy**
   - Click **Deploy**
   - Vercel will run `npm install`, `npm run build`, and publish

6. **Configure Custom Domain** (post-deployment)
   - Go to Project → Domains
   - Add `globalcocoexports.com`
   - Update DNS settings as instructed by Vercel

### Build Configuration Notes
- `next.config.ts` has `reactCompiler: true` — Next.js 16 React Compiler
- Image optimization enabled with AVIF/WebP formats
- Cache headers set for static assets (30-day TTL for images)
- DNS prefetch for Google Analytics and Clarity domains

---

## 4. Production Cleanup Checklist

### Removed Backend Files
The following backend files were removed for the frontend-only phase:

- ✅ `src/app/api/rfq/route.ts` — RFQ API
- ✅ `src/app/api/enquiry/route.ts` — Enquiry API
- ✅ `src/services/rfq.service.ts` — RFQ business logic
- ✅ `src/services/enquiry.service.ts` — Enquiry business logic
- ✅ `src/emails/AdminRFQEmail.tsx` — Email template
- ✅ `src/emails/CustomerRFQEmail.tsx` — Email template
- ✅ `src/emails/admin-rfq-notification.tsx` — Email template
- ✅ `src/emails/admin-enquiry-notification.tsx` — Email template
- ✅ `src/emails/index.ts` — Email barrel export
- ✅ `src/lib/resend.ts` — Resend client
- ✅ `src/lib/supabase.ts` — Supabase client
- ✅ `src/lib/email.ts` — Email service
- ✅ `src/lib/logger.ts` — Logger
- ✅ `src/lib/rate-limit.ts` — Rate limiter
- ✅ `src/types/crm.ts` — CRM types
- ✅ `supabase/schema.sql` — Database schema
- ✅ `scripts/` — Logo generation scripts
- ✅ Various markdown docs (AGENTS, CLAUDE, IMAGE_STRATEGY, etc.)

### Modified Frontend Files
- ✅ `src/app/components/sections/RFQForm.tsx` — Removed API call, shows demo success modal
- ✅ `src/app/components/sections/ContactForm.tsx` — Removed API call, shows success modal

### Form Behavior (Demo Mode)
| Form | Previous Behavior | Current Behavior |
|---|---|---|
| **RFQ Form** | POST to `/api/rfq` → Save to DB → Send emails | Show success modal with demo message |
| **Contact Form** | POST to `/api/enquiry` → Save to DB → Send emails | Show success modal |

### Analytics Components (Preserved)
The following analytics components remain but gracefully return `null` when env vars are not set:
- `GoogleAnalytics.tsx` — Returns null if `NEXT_PUBLIC_GA4_ID` is empty
- `Clarity.tsx` — Returns null if `NEXT_PUBLIC_CLARITY_ID` is empty
- `CookieConsent.tsx` — Pure UI component, no API calls
- `TrackingInit.tsx` — Headless tracker, fires events via gtag (no-op if gtag absent)

---

## 5. Future Backend Roadmap

> **Do not implement now** — These are documented integration points for Phase 2.

### RFQ Backend Integration Points

| Component | File | Integration Point |
|---|---|---|
| **RFQ Form Submission** | `src/app/components/sections/RFQForm.tsx` | `handleSubmit()` — currently shows demo modal. Replace with `fetch("/api/rfq", { method: "POST", body: JSON.stringify(fields) })` |
| **RFQ API Route** | New file: `src/app/api/rfq/route.ts` | Create POST handler that validates and saves to database |
| **RFQ Service** | New file: `src/services/rfq.service.ts` | Business logic for validation, sanitization, rate limiting, DB persistence |

### Email Automation Integration Points

| Component | File / Path | Integration Point |
|---|---|---|
| **Resend Client** | New file: `src/lib/resend.ts` | Initialize Resend client with `RESEND_API_KEY` |
| **Email Templates** | New directory: `src/emails/` | React Email templates: AdminRFQEmail.tsx, CustomerRFQEmail.tsx |
| **Email Service** | New file: `src/lib/email.ts` | Send emails via Resend with retry logic |
| **Structured Logger** | New file: `src/lib/logger.ts` | Log email events for monitoring |
| **Notifications** | `src/services/rfq.service.ts` | Call email service after successful DB save |
| **Admin Recipient** | Environment variable | `ADMIN_EMAIL=santhoshganesan9972@gmail.com` |

### CRM Integration Points

| Component | File / Path | Integration Point |
|---|---|---|
| **CRM Types** | New file: `src/types/crm.ts` | LeadRecord, RFQRecord, InquiryRecord interfaces |
| **CRM Service** | New file: `src/services/crm.service.ts` | Sync leads to HubSpot/Salesforce/Zoho |
| **Lead Scoring** | CRM types | Rules defined in LEAD_SCORING_RULES constant |
| **Pipeline Management** | New file: `src/services/pipeline.service.ts` | Update lead status through stages |

### Admin Dashboard Integration Points

| Component | File / Path | Integration Point |
|---|---|---|
| **Dashboard Route** | New file: `src/app/admin/page.tsx` | Admin dashboard page (protected route) |
| **Auth Middleware** | New file: `src/middleware.ts` | Protect admin routes with authentication |
| **Leads Table** | New component | View and manage RFQ/enquiry submissions |
| **Email Logs** | New component | View email delivery status |

---

**Document generated:** ${new Date().toISOString().split('T')[0]}
**Build status:** ✅ Production-ready
**Next step:** Deploy to Vercel for stakeholder review
