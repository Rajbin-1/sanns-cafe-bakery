# Sann's Café & Bakery — Design Strategy & Analysis

## Project Overview

**Business Profile:**
- **Name:** Sann's Café & Bakery
- **Location:** Tokha 44600, Kathmandu (Q849+24)
- **Hours:** Daily 7:00 AM – 8:00 PM
- **Rating:** 5.0 stars
- **Price Range:** Rs 1–500 (accessible premium)
- **Signature Items:** Specialized Coffee, Artisanal Sourdough, Signature Cheesecake, Chocolate Brownies
- **Tech:** NFC mobile payments supported

**Brand Positioning:** A "destination café" where high-end baking meets a curated art gallery atmosphere.

---

## Asset Inventory

### Media Assets Extracted
- **Video:** `Sans_Cafe.mp4` (hero background loop with cup/smoke/water effect)
- **Logo:** `Logo.jpg` (brand identity)
- **Interior Photos:** 7 images showcasing art-adorned walls and gallery ambiance
- **Food Photography:** 8 items (Cheesecake, Coffee Cake, Hot Chocolate, Lemon Tea, Jhol Momo, Steam Momo, Chowmein, Virgin Mojito)
- **Menu Images:** 4 menu board photographs
- **Business Data:** Contact (WhatsApp: 9869637793), Instagram, Google Maps embed, customer reviews

---

## Design Philosophy

### Chosen Aesthetic: **Minimalist Art Gallery + Warm Artisanal**

**Core Principles:**
1. **Curated Simplicity:** Clean, uncluttered layouts with intentional whitespace—mirroring gallery walkthrough experience
2. **Warmth & Sophistication:** Premium feel through careful typography and subtle depth, not visual noise
3. **Art-First Presentation:** Images and video as primary storytelling medium; text as supporting narrative
4. **Accessible Luxury:** Premium quality at approachable price point reflected in design (refined but not cold)

---

## Color Palette (Hex Codes)

| Element | Hex Code | Usage |
|---------|----------|-------|
| **Chocolate Brown** | `#3E2723` | Primary text, headings, strong accents |
| **Saffron Yellow** | `#F4B860` | Accent highlights, CTAs, warmth points |
| **Cream** | `#FBF8F3` | Primary background, card surfaces |
| **White** | `#FFFFFF` | Clean backgrounds, contrast |
| **Warm Gray** | `#8B7355` | Secondary text, subtle accents |
| **Charcoal** | `#2C2C2C` | Dark text, deep accents |
| **Soft Taupe** | `#D4C5B9` | Borders, dividers, subtle separation |

**Rationale:** The palette evokes artisanal bakery warmth (chocolate, saffron, cream) while maintaining gallery sophistication. Saffron yellow provides energy without overwhelming; cream backgrounds ensure gallery-like breathing room.

---

## Typography System

### Font Pairing
- **Headings (Display):** Playfair Display (Serif) — Elegant, artistic, gallery-inspired
- **Subheadings & Emphasis:** Cormorant Garamond (Serif) — Refined, readable serif for hierarchy
- **Body Text:** Lato (Sans-serif) — Modern, clean, highly legible for content
- **Accent/UI:** Montserrat (Sans-serif) — Contemporary, structured for buttons and labels

### Hierarchy
- **H1 (Hero/Page Titles):** Playfair Display, 48–64px, weight 700, `#3E2723`
- **H2 (Section Titles):** Cormorant Garamond, 36–42px, weight 600, `#3E2723`
- **H3 (Subsections):** Cormorant Garamond, 24–28px, weight 500, `#8B7355`
- **Body:** Lato, 16px, weight 400, `#2C2C2C`
- **Button/Label:** Montserrat, 14px, weight 600, `#FFFFFF` on `#F4B860`

---

## Layout Paradigm

### Navigation
- **Fixed Top Nav:** Transparent on scroll, transitions to solid `#FFFFFF` with subtle shadow at 100px+ scroll
- **Links:** Home, Menu, Find Us, About & Contact, Reviews
- **Mobile:** Hamburger menu with slide-in drawer

### Page Structure
1. **Home:** Hero video with overlay, "Our Story" teaser, signature items preview
2. **Menu:** Categorized list (Coffee, Bakery, Signatures) with food photography
3. **Find Us:** Embedded Google Map, operating hours, NFC payment icons
4. **About & Contact:** Brand history + functional contact form
5. **Reviews:** 5.0-star testimonials in gallery-style grid

### Whitespace Strategy
- Generous padding around sections (4rem–6rem vertical)
- Breathing room between content blocks
- Asymmetric layouts to avoid rigid grid feeling

---

## Signature Visual Elements

1. **Fade-In Animations:** Subtle entrance animations on scroll (opacity + slight translateY) to mimic gallery walkthrough
2. **Warm Gradient Overlays:** Subtle chocolate-to-transparent gradients over images for text readability
3. **Minimal Dividers:** Thin saffron-yellow lines or soft taupe borders between sections
4. **Art Gallery Frames:** Subtle border/shadow treatment on food photography to elevate presentation

---

## Video Background Strategy

### Hero Video (`Sans_Cafe.mp4`)
- **Placement:** Full-width hero section (Home page)
- **Dimensions:** Optimize for 16:9 aspect ratio (desktop) and 9:16 (mobile)
- **Loop:** Continuous seamless loop with muted audio
- **Overlay:** Semi-transparent dark gradient (`rgba(62, 39, 35, 0.4)`) to ensure text contrast
- **Performance:** Compress to ~5MB for fast loading; provide WebM fallback for browser compatibility
- **Accessibility:** Provide static fallback image for no-video scenarios

### Text Overlay on Video
- **Heading:** Playfair Display, 56px, `#FFFFFF`, centered
- **Subheading:** Lato, 18px, `#FBF8F3`, centered
- **Buttons:** Saffron yellow CTAs with hover effects

---

## Interaction Philosophy

### Micro-Interactions
- **Hover Effects:** Subtle scale (1.05) and shadow increase on buttons and cards
- **Scroll Animations:** Fade-in with slight upward motion on section entries
- **Smooth Transitions:** 300ms cubic-bezier easing for all state changes
- **Gallery Navigation:** Smooth scroll to sections, no jarring jumps

### Accessibility
- **Color Contrast:** All text meets WCAG AA standards (4.5:1 minimum)
- **Focus States:** Visible focus rings on interactive elements
- **Keyboard Navigation:** Full keyboard support for all interactive components
- **Alt Text:** Descriptive alt text for all images

---

## Animation Guidelines

- **Entrance:** Fade-in + 20px translateY over 600ms on scroll
- **Hover:** 300ms smooth scale and shadow transitions
- **Loading:** Subtle pulse or skeleton screens for dynamic content
- **Transitions:** Smooth page transitions with fade effect (200ms)
- **Parallax:** Subtle parallax on hero video for depth (optional enhancement)

---

## Next Steps

1. ✅ Asset extraction and analysis (COMPLETE)
2. ⏳ Design planning and reference research
3. ⏳ Project scaffolding and core structure
4. ⏳ Build all pages with content and styling
5. ⏳ Integrate media assets and video background
6. ⏳ Responsive polish and performance optimization
7. ⏳ Final delivery

---

## Key Decisions Confirmed with User

- **Color Hex Codes:** Chocolate Brown (#3E2723), Saffron Yellow (#F4B860), Cream (#FBF8F3)
- **Video Background Strategy:** Full-width hero loop with semi-transparent dark overlay for text contrast
- **Design Aesthetic:** Minimalist art gallery with warm artisanal touches
- **Typography:** Playfair Display (headings) + Lato (body) for elegant-yet-modern feel
