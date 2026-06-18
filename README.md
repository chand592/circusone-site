# Circus One Limited — Marketing Site

A prototype marketing website for **Circus One Limited**, a Hong Kong design and marketing firm established in 1992 (formerly Circus Design). The firm handles brand building, product packaging, 3D display and showcases, web and multimedia, advertising, events, and photography — with clients ranging from luxury spirits houses (Martell, Royal Salute, Perrier Jouët, Chivas) to local Hong Kong businesses.

This repository contains the working prototype built for director review. Content is placeholder unless noted; the look and feel is the focus.

---

## Tech Stack

- **[Astro](https://astro.build)** v4 — static site generator, component-based, ships zero JS by default
- **[Tailwind CSS](https://tailwindcss.com)** v3 — utility-first styling with a custom brand palette
- **Fraunces** (serif, display) + **Inter** (sans, body) — loaded via Google Fonts

No backend, no database, no CMS. The site outputs static HTML/CSS that deploys to any static host (Netlify, Vercel, GitHub Pages).

---

## Quick Start

### Prerequisites

- **Node.js** v18+ (built on v24)
- **npm** v10+

### Install & run

```bash
npm install
npm run dev
```

The dev server starts at **http://localhost:4321**.

### Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # serves the built site locally for verification
```

---

## Project Structure

```
circusone-site/
├── public/
│   ├── logo.png                    # Original company logo (kept for reference)
│   └── logo-concepts/              # New logo concepts for director review
│       ├── preview.html            # Open this to compare logo options
│       ├── concept-1-modern-orbit.svg
│       ├── concept-4-original-refreshed.svg
│       └── ... (dark variants for deep-red backgrounds)
├── src/
│   ├── components/
│   │   ├── Header.astro            # Sticky nav with logo + mobile menu
│   │   ├── Footer.astro            # Contact details + dynamic copyright year
│   │   ├── Hero.astro              # Page hero sections
│   │   ├── SectionHeading.astro    # Reusable numbered section labels
│   │   ├── ServiceCard.astro       # Service offering cards
│   │   ├── ProjectCard.astro       # Portfolio project cards
│   │   ├── TestimonialCard.astro   # Client quote cards
│   │   ├── ClientLogo.astro        # Client name plates
│   │   ├── Stat.astro              # Statistic display
│   │   ├── CTABand.astro           # Call-to-action sections
│   │   └── ContactForm.astro       # Formspree-powered contact form
│   ├── layouts/
│   │   └── Base.astro              # Shared <head>, header, footer wrapper
│   ├── pages/
│   │   ├── index.astro             # Home
│   │   ├── about.astro             # About — 1992 origin, values, team
│   │   ├── services.astro          # 7 service disciplines + process
│   │   ├── portfolio.astro         # Filterable project grid
│   │   ├── clients.astro           # Client wall + testimonials + case studies
│   │   └── contact.astro           # Contact form + HK office details
│   └── styles/
│       └── global.css              # Tailwind layers + component classes
├── logo-concepts/                  # Source files for logo exploration
├── astro.config.mjs
├── tailwind.config.mjs             # Brand palette (single source of truth)
├── tsconfig.json
└── package.json
```

---

## Design System

### Brand Palette

All colors are defined in `tailwind.config.mjs` — change them in one place and the entire site updates.

| Token | Hex | Usage |
|-------|-----|-------|
| `deepred` | `#5C1A20` | Primary dark — hero, portfolio, CTA, footer backgrounds |
| `cream` | `#F5F2EC` | Page base — welcoming, light sections, text on dark |
| `gold` | `#C8A96A` | Accent — hairline rules, section numbers, hover details (used sparingly) |
| `terracotta` | `#8B3A2F` | Interaction accent — hover states, active nav, links on light |
| `heritage` | `#615F5B` | Muted text, body copy, subtle dividers |

### Typography

- **Display**: Fraunces (editorial serif) — headings, stats, pull quotes
- **Body**: Inter (clean sans-serif) — paragraphs, navigation, labels

### Design Principles

- **Editorial, not digital** — serif display type, hairline borders instead of shadows, generous whitespace
- **Quiet craft** — no gradients, no glows, no heavy animations; 200ms color transitions only
- **Gold as a scarce accent** — used on dark sections and as thin rules, never splashed across light backgrounds
- **Mobile-first responsive** — all grids collapse, working mobile nav

---

## Pages

| Page | Path | Content |
|------|------|---------|
| Home | `/` | Hero, 4 service pillars, featured work, stats, about teaser, client wall, testimonials, CTA |
| About | `/about` | 1992 origin story, stats card, timeline, values, team grid |
| Services | `/services` | 7 disciplines with deliverables, 4-step process |
| Portfolio | `/portfolio` | Filterable project grid on deep-red backdrop, capabilities |
| Clients | `/clients` | Client logo wall, testimonials, case studies |
| Contact | `/contact` | Contact form + HK office address, phone, email, hours, map |

---

## Content Notes

### Real firm data (used directly)
- **Founded**: 1992, formerly "Circus Design"
- **Address**: No 203–208, 1/F New Mandarin Plaza, 14 Science Museum Road, Tsimshatsui, Kowloon, Hong Kong
- **Phone**: +852 2503 4581 · **Fax**: +852 2503 4616
- **Email**: info@circusone.com (recruit@circusone.com for recruitment)
- **Client names**: Sourced from the public existing circusone.com site

### Placeholders (marked with `<!-- REPLACE: ... -->`)
- All body copy beyond the firm's public facts
- Testimonial quotes (do **not** attribute fabricated quotes to real clients)
- Project imagery (gradient/color blocks stand in for real work samples)
- Team photos, names, and roles
- Office hours (to confirm)

### Contact Form
The form uses **[Formspree](https://formspree.io)** (free tier). To activate:
1. Create a form at formspree.io
2. Copy your form ID
3. Update the `formAction` URL in `src/components/ContactForm.astro`

---

## Logo Concepts

The `logo-concepts/` folder contains SVG logo explorations for director review. The original logo is kept at `public/logo.png` for reference.

**To review the concepts:**
- Open `public/logo-concepts/preview.html` in a browser, or
- Visit `http://localhost:4321/logo-concepts/preview.html` when the dev server is running

Each concept has a cream version (for the site header) and a reversed version (for the deep-red footer). See the preview page for details.

---

## Deployment

The site is static and deploys to any static host:

### Netlify / Vercel (recommended)
1. Push this repo to GitHub
2. Connect the repo to Netlify or Vercel
3. Build command: `npm run build` · Output directory: `dist`
4. Auto-deploys on every push

### Custom domain
Once the founder regains access to the circusone.com domain, point DNS records to the chosen host. This is handled separately from the build.

---

## Git Workflow

```bash
git status              # see changes
git add -A              # stage all
git commit -m "..."     # commit
git push                # push to GitHub
```

---

## Next Steps

- [ ] Director sign-off on the look (deep red + gold + cream palette)
- [ ] Choose a logo concept and finalize with a licensed font + outlined paths
- [ ] Replace placeholder copy with final content
- [ ] Replace gradient project blocks with real work imagery
- [ ] Add real team photos and bios
- [ ] Set up Formspree and test the contact form
- [ ] Confirm office hours
- [ ] Collect and approve real testimonial quotes
- [ ] Deploy to hosting + connect custom domain

---

## License

Proprietary — Circus One Limited. All rights reserved.
