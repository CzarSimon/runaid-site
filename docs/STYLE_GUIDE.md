# Runaid Design Style Guide

**Version:** 1.0
**Last updated:** 2026-04-06
**Product:** Runaid — AI-powered coaching for dedicated amateur runners

---

## 1. Design Philosophy

Runaid follows a **"Performance Editorial"** aesthetic — a blend of clean data-driven UI with warm, editorial coaching voice. The design communicates two things simultaneously:

1. **Precision and trust** through structured layouts, strong typographic hierarchy, and a restrained color palette
2. **Human coaching warmth** through serif typography, italic voice, and generous whitespace

The overall feel is closer to a premium sports magazine than a typical fitness app.

---

## 2. Brand Identity

### Brand Name
**Runaid** — always written as one word, capital R.

### Tagline
**"Train with intent."**

### Logo Mark
A single serif **"R"** rendered in the heading font (Newsreader) on a deep navy (`#000a1e`) square with fully rounded corners. The letter is white (`#ffffff`). This mark appears in avatars, headers, and as the coach's identity throughout the product.

### Brand Voice
Authoritative but approachable. The coach speaks in complete, considered sentences — never bullet-point listicles. Coaching text uses serif italic to visually distinguish the "coach's voice" from the UI.

---

## 3. Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#000a1e` | Deep navy. Headings, buttons, brand elements, user message bubbles |
| `primary-foreground` | `#ffffff` | Text on primary backgrounds |
| `primary-container` | `#002147` | Slightly lighter navy for contained elements |

### Secondary Colors (Performance Teal)

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary` | `#006972` | Teal. Active states, accents, links, ring focus, coach accent borders |
| `secondary-foreground` | `#ffffff` | Text on secondary backgrounds |
| `secondary-container` | `#9decf8` | Light teal for badges, highlights |

### Surface Hierarchy

A 6-tier Material-inspired surface system for layering depth:

| Token | Hex | Usage |
|-------|-----|-------|
| `background` / `surface` | `#f8f9fa` | Page background (off-white) |
| `surface-container-lowest` | `#ffffff` | Cards, elevated containers |
| `surface-container-low` | `#f3f4f5` | Subtle section backgrounds |
| `surface-container` | `#edeeef` | Mid-level containers |
| `surface-container-high` | `#e7e8e9` | Input fields |
| `surface-container-highest` | `#e1e3e4` | Highest elevation surfaces |

### Text & Outline Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `on-surface` / `foreground` | `#191c1d` | Primary body text (near-black) |
| `on-surface-variant` | `#44474e` | Secondary text, descriptions, metadata |
| `outline` | `#74777f` | Muted labels, timestamps |
| `outline-variant` | `#c4c6cf` | Subtle borders, dividers |
| `muted-foreground` | `#74777f` | Placeholder text, disabled labels |

### Functional Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `destructive` | `#ba1a1a` | Error states, destructive actions |
| `border` | `#e1e3e4` | Default border color |
| `ring` | `#006972` | Focus ring (matches secondary/teal) |

### Training Phase Accent Colors

Used to visually distinguish training plan phases:

| Phase | Color Family | Usage |
|-------|-------------|-------|
| Base | Blue (`blue-*`) | Foundation training blocks |
| Build | Amber (`amber-*`) | Intensity build blocks |
| Peak | Red (`red-*`) | Peak performance blocks |
| Taper | Emerald (`emerald-*`) | Taper/rest blocks |
| Recovery | Purple (`purple-*`) | Recovery blocks |

### Color Principles

- **No dark mode.** The app is light-mode only.
- Primary navy is reserved for headings, brand elements, and the user's own messages.
- Secondary teal is the action/interactive color — active navigation, focus rings, accent borders, coach highlights.
- Surface hierarchy creates depth without shadows wherever possible.

---

## 4. Typography

### Font Stack

| Role | Family | Source | CSS Variable |
|------|--------|--------|-------------|
| **Body / UI** | Inter | Google Fonts | `--font-sans` / `--font-inter` |
| **Headings / Editorial** | Newsreader | Google Fonts | `--font-serif` / `--font-newsreader` |
| **Monospace** | Geist Mono | Local | `--font-mono` / `--font-geist-mono` |
| **Icons** | Material Symbols Outlined | Google Fonts | — |

### Type Scale & Usage

| Element | Font | Size | Weight | Style | Tracking |
|---------|------|------|--------|-------|----------|
| Page titles | Newsreader | 24-32px | Bold (700) | Normal | Tight |
| Section headings | Inter | 18-20px (`text-xl`) | Bold (700) | Normal | Tight |
| Card titles | Newsreader | 16px (`text-base`) | Medium (500) | Normal | — |
| Body text | Inter | 14px (`text-sm`) | Regular (400) | Normal | — |
| Coach voice (assistant messages) | Newsreader | 18px (`text-lg`) | Regular (400) | Normal | — |
| Coach intent quotes | Newsreader | 13px | Regular (400) | Italic | — |
| Small labels | Inter | 12px (`text-xs`) | Medium (500) | Normal | — |
| Micro labels (nav, timestamps) | Inter | 10px | Bold (700) | Normal / Uppercase | `tracking-widest` / `tracking-wider` |
| Badge text | Inter | 12px (`text-xs`) | Medium (500) | Normal | — |
| Agent label badges | Inter | 10px | Bold (700) | Uppercase | `tracking-widest` |

