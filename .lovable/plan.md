

# Add Stock Photos to Legal Services Pages

Add 2-3 real stock photographs from Unsplash to each of the four legal services pages. Images will be placed between content sections to break up text and add visual warmth.

## Image Selection (Unsplash -- real, royalty-free photography)

### Divorce Page
1. **Couple/family in discussion** -- placed after the Divorce vs. Dissolution comparison
2. **Courthouse or legal documents** -- placed after the fault grounds section
3. **Person reflecting/new beginning** -- placed before the quiz

### Child Custody Page
1. **Parent with child** -- placed after the custody allocation comparison
2. **Family walking together** -- placed after the court factors section
3. **Child playing** -- placed before the quiz

### Child Support Page
1. **Parent and child together** -- placed after the lawyer roles section
2. **Financial planning/documents** -- placed after the calculation factors
3. **Family outdoors** -- placed before the quiz

### Prenuptial Agreement Page
1. **Couple holding hands/wedding prep** -- placed after the "What Is a Prenup" section
2. **Signing documents** -- placed after the invalidation section
3. **Happy couple** -- placed before the quiz

## Implementation Details

Each image will be inserted as a full-width section between existing content blocks:

```text
<section className="py-0">
  <div className="container max-w-4xl">
    <img
      src="https://images.unsplash.com/photo-XXXXX?w=1200&q=80"
      alt="Descriptive alt text"
      className="w-full h-64 md:h-80 object-cover rounded-lg"
    />
  </div>
</section>
```

- Images use `object-cover` for consistent aspect ratios
- Responsive height: 256px on mobile, 320px on desktop
- Rounded corners to match the card-based design language
- Meaningful alt text for accessibility

### Files Modified
- `src/pages/Divorce.tsx` -- 3 image sections inserted
- `src/pages/Custody.tsx` -- 3 image sections inserted
- `src/pages/ChildSupport.tsx` -- 3 image sections inserted
- `src/pages/PrenuptialAgreement.tsx` -- 3 image sections inserted

### No New Dependencies
Standard `<img>` tags with Unsplash URLs -- no packages needed.
