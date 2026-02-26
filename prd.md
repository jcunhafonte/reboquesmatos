# PRD: Reboques Matos — Website v2

---

## Overview

A high-impact, single-page marketing and lead-generation website for **Reboques Matos**, a roadside assistance, auto repair workshop, and towing service company based in **Aveiro, Portugal**. They operate **24 hours a day, 7 days a week**, offering flatbed tow trucks, vehicle recovery, on-site mechanical repair, and workshop services.

**The #1 design priority:** someone breaking down at 2am should be able to call within 3 seconds of landing on this page on mobile. Beyond that, it must build brand credibility for non-emergency bookings.

---

## Primary Design Reference: Terminal Industries (`terminal-industries.com`)

This website is the **single source of truth** for the visual language, layout patterns, and interaction design of the Reboques Matos site. Every design decision should be validated against this reference. Below is a pixel-level breakdown of what to replicate and how to adapt it.

### What Terminal Industries Does (and we steal)

#### 1. Overall Aesthetic
- **Clean, modern, corporate-industrial** — not flashy, not generic. Feels like a serious company.
- **Light base** (white `#FFFFFF`) with **dark teal sections** (`rgb(5, 36, 36)` / `#052424`) for hero, product showcases, testimonials, and footer.
- **Neon lime accent** (`rgb(171, 255, 2)` / `#ABFF02`) used sparingly — numbered labels, active indicators, accent details. This becomes our **electric blue** accent `#1A6FD4` for Reboques Matos.
- **Subtle grid background pattern** — a faint grid of dashed lines with small dots at intersections, visible on both dark and light sections. Creates depth and a "technical" feel without being noisy.

#### 2. Navigation
- **Centered floating nav bar** — not full-width, sits as a pill/rounded-rectangle in the top center of the viewport.
- **Frosted glass effect** — `backdrop-filter: blur(12px)` with semi-transparent dark background `rgba(0,0,0,0.3)`.
- **Sticky on scroll** — always visible, transitions from transparent overlay on hero to frosted glass.
- **Structure**: Logo left → nav links center (System, Markets, Resources, About) → CTA button right ("CONTACT" — white bg, dark text, rounded, uppercase letter-spaced).
- **Nav links**: White text, clean sans-serif, no underlines. Dropdowns indicated with chevron icons.
- **Mobile**: Hamburger menu with full-screen overlay.

#### 3. Hero Section
- **Full-viewport cinematic image** — edge-to-edge, takes up 100vh.
- **NO text overlay on the hero image itself** — the image speaks alone. Text appears as you scroll into the next section.
- **"Scroll to explore"** indicator at bottom — small text + animated down arrow, centered.
- The hero image creates mood and context (their truck fleet, loading dock imagery). For RM: **a white tow truck on a dark road at golden hour, or the workshop facade at night**.

#### 4. Statement Section (post-hero)
- **Dark background** (`#052424`) with the subtle grid pattern overlay.
- **Massive centered headline** — `font-size: ~87px` desktop, `font-weight: 400` (NOT bold), tight `letter-spacing: -1.5px`, `line-height: 0.95`.
- **Two-line headline structure**: Line 1 is the statement. Line 2 is the continuation — slightly different color or weight to create hierarchy.
- **Subheadline below** — smaller, muted color, one sentence that explains the headline.
- This section scrolls into view with a clean fade-in.

#### 5. Numbered Feature/Benefit Scroll Section
- **This is the signature pattern.** A sticky left-side column with numbered items (01, 02, 03...) and a large right-side image that transitions between related visuals as you scroll.
- **Left column**: Small numbered label (e.g., `01` in lime/accent color), then a large headline in light gray that fades in as you scroll to that item. The active item is fully opaque; others are faded.
- **Right column**: A large image with **custom curved/wave shape cutout** on the left edge — not a plain rectangle. The image changes (crossfade) as you scroll through the numbered items.
- **White background** for this section.
- For RM, adapt this to showcase the 4-6 key services/capabilities, each with its own image.

#### 6. Product/Brand Statement Section
- **Dark teal background** with grid pattern.
- **"That's the"** small text, centered.
- **Massive product name** below — `YOS™` at ~200px+ font size, centered, white, bold.
- For RM: **"Reboques Matos"** or **"Assistência 24H"** as the brand statement moment.

#### 7. Benefits Section (3-column)
- **White background**.
- **Full-bleed image** at top of each benefit card (no border radius on the image).
- Below: **"Benefit 01"** label (muted gray, small), then **bold headline** (dark, ~28px), then **body text** (muted, ~16px) in a separate right column.
- **2-column text layout**: Headline left, description right — not stacked. Creates editorial feel.
- For RM: Adapt to 3 benefits — Rapidez, Fiabilidade, Disponibilidade.

#### 8. Testimonial Section
- **Full-bleed dark image background** — cinematic, like a truck on a snowy road.
- **Large quote text** centered, white, italic feel, ~32px.
- **Attribution below**: Name in bold white, then company/role in regular weight, smaller.
- Single testimonial, not a carousel. Clean and impactful.

