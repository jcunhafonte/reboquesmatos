# PRD: Reboques Matos — Website

---

## Overview

A high-impact marketing and lead-generation website for **Reboques Matos**, a roadside assistance, auto repair workshop, and towing service company based in **Aveiro, Portugal**. They operate **24 hours a day, 7 days a week**, offering flatbed tow trucks, vehicle recovery, on-site mechanical repair, and workshop services.

**The #1 design priority:** someone breaking down at 2am should be able to call within 3 seconds of landing on this page on mobile. Beyond that, it must build brand credibility for non-emergency bookings.

---

## Design Reference Analysis

Three reference websites were reviewed. Here's what to extract from each:

### Lightship RV (`lightshiprv.com`) — *by Locomotive agency*
**What it does well:**
- **Scroll-driven storytelling**: Hero says only two words — "Go Further" — and lets scroll reveal the narrative. No information dump upfront.
- **Cinematic full-bleed imagery**: Every section uses edge-to-edge photography. Nothing is boxed or clipped. Images breathe.
- **Product carousels with sub-labels**: Cards have a small label line above the headline (e.g., "TrekDrive", "CampQuiet") — adds hierarchy without clutter.
- **Minimal navigation**: Only ~5 top-level items. Ultra-clean header, transparent on hero, opaque on scroll.
- **Section rhythm**: Alternates between full-bleed image moments and clean text+CTA moments. Never two heavy sections back-to-back.
- **Footer**: Dark, newsletter CTA above, then clean link columns, minimal.

**Steal for Reboques Matos:**
- Full-bleed hero, minimal text, one action
- Scroll-reveal section rhythm
- Transparent-to-opaque sticky nav
- Label + headline card pattern for services

---

### Nfinite Paper (`nfinitepaper.com`)
**What it does well:**
- **Hero H1 is a full product statement**: The headline is a single bold sentence that says exactly what they do + why it matters. No ambiguity. Bold mixed-weight type (normal + **bold** mid-sentence).
- **Spec grid with icons**: Technical data presented as clean icon + label + value tiles — makes complex info digestible at a glance.
- **Scrolling ticker/carousel of product images**: Horizontal auto-scroll of product photos — creates motion and visual richness without a video.
- **Quote testimonials with attribution**: Full name + title + company. Real, credible, not generic.
- **FAQ section**: Simple accordion, white background, clean expand/collapse.
- **White, editorial, clean**: Pure white background, black type, very generous whitespace. Nothing decorative — every visual element is functional.

**Steal for Reboques Matos:**
- Mixed-weight H1 headline pattern
- Spec/trust tile grid with icons
- Testimonial format: name + context
- Clean FAQ accordion

---

### Arclin (`arclin.com`)
**What it does well:**
- **Mega-menu navigation**: Large dropdown nav with product categories, brand names, and industries — excellent for businesses with multiple product lines.
- **"Engineered" brand positioning**: Every section uses language like "engineered", "performance", "advanced" — elevates an industrial B2B brand without feeling cold.
- **Multi-language toggle**: Clean language switcher in nav (EN / PT-BR / ZH / FR / etc.)
- **Card-based category navigation**: Industries, products, and brands each have their own card layout with image + label.
- **No-nonsense layout**: No fancy animations, no parallax. Clean grid. The content does the work.
- **Trust via specificity**: Doesn't say "great quality" — says "BBA-approved", "class 0", "certified" — technical proof points.

**Steal for Reboques Matos:**
- "Engineered" / "professional" language register
- Trust via specificity: "Plataforma flatbed", "Guincho até 3500kg", not just "great service"
- Clean card-based service grid
- Authoritative, no-fluff tone

---

## Brand Reality (scraped from Facebook)

