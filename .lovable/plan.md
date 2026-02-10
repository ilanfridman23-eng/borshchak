

## Make Navigation Larger

Increase the size of the logo, menu text, CTA button, and overall navigation bar height in `src/components/Header.tsx`.

### Changes

**Logo**
- Increase from `h-10 md:h-12` to `h-14 md:h-16`

**Desktop menu items**
- Navigation triggers and links: increase from `text-sm` to `text-base`, and height from `h-10` to `h-12`
- Dropdown items: increase from `text-sm` to `text-base`, padding from `py-2` to `py-2.5`

**CTA button**
- Increase from `text-sm px-5 py-2.5` to `text-base px-6 py-3`
- Phone icon from `w-4 h-4` to `w-5 h-5`

**Nav bar padding**
- Increase from `py-4` to `py-5`

**Mobile hamburger**
- Increase menu icon from `w-6 h-6` to `w-7 h-7`

**Only file modified:** `src/components/Header.tsx`

