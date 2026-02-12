

# Add In-Article Images to Blog Posts

## Overview
Add 4-5 unique, professionally themed images inside each of the 10 blog post articles. Images will be placed between content sections with varied visual treatments to break up text and create visual interest.

## Image Generation
Generate **50 total images** (5 per blog post), each themed to match the surrounding content section. Images will be saved as JPG assets.

## Varied Image Display Styles
To keep articles visually dynamic, the BlogPost component will support a new `"image"` section type with multiple layout variants:

| Variant | Description |
|---------|-------------|
| `full` | Full-width image spanning the article column with rounded corners |
| `float-right` | Smaller image floated to the right with text wrapping around it |
| `float-left` | Smaller image floated to the left with text wrapping around it |
| `side-by-side` | Two images displayed next to each other in a row |
| `captioned` | Full-width image with a styled caption underneath |

Each blog post will use a mix of these variants so no two articles feel identical.

## Technical Changes

### 1. Update BlogSection Type (`src/data/blog/custody-state-lines.ts`)
Add a new `"image"` section type to the union:
```typescript
| { type: "image"; src: string; alt: string; variant: "full" | "float-right" | "float-left" | "side-by-side" | "captioned"; caption?: string; src2?: string; alt2?: string }
```

### 2. Update BlogPost Component (`src/components/BlogPost.tsx`)
Add a new `case "image"` in the `renderSection` switch statement that renders different layouts based on the `variant` property:
- **full**: `rounded-xl overflow-hidden my-8` with full-width image
- **float-right**: `float-right ml-6 mb-4 w-1/3 rounded-lg` with smaller image
- **float-left**: `float-left mr-6 mb-4 w-1/3 rounded-lg` with smaller image
- **side-by-side**: Two images in a `grid grid-cols-2 gap-4 my-8` layout
- **captioned**: Full-width image with italic caption text below

Also add a `clear-both` div after floated images via a clearfix on headings.

### 3. Generate 50 New Image Assets
Five images per blog post, thematically matched:

**Blog 1 - Custody State Lines** (5 images)
- Parent and child at an airport/road trip
- Map of Ohio with legal gavel
- Courtroom interior with family law signage
- Parent signing legal documents
- Family walking together outdoors

**Blog 2 - Questions Before Divorce** (5 images)
- Person sitting at desk reviewing paperwork
- Notepad with checklist and pen
- Attorney meeting with client in office
- Couple sitting apart on a couch
- Courthouse exterior in Columbus

**Blog 3 - Judges & Fair Settlements** (5 images)
- Judge's gavel on wooden desk
- Scales of justice close-up
- Courtroom with judge's bench
- Legal documents being reviewed
- Handshake between professionals

**Blog 4 - Moving Out Risks** (5 images)
- Moving boxes in empty room
- House keys on a table
- Empty living room with sunlight
- Person loading car trunk
- Front door of a house

**Blog 5 - Filing Out of State** (5 images)
- US map with state boundaries
- Airport terminal
- Person on phone with laptop
- Stack of legal forms
- Highway road sign

**Blog 6 - College Expenses** (5 images)
- Graduation cap on books
- College campus building
- Calculator with financial documents
- Student studying at desk
- Tuition statement/bills

**Blog 7 - Inheritance Divorce** (5 images)
- Antique jewelry box
- Bank vault/safe deposit box
- Family photo album
- Financial advisor meeting
- Last will and testament document

**Blog 8 - Alimony Disputes** (5 images)
- Calculator and money on desk
- Two people in mediation
- Courtroom scene
- Financial spreadsheet on screen
- Professional consultation meeting

**Blog 9 - Fast Track Dissolution** (5 images)
- Calendar with dates circled
- Couple shaking hands amicably
- Clock on wall of office
- Signed legal agreement
- Simple clean desk with pen and paper

**Blog 10 - Evidence Essentials** (5 images)
- Organized file folders
- Laptop showing financial records
- Camera or phone (documentation)
- Evidence binder with tabs
- Attorney reviewing documents at desk

### 4. Update Each Blog Data File (10 files)
Insert 5 `{ type: "image", ... }` sections into each blog post's `sections` array, spaced evenly between existing content sections. Each post will use a different mix of variants. For example:

- Blog 1: full, float-right, captioned, side-by-side, full
- Blog 2: captioned, float-left, full, float-right, side-by-side
- Blog 3: float-right, full, side-by-side, captioned, float-left
- (and so on, rotated for variety)

### Files to Create
- 50 new image assets in `src/assets/` (e.g., `blog-custody-1.jpg` through `blog-evidence-5.jpg`)

### Files to Modify
- `src/data/blog/custody-state-lines.ts` - Add image type to BlogSection, add 5 image sections
- `src/data/blog/questions-before-divorce.ts` - Add 5 image sections
- `src/data/blog/judges-fair-settlements.ts` - Add 5 image sections
- `src/data/blog/moving-out-risks.ts` - Add 5 image sections
- `src/data/blog/filing-out-of-state.ts` - Add 5 image sections
- `src/data/blog/college-expenses.ts` - Add 5 image sections
- `src/data/blog/inheritance-divorce.ts` - Add 5 image sections
- `src/data/blog/alimony-disputes.ts` - Add 5 image sections
- `src/data/blog/fast-track-dissolution.ts` - Add 5 image sections
- `src/data/blog/evidence-essentials.ts` - Add 5 image sections
- `src/components/BlogPost.tsx` - Add image rendering with 5 variant styles