#### 9. Trust/Logo Bar
- **White background** with the subtle grid pattern.
- **Section label**: "Trusted by Operators" — small, centered, muted.
- **Large section headline**: "Trusted by leading operators..." — large, centered.
- **Logo row**: 5 client logos in a horizontal row with equal spacing, separated by vertical grid lines.
- For RM: Use insurance company logos, local fleet logos, or trust badges.

#### 10. "How It Works" Section
- **White background** with curved top edge (SVG wave divider).
- **Section label** + **headline** centered.
- **Embedded video or illustration** — large rounded-rectangle container.
- **CTA button** below: "Take a closer look" style.

#### 11. Contact Section
- **White background**, wide layout.
- **"Contact Us"** — massive centered headline (~80px).
- **2-column layout**:
  - **Left**: Numbered list of contact options (01 Schedule meeting, 02 Demo, etc.) with lime/accent left-border indicators. Each item is selectable.
  - **Right**: Clean form — minimal fields, underline-style inputs (no bordered boxes), placeholder text as labels. Submit button is full-width, muted gray bg, uppercase text.
- **Step indicators** (dots) top-right of form for multi-step flow.

#### 12. Final CTA Banner
- **Dark teal background** with grid pattern.
- **Large italic headline** centered: "The yard of the future starts today." — white, ~60px.
- **CTA button** below: Pill-shaped, white bg, dark text.

#### 13. Footer
- **Dark teal background** (`#052424`), continuous from CTA section.
- **4-column layout**:
  - Col 1: Logo + Gartner badge / trust credential.
  - Col 2: "TECHNOLOGY" links (uppercase label, then link list).
  - Col 3: "COMPANY" links.
  - Col 4: "REACH US" — short CTA text + social icons (LinkedIn, X, YouTube).
- **Bottom bar**: Copyright left, "Made by [agency]" right, muted small text.
- **Grid pattern** continues through footer.

#### 14. Typography System
```
Primary (headings + body):  "SuisseIntl" — clean geometric sans-serif
                            → For RM, use: "Inter" or "DM Sans" (free Google Font alternatives)

Mono (data, numbers):       "Geist Mono"
                            → For RM, use: "JetBrains Mono" or "Space Mono"

Accent (secondary):         "Poppins" (used sparingly)
                            → For RM, keep "Poppins" as secondary

Hierarchy:
  Hero/Statement H1/H2:    ~87px, weight 400, letter-spacing -1.5px, line-height 0.95
  Section H2:               ~60-70px, weight 400, letter-spacing -1px
  Benefit headline:         ~28-32px, weight 600
  Body:                     16px, weight 400, line-height 1.6
  Label:                    12px, weight 500, uppercase, letter-spacing 2-3px
  Numbers (01, 02...):      Monospace, 14px, accent color
  Nav links:                14-15px, weight 400, letter-spacing 1px
  CTA button:               13px, weight 500, uppercase, letter-spacing 2.5px
```

#### 15. Color Palette
```css
:root {
  /* Core */
  --color-bg:              #FFFFFF;
  --color-dark:            #052424;          /* Dark teal — hero, CTA, footer */
  --color-dark-lighter:    #0A3636;          /* Slightly lighter dark — hover states */
  --color-text:            #052424;          /* Primary text on light */
  --color-text-light:      #FFFFFF;          /* Text on dark */
  --color-muted:           rgba(5,36,36,0.5); /* Muted text on light */
  --color-muted-dark:      rgba(204,204,204,0.6); /* Muted text on dark */

  /* Accent */
  --color-accent:          #1A6FD4;          /* Electric blue — RM brand */
  --color-accent-light:    #3B8EEA;          /* Hover state */
  --color-accent-glow:     rgba(26,111,212,0.25);

  /* Grid pattern */
  --grid-line-light:       rgba(204,204,204,0.27);  /* Grid on light bg */
  --grid-line-dark:        rgba(204,204,204,0.12);   /* Grid on dark bg */
  --grid-dot-accent:       #1A6FD4;                  /* Dot at grid intersections */

  /* Surfaces */
  --color-surface:         #F8F9FA;
  --color-border:          #E5E7EB;

  /* Utility */
  --color-whatsapp:        #25D366;
  --color-emergency:       #1A6FD4;
  --color-star:            #F5A623;
}
```

