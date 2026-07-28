# Srishti Sharma — Portfolio

A production-ready personal portfolio built with React, TypeScript, and Tailwind CSS, with a subtle botanical / growth-themed visual identity. Deployable to GitHub Pages in minutes.

**Live demo:** _add your GitHub Pages URL here after deploying_

---

## ✨ Features

- **Single source of truth for content** — every editable piece of text, project, skill, and link lives in `src/data/portfolioData.ts`. Components never hardcode copy.
- **Botanical-but-professional design system** — a dark, Vercel/Linear-inspired UI (`#0F172A` background, sage/emerald accents) with small hand-drawn leaf and vine SVG accents used sparingly.
- **Signature hero illustration** — a small potted plant whose stems draw themselves in with Framer Motion on load.
- **Sticky, scroll-spy navigation** with an active-section indicator and a mobile menu.
- **Typing effect** on the hero role title only, cycling through your taglines.
- **Filterable, expandable project cards** with gradient borders, tech badges, and hover lift.
- **Timeline-style experience section**, achievement/leadership/certification grids, and a working contact form (EmailJS).
- **Accessible**: semantic landmarks, skip link, visible focus states, `aria-*` labels, `prefers-reduced-motion` support.
- **SEO-ready**: meta description, Open Graph + Twitter cards, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`.
- **Fast**: lazy-loaded project images, no unused dependencies, small bundle footprint.

---

## 🧱 Tech Stack

| Purpose        | Library                                   |
| -------------- | ------------------------------------------ |
| Framework      | React 19 + TypeScript                      |
| Build tool     | Vite                                       |
| Styling        | Tailwind CSS v4 (via `@tailwindcss/vite`)  |
| Animation      | Framer Motion                              |
| Icons          | React Icons                                |
| Contact form   | EmailJS (`@emailjs/browser`)               |
| Deployment     | `gh-pages`                                 |

---

## 📁 Folder Structure

```
src/
├── animations/        # Reusable Framer Motion variants (fadeInUp, stagger, etc.)
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/        # One component per page section (Hero, About, Skills, ...)
│   └── ui/              # Reusable primitives (Button, SectionHeading, Botanical SVGs)
├── data/
│   └── portfolioData.ts # ALL editable content lives here
├── hooks/               # useActiveSection (scroll-spy), useTypingEffect
├── types/                # Shared TypeScript interfaces
├── App.tsx               # Page composition
├── main.tsx               # React entry point
└── index.css               # Design tokens (colors, fonts) + global styles
public/
├── favicon.svg
├── projects/            # Project cover images (SVG placeholders — swap for your own)
├── resume.pdf           # Your downloadable résumé
├── robots.txt
└── sitemap.xml
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Visit the printed local URL (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## 🎨 Customization Guide

**Everything you need to change lives in two places:**

### 1. Content — `src/data/portfolioData.ts`

Edit this single file to update:

- `personalInfo` — name, role, taglines (typing effect words), intro, location, email, résumé path
- `socialLinks` — GitHub / LinkedIn / email URLs
- `aboutInterests`, `aboutParagraphs`
- `skillCategories` — add/remove technologies and their icons (from `react-icons`)
- `experience` — timeline entries
- `projects` — featured project cards (title, description, tech stack, features, links, cover image)
- `achievements`, `leadership`, `certifications`
- `emailjsConfig` — see below

Components read only from this file, so you never need to touch JSX to update copy.

### 2. Design tokens — `src/index.css`

Colors, fonts, and radii are defined as CSS variables inside the `@theme` block at the top of `src/index.css`. Change a hex value once and it updates everywhere:

```css
@theme {
  --color-bg: #0F172A;
  --color-sage: #7A9E7E;
  --color-emerald: #4CAF50;
  /* ... */
}
```

### Adding your résumé

Replace `public/resume.pdf` with your own file (keep the same filename, or update `personalInfo.resumeUrl`).

### Adding your own project images

Drop images into `public/projects/` and point `image` in each project entry at the new path. 16:9 images work best.

### Contact form (EmailJS)

The contact form is wired to [EmailJS](https://www.emailjs.com/) but ships with placeholder keys, so it currently shows a friendly fallback message pointing people to your email. To activate it:

1. Create a free EmailJS account and an email service + template.
2. Copy your **Service ID**, **Template ID**, and **Public Key**.
3. Paste them into `emailjsConfig` in `src/data/portfolioData.ts`.

---

## 🧩 Architecture Notes (for future features)

The project is intentionally structured so the roadmap below can be added without major refactors:

- GitHub Contributions graph
- LeetCode stats card
- Blog (MDX or headless CMS)
- Command palette (⌘K)
- Terminal / "hacker" mode toggle
- Light/dark theme switch (tokens are already centralized in `index.css`)
- Visitor analytics
- Testimonials
- Resume download analytics

Each of these can live as a new file in `components/sections/` or `components/ui/`, reading from a new key in `portfolioData.ts`, without touching existing sections.

---

## 🌐 Deploying to GitHub Pages

1. **Set the base path.** Open `vite.config.ts` and set `base` to match your repository name:

   ```ts
   base: '/your-repo-name/', // e.g. '/portfolio/'
   // For a username.github.io root-level page, use base: '/'
   ```

2. **Push this project to a GitHub repository.**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. **Deploy:**

   ```bash
   npm run deploy
   ```

   This runs `predeploy` (a production build) automatically, then publishes the contents of `dist/` to a `gh-pages` branch using the `gh-pages` package.

4. **Enable Pages in GitHub:** in your repo, go to **Settings → Pages**, and set the source to the `gh-pages` branch (root).

5. Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

> Update the `canonical`, Open Graph, Twitter, and JSON-LD URLs in `index.html`, and the `Sitemap:` line in `public/robots.txt` / `public/sitemap.xml`, to match your final URL.

---

## ♿ Accessibility & Performance

- Skip-to-content link, semantic `<header>` / `<main>` / `<footer>` landmarks
- Visible focus rings on every interactive element
- `aria-label`s on icon-only buttons and social links
- Respects `prefers-reduced-motion`
- Lazy-loaded project images
- No unused dependencies in the production bundle

Run a Lighthouse audit locally after `npm run build && npm run preview` to verify scores in your environment.

---

## 📄 License

MIT — feel free to fork and make it your own.
