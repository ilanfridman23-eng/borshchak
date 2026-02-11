
# Add Unique Images to Blog Posts

## Overview
Generate 10 unique, professional images -- one for each blog post -- using the AI image generation tool (Nano banana). Each image will be tailored to the post's topic (custody, divorce, finances, etc.) and saved as project assets. The blog card layout will be updated to display the image prominently above each post's content.

## Image Plan

Each post will get a thematic image:

| # | Post Topic | Image Concept |
|---|-----------|---------------|
| 1 | Child Custody Across State Lines | Parent holding child's hand near a map/road |
| 2 | Questions Before Filing for Divorce | Person reviewing documents at a desk |
| 3 | Ohio Judges & Fair Settlements | Courtroom with judge's gavel and scales |
| 4 | Risks of Moving Out During Divorce | Empty room with moving boxes and keys |
| 5 | Filing for Divorce Out of State | Ohio state outline with legal documents |
| 6 | Divorce & College Expenses | Graduation cap on stack of financial papers |
| 7 | Inheritance in Divorce | Family heirloom/jewelry with legal documents |
| 8 | Alimony Disputes | Two people in mediation/negotiation setting |
| 9 | Fast-Tracking Dissolution | Calendar with clock, signifying speed |
| 10 | Key Evidence for Divorce | Organized evidence folder with documents |

## Technical Changes

### New Assets (10 files)
- `src/assets/blog-custody-state-lines.jpg`
- `src/assets/blog-questions-before-divorce.jpg`
- `src/assets/blog-judges-fair-settlements.jpg`
- `src/assets/blog-moving-out-risks.jpg`
- `src/assets/blog-filing-out-of-state.jpg`
- `src/assets/blog-college-expenses.jpg`
- `src/assets/blog-inheritance-divorce.jpg`
- `src/assets/blog-alimony-disputes.jpg`
- `src/assets/blog-fast-track-dissolution.jpg`
- `src/assets/blog-evidence-essentials.jpg`

### Modified File: `src/pages/Resources.tsx`
- Add an `image` field to each blog post object importing the corresponding asset
- Update the card layout to include the image at the top of each card with a consistent aspect ratio, rounded top corners, and a subtle zoom-on-hover effect
- The card structure becomes: image -> category/date -> title -> excerpt -> "Read More"