| Field | Value |
|---|---|
| **Business Name** | Reboques Matos |
| **Facebook Title** | Reboques Matos \| Aveiro |
| **Address** | Rua do Castanheiro, 27, Aveiro, Portugal, 3810-739 |
| **Phone** | 234 941 680 |
| **Hours** | Sempre aberto — 24 Horas |
| **Category** | Serviço de guincho · Oficina de reparação de automóveis · Pronto socorro |
| **Logo** | Blue hexagon with white "RM" monogram |
| **Brand colors (from signage)** | Dark steel grey facade + electric blue accents |
| **Signage tagline** | "Assistência 24 Horas" + "T. 234 941 680" |
| **Fleet** | White tow trucks with "REBOQUES MATOS" livery, blue flatbed trailer |
| **Workshop** | Dark corrugated steel facade, large garage doors |
| **Recent posts** | Job listing for "Motorista de Pesados", attended Kassel IFBA 2025 fair |
| **Followers** | 640 Facebook followers |

### Services Confirmed
1. **Serviço de Guincho** — flatbed platform for all vehicle types
2. **Pronto Socorro** — roadside emergency assistance
3. **Oficina de Reparação de Automóveis** — on-site auto repair workshop
4. **Assistência 24 Horas** — no exceptions, always available

---

## Target Users

| User | Situation | Primary Need |
|---|---|---|
| Stranded driver | Emergency on the road at any hour | Phone number visible in < 3 seconds |
| Fleet manager (local businesses) | Multiple company vehicles, needs a reliable partner | Track record, 24h guarantee, professional tone |
| Private car owner | Non-urgent repair or maintenance | Services listed clearly, location easy to find |
| Heavy vehicle / truck operator | HGV breakdown, needs flatbed capacity | Specific capability proof points |
| Insurance provider | Contracted roadside assistance partner | Credibility, coverage, professionalism |

---

## Site Map

```
/                   → Landing page (index.html)
/servicos           → Services detail + FAQ (servicos.html)
/sobre              → About / brand story (sobre.html)
/contacto           → Contact + map (contacto.html)
```

---

## Pages

---

### 1. Landing Page (`index.html`)

#### Nav
- Logo left (RM hexagon SVG + "Reboques Matos" wordmark)
- Links right: `Serviços` · `Sobre Nós` · `Contacto`
- Phone number right-most: `📞 234 941 680` — always visible on desktop
- Transparent on hero → dark blurred backdrop on scroll (matches Lightship pattern)
- Mobile: hamburger menu, full-screen overlay

#### Hero Section
*Pattern: Lightship's "Go Further" minimal hero — one image, minimal text, one action*

- **Full-bleed dark background image**: their workshop facade at night OR white tow truck on a road (cinematic, dark-toned)
- Overlay: `linear-gradient(to bottom, rgba(10,14,20,0.3) 0%, rgba(10,14,20,0.7) 100%)`
- Content centered:
  ```
  [small uppercase label]   ASSISTÊNCIA 24 HORAS · AVEIRO
  [H1 condensed display]    "Avariado?
                             Estamos a caminho."
  [subheadline]             Guincho, pronto socorro e oficina em Aveiro e região.
  [primary CTA — blue pulse button]   📞 Ligar Agora — 234 941 680
  [secondary CTA — ghost button]      Ver Serviços ↓
  ```
- **"24H" badge**: fixed top-right of hero viewport, always visible — electric blue circle

#### Emergency Strip (mobile only, sticky bottom)
```
🚨  Avaria? Ligue já:  234 941 680   [tel: link on full bar]
```
- Electric blue background, white text, fixed bottom, full-width, z-index top
- Tap anywhere on bar = call

#### Trust Bar
*Pattern: Nfinite's spec grid — icon + label tiles*

4 tiles in a horizontal row, fade-in-up staggered on scroll:
```
🚛  Guincho Profissional     |   🔧  Oficina Própria
🌙  Assistência 24 Horas     |   📍  Aveiro e Região
```

#### Services Section
*Pattern: Lightship product cards (label + headline) + Arclin "engineered" language*