### Typography Principles

- **Serif (Newsreader)** is the "coaching voice" — used for card titles, assistant messages, session intent quotes, and editorial content.
- **Sans (Inter)** is the "system voice" — used for buttons, labels, inputs, metadata, and all functional UI text.
- The two fonts working together is central to the brand identity. They must always contrast clearly.
- Body text uses `leading-relaxed` (1.625 line-height) for comfortable reading.
- Font smoothing: antialiased (`-webkit-font-smoothing: antialiased`).

---

## 5. Spacing & Layout

### Spacing Scale

The design uses a **4px base unit** via Tailwind's default spacing scale:

| Token | Value | Common Usage |
|-------|-------|-------------|
| `1` | 4px | Tight gaps between related elements |
| `1.5` | 6px | Icon-to-label gaps in buttons |
| `2` | 8px | Inner padding for compact elements |
| `3` | 12px | Small card padding, gaps between list items |
| `4` | 16px | Standard card padding, content margins |
| `5` | 20px | Expanded card padding |
| `6` | 24px | Page horizontal padding (`px-6`) |
| `8` | 32px | Section gaps, generous vertical spacing |
| `24` | 96px | Bottom padding for nav clearance (`pb-24`) |

### Layout Containers

- **Max content width:** `max-w-2xl` (672px) centered with `mx-auto`
- **Page horizontal padding:** `px-6` (24px each side)
- **Mobile-first:** All layouts are designed for mobile and scale up.

### Content Stacking

- Cards and sections stack vertically with `space-y-4` (16px) or `space-y-6` (24px) gaps.
- Message bubbles use `mb-8` (32px) spacing between messages.

---

## 6. Border Radius

Base radius: `0.75rem` (12px).

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | ~7px | — |
| `rounded-md` | ~10px | Small buttons |
| `rounded-lg` | 12px | Buttons, inputs (default) |
| `rounded-xl` | ~17px | Cards, session cards |
| `rounded-2xl` | ~22px | Navigation bar, large containers |
| `rounded-3xl` | ~26px | — |
| `rounded-4xl` | ~31px | Badges (fully rounded pill) |
| `rounded-full` | 50% | Avatars, circular elements |

### Radius Principles

- Cards use `rounded-xl`.
- Buttons and inputs use `rounded-lg`.
- Badges are fully rounded pills (`rounded-4xl`).
- The bottom nav uses `rounded-t-2xl` (top corners only).

---

## 7. Shadows & Elevation

The design uses shadows sparingly, preferring the surface hierarchy for depth:

| Element | Shadow |
|---------|--------|
| Cards | `ring-1 ring-foreground/10` (subtle 10% border, not a box-shadow) |
| Bottom navigation | `shadow-[0_-4px_24px_rgba(0,0,0,0.04)]` (very subtle upward glow) |
| Top bar | `shadow-sm` |
| User message bubbles | `shadow-md` |

### Elevation via Glassmorphism

Key navigation elements use **glassmorphism** instead of opaque backgrounds:

- **Bottom nav:** `bg-white/80 backdrop-blur-2xl`
- **Top bar:** `bg-white/60 backdrop-blur-xl`

---

## 8. Iconography

### Icon System
**Material Symbols Outlined** (Google) — variable font with these default settings:

```css
font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
```

### Icon States

- **Default:** Outlined (FILL 0)
- **Active/Selected:** Filled (FILL 1) — used for active bottom nav items
- **Size:** 24px optical size (default), with `text-xs` for inline badges

### Key Icons Used

| Context | Icon Name |
|---------|-----------|
| Today tab | `today` |
| Plan tab | `event_note` |
| Workouts tab | `show_chart` |
| Settings tab | `settings` |
| Back navigation | `arrow_back` |
| Completed workout | `check_circle` |
| Coach/Science badge | `science` |
| Chat send | `arrow_upward` |

---

## 9. Component Patterns

### Buttons

Six variants built with `class-variance-authority`:

| Variant | Appearance | Usage |
|---------|-----------|-------|
| `default` | Navy background, white text | Primary actions |
| `secondary` | Teal background, white text | Secondary CTA |
| `outline` | Border only, transparent background | Tertiary actions |
| `ghost` | No border/background, hover reveals muted fill | Navigation, inline actions |
| `destructive` | Red tint background, red text | Destructive actions |
| `link` | Underline on hover, no background | Inline text links |

