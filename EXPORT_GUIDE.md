# Export-Guide für bakkali.io Landing Page

> Farb-Tokens abgeglichen mit `src/index.css` (Stand: 2026-08). Akzent = Grün `159 69% 52%` (#48bb78), Primary = dunkles Slate `210 22% 15%` (#1a202c).

## 📋 Struktur-Übersicht

### Layout-Hierarchie
```
1. IntroSection - Hero mit Name & CTA
2. CVSection - Über mich + Berufserfahrung  
3. ProjectSection - 3 Projekte mit Tech-Stack
4. FooterSection - Kontakt-Information
```

## 🎨 Design System: "Dar EL Fikra"

### Farbpalette (CSS Variablen)
```css
:root {
  /* Primary Colors */
  --dar-primary: 210 22% 15%;
  --dar-accent: 159 69% 52%;
  
  /* Neutral Colors */
  --dar-neutral-50: 210 40% 98%;
  --dar-neutral-100: 220 14% 93%;
  --dar-neutral-200: 218 11% 85%;
  --dar-neutral-800: 215 25% 27%;
}
```

### Typografie
- **Schriftart**: Inter (Sans-serif)
- **Mono**: JetBrains Mono
- **Hierarchie**: 
  - H1: 6xl-8xl (Hero)
  - H2: 4xl-5xl (Section Titles)
  - H3: 2xl (Subsections)
  - Body: base-lg

## 📱 Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Smartphone landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
```

## 🔧 Export-Optionen

### Option 1: HTML/CSS mit Tailwind

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bakkali - System Operations Engineer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Dar EL Fikra Color Variables */
    :root {
      --dar-primary: 210 22% 15%;
      --dar-accent: 159 69% 52%;
      --dar-neutral-50: 210 40% 98%;
      --dar-neutral-100: 220 14% 93%;
      --dar-neutral-200: 218 11% 85%;
      --dar-neutral-800: 215 25% 27%;
    }
    
    .dar-primary { color: hsl(var(--dar-primary)); }
    .bg-dar-primary { background-color: hsl(var(--dar-primary)); }
    .dar-accent { color: hsl(var(--dar-accent)); }
    .bg-dar-accent { background-color: hsl(var(--dar-accent)); }
    /* ... weitere Farb-Utilities */
  </style>
</head>
<body>
  <!-- Komponenten hier einfügen -->
</body>
</html>
```

### Option 2: Webflow Integration

**Klassen-Mapping:**
```
dar-primary-text    → Text Color: hsl(210, 22%, 15%)
dar-accent-bg       → Background: hsl(159, 69%, 52%)
section-padding     → Padding: 6rem 0 (py-24)
container-max       → Max Width: 1200px, Center
```

### Option 3: Figma Design System

**Design Tokens für Figma:**
```
Primary Colors:
- dar-primary: #1a202c
- dar-accent: #48bb78

Text Styles:
- Hero/Display: Inter, 96px, Light
- Heading 1: Inter, 48px, Medium  
- Heading 2: Inter, 32px, Medium
- Body Large: Inter, 18px, Regular
- Caption: JetBrains Mono, 14px, Regular
```

## 🚀 Implementierungs-Empfehlungen

### Für Webflow:
1. **Custom Code**: CSS Variablen im Head einfügen
2. **Klassen**: Nutze Webflow's class system + custom properties
3. **Responsive**: Breakpoints an Webflow anpassen

### Für reines HTML/CSS:
1. **CSS Framework**: Tailwind CSS (empfohlen)
2. **Alternative**: Bootstrap 5 + Custom Properties
3. **Lightweight**: Pure CSS mit CSS Grid/Flexbox

### Für WordPress/CMS:
1. **Theme**: Minimalist Theme als Basis
2. **Custom CSS**: Design System als Plugin
3. **Page Builder**: Elementor/Gutenberg mit Custom Blocks

## 📐 Komponenten-Struktur

### BEM Naming Convention (Alternative)
```css
.hero__title--large
.cv__experience-item
.cv__experience-item__period
.projects__card
.projects__card__tech-badge
.footer__contact-card
```

### Utility-First (Tailwind - Empfohlen)
```css
.text-6xl.md:text-8xl.font-light.text-dar-primary
.py-24.bg-dar-neutral-50
.grid.lg:grid-cols-3.gap-16
```

## 🎯 Performance-Optimierung

### CSS:
- PurgeCSS für ungenutzten Code
- Critical CSS inline für Above-the-fold
- Gzip/Brotli Komprimierung

### Bilder:
- WebP Format für moderne Browser
- Lazy Loading für Projekt-Screenshots
- Responsive Images mit srcset

### Fonts:
- Google Fonts Preload
- font-display: swap
- WOFF2 Format bevorzugen

## ✅ Qualitätssicherung

### Cross-Browser Testing:
- Chrome, Firefox, Safari
- Mobile: iOS Safari, Chrome Mobile
- IE11 Fallbacks (falls erforderlich)

### Accessibility:
- ARIA Labels für interaktive Elemente
- Keyboard Navigation
- Color Contrast: WCAG AA Standard
- Screen Reader Tests

### SEO-Optimierung:
- Semantic HTML5 Tags
- Meta Tags & Open Graph
- Structured Data (JSON-LD)
- Performance Score > 90

---

**Nächste Schritte:**
1. Farbschema finalisieren
2. Export-Option wählen
3. Responsive Testing
4. Performance-Audit
5. Launch Preparation