# Mehrban Care (مہربان کیئر) — Premium Elderly Home Care Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-gold?style=flat)]()

Mehrban Care is an internationally respected, customer-facing elderly home-care web platform designed for Pakistani families and overseas Pakistanis seeking dignified, compassionate, and dependable assistance for aging parents in Pakistan.

---

## 1. Project Overview & Brand Identity

* **Brand Mission**: To deliver compassionate, safe, dignified, and dependable elderly home-care services in the comfort and privacy of the senior's own residence.
* **Core Emotions**: Trust, Compassion, Professionalism, and Peace of Mind.
* **Target Audience**:
  1. Pakistani families seeking dignified home assistance for elderly parents.
  2. Overseas Pakistanis (UK, Gulf, USA, Canada) needing reliable care for aging parents living in Pakistan.
  3. Patients requiring post-hospital convalescent assistance.
  4. Geriatric healthcare workers and caregivers seeking professional employment.

### Official Brand Color Palette
* **Primary Navy**: `#17324D` — Main navigation, typography, authority, and depth.
* **Elegant Gold**: `#CDA05F` — Premium accents, lotus highlights, and primary call-to-actions.
* **Sage Green**: `#7FA58B` — Healing reassurance, clinical badges, and soft trust indicators.
* **Warm Cream**: `#F8F6F1` — Natural editorial background foundation.
* **Pure White**: `#FFFFFF` — High-contrast container elements and structural cards.

---

## 2. Technology Stack

* **Framework**: Next.js 15 (App Router with SSG static prerendering)
* **Language**: TypeScript 5.7 (Strict type safety)
* **Styling**: Tailwind CSS 3.4 with custom typography and color extensions
* **Animations**: Motion / Framer Motion
* **Iconography**: Lucide React
* **Typography**:
  * English: *Plus Jakarta Sans* & *Manrope*, with *Playfair Display* editorial accents
  * Urdu: *Noto Nastaliq Urdu* with relaxed line-heights and zero letter-spacing
* **SEO**: Native Next.js Metadata API, dynamic `sitemap.xml`, `robots.txt`, and Schema.org JSON-LD

---

## 3. Public Website Pages (24 Static / SSG Routes)

1. **Homepage (`/`)**:
   * Cinematic Hero with value propositions and primary CTA (*"Find the Right Care"*).
   * Trust Intro with 4 foundational care pillars.
   * **Smart Care Finder (`#care-finder`)**: 4-step interactive service matching guide.
   * 8-item Services Showcase with direct detail links.
   * Asymmetric editorial *"Why Choose Us"* section with floating trust badges.
   * 7-step customer journey preview.
   * Overseas families highlight with diaspora video-call imagery.
   * Care package preview and FAQ accordion.
2. **About Us (`/about`)**:
   * Cultural Reverence visual storytelling section (*"Elder Care as a Sacred Honor"*).
   * Mission and Vision benchmark statements.
   * 4 foundational principles.
   * 4-stage caregiver screening & vetting approach.
   * Non-medical legal boundary notice.
3. **Services Catalog (`/services`)**:
   * Category filter tabs: *All 8 Services*, *Daily Living*, *Health Oversight*, and *Specialized / 24/7*.
   * Full-bleed alternating split service cards.
4. **Individual Service Detail Pages (`/services/[slug]`)**:
   * `/services/daily-care` — Daily Living & Companionship
   * `/services/hygiene-care` — Personal Hygiene Assistance
   * `/services/home-nursing` — Home Nursing Support
   * `/services/monitoring` — Blood Pressure & Glucose Monitoring
   * `/services/doctor-visits` — Doctor Visit Accompaniment
   * `/services/physiotherapy` — Physiotherapy Coordination
   * `/services/live-in-care` — Full-Day & 24/7 Live-In Care
   * `/services/overseas-support` — Overseas Family Support
   * *Features*: Breadcrumb bar, clinical boundaries notice, suitability profiles, 4-step onboarding protocol, and booking CTA.
5. **Care Plans & Pricing (`/care-plans`)**:
   * 3 core tiers: *Essential Visit*, *Daily Care (Most Recommended)*, and *Full-Day / Live-in Care*.
   * Side-by-side comparison matrix across Schedule, Daily Living, and Supervision.
   * Bespoke quoting policy statement.
6. **Overseas Families (`/overseas-families`)**:
   * Expat reassurance addressing distance anxieties.
   * Interactive 5-stage arrangement journey stepper.
   * Conceptual private family reporting portal blueprint (Phase 2 target).
7. **How It Works (`/how-it-works`)**:
   * 7-stage visual customer journey roadmap from initial inquiry to ongoing visits.
8. **Careers (`/careers`)**:
   * Interactive role filter tabs (Nursing, Female Caregiver, Male Caregiver, Attendant).
   * Position details modal with job specifications and PNC requirements.
   * Candidate application form modal with client-side validation.
9. **Frequently Asked Questions (`/faq`)**:
   * 9 filter categories and smooth animated accordion knowledge base.
10. **Contact & Assessment Booking (`/contact` & `/book-care`)**:
    * 4-step wizard: Client Info → Senior Acuity → Location/Schedule → Review & Consent.
    * 100% backward state preservation and *"Copy Assessment Summary"* clipboard tool.
11. **Privacy Policy (`/privacy`)**:
    * Domestic confidentiality, medical record protection, and camera surveillance protocols.

---

## 4. Bilingual Architecture (English & Urdu RTL)

* **Global Language Toggle**: Accessible via top announcement bar and mobile navigation drawer.
* **Persistent RTL**: Automatically applies `dir="rtl"` and switches to the *Noto Nastaliq Urdu* font family.
* **Typographic Refinement**: Line-heights set to `1.7`–`2.0` on headings and paragraphs, with zero letter-spacing to preserve cursive ligatures.
* **Mirror Alignment**: Directional arrows, chevrons, margins, and inputs dynamically invert based on language context.

---

## 5. Local Installation & Development

### Prerequisites
* Node.js 18.18+ or 20.x
* npm 9+ or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/ZarghamMustafa2/mehrban-care-website.git
cd mehrban-care-website

# Install project dependencies
npm install
```

### Development Server
```bash
# Start local development server on port 3000
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Compile and prerender static pages
npm run build

# Start production server
npm run start
```

---

## 6. Vercel Deployment Instructions

1. Push your latest commits to GitHub:
   ```bash
   git push origin main
   ```
2. Connect the repository to [Vercel](https://vercel.com):
   * **Project Name**: `mehrban-care`
   * **Framework Preset**: `Next.js`
   * **Root Directory**: `./`
   * **Build Command**: `next build`
   * **Output Directory**: `.next`
3. Click **Deploy**. Vercel will automatically detect Next.js 15 and prerender all 24 static pages.

---

## 7. Current Phase 1 Frontend-Only Boundaries

This project represents the **completed customer-facing frontend**:
* **Zero Backend / Firebase**: No external database is connected. All forms operate in client-side memory.
* **Honest Disclaimers**: Intake forms clearly indicate that online automated database submission will activate in Phase 2. No fabricated confirmation numbers or simulated database states are presented.
* **No Admin / Staff Portals**: Internal administrative tools and caregiver portals are reserved for subsequent operational phases.
* **Verified Information**: Only verified business concepts are presented; no fake medical credentials or artificial customer testimonials are included.