**Sizes:** `xs` (24px), `sm` (28px), `default` (32px), `lg` (36px), `icon` (32x32px square).

All buttons have `active:translate-y-px` micro-interaction on press.

### Cards

White background (`bg-card`) with a subtle ring border (`ring-1 ring-foreground/10`). Standard padding is `py-4 px-4`. Cards use `rounded-xl` and `overflow-hidden`.

**Card anatomy:** Header (title + optional description + optional action) > Content > Footer (muted background strip).

### Session Cards (Training-Specific)

Four states reflecting workout lifecycle:

| State | Visual Treatment |
|-------|-----------------|
| **Expanded** (today's focus) | White background, `border-[1.5px] border-secondary` teal accent border |
| **Completed** | Checkmark icon, actual metrics displayed, muted styling |
| **Folded** (upcoming) | Compact, collapsed, minimal info |
| **Rest day** | Intent text in serif italic |

### Chat / Message Bubbles

**User messages:**
- Right-aligned
- Navy background (`bg-primary`), white text
- `rounded-xl rounded-tr-none` (flat top-right corner)
- `shadow-md`
- Max width: 80%

**Assistant (Coach) messages:**
- Left-aligned, full width
- No background color — uses left border accent instead
- `border-l-2 border-secondary/40` (teal left rule)
- Serif font (`font-serif`), 18px, `leading-relaxed`
- Agent badges (Sports Scientist, S&C Coach) appear as teal pills above specialized responses

### Inputs

- Height: 32px (`h-8`)
- `rounded-lg` border radius
- Border: `border-input` (light gray), transparent background
- Focus state: teal border + teal ring (`focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`)
- Error state: red border + red ring

### Badges

Fully rounded pills (`rounded-4xl`), height 20px (`h-5`), 12px text. Same variant system as buttons (default, secondary, outline, destructive, ghost).

### Navigation

**Bottom Tab Bar (Primary Navigation):**
- 4 items: Today, Plan, Workouts, Settings
- Fixed to bottom of viewport
- Glassmorphism: `bg-white/80 backdrop-blur-2xl`
- Active state: teal color + filled icon + `scale-110`
- Inactive state: 50% opacity gray
- Labels: 10px uppercase bold, `tracking-widest`

**Top Bar (Context Navigation):**
- Fixed to top of viewport
- Glassmorphism: `bg-white/60 backdrop-blur-xl`
- Title: 20px bold, primary color
- Optional back button + optional right action

---

## 10. Animations & Transitions

### Micro-interactions
- **Button press:** `active:translate-y-px` (1px downward shift)
- **Nav item press:** `active:scale-90` (scale down to 90%)
- **All transitions:** `transition-all` or `transition-transform` with default Tailwind durations

### Content Animations

| Animation | Keyframes | Duration | Usage |
|-----------|-----------|----------|-------|
| `bounce-dot` | translateY(0) > translateY(-4px) > translateY(0) | 1s ease-in-out infinite | Typing indicator dots |
| `fade-in` | opacity 0 > 1, translateY(4px > 0) | 0.4s ease-out | Carousel card entrance |
| Typewriter | Word-by-word text reveal | 25ms per word | Coach message streaming |
| Pulse cursor | `animate-pulse` on teal block | Default | Active streaming indicator |

### Animation Principles
- Animations are subtle and functional, never decorative.
- Entrance animations are fast (0.4s max).
- Only streaming/loading states use continuous animation.

---

## 11. Responsive Behavior

- **Designed mobile-first.** The app is optimized for phone-sized screens.
- Content is constrained to `max-w-2xl` (672px) on wider screens.
- No breakpoint-specific layout changes in the current design — the layout scales naturally.
- Bottom navigation uses safe area insets (`env(safe-area-inset-bottom)`) for notched devices.
- Viewport is locked: `maximum-scale: 1` to prevent zoom on input focus.

---

## 12. Key Visual Patterns to Preserve

These patterns define the Runaid identity and should be carried over to any new surface:

1. **Dual-font system** — Inter (system/UI) paired with Newsreader (editorial/coaching voice)
2. **Navy + Teal palette** — Deep navy for authority, teal for interactivity and life
3. **Left-border coaching accent** — Teal `border-l-2` to mark coach content
4. **Glassmorphism navigation** — Semi-transparent blurred nav bars
5. **Serif italic for intent/coaching** — Coaching quotes and session intents always use `font-serif italic`
6. **Surface hierarchy over shadows** — Depth via background color layering, not heavy shadows
7. **The "R" mark** — Serif R on navy square as the core brand element
8. **Generous whitespace** — Content breathes with `leading-relaxed` and wide vertical spacing
9. **Restrained color use** — Only two hues (navy + teal) with neutral grays. Phase colors are the only exception.
10. **Uppercase micro-labels** — 10px bold uppercase tracking-widest for navigation and metadata labels
