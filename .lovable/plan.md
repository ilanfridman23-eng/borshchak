

# Rebuild Child Custody Page (Following Divorce Page Framework)

Starting with the first legal services page: **Child Custody**. This will be rebuilt to match the rich, interactive format of the Divorce page, using content from the original website plus additional facts.

## Page Structure (Mirroring Divorce Page)

### 1. Hero Section (Navy background, staggered fade-in animations)
- Subtitle: "Columbus, OH Child Custody Lawyers"
- Headline: "Child Custody in Columbus, OH? Here's How We Protect Your Family"
- Body text introducing the emotional weight of custody and the firm's approach
- CTA: "Free Consultation: 380-324-0878"

### 2. Custody Allocation Methods (Side-by-side comparison cards, like Divorce vs. Dissolution)
- **Sole Custody** -- one parent holds primary rights and responsibilities
- **Shared Parenting** -- both parents divide rights and responsibilities
- Info callout box: Ohio law note about unmarried parents (mother gets default custody)

### 3. Types of Custody (Expandable cards, like fault grounds)
Tap-to-reveal cards for each custody type:
- **Physical Custody** -- where the child lives day-to-day
- **Legal Custody** -- decision-making authority (medical, education, religion)
- **Sole Physical Custody** -- child lives primarily with one parent
- **Joint Physical Custody** -- child splits time between both parents
- **Sole Legal Custody** -- one parent makes all major decisions
- **Joint Legal Custody** -- both parents share major decisions
- **Grandparent Visitation Rights** -- when grandparents can petition for access

### 4. How Courts Decide (Navy background section with icon cards, like "Common Divorce Matters")
Factors Ohio courts consider when determining custody:
- History of domestic violence or child abuse
- Alcohol or substance abuse history
- Psychiatric concerns affecting the child's welfare
- Ability to make age-appropriate decisions
- Communication with the child
- Safe and adequate living conditions
- The child's own preferences

### 5. Custody Modification (Card section, like "Divorce Trial" with 3-step process)
Three-step visual flow:
1. **Change in Circumstances** -- relocation, financial change, remarriage
2. **File a Motion** -- submit modification request to the court
3. **Court Review** -- judge evaluates whether change serves child's best interest

### 6. Quiz Section (3 questions recapping key facts)
- Q1: "In Ohio, if parents are unmarried, who typically gets initial custody?" (Answer: The mother)
- Q2: "What standard do Ohio courts use to decide custody?" (Answer: Best interests of the child)
- Q3: "Can grandparents petition for visitation rights in Ohio?" (Answer: Yes, if they can prove it serves the child's best interest)

### 7. Final CTA (Navy background, matching Divorce page)
- "Protect Your Relationship With Your Children"
- Call + consultation buttons

## Technical Details

### Files Modified
- **`src/pages/Custody.tsx`** -- Complete rewrite using the same component patterns from Divorce.tsx:
  - `ExpandableCard` component for custody types
  - `CustodyQuiz` component with score tracking and feedback
  - `useScrollAnimation` hook for section entrance animations
  - `framer-motion` for expandable cards and quiz feedback
  - Same icon system (`lucide-react`), same CSS utility classes
  - Same section ordering and visual rhythm as Divorce page

### No New Dependencies
All required packages (`framer-motion`, `lucide-react`, scroll animation hook) are already installed and in use.