#### 16. Animations & Interactions
```
| Element                  | Animation                                          | Timing                        |
|--------------------------|---------------------------------------------------|-------------------------------|
| Hero image               | Subtle parallax on scroll (background-attachment)  | Continuous                    |
| "Scroll to explore"      | Fade opacity pulse + translateY bounce             | 2s infinite ease-in-out       |
| Statement headline       | fadeInUp 40px, opacity 0→1                         | 0.8s ease-out on scroll       |
| Numbered features (left) | Opacity transition 0.3→1 on active                 | 0.4s ease, Intersection Obs.  |
| Feature images (right)   | Crossfade opacity transition                       | 0.6s ease on scroll trigger   |
| Section reveals          | fadeInUp 30px                                      | Intersection Observer, 0.15   |
| Nav                      | Transparent → frosted glass                        | On scroll > 50px, 0.3s ease  |
| CTA buttons              | Background color shift on hover                    | 0.2s ease                     |
| Grid pattern dots        | Subtle glow pulse on accent dots                   | 3s infinite, very subtle      |
| Curved section dividers  | SVG path, static (no animation)                    | —                             |
| WhatsApp FAB             | Scale bounce on load                               | 1.5s delay, 0.3s spring      |
| Contact form steps       | Slide left/right between steps                     | 0.3s ease                     |
```

#### 17. Section Dividers
- **Curved/wave SVG dividers** between sections — not hard edges.
- Terminal uses a **concave curve** that cuts into the next section, creating a smooth visual flow.
- Implement as an SVG `<path>` element positioned between sections, using `viewBox` and `preserveAspectRatio` for responsiveness.
- The curve direction alternates: dark-to-light sections curve downward, light-to-dark sections curve upward.

#### 18. Grid Background Pattern
- A subtle grid overlay that appears on both dark and light sections.
- **Implementation**: CSS `background-image` using `repeating-linear-gradient` for the lines, with small `radial-gradient` dots at intersections.
- Grid cell size: approximately `120px × 120px`.
- Lines: `1px` width, very low opacity.
- Dots: `3px` diameter at intersections, slightly higher opacity, some in accent color.

---

## Supplementary Design References

### Jesko Jets (`jeskojets.com`)
**Steal for RM:**
- Hero with overlapping text layers creating depth ("We are movement" / "We are distinction")
- Phone number always visible in nav header
- Premium dark cinematic photography feel
- "Book the Flight" → "Ligar Agora" CTA button with icon

### Lodisna (`lodisna.com`)
**Steal for RM:**
- Animated number counters on scroll (for stats like "24H", "365 dias", "80km raio")
- Red accent → Blue accent for emergency/action color
- VW-based fluid typography for responsiveness
- Dynamic nav color changes between sections

---

## Brand Reality (from Facebook)

| Field | Value |
|---|---|
| **Business Name** | Reboques Matos |
| **Address** | Rua do Castanheiro, 27, Aveiro, Portugal, 3810-739 |
| **Phone** | 234 941 680 |
| **Hours** | Sempre aberto — 24 Horas |
| **Category** | Serviço de guincho · Oficina de reparação de automóveis · Pronto socorro |
| **Logo** | Blue hexagon with white "RM" monogram |
| **Brand colors** | Dark steel grey facade + electric blue accents |
| **Fleet** | White tow trucks with "REBOQUES MATOS" livery, blue flatbed trailer |
| **Workshop** | Dark corrugated steel facade, large garage doors |

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
| Fleet manager | Multiple company vehicles, needs a reliable partner | Track record, 24h guarantee, professional tone |
| Private car owner | Non-urgent repair or maintenance | Services listed clearly, location easy to find |
| Heavy vehicle operator | HGV breakdown, needs flatbed capacity | Specific capability proof points |
| Insurance provider | Contracted roadside assistance partner | Credibility, coverage, professionalism |

---

## Site Architecture

**Single-page application** (`index.html`) — all content lives on one scrolling page. No multi-page navigation needed for this business. Internal nav links scroll to anchored sections.

```
#hero              → Full-viewport cinematic image
#statement         → Bold mission/value statement
#services          → Numbered service scroll (the signature section)
#brand             → Brand statement moment ("Reboques Matos")
#benefits          → 3 benefit cards with images
#testimonials      → Full-bleed quote
#trust             → Client/partner logo bar
#how-it-works      → 3-step process
#contact           → Contact form + info
#cta               → Final CTA banner
#footer            → Footer with links + social
```

---

## Section-by-Section Specification

---

### 1. Navigation (Global, Sticky)

**Pattern: Terminal Industries floating nav pill**

```
┌──────────────────────────────────────────────────────────────┐
│  [RM Logo]    Serviços  Sobre  Contacto     📞 234 941 680  │
│               ↓anchor   ↓anchor  ↓anchor     [LIGAR AGORA]  │
└──────────────────────────────────────────────────────────────┘
```

