# CHHEANG Udomveasna - Portfolio

Personal portfolio built with **React 19 · TypeScript · Vite · Tailwind CSS 4 · Framer Motion · Lucide**.
Dark/light theme, smooth scrolling, scroll-spy navigation, responsive from phone to desktop.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build -> dist/
npm run preview    # serve the production build locally
```

Requires Node.js 20+.

## Edit the content (one file)

**Everything** (text, links, projects, skills, experience, education) lives in:

```
src/data/portfolio.ts
```

Fields set to `''` (empty) are hidden automatically - no dead buttons.

### To-do before publishing

| What | Where |
| --- | --- |
| Profile photo | Save as `public/images/profile.jpg` (portrait, about 4:5). A styled placeholder shows until then. |
| LinkedIn / Telegram / Facebook | `contact.linkedin`, `contact.telegram`, `contact.facebook` in `portfolio.ts` |
| Real GitHub repo links | `repoUrl` for each project (they currently point to the GitHub profile) |
| Project screenshots | Add `image: '/images/projects/name.png'` to a project (16:9). A generated cover is used otherwise. |
| Live demo links | Add `demoUrl: 'https://...'` to a project - a "Live demo" link appears |
| Phone number | Taken from the latest CV (`096 671 9476`), shown as `+855-96-671-9476`. |
| Updated CV | Replace `public/CHHEANG-Udomveasna-CV.pdf` (keep the same name) |

## Contact form

The form validates all fields (name, email, subject, message) and has a spam honeypot.

- **Default:** opens the visitor's email app with the message pre-filled (`mailto:`). No backend needed.
- **Real inbox (recommended):** create a free form at [formspree.io](https://formspree.io), copy `.env.example` to `.env`, and set `VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxx`. Messages are then sent directly.

## Deploy

Works on any static host. On **Vercel** or **Netlify**: import the repo, build command `npm run build`, output directory `dist`.
After deploying, add your live URL to `index.html` (`og:url` and canonical link) for better SEO.

## Project structure

```
public/                 favicon, CV (PDF), images, robots.txt
src/
  data/portfolio.ts     <- ALL content
  types.ts              content types
  components/
    layout/             Navbar, Footer, CustomCursor
    sections/           Hero, About, Skills, Projects, Experience, Education, Contact
    ui/                 Reveal (animation), SectionHeading, ContactForm, ProfileImage, ProjectCover
  hooks/                useTheme, useScrollSpy, useScrolled
  lib/                  icons (lucide + brand SVGs), socials helpers
  index.css             Tailwind theme tokens + component classes
```

## Design notes

- Palette: ink `#04060d / #070b14 / #0b1020` with lime accent (`lime-400/500/600`), violet and emerald highlights.
- Fonts: Inter (UI) and JetBrains Mono (labels, code), self-hosted via Fontsource - no external requests.
- Accessibility: skip link, semantic landmarks, ARIA states, visible focus rings, `prefers-reduced-motion` respected.
  The custom cursor only runs for mouse/trackpad users and never for reduced-motion users.
- Change the accent colour by replacing `lime` with another Tailwind colour across the components.
