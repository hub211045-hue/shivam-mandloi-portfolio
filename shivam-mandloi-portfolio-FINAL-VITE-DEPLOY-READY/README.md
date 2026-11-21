# Shivam Mandloi — Personal Portfolio (React + Vite + TypeScript)

Modular developer portfolio for **Shivam Mandloi**, 3rd Year B.Tech Computer Science Engineering student (Section A4) at **INDORE INSTITUTE OF SCIENCE OF TECHNOLOGY** (2024 – 2028), built with a warm cream, forest-green, and emerald design identity.

## Tech Stack
- React 18 + TypeScript
- Vite 6 (`@vitejs/plugin-react`)
- Tailwind CSS 3.4
- Framer Motion 11 (repeatable bidirectional scroll animations)
- Lucide React icons

## Local Development & Build
```bash
npm install
npm run dev
```
Production build:
```bash
npm run build
npm run preview
```

## Upload to GitHub (`https://github.com/shivammandloi7/shivam-mandloi-portfolio`)
1. Extract `shivam-mandloi-portfolio-FINAL-VITE-DEPLOY-READY.zip` on your laptop.
2. Upload all extracted root files and folders (`index.html`, `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `tailwind.config.js`, `postcss.config.js`, `vercel.json`, `.gitignore`, `README.md`, `src/`, and `public/`) to `main`.

## Vercel Deployment Settings
- **Framework Preset**: `Vite`
- **Root Directory**: `./`
- **Install Command**: `npm install --include=dev` (configured in `vercel.json`)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Editing Content
- **Personal Info & Socials**: `src/data/profile.ts`
- **Skills (4 Cards)**: `src/data/skills.ts`
- **Projects (Kapda Bazaar & BIS360)**: `src/data/projects.ts`
- **Hackathon Participation**: `src/data/hackathon.ts`
- **Project Images**: `src/assets/shivam-kapda-bazaar.webp` and `src/assets/shivam-bis360.webp`