- **Position**: `fixed`, centered horizontally, `top: 20px`, `z-index: 1000`.
- **Shape**: Rounded rectangle, `border-radius: 50px`, `padding: 12px 32px`.
- **Background**: `rgba(5, 36, 36, 0.6)` + `backdrop-filter: blur(16px)`.
- **Width**: `max-width: 900px`, auto-centered.
- **Logo**: RM hexagon SVG (32px) + "Reboques Matos" wordmark in white.
- **Links**: White, 14px, weight 400, `letter-spacing: 1px`. No underlines.
- **CTA button (right-most)**: `📞 234 941 680` — white background, dark text, `border-radius: 24px`, `padding: 8px 20px`, uppercase, `letter-spacing: 2px`, `font-size: 12px`.
- **On scroll**: Background opacity increases to `0.85`, adds subtle `box-shadow`.
- **Mobile (< 768px)**: Hamburger icon (3 lines, white, 24px) replaces links. On tap: full-screen overlay (`position: fixed; inset: 0; background: var(--color-dark); z-index: 10000;`) with nav links centered vertically, 28px font size, `line-height: 3`. Close button (X) top-right. Overlay animates in with `opacity 0→1, 0.3s ease`. Phone CTA remains visible in the nav bar even on mobile.

---

### 2. Hero Section (`#hero`)

**Pattern: Terminal Industries full-viewport image hero**

- **Full-bleed image**, `width: 100vw`, `height: 100vh`, `object-fit: cover`.
- **Image**: Cinematic photo of RM's white tow truck on a road at dusk/night, or the workshop facade lit at golden hour. Dark-toned, moody.
- **Overlay**: Very subtle gradient at bottom — `linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%)` — to ensure the scroll indicator is readable.
- **NO headline text on the hero.** The image speaks for itself. The headline appears in the next section.
- **"Scroll to explore" indicator** at bottom center:
  - Small text: `DESÇA PARA EXPLORAR` — 11px, uppercase, `letter-spacing: 3px`, white, opacity 0.7.
  - Animated chevron/arrow below, bouncing `translateY(0 → 8px)` on loop.
- **NO badges or text overlays on the hero image.** Keep it purely cinematic. The 24H messaging comes in the statement section below.

---

### 3. Statement Section (`#statement`)

**Pattern: Terminal Industries massive headline on dark background**

- **Background**: `var(--color-dark)` (`#052424`) with grid pattern overlay.
- **Padding**: `160px 0` desktop, `80px 0` mobile.
- **Content centered**, `max-width: 1000px`.

```
[small label]     ASSISTÊNCIA RODOVIÁRIA · AVEIRO
[H1 line 1]       Avariado na estrada?
[H1 line 2]       Estamos a caminho.
[subheadline]     Guincho profissional, pronto socorro e oficina — 24 horas, todos os dias.
[CTA row]         [📞 Ligar Agora — 234 941 680]   [💬 WhatsApp]
```

- **Label**: 12px, uppercase, `letter-spacing: 3px`, muted light color, `font-family: var(--font-mono)`.
- **H1**: `clamp(3rem, 7vw, 5.5rem)`, weight 400, `letter-spacing: -1.5px`, `line-height: 0.95`, white. Line 2 can have a slightly different opacity or the accent color on a key word.
- **Subheadline**: 18px, weight 400, muted light color, `line-height: 1.6`, `margin-top: 24px`.
- **CTA row**: `margin-top: 40px`, `display: flex`, `gap: 16px`.
  - Primary CTA: Electric blue bg, white text, `border-radius: 50px`, `padding: 14px 32px`, `font-size: 14px`, uppercase, `letter-spacing: 2px`. `<a href="tel:234941680">`.
  - Secondary CTA: WhatsApp green bg, white text, same shape. `<a href="https://wa.me/351234941680">`.
- **Animation**: H1 fades in (opacity 0→1, translateY 40px→0) on scroll into view, 0.8s ease-out.

---

### 4. Numbered Services Scroll (`#services`)

**Pattern: Terminal Industries sticky numbered feature scroll — THIS IS THE SIGNATURE SECTION**

- **White background** with subtle grid pattern.
- **Section label + headline** at top, centered:
  - Label: `OS NOSSOS SERVIÇOS` — 12px, uppercase, muted, mono font.
  - H2: `Soluções completas para a sua viatura.` — `clamp(2rem, 4vw, 3.5rem)`, weight 400, `letter-spacing: -1px`, dark text.
- **Layout**: 2-column, `gap: 0`. Left column ~45% width, right column ~55% width.
- **Left column (text)**: `position: sticky`, `top: 50%`, `transform: translateY(-50%)`.
  - Each service has:
    - **Number**: `01` — monospace font, accent color (`#1A6FD4`), 14px, with a small accent-colored vertical bar to its left (3px wide, 24px tall).
    - **Headline**: `clamp(1.5rem, 3vw, 2.25rem)`, weight 400, dark text. Fades from `opacity: 0.25` to `opacity: 1` when active.
    - **Description**: 16px, muted color, `line-height: 1.6`. Only visible for the active item.
  - Items are stacked vertically with generous spacing (`80px` between items).
