# bakkali.io

Persönliche One-Page-Website / Portfolio von Younes Bakkali (System Operations Engineer).
Live unter [www.bakkali.io](https://www.bakkali.io).

## Stack

- **Vite** + **React 18** + **TypeScript** (SPA)
- **Tailwind CSS** + **shadcn/ui** (Radix), Design-System „Dar EL Fikra" (`src/index.css`)
- **react-router-dom** – Routen: `/`, `/legal`, Catch-all 404
- **next-themes** – Light/Dark Mode

## Entwicklung

```bash
npm install
npm run dev      # Dev-Server (Vite)
npm run build    # Produktionsbuild -> docs/
npm run lint     # ESLint
```

> Es wird **npm** verwendet (`package-lock.json`).

## Struktur

```
src/
  pages/         Index (Startseite), Legal (Impressum/Datenschutz), NotFound
  components/    IntroSection, CVSection, ProjectSection, FooterSection, Navbar
  components/ui/ shadcn/ui-Komponenten
  index.css      Design-Tokens (CSS-Variablen, Light + Dark)
```

Seiteninhalt (Werdegang, Skills, Projekte, Kontakt) steht als Daten in den jeweiligen
Section-Komponenten unter `src/components/`.

## Deployment

GitHub Pages liefert den Ordner **`docs/`** aus (Custom Domain via `docs/CNAME`).

1. `npm run build` erzeugt `docs/` neu (`vite.config.ts` → `outDir: "docs"`, `emptyOutDir: true`).
2. `public/` wird dabei nach `docs/` kopiert – u. a. `CNAME`, `404.html`, `robots.txt`,
   `sitemap.xml`, `favicon.svg`. **`CNAME` deshalb nur in `public/` pflegen, nicht direkt in `docs/`.**
3. `docs/` committen und pushen.

`public/404.html` + ein kleines Skript in `index.html` sorgen dafür, dass Deep Links
(z. B. Reload auf `/legal`) auf GitHub Pages funktionieren (SPA-Fallback).