4 cards in 2×2 grid (desktop) / 1 col (mobile):
```
[icon]  SERVIÇO DE GUINCHO
        Transporte de veículos ligeiros e pesados.
        Plataforma flatbed para todas as situações.
        → Ver mais

[icon]  PRONTO SOCORRO
        Avaria na estrada? A nossa equipa chega até si,
        onde quer que esteja na região de Aveiro.
        → Ver mais

[icon]  OFICINA DE REPARAÇÃO
        Diagnóstico, manutenção e reparação de automóveis
        em instalações próprias com equipamento especializado.
        → Ver mais

[icon]  ASSISTÊNCIA 24 HORAS
        Dia ou noite, fim de semana ou feriado.
        Nunca fechamos. Nunca.
        → Ver mais
```
- Cards: dark surface `#1C2333`, blue left-border accent on hover, `translateY(-6px)` lift

#### How It Works (3 steps)
*Pattern: Nfinite's clean numbered sequence*

```
01  Ligue para nós          Um operador atende de imediato, 24h por dia.
02  Enviamos ajuda          Guincho ou técnico a caminho para a sua localização.
03  Problema resolvido      Na estrada ou na nossa oficina — cuidamos de tudo.
```

#### About Snippet
*Pattern: Lightship's brand story split section*

- Left: workshop facade photo (dark corrugated steel, "RM" signage visible)
- Right:
  ```
  [small label]  A NOSSA HISTÓRIA
  [H2]           Confiança medida em quilómetros.
  [body]         A Reboques Matos é uma empresa de referência na região de
                 Aveiro em assistência rodoviária, serviço de guincho e
                 reparação automóvel. Dia ou noite, estamos sempre prontos.
  [CTA]          Conhecer-nos melhor →
  ```

#### Coverage Map
- Embedded Google Maps iframe centred on Rua do Castanheiro, 27, Aveiro
- Caption: *"Cobrimos Aveiro e toda a região. Em caso de dúvida, ligue — chegamos."*

#### Testimonials
*Pattern: Nfinite's quote cards — name + role/context*

3 dark cards:
```
"★★★★★  [quote text]"
— [Nome], [Cidade] · [contexto: ex. "cliente desde 2019"]
```

#### Final CTA Banner
- Dark blue gradient full-width section
- H2: **"Não espere. Ligue agora."**
- Two buttons side by side:
  - `📞 234 941 680` (blue, solid)
  - `💬 WhatsApp` (green, solid)

#### Footer
*Pattern: Lightship — dark, newsletter/CTA above, clean link columns below*

```
[RM logo + wordmark]    [Assistência 24H badge]

Rua do Castanheiro, 27        Início · Serviços
Aveiro, 3810-739              Sobre Nós · Contacto
234 941 680
[Facebook icon]

© 2025 Reboques Matos. Todos os direitos reservados.
```

---

### 2. Services Page (`servicos.html`)

- Hero: workshop photo, H1: "Os Nossos Serviços"
- 4 expanded service sections (alternating: text left/image right):
  1. **Serviço de Guincho** — vehicle types, flatbed capacity, coverage area
  2. **Pronto Socorro** — what's covered on-site, response process
  3. **Oficina de Reparação** — repair types, brands accepted, booking info
  4. **Assistência 24 Horas** — hours, geography, how to reach in emergency
- FAQ accordion (Nfinite pattern — clean expand/collapse):
  - "Qual a área de cobertura do serviço de guincho?"
  - "Trabalham com veículos pesados e camiões?"
  - "Quanto tempo demora a chegada do guincho?"
  - "A oficina precisa de marcação prévia?"
  - "Têm acordo com seguradoras?"
  - "O pronto socorro inclui reparação no local?"
  - "Podem transportar motos e veículos de baixa suspensão?"

---

### 3. About Page (`sobre.html`)

- Hero: team or truck photo
- Brand story: family business in Aveiro, professional fleet, years of service
- 4 value pillars (Arclin "engineered" language register):
  - ⚡ **Rapidez** — "Resposta imediata. Chegamos onde precisa."
  - 🔩 **Fiabilidade** — "Equipamento profissional. Trabalho sério."
  - 🌙 **Disponibilidade** — "24 horas por dia, 365 dias por ano."
  - 📍 **Proximidade** — "Conhecemos cada estrada de Aveiro e região."
