# Cafenza Website Recreation — Implementation Plan

## Overview
Full recreation of [cafenza.framer.website](https://cafenza.framer.website/) as a production-ready cafe website using **Vanilla HTML + CSS + JavaScript** with a multi-page structure. No frameworks required. Uses React-style component mental model via reusable HTML partials injected with JS.

**Tech Stack:** HTML5 + Vanilla CSS + Vanilla JS (no build tool needed)  
**Project Root:** `d:\cafe\`

---

## Design System (Extracted)

### Colors
| Token | Value | Usage |
|---|---|---|
| `--cream` | `#F0EDE6` | Page background |
| `--off-white` | `#E8E4DC` | Section backgrounds |
| `--dark-brown` | `#2A1008` | Logo, hero heading |
| `--forest-green` | `#1A4A2E` | Section headings |
| `--medium-brown` | `#5C3D2E` | Accent text |
| `--black` | `#0A0A0A` | Footer background |
| `--nav-pill` | `rgba(255,255,255,0.85)` | Navbar pill background |
| `--card-border` | `rgba(180,140,80,0.4)` | Card borders |
| `--tan-card` | `#C8B89A` | Testimonial/workspace card bg |

### Typography
- **Font:** `Playfair Display` (headings) + `Inter` (body) — from Google Fonts
- Hero heading: `~80px`, bold, dark brown
- Section heading: `~56px`, bold, forest green
- Sub-label: `~14px`, gray, uppercase tracking
- Body: `~16px`, regular, dark gray

### Layout
- Max container width: `1320px`
- Navbar: sticky, floats above, pill-shaped center nav
- Sections: generous padding `120px` top/bottom
- Grid: CSS Grid for menu/blog cards (2-col or 3-col)

---

## Pages & Sections

### 1. `index.html` — Home
1. **Navbar** — sticky, logo left, pill nav center, CTA right
2. **Hero Section** — cream bg, large heading, floating coffee bean decorations, 2 CTA buttons
3. **Full-width Photo** — dark latte art image, edge-to-edge
4. **Highlights Carousel** — "Moments & Details That Set Us Apart" — stacked card scroll (Elegant Ambience, Handcrafted Coffee, Skilled Baristas, Seasonal Specials)
5. **Heritage Section** — "Inspired By Heritage, Crafted With Precision" — left image + right text + stats (15K+ cups, 8+ years, 98%)
6. **Signature Menu** — "Handpicked Selections Loved By Our Guests" — 4-column card grid with image, name, price
7. **Café Workspace** — "Designed For Work, Comfort & Inspiration" — split layout with tan card + photo
8. **Guest Experience / Testimonials** — left photo + right testimonial card with stars + arrows slider
9. **Our Beautiful Café** — 3-column tilted photo gallery
10. **Coffee Journal / Blog** — "Insights On Coffee, Culture & Living" — 3-column blog card grid
11. **FAQ Section** — left heading + right accordion
12. **Reserve CTA Section** — full-bleed dark espresso photo + floating white form card
13. **Footer** — dark bg, nav links, social icons, tagline
14. **Footer Brand Watermark** — large "cafenza" text overlaid on bar photo

### 2. `about.html` — About
1. Navbar
2. Hero — "The Taste Story" headline + decorative beans + full-width image
3. Story/Values section
4. Team/Baristas section
5. Footer

### 3. `menu.html` — Menu
1. Navbar
2. Hero — "OUR MENU" large heading + beans + full-width photo
3. Sticky left sidebar with category tabs (Signature Coffee, Specialty Lattes, Tea & Matcha, Bakery & Desserts, Breakfast & Bites)
4. Right content area: menu items in 2-column grid with photo cards showing name + price
5. Footer

### 4. `blog.html` — Blog
1. Navbar
2. Page title
3. 3-column blog card grid
4. Footer

### 5. `reservation.html` — Reservation
1. Navbar
2. Hero with info (address, phone, email, hours)
3. Booking form (name, phone, email, guests, date, time, special requests)
4. Footer

---

## Component Architecture

```
d:\cafe\
├── index.html
├── about.html
├── menu.html
├── blog.html
├── reservation.html
├── css/
│   ├── variables.css      ← design tokens
│   ├── base.css           ← reset + typography
│   ├── navbar.css
│   ├── hero.css
│   ├── sections.css       ← all homepage sections
│   ├── menu-page.css
│   ├── blog.css
│   ├── reservation.css
│   ├── footer.css
│   └── animations.css     ← scroll animations, hover effects
├── js/
│   ├── main.js            ← navbar sticky, scroll effects
│   ├── carousel.js        ← highlights stacking + testimonial slider
│   ├── menu.js            ← category tab switching
│   ├── faq.js             ← accordion
│   └── animations.js      ← IntersectionObserver fade-ins
└── assets/
    └── images/            ← AI-generated images
```

---

## Key Interactions to Implement

| Interaction | Implementation |
|---|---|
| Sticky navbar | `position: sticky; top: 0` + backdrop blur |
| Floating coffee beans | CSS `@keyframes float` with random positions |
| Stacking card scroll | CSS `position: sticky` per card with scroll-linked z-index |
| Menu sidebar tabs | JS click → scroll to section anchor |
| Testimonial slider | JS prev/next with CSS transition |
| FAQ accordion | JS toggle with CSS max-height transition |
| Blog cards arrow button | Hover rotate + bg fill animation |
| Scroll fade-ins | `IntersectionObserver` + CSS `opacity/translateY` |
| Menu item hover | Scale + border glow |
| Button hover | Background slide / color swap |

---

## Verification Plan

### Build Verification
- Open each HTML file in browser and verify layout matches screenshots
- Test responsive at 375px, 768px, 1280px, 1440px
- Verify all animations and hover effects work
- Verify menu tab switching
- Verify FAQ accordion
- Verify testimonial slider navigation
