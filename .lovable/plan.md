
# Increase Text Sizes Across All Pages

## What Changes
Scale up all typography throughout the site -- headings, body text, buttons, badges, and smaller text elements -- so everything reads larger and more impactful.

## Approach
The site uses a centralized typography system in `src/index.css` with utility classes (`.heading-hero`, `.heading-section`, `.heading-subsection`, `.text-body`, `.text-body-sm`, `.btn-cta`, `.btn-secondary`, `.trust-badge`). By bumping sizes in these classes, most pages update automatically. For any inline/hardcoded text sizes on individual pages, those will be updated too.

## Technical Details

### 1. Update global typography classes in `src/index.css`

| Class | Current | New |
|-------|---------|-----|
| `.heading-hero` | `text-4xl md:text-5xl lg:text-6xl` | `text-5xl md:text-6xl lg:text-7xl` |
| `.heading-section` | `text-3xl md:text-4xl` | `text-4xl md:text-5xl` |
| `.heading-subsection` | `text-xl md:text-2xl` | `text-2xl md:text-3xl` |
| `.text-body` | `text-base md:text-lg` | `text-lg md:text-xl` |
| `.text-body-sm` | `text-sm md:text-base` | `text-base md:text-lg` |
| `.btn-cta` | `text-base` | `text-lg` |
| `.btn-secondary` | `text-base` | `text-lg` |
| `.trust-badge` | `text-sm` | `text-base` |

### 2. Update base body font size in `src/index.css`
- Add `font-size: 1.05rem` (or `text-[1.05rem]`) to the `body` rule for a subtle global bump.

### 3. Update inline text sizes across pages
Scan and bump hardcoded `text-sm`, `text-base`, `text-xs` classes in:
- `src/pages/Divorce.tsx` -- quiz text, card descriptions, expandable cards
- `src/pages/HankSonderman.tsx` -- tab card content (`text-base` to `text-lg`)
- `src/pages/KeriReeves.tsx` -- same pattern
- `src/pages/DmitriyBorshchak.tsx` -- same pattern
- `src/pages/Index.tsx` and home section components (`HeroSection`, `TrustBlock`, `FinalCTA`, `FAQSection`, `ServicesOverview`, `WhoWeHelp`, `WhyChooseUs`, `ProcessSection`, `GoogleReviews`)
- `src/pages/About.tsx`, `src/pages/Contact.tsx`, `src/pages/Custody.tsx`, `src/pages/Mediation.tsx`, `src/pages/Process.tsx`, `src/pages/Resources.tsx`
- `src/components/Header.tsx` -- nav link text
- `src/components/Footer.tsx` -- footer text

General rule for inline sizes:
- `text-xs` becomes `text-sm`
- `text-sm` becomes `text-base`
- `text-base` becomes `text-lg`
- `text-lg` becomes `text-xl`

### 4. No structural or layout changes
Only font sizes and related padding on buttons change. No colors, spacing, or component architecture is modified.
