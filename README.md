# Circus One Limited — Marketing Site

A prototype marketing website for **Circus One Limited**, a Hong Kong design and marketing firm established in 1992 (formerly Circus Design). The firm handles brand building, product packaging, 3D display and showcases, web and multimedia, advertising, events, and photography — with clients ranging from luxury spirits houses (Martell, Royal Salute, Perrier Jouët, Chivas) to local Hong Kong businesses.

This repository contains the working prototype built for director review. Content is placeholder unless noted; the look and feel is the focus.

---

## Tech Stack

- **Plain HTML** (6 static pages) — no build step, no framework
- **Hand-written CSS** (`styles.css`) — semantic class names, CSS custom properties for the brand palette
- **Vanilla JavaScript** (`script.js`) — mobile menu toggle, portfolio filter, copyright year
- **Fraunces** (serif, display) + **Inter** (sans, body) — loaded via Google Fonts

No backend, no database, no CMS, no `node_modules`. The site is six HTML files and one stylesheet that deploys to any static host (Netlify, Vercel, GitHub Pages, S3).

---

## Quick Start

### View the site

Open `index.html` in a browser, or run a one-liner static server:

```bash
# Python 3
python -m http.server 8080

# Node (no install needed)
npx http-server -p 8080
```

Then visit **http://localhost:8080**.

That's it. No `npm install`, no build, no compilation. Edit a file, refresh the browser.

---

## Project Structure

```
circusone-site/
├── index.html                # Home
├── about.html                # 1992 origin story, values, team
├── services.html             # 7 service disciplines + process
├── portfolio.html            # Filterable project grid
├── clients.html              # Client wall + testimonials + case studies
├── contact.html              # Contact form + HK office details
├── styles.css                # Design tokens + every component class
├── script.js                 # Mobile menu, portfolio filter
├── public/
│   ├── logo.png              # Original company logo (kept for reference)
│   └── logo-concepts/        # New logo concepts for director review
│       ├── preview.html      # Open this to compare logo options
│       ├── concept-1-modern-orbit.svg
│       └── ... (dark variants for deep-red backgrounds)
├── logo-concepts/            # Source files for logo exploration
└── README.md
```

---

## Design System

### Brand Palette

All colors live as CSS custom properties at the top of `styles.css` — change them in one place and the entire site updates.

| Token | Hex | Usage |
|-------|-----|-------|
| `--deepred` | `#5C1A20` | Primary dark — hero, portfolio, CTA, footer backgrounds |
| `--cream` | `#F5F2EC` | Page base — welcoming, light sections, text on dark |
| `--gold` | `#C8A96A` | Accent — hairline rules, section numbers, hover details (used sparingly) |
| `--terracotta` | `#8B3A2F` | Interaction accent — hover states, active nav, links on light |
| `--heritage` | `#615F5B` | Muted text, body copy, subtle dividers |

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
| Home | `/index.html` | Hero, 4 service pillars, featured work, stats, about teaser, client wall, testimonials, CTA |
| About | `/about.html` | 1992 origin story, stats card, timeline, values, team grid |
| Services | `/services.html` | 7 disciplines with deliverables, 4-step process |
| Portfolio | `/portfolio.html` | Filterable project grid on deep-red backdrop, capabilities |
| Clients | `/clients.html` | Client logo wall, testimonials, case studies |
| Contact | `/contact.html` | Contact form + HK office address, phone, email, hours, map |

---

## Content Notes

### Real firm data (used directly)
- **Founded**: 1992, formerly "Circus Design"
- **Address**: No 203–208, 1/F New Mandarin Plaza, 14 Science Museum Road, Tsimshatsui, Kowloon, Hong Kong
- **Phone**: +852 2503 4581 · **Fax**: +852 2503 4616
- **Email**: info@circusone.com (recruit@circusone.com for recruitment)
- **Client names**: Sourced from the public existing circusone.com site

### Placeholders (marked with HTML comments)
- All body copy beyond the firm's public facts
- Testimonial quotes (do **not** attribute fabricated quotes to real clients)
- Project imagery (HSL color blocks stand in for real work samples)
- Team photos, names, and roles
- Office hours (to confirm)

