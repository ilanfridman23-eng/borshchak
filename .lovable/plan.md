

# Testimonials Page

## Overview
Create a dedicated Testimonials page featuring the provided video testimonial prominently, combined with the existing Google Reviews carousel, award logos, and a hero section -- all modeled after the original site's testimonials page.

## Page Structure

1. **Hero Section** -- Full-width background image (reusing `happy-family.jpg`) with overlay text: "Testimonials for Borshchak Law Group" heading, a subtitle about alleviating stress, and a "Leave us a Google review" CTA button linking to the Google Maps listing.

2. **Award Logos Bar** -- Reuse the existing `AwardLogos` component directly beneath the hero.

3. **Featured Video Testimonial** -- A large, prominent section with the embedded YouTube video (`https://www.youtube.com/embed/AHfY54OdW2E`) centered, with a heading like "Hear From Our Clients" and a brief intro line. Styled similarly to the existing `VideoSection` but with more visual weight (larger max-width, accent border or background treatment).

4. **Google Reviews Section** -- Reuse the existing `GoogleReviews` component (filterable carousel with rating distribution, review cards, and detail modal).

5. **Final CTA** -- Reuse the existing `FinalCTA` component for a consultation call-to-action at the bottom.

## Technical Details

### New Files
- `src/pages/Testimonials.tsx` -- New page component composing Header, hero, AwardLogos, video section, GoogleReviews, FinalCTA, and Footer.

### Modified Files
- `src/App.tsx` -- Add route: `/testimonials` pointing to the new `Testimonials` page.
- `src/components/Header.tsx` -- Update the navigation to include a "Testimonials" link (if not already present).

### Patterns Followed
- Same Header/Footer wrapper as all other pages
- Playfair Display for headings, Lora for body text
- Deep slate navy, warm cream, forest green accent palette
- Scroll-triggered animations via `useScrollAnimation`
- Framer Motion for entrance animations
- Mobile-first responsive layout

