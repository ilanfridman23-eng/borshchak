

## Redesign: Family Law Services Section

### Current State
The section uses a 50/50 split layout with a justice statue image on the left and a 2x2 grid of bordered cards on the right. The cards feel small and cramped, and the overall section lacks visual impact.

### Proposed Redesign

**Layout**: Full-width section with a navy background for contrast and visual weight. Centered heading with a subtitle, followed by a 4-column responsive grid of service cards.

**Cards**: Each card will feature:
- A relevant icon from Lucide (Scale, Users, Building2, Handshake)
- A green accent top border for brand continuity
- Title, description, and a "Learn more" link
- Cream/white card background against the navy section for strong contrast
- Subtle hover lift animation

**Responsive behavior**:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column stacked

**Animations**: Staggered fade-in-up for each card using the existing scroll animation system.

**Image removal**: The justice statue image will be removed from this section since it competes with the cards for attention. The section's visual identity comes from the navy background and icon-accented cards instead.

### Technical Details

**File**: `src/components/home/ServicesOverview.tsx`

- Remove the `justiceStatue` image import
- Add Lucide icons (Scale, Users, Building2, Handshake) to each service object
- Restructure layout to full-width navy background section with centered content
- Cards use `bg-card` with a `border-t-4` in green accent color
- Apply staggered scroll animation using the existing `useScrollAnimation` hook and stagger classes
- Section heading and subtitle rendered in white (navy-inverted) text