### Contact Form
The form uses **[Formspree](https://formspree.io)** (free tier). To activate:
1. Create a form at formspree.io
2. Copy your form ID
3. Update the `action` URL in `contact.html` (search for `https://formspree.io/f/your-form-id`)

---

## Logo Concepts

The `logo-concepts/` folder contains SVG logo explorations for director review. The original logo is kept at `public/logo.png` for reference.

**To review the concepts:**
- Open `public/logo-concepts/preview.html` in a browser, or
- Visit `http://localhost:8080/logo-concepts/preview.html` when running a local server

Each concept has a cream version (for the site header) and a reversed version (for the deep-red footer). See the preview page for details.

---

## Deployment

The site is plain static HTML and deploys to any static host.

### Netlify / Vercel (recommended)
1. Push this repo to GitHub
2. Connect the repo to Netlify or Vercel
3. Build command: *(none)* · Publish directory: `/` (repo root)
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

## New Device Setup / Recovery

The **GitHub repo is the source of truth** for the site. If you lose your local files or switch devices, cloning the repo recovers all site code, components, styles, the original logo, and the logo concepts. The only things not in the repo are the development tools (none required for this site) and the opencode configuration (which lives globally on each machine).

### What's recoverable from the repo (everything site-related)
- All HTML pages and `styles.css` + `script.js`
- Original logo (`public/logo.png`)
- Logo concepts (`logo-concepts/`, `public/logo-concepts/`)
- This README

### What's NOT in the repo (must set up per device)
- A text editor (VS Code, etc.) and a browser — that's it
- opencode + oh-my-opencode-slim configuration (lives in `~/.config/opencode/`)
- GitHub authentication (per-device, interactive)

### Step-by-step: set up on a new device

#### 1. Install prerequisites

- **Git** — download from https://git-scm.com/downloads (or `winget install Git.Git` on Windows)

Verify:
```bash
git --version
```

#### 2. Authenticate with GitHub

```bash
gh auth login
```

If you don't have the GitHub CLI: download from https://cli.github.com (or `winget install GitHub.cli` on Windows).

Choose: GitHub.com → HTTPS → Yes (authenticate git) → Login with a web browser. Follow the prompts.

#### 3. Clone the repo

```bash
git clone https://github.com/chand592/circusone-site.git
cd circusone-site
```

#### 4. Open the site

Double-click `index.html`, or run a one-liner server:

```bash
python -m http.server 8080
# or
npx http-server -p 8080
```

Then visit **http://localhost:8080**. You're back where you left off.

#### 5. (Optional) Restore opencode + oh-my-opencode-slim

If you use opencode with the multi-agent plugin on the new device:

```bash
# Install opencode (follow official docs at https://opencode.ai)
# Then install oh-my-opencode-slim with the opencode-go preset:
bunx oh-my-opencode-slim@latest install --preset=opencode-go --companion=no
```

Then re-authenticate any providers and re-add MCP servers (e.g. Composio):
```bash
opencode auth login
opencode mcp add composio --url https://connect.composio.dev/mcp
opencode mcp auth composio    # interactive browser OAuth
```

Enable background subagents (Windows PowerShell):
```powershell
[Environment]::SetEnvironmentVariable('OPENCODE_EXPERIMENTAL_BACKGROUND_SUBAGENTS', 'true', 'User')
```

Restart opencode, then run `ping all agents` to confirm the pantheon is online.

### Backing up the opencode config (optional, for faster recovery)

The opencode configuration at `~/.config/opencode/` is not in this repo (it's global, not project-specific). To back it up so you can restore it quickly on a new device, copy these files somewhere safe (e.g. a private gist or a separate dotfiles repo):

- `~/.config/opencode/opencode.jsonc` — plugins, agents, MCP servers
- `~/.config/opencode/oh-my-opencode-slim.json` — agent models + presets
- `~/.config/opencode/tui.json` — TUI badge
- `~/.config/opencode/skills/` — installed skills (simplify, codemap, etc.)

### Recovery checklist

If you're starting fresh on a new device, work through this in order:
- [ ] Git installed (`git --version` works)
- [ ] `gh auth login` completed (`gh auth status` shows logged in)
- [ ] Repo cloned (`git clone https://github.com/chand592/circusone-site.git`)
- [ ] `index.html` opens in a browser, or local server is running
- [ ] (Optional) opencode + oh-my-opencode-slim installed and `ping all agents` responds
- [ ] (Optional) Composio MCP re-added and authenticated

Once the checklist is complete, you have the full working environment back.

---

## Next Steps

- [ ] Director sign-off on the look (deep red + gold + cream palette)
- [ ] Choose a logo concept and finalize with a licensed font + outlined paths
- [ ] Replace placeholder copy with final content
- [ ] Replace HSL color blocks with real work imagery
- [ ] Add real team photos and bios
- [ ] Set up Formspree and test the contact form
- [ ] Confirm office hours
- [ ] Collect and approve real testimonial quotes
- [ ] Deploy to hosting + connect custom domain

---

## License

Proprietary — Circus One Limited. All rights reserved.