- Team section (photo + name + role — placeholder if needed)
- Fleet section: photos of trucks + specs

---

### 4. Contact Page (`contacto.html`)

- Split 50/50 layout:
  - **Left** — contact card:
    ```
    📞  234 941 680         [click-to-call]
    💬  WhatsApp            [wa.me/351234941680]
    📍  Rua do Castanheiro, 27, Aveiro, 3810-739
    🕐  Sempre aberto — 24 Horas
    ```
  - **Right** — contact form:
    - Fields: Nome, Telefone, Email, Assunto (dropdown), Mensagem
    - Submit via Formspree
- Full-width Google Maps embed below the split section

---

## Floating Global Elements

### WhatsApp FAB
- Fixed bottom-right, all pages, all screen sizes
- WhatsApp green (#25D366) circle, white icon
- Pulse animation: `box-shadow` glow, 3s loop
- Hover: expands to show label *"Falar connosco"*
- Link: `https://wa.me/351234941680`

### Emergency Phone Strip (mobile only)
- Fixed `bottom: 0`, full-width, `z-index: 9999`
- `<a href="tel:234941680">` covering full bar
- Content: `🚨 Avaria? Ligue já: 234 941 680`
- Background: `var(--color-accent)` electric blue
- Hidden on desktop (≥768px) via `display: none`

---

## Design System

### Color Palette
```css
:root {
  --color-bg:           #0D1117;  /* Deep near-black — night sky behind the workshop */
  --color-surface:      #161C27;  /* Dark navy — card and section backgrounds */
  --color-surface-alt:  #1E2739;  /* Slightly lighter — hover states, alt cards */
  --color-border:       #2A3550;  /* Subtle border lines */
  --color-text:         #EDF0F5;  /* Warm off-white — main body text */
  --color-muted:        #6B7D99;  /* Secondary/muted text */
  --color-accent:       #1A6FD4;  /* Electric blue — matches RM logo and signage */
  --color-accent-light: #3B8EEA;  /* Hover/glow state of accent */
  --color-accent-glow:  rgba(26,111,212,0.35);  /* Glow for box-shadow effects */
  --color-white:        #FFFFFF;
  --color-emergency:    #1A6FD4;  /* Same accent — used for CTA pulse */
}
```

### Typography
```
Display (H1, H2):   "Barlow Condensed" — weight 700–800, uppercase
                    Tight letter-spacing (-0.5px to 0px)
                    Industrial, fast, confident — mirrors the signage font feel

Body:               "Source Sans 3" — weight 400/600
                    17px, line-height 1.75
                    Clean, highly readable at all sizes

Monospace / Data:   "JetBrains Mono" — weight 500–600
                    Used for: phone numbers, addresses, specs, step numbers
                    Electric blue (#1A6FD4) when used as contact data
```

**Hierarchy rules:**
```
Hero H1:     Barlow Condensed 800, uppercase, 96px desktop / 56px mobile
Section H2:  Barlow Condensed 700, uppercase, 52px desktop / 36px mobile
Card H3:     Barlow Condensed 700, 26px, normal case
Label:       Source Sans 3 600, 11px, uppercase, letter-spacing 2px, muted color
Body:        Source Sans 3 400, 17px
Phone:       JetBrains Mono 600, 22px, accent blue
```

### Animations

| Element | Animation | Timing |
|---|---|---|
| Hero content | `fadeInUp` 40px → 0, opacity 0 → 1 | 0.8s ease-out, 0.2s delay |
| Trust tiles | Staggered `fadeInUp`, 80ms between each | Triggered by Intersection Observer |
| Service cards | `translateY(-8px)` + blue border glow | 200ms ease on hover |
| CTA button | `box-shadow` pulse glow loop | 3s keyframe, infinite |
| WhatsApp FAB | `bounceIn` on load | 1.5s delay after page load |
| Section reveals | `fadeInUp` 30px → 0 | Intersection Observer, threshold 0.15 |
| FAQ accordion | `max-height` 0 → auto | 300ms ease-in-out |
| Nav | transparent → `backdrop-filter: blur(12px) + bg` | On scroll > 20px |
| Count-up numbers | Count from 0 to value | On Intersection Observer trigger |

### Spacing
```
Section vertical padding:   8rem desktop / 4rem mobile
Content max-width:          1200px, centered
Horizontal padding:         2rem (desktop) / 1.25rem (mobile)
Card gap:                   1.5rem
Card padding:               2rem
```

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Markup | HTML5 | Semantic, no framework overhead |
| Styles | CSS3 (custom properties, Grid, Flexbox) | No build step, full control |
| Scripts | Vanilla JavaScript (ES6+) | Intersection Observer, FAQ, nav, count-up |
| Fonts | Google Fonts CDN | Barlow Condensed + Source Sans 3 + JetBrains Mono |
| Icons | Lucide Icons CDN | Clean SVG set, no icon font |
| Map | Google Maps iframe embed | No API key required |
| Form | Formspree | No backend, free tier |
| No build step required | — | Drop `index.html` in a browser and it works |

---

## Requirements

### Functional
- Every phone number is `<a href="tel:234941680">` — tap-to-call
- WhatsApp FAB: `https://wa.me/351234941680`
- Google Maps embed: Rua do Castanheiro, 27, Aveiro
- Contact form POSTs to Formspree endpoint
- Mobile emergency bar is tap-to-call, visible at all times on mobile

### Responsive Breakpoints
```
375px   — mobile S (iPhone SE)
390px   — mobile M (iPhone 14)
768px   — tablet
1024px  — desktop S
1280px  — desktop M
1440px  — desktop L
```

### Accessibility (WCAG 2.1 AA)
- Colour contrast ratio ≥ 4.5:1 for all text
- All interactive elements have visible `:focus` ring
- All images have meaningful `alt` attributes
- All icon-only buttons have `aria-label`
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`
- `lang="pt"` on `<html>`

### Performance
- All images: `loading="lazy"` attribute
- Google Fonts: `display=swap`
- No external JS libraries except Lucide icons (CDN, small)
- Target Lighthouse scores: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 95

---

## SEO

```html
<!-- Primary -->
<title>Reboques Matos | Guincho e Pronto Socorro 24h em Aveiro</title>
<meta name="description" content="Serviço de guincho, pronto socorro e oficina de reparação em Aveiro. Assistência 24 horas, todos os dias. Ligue: 234 941 680.">
<link rel="canonical" href="https://reboquesmatos.pt/">

<!-- Open Graph (Facebook sharing) -->
<meta property="og:title" content="Reboques Matos | Guincho 24h em Aveiro">
<meta property="og:description" content="Avaria? Estamos a caminho. Guincho e pronto socorro 24 horas em Aveiro e região.">
<meta property="og:image" content="/assets/og-image.jpg">
<meta property="og:type" content="website">

<!-- JSON-LD LocalBusiness Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "TowingService"],
  "name": "Reboques Matos",
  "telephone": "+351234941680",
  "openingHours": "Mo-Su 00:00-24:00",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua do Castanheiro, 27",
    "addressLocality": "Aveiro",
    "postalCode": "3810-739",
    "addressCountry": "PT"
  },
  "url": "https://reboquesmatos.pt",
  "image": "/assets/og-image.jpg",
  "priceRange": "€€",
  "areaServed": "Aveiro, Portugal"
}
</script>
```

---

## Assets

### Real photos to request from client
- Workshop exterior facade (dark corrugated steel, RM signage, "24 Horas" board) — partially visible on Facebook
- Tow truck fleet — white trucks, "REBOQUES MATOS" livery, blue flatbed trailer
- Team at work / workshop interior
- Vehicle recovery in action (road shot)
- Team portrait

### Placeholder fallbacks
- Unsplash: search `"tow truck night"`, `"auto workshop"`, `"roadside emergency"`, `"Aveiro Portugal"`
- Apply dark gradient overlay on all hero/background images
- Dark `#161C27` blocks with CSS SVG `<feTurbulence>` noise texture for card backgrounds

