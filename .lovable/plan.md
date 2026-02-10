

## Elevate Dmitriy Borshchak's Profile Page

The page currently has flat, same-tone backgrounds with no visual movement. Here's how we'll bring it to life while keeping it professional and authoritative.

### 1. Hero Section -- Dark Navy Background with Staggered Fade-In Animations

- Change the hero background from `bg-secondary/50` (pale cream) to a deep navy (`bg-navy`) with light text
- Add staggered fade-in animations: the subtitle fades in first, then the name, then the bio paragraph -- each with a slight delay
- Add a subtle gradient overlay on the photo edge for a polished blend between image and text
- This creates immediate visual impact and authority

### 2. Recognition Badge Section -- Scroll-Triggered Fade-In

- Add fade-in-up animation to the badges so they animate into view as the user scrolls down
- Use an Intersection Observer hook to trigger animations on scroll
- Add a subtle scale-on-hover effect to the badge links for interactivity

### 3. Video Section -- Alternating Background with Entrance Animation

- Change background to navy (`bg-navy`) to create contrast with surrounding sections
- Add a heading above the video like "Meet Dmitriy" in white
- Fade the video container in on scroll

### 4. Tabs Section -- Animated Tab Content Transitions

- Keep the cream background for contrast against the navy video section
- Add a section heading like "Professional Background"
- Animate tab content with a fade-in effect when switching between tabs
- Add a decorative top border accent line in green

### 5. New Custom Hook -- useScrollAnimation

- Create a reusable `useScrollAnimation` hook using Intersection Observer
- Returns a ref and a boolean (`isVisible`) to trigger CSS animations
- This keeps the animation logic clean and reusable across pages

### Technical Details

**New file: `src/hooks/use-scroll-animation.tsx`**
- Custom hook using `useEffect` + `IntersectionObserver`
- Returns `{ ref, isVisible }` for any element

**Modified file: `src/pages/DmitriyBorshchak.tsx`**
- Import and use `useScrollAnimation` on 3 sections (badges, video, tabs)
- Hero: change to `bg-navy`, white text, staggered `animate-fade-in` with `animation-delay` style props
- Photo: add gradient overlay `bg-gradient-to-l from-transparent to-navy`
- Badges: conditional class `opacity-0 -> animate-fade-in` on scroll
- Video: `bg-navy` with white heading, fade-in on scroll
- Tabs: add section heading, green accent border, fade-in on scroll

**Modified file: `src/index.css`**
- Add `animation-delay` utility classes (delay-100, delay-200, delay-300)
- Add `opacity-0` starting state for scroll-triggered elements

### Visual Flow (top to bottom)

```text
+------------------------------------------+
|  HERO - Deep Navy BG                     |
|  [Staggered fade-in text] | [Photo]      |
+------------------------------------------+
|  BADGES - Light cream, fade-in on scroll |
+------------------------------------------+
|  VIDEO - Navy BG, "Meet Dmitriy" heading |
|  [Video fades in on scroll]              |
+------------------------------------------+
|  TABS - Cream BG, green accent border    |
|  "Professional Background" heading       |
|  [Content fades on tab switch]           |
+------------------------------------------+
```

This creates a rhythm of alternating light/dark sections with purposeful motion that feels premium without being distracting.