- **Right column (images)**: Large image with a **curved/wave left edge** (SVG clip-path or mask), `border-radius: 0 24px 24px 0`. Images crossfade as the user scrolls through items.
- **Services to show**:
  1. `01` **Serviço de Guincho** — "Transporte seguro de veículos ligeiros e pesados em plataforma flatbed. Cobrimos Aveiro e toda a região." → Image: flatbed truck loading a car.
  2. `02` **Pronto Socorro** — "Avaria na estrada? A nossa equipa chega até si com equipamento de diagnóstico e reparação no local." → Image: mechanic working roadside.
  3. `03` **Oficina de Reparação** — "Diagnóstico, manutenção e reparação de automóveis em instalações próprias com equipamento profissional." → Image: workshop interior.
  4. `04` **Assistência 24 Horas** — "Dia ou noite, fim de semana ou feriado. Nunca fechamos. Nunca." → Image: truck at night with headlights on.
  5. `05` **Veículos Pesados** — "Capacidade para transporte de veículos pesados até 3500kg em plataforma especializada." → Image: heavy truck on flatbed.
  6. `06` **Cobertura Regional** — "Aveiro, Ílhavo, Vagos, Águeda, Oliveira do Bairro e toda a região centro." → Image: map or regional road.

---

### 5. Brand Statement Section (`#brand`)

**Pattern: Terminal Industries "YOS™" brand moment**

- **Dark teal background** (`#052424`) with grid pattern.
- **Curved SVG divider** at top (wave transition from white to dark).
- **Padding**: `200px 0` desktop, `120px 0` mobile.
- **Content centered**:
  ```
  [small text]    Confiança medida em quilómetros.
  [MASSIVE text]  RM
  ```
- Small text: 18px, muted light, weight 400.
- **Use "24H"** as the massive text: `clamp(8rem, 20vw, 16rem)`, weight 700, white, `letter-spacing: -4px`. This is the single most important brand differentiator — always available.

---

### 6. Benefits Section (`#benefits`)

**Pattern: Terminal Industries benefit cards with full-bleed images**

- **White background**.
- **3 benefits**, each in a row:
  - Full-width image at top (16:9 ratio, `border-radius: 16px`).
  - Below image: 2-column text layout.
    - **Left**: Label (e.g., `Benefício 01` — muted, small) + **Bold headline** (~28px, weight 600).
    - **Right**: Body text (~16px, muted, `line-height: 1.7`).

**Benefits:**
1. **Rapidez** — "Resposta imediata a qualquer hora. Equipa sempre pronta, guincho sempre disponível." → Image: truck speeding on highway.
2. **Fiabilidade** — "Equipamento profissional, técnicos experientes, resultados comprovados em milhares de assistências." → Image: close-up of professional equipment.
3. **Proximidade** — "Conhecemos cada estrada de Aveiro e região. Somos os vizinhos em quem pode confiar." → Image: aerial view of Aveiro region roads.

---

### 7. Testimonials Section (`#testimonials`)

**Pattern: Terminal Industries full-bleed dark image quote**

- **Full-bleed background image** — a cinematic road/truck shot, dark-toned.
- **Dark overlay**: `rgba(5, 36, 36, 0.75)`.
- **Content centered**, `max-width: 800px`.
- **Quote**: `"Liguei às 3 da manhã com o carro avariado na A25. Em menos de 40 minutos estavam lá. Profissionais de verdade."` — white, italic, ~28px, `line-height: 1.5`.
- **Attribution**: Bold name, then "· [City] · [Context]" — 16px, white, weight 600 for name, 400 for rest.
- **Stars**: 5 yellow stars above the quote, `color: var(--color-star)`.

---

### 8. Trust Bar Section (`#trust`)

**Pattern: Terminal Industries logo grid**

- **White background** with grid pattern.
- **Section label**: `CONFIANÇA COMPROVADA` — 12px, uppercase, centered, muted.
- **H2**: `Ao serviço de Aveiro há mais de [X] anos.` — centered, ~48px.
- **Stats row** (animated counters, Lodisna pattern):
  ```
  24H                365              +80km              +1000
  Sempre abertos     Dias por ano     Raio de cobertura  Assistências/ano
  ```
  - Numbers: Monospace font, accent color, ~48px, weight 700.
  - Labels: 14px, muted, uppercase.
  - Counter animation: Numbers count up from 0 on scroll into view.
- **Separator line**.
- **Partner/trust logos row**: Insurance company logos or trust badges (placeholder SVGs), 5 columns with grid dividers.

---

### 9. How It Works Section (`#how-it-works`)

**Pattern: Adapted from Terminal Industries + simplified**

- **White background**, curved SVG divider from previous section.
- **Section label**: `COMO FUNCIONA` — centered.
- **H2**: `Do telefonema à solução, em 3 passos.` — centered, ~48px.
- **3 steps** in a horizontal row (desktop) / vertical stack (mobile):
  ```
  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
  │     01       │   │     02       │   │     03       │
  │  Ligue para  │   │  Enviamos    │   │  Problema    │
  │    nós       │   │   ajuda      │   │  resolvido   │
  │              │   │              │   │              │
  │ Um operador  │   │ Guincho ou   │   │ Na estrada   │
  │ atende de    │   │ técnico a    │   │ ou na nossa  │
  │ imediato.    │   │ caminho.     │   │ oficina.     │
  └──────────────┘   └──────────────┘   └──────────────┘
  ```