### Logo (recreate as SVG)
```
Shape:    Regular hexagon, flat-top orientation
Fill:     #1A6FD4 (electric blue)
Content:  White "RM" monogram, bold, centered
Sizes:    32px (nav), 48px (footer), 120px (hero/favicon source)
```

### Icon set (Lucide CDN)
Use: `truck` · `wrench` · `phone` · `clock` · `map-pin` · `shield-check` · `zap` · `arrow-right`

---

## Content — European Portuguese (PT-PT)

> **Critical:** All copy must be **PT-PT**, not PT-BR. No "você", use "si". No "celular", use "telemóvel". No "conserto", use "reparação".

| Location | Copy |
|---|---|
| Hero H1 | *"Avariado? Estamos a caminho."* |
| Hero sub | *"Guincho e pronto socorro em Aveiro — 24 horas, todos os dias."* |
| Hero CTA | *"Ligar Agora — 234 941 680"* |
| Hero secondary | *"Ver Serviços ↓"* |
| Trust 1 | *"Guincho Profissional"* |
| Trust 2 | *"Oficina Própria"* |
| Trust 3 | *"Assistência 24 Horas"* |
| Trust 4 | *"Aveiro e Região"* |
| Step 1 | *"Ligue para nós — Um operador atende de imediato, 24h por dia."* |
| Step 2 | *"Enviamos ajuda — Guincho ou técnico a caminho para a sua localização."* |
| Step 3 | *"Problema resolvido — Na estrada ou na nossa oficina, cuidamos de tudo."* |
| About H2 | *"Confiança medida em quilómetros."* |
| About body | *"A Reboques Matos é uma empresa de referência na região de Aveiro em assistência rodoviária, serviço de guincho e reparação automóvel. Dia ou noite, estamos sempre prontos para si."* |
| Final CTA H2 | *"Não espere. Ligue agora."* |
| Mobile bar | *"🚨 Avaria? Ligue já: 234 941 680"* |
| WhatsApp hover | *"Falar connosco"* |

