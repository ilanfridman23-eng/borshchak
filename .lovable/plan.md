

## Change Body Font to Lora

Replace the current body/content font (Inter) with **Lora**, an elegant serif font that pairs beautifully with Playfair Display headings. This will give the site a more refined, professional law firm feel.

### What will change
- All body text, paragraphs, buttons, navigation links, and UI elements will use Lora instead of Inter
- Headings will remain in Playfair Display (no change)
- The site will feel warmer and more traditional -- fitting for a family law firm

### Technical details

**1. `src/index.css`** (line 5)
- Update the Google Fonts import to load **Lora** (weights 400, 500, 600) instead of Inter
- Update the `body` font-family rule to use Lora

**2. `tailwind.config.ts`**
- Update the `fontFamily.sans` definition to use `'Lora'` as the primary font (with serif fallbacks)

These two changes will cascade across the entire site automatically.