- **Number**: Monospace, accent color, 14px, with accent left-border bar.
- **Step title**: 24px, weight 600.
- **Step description**: 16px, muted.
- **Cards**: `background: var(--color-surface)`, `border-radius: 16px`, `padding: 40px`.

---

### 10. Contact Section (`#contact`)

**Pattern: Terminal Industries 2-column contact layout**

- **White background**.
- **H2**: `Contacte-nos` — massive, centered, ~80px, weight 400.
- **Subheadline**: `Fale connosco, nos seus termos:` — 18px, muted, bold.
- **2-column layout**:
  - **Left column**: Contact options list with numbered items and accent left-border:
    ```
    01  📞  Ligar agora — 234 941 680        [tel: link]
    02  💬  Enviar WhatsApp                   [wa.me link]
    03  📍  Visitar a oficina                 [Google Maps link]
    04  📧  Enviar mensagem                   [scrolls to form]
    ```
  - **Right column**: Contact form:
    - **Title**: `Deixe-nos os seus dados:` — 28px.
    - **Fields** (underline style — `border: none; border-bottom: 1px solid var(--color-border); background: transparent; padding: 12px 0; font-size: 16px;`):
      - Nome completo * (`required`)
      - Telefone * (`required`, `type="tel"`, `pattern="[0-9]{9,15}"`)
      - Email (`type="email"`)
      - Assunto (`<select>`): Serviço de Guincho / Pronto Socorro / Oficina / Orçamento / Outro
      - Mensagem (`<textarea>`, `rows="4"`)
    - **Field focus state**: `border-bottom-color: var(--color-accent); outline: none;` with smooth `transition: border-color 0.2s ease`.
    - **Field error state**: `border-bottom-color: #E53E3E;` + small error text below in red, 13px.
    - **Placeholder text**: Muted color (`var(--color-muted)`), disappears on focus.
    - **Submit button**: Full-width, `background: var(--color-surface)`, dark text, uppercase, `letter-spacing: 2px`, `padding: 16px`, `border-radius: 8px`, `cursor: pointer`. Hover: `background: var(--color-accent); color: white;` with `transition: all 0.2s ease`. Disabled state: `opacity: 0.5; cursor: not-allowed;`.
    - **Form action**: Formspree endpoint (placeholder: `https://formspree.io/f/YOUR_FORM_ID`).
    - **Client-side validation**: Check required fields before submit, show inline error messages. On success, replace form with "Mensagem enviada com sucesso!" confirmation.

---

### 11. Coverage Map

- **Embedded within the contact section**, below the 2-column layout, full-width.
- Google Maps iframe: `width: 100%`, `height: 400px` desktop / `300px` mobile, `border-radius: 16px`, `border: none`.
- Centered on: `Rua do Castanheiro, 27, Aveiro, Portugal` (lat: 40.6405, lng: -8.6538), zoom level 13.
- Caption below: `"Cobrimos Aveiro e toda a região. Em caso de dúvida, ligue — chegamos."` — 14px, muted, centered, `margin-top: 16px`.
- `<iframe>` has `loading="lazy"` and `title="Localização Reboques Matos"` for accessibility.

---

### 12. Final CTA Banner (`#cta`)

**Pattern: Terminal Industries closing CTA**

- **Dark teal background** (`#052424`) with grid pattern.
- **Curved SVG divider** at top.
- **Content centered**, `padding: 120px 0`.
- **H2**: `Não espere. Ligue agora.` — white, italic, `clamp(2.5rem, 5vw, 4rem)`.
- **Two CTA buttons** below, side by side:
  - `📞 234 941 680` — white bg, dark text, pill shape.
  - `💬 WhatsApp` — green bg, white text, pill shape.

---

### 13. Footer

**Pattern: Terminal Industries 4-column dark footer**

- **Dark teal background** (`#052424`), continuous from CTA.
- **Grid pattern** continues.
- **4-column layout** (desktop), stack on mobile:
  - **Col 1**: RM logo (SVG) + "Assistência 24H" badge + address block.
  - **Col 2**: "SERVIÇOS" (uppercase label) → Guincho, Pronto Socorro, Oficina, 24 Horas.
  - **Col 3**: "EMPRESA" → Sobre Nós, Contacto.
  - **Col 4**: "CONTACTO" → Phone number (accent color, monospace), WhatsApp link, `<address>` with street + postal code. Social: Facebook icon.
- **Bottom bar**: Copyright left (`© 2025 Reboques Matos`), muted small text.

---

## Floating Global Elements