---

## Out of Scope

- CMS / admin panel
- Online booking / scheduling system
- E-commerce / payment processing
- Live GPS vehicle tracking
- Customer portal / login
- Analytics implementation (add GTM `<script>` placeholder only)
- Deployment pipeline

---

## Deliverables

| File | Description |
|---|---|
| `index.html` | Landing page — hero, trust bar, services, how it works, about, map, testimonials, CTA |
| `servicos.html` | Services detail page + FAQ accordion |
| `sobre.html` | About / brand story + values + team |
| `contacto.html` | Contact form + info + Google Maps embed |
| `styles.css` | Full design system + all page styles (CSS custom properties) |
| `script.js` | Intersection Observer animations, FAQ accordion, count-up, scroll nav, mobile bar |
| `assets/logo.svg` | RM hexagon SVG logo |
| `README.md` | How to view locally, how to update Formspree endpoint, how to replace placeholder images |

---

## Success Criteria

1. **A person with a broken-down car can tap to call within 3 seconds** of landing on the page on mobile
2. The page scores ≥ 90 on Lighthouse for Performance, Accessibility, and SEO
3. The visual identity matches the real brand: **dark steel grey, electric blue, bold condensed type**
4. Any agent (Claude or Loki) can build the full site from this document **without asking a single clarifying question**
5. The end result feels like a premium, trustworthy company — not a generic local business directory listing

---

**Purpose:** Production-grade, dark-themed website for a real Portuguese 24h towing and roadside assistance company in Aveiro. Design inspired by Lightship's cinematic scroll-storytelling, Nfinite's bold editorial headline pattern and spec grids, and Arclin's industrial authority and no-fluff tone. All contact data is real. Build without placeholders where real data exists.