### WhatsApp FAB
- Fixed bottom-right, all screen sizes.
- WhatsApp green (`#25D366`) circle, `width: 56px`, `height: 56px`, white icon inside.
- `box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4)`.
- Hover: Expands to show label "Falar connosco" — pill shape, same green bg.
- `z-index: 9998`.
- Link: `https://wa.me/351234941680`.

### Emergency Phone Strip (mobile only, sticky bottom)
- `position: fixed`, `bottom: 0`, `width: 100%`, `z-index: 9999`.
- `background: var(--color-accent)` (electric blue).
- `<a href="tel:234941680">` covering full bar.
- Content: `🚨 Avaria? Ligue já: 234 941 680` — white, bold, centered.
- `padding: 14px 0`, `font-size: 16px`.
- Hidden on desktop (`display: none` above 768px).

---

## Design System Summary

### Fonts
```
Headings:  "Inter", system-ui, sans-serif    — weight 400 for large, 600 for medium
Body:      "Inter", system-ui, sans-serif    — weight 400, 16px, line-height 1.6
Mono:      "JetBrains Mono", monospace       — weight 500, for numbers/data/labels
```

### Spacing
```
Section vertical padding:     10rem desktop / 5rem mobile
Content max-width:            1200px, centered
Nav max-width:                900px, centered
Horizontal padding:           2rem (desktop) / 1.25rem (mobile)
Card gap:                     2rem
Card padding:                 2.5rem
Card border-radius:           16px
Button border-radius:         50px (pill)
```

### Breakpoints
```
375px   — mobile S (iPhone SE)
390px   — mobile M (iPhone 14)
768px   — tablet (hide mobile-only elements)
1024px  — desktop S
1280px  — desktop M
1440px  — desktop L
```

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Markup | HTML5 | Semantic, no framework overhead |
| Styles | CSS3 (custom properties, Grid, Flexbox) | No build step, full control |
| Scripts | Vanilla JavaScript (ES6+) | Intersection Observer, scroll effects, counters, nav, form |
| Fonts | Google Fonts CDN | Inter + JetBrains Mono |
| Icons | Lucide Icons CDN | Clean SVG set |
| Map | Google Maps iframe embed | No API key required |
| Form | Formspree | No backend, free tier |
| No build step required | — | Drop `index.html` in a browser and it works |

---

## Functional Requirements

- Every phone number is `<a href="tel:234941680">` — tap-to-call.
- WhatsApp FAB and all WhatsApp links: `https://wa.me/351234941680`.
- Google Maps embed: Rua do Castanheiro, 27, Aveiro.
- Contact form POSTs to Formspree endpoint.
- Mobile emergency bar is tap-to-call, visible at all times on mobile.
- Smooth scroll to anchored sections from nav links.
- Scroll-triggered animations via Intersection Observer API.
- Counter animation for stats (count from 0 to target value).
- Numbered services section uses scroll-driven active state switching.

---

## Accessibility (WCAG 2.1 AA)

- Colour contrast ratio ≥ 4.5:1 for all text.
- All interactive elements have visible `:focus` ring (accent color outline).
- All images have meaningful `alt` attributes.
- All icon-only buttons have `aria-label`.
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`.
- `lang="pt"` on `<html>`.
- `prefers-reduced-motion` media query disables all animations.

---

## Performance

- All images: `loading="lazy"` attribute.
- Google Fonts: `display=swap`.
- No external JS libraries except Lucide icons (CDN, small).
- Target Lighthouse scores: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 95.
- Inline critical CSS for above-the-fold content.

---

## SEO

```html
<title>Reboques Matos | Guincho e Pronto Socorro 24h em Aveiro</title>
<meta name="description" content="Serviço de guincho, pronto socorro e oficina de reparação em Aveiro. Assistência 24 horas, todos os dias. Ligue: 234 941 680.">
<link rel="canonical" href="https://reboquesmatos.pt/">

<meta property="og:title" content="Reboques Matos | Guincho 24h em Aveiro">
<meta property="og:description" content="Avaria? Estamos a caminho. Guincho e pronto socorro 24 horas em Aveiro e região.">
<meta property="og:image" content="/assets/og-image.jpg">
<meta property="og:type" content="website">

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

## Content — European Portuguese (PT-PT)

> **Critical:** All copy must be **PT-PT**, not PT-BR. No "você", use "si". No "celular", use "telemóvel". No "conserto", use "reparação".

| Location | Copy |
|---|---|
| Scroll indicator | *"DESÇA PARA EXPLORAR"* |
| Statement label | *"ASSISTÊNCIA RODOVIÁRIA · AVEIRO"* |
| Statement H1 L1 | *"Avariado na estrada?"* |
| Statement H1 L2 | *"Estamos a caminho."* |
| Statement sub | *"Guincho profissional, pronto socorro e oficina — 24 horas, todos os dias."* |
| CTA primary | *"Ligar Agora — 234 941 680"* |
| CTA secondary | *"WhatsApp"* |
| Services label | *"OS NOSSOS SERVIÇOS"* |
| Services H2 | *"Soluções completas para a sua viatura."* |
| Service 01 | *"Serviço de Guincho"* |
| Service 02 | *"Pronto Socorro"* |
| Service 03 | *"Oficina de Reparação"* |
| Service 04 | *"Assistência 24 Horas"* |
| Service 05 | *"Veículos Pesados"* |
| Service 06 | *"Cobertura Regional"* |
| Brand small | *"Confiança medida em quilómetros."* |
| Brand large | *"RM"* or *"24H"* |
| Benefits label | *"PORQUÊ A REBOQUES MATOS"* |
| Benefit 01 | *"Rapidez"* |
| Benefit 02 | *"Fiabilidade"* |
| Benefit 03 | *"Proximidade"* |
| Trust label | *"CONFIANÇA COMPROVADA"* |
| Trust H2 | *"Ao serviço de Aveiro há mais de [X] anos."* |
| Stats | *"24H / 365 dias / +80km / +1000"* |
| How label | *"COMO FUNCIONA"* |
| How H2 | *"Do telefonema à solução, em 3 passos."* |
| Step 01 | *"Ligue para nós — Um operador atende de imediato, 24h por dia."* |
| Step 02 | *"Enviamos ajuda — Guincho ou técnico a caminho para a sua localização."* |
| Step 03 | *"Problema resolvido — Na estrada ou na nossa oficina, cuidamos de tudo."* |
| Contact H2 | *"Contacte-nos"* |
| Contact sub | *"Fale connosco, nos seus termos:"* |
| Final CTA | *"Não espere. Ligue agora."* |
| Mobile bar | *"🚨 Avaria? Ligue já: 234 941 680"* |
| WhatsApp hover | *"Falar connosco"* |
| Footer cols | *"SERVIÇOS" / "EMPRESA" / "CONTACTO"* |

---

## Assets

### Real photos to request from client
- Tow truck on the road (preferably at dusk/night for hero)
- Workshop exterior facade with signage
- Workshop interior with equipment
- Tow truck loading a vehicle
- Team at work (roadside)
- Fleet overview shot

### Placeholder fallbacks
- Unsplash: search `"tow truck night"`, `"auto workshop dark"`, `"roadside emergency"`, `"Aveiro Portugal aerial"`
- Apply dark overlay on all hero/background images
- Use CSS grid pattern for texture (no image needed)

### Logo (recreate as SVG)
```
Shape:    Regular hexagon, flat-top orientation
Fill:     #1A6FD4 (electric blue)
Content:  White "RM" monogram, bold, centered
Sizes:    32px (nav), 48px (footer), 120px (brand section)
```

### Icon set (Lucide CDN)
Use: `truck` · `wrench` · `phone` · `clock` · `map-pin` · `shield-check` · `zap` · `arrow-right` · `arrow-down` · `message-circle` · `star`

---

## Out of Scope

- CMS / admin panel
- Online booking / scheduling system
- E-commerce / payment processing
- Multi-page site (services, about, contact as separate pages)
- Live GPS vehicle tracking
- Customer portal / login
- Analytics implementation (add GTM `<script>` placeholder only)
- Deployment pipeline

---

## Deliverables

| File | Description |
|---|---|
| `index.html` | Single-page site — all sections from hero to footer |
| `styles.css` | Full design system + all section styles (CSS custom properties, grid pattern, curved dividers) |
| `script.js` | Intersection Observer animations, scroll-driven services section, counter animation, nav scroll behavior, mobile menu, form handling |
| `assets/logo.svg` | RM hexagon SVG logo |
| `assets/` | Placeholder images (sourced from Unsplash, dark overlays applied via CSS gradient). Include: `hero.jpg`, `service-01.jpg` through `service-06.jpg`, `benefit-01.jpg` through `benefit-03.jpg`, `testimonial-bg.jpg`, `og-image.jpg` |

---

## Success Criteria

1. **A person with a broken-down car can tap to call within 3 seconds** of landing on the page on mobile.
2. The page **looks and feels like Terminal Industries** — same visual quality, layout rhythm, and typography sophistication.
3. The visual identity matches the real brand: **dark teal, electric blue accent, clean sans-serif type**.
4. The numbered services scroll section works smoothly with crossfading images and active state highlighting.
5. The page scores ≥ 90 on Lighthouse for Performance, Accessibility, and SEO.
6. Any agent (Claude or other) can build the full site from this document **without asking a single clarifying question**.
7. The end result feels like a premium, trustworthy company — not a generic local business directory listing.

---

**Purpose:** Production-grade, single-page website for a real Portuguese 24h towing and roadside assistance company in Aveiro. Design directly derived from Terminal Industries' visual language — dark teal + white palette, SuisseIntl-like typography (Inter), subtle grid background patterns, curved section dividers, numbered scroll features, frosted-glass floating nav, and full-bleed cinematic imagery. All contact data is real. Build without placeholders where real data exists.
