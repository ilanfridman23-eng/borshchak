
# Recreate Blog Posts as Internal Pages

## Overview
Convert the 10 blog posts from external links to internal pages hosted on the site, using the exact same text content from each article. Each blog post will be a dedicated page with a clean, readable article layout. The Resources page links will be updated to point to internal routes instead of external URLs.

## What Will Change

### 1. New Shared Blog Post Layout Component
Create a reusable `BlogPost` component (`src/components/BlogPost.tsx`) that provides a consistent article layout for all 10 posts:
- Hero section with the post's featured image, title, category badge, and date
- Clean, readable article body with proper heading hierarchy (h2, h3), paragraphs, lists, tables, and FAQ sections
- A "Back to Blog" link at the top
- CTA section at the bottom with a phone call button
- Legal disclaimer
- Uses existing typography classes (heading-hero, text-body, section-padding)

### 2. New Blog Data File
Create `src/data/blogPosts.ts` to centralize all blog post data:
- Each post gets a unique slug (e.g., `custody-state-lines`, `questions-before-divorce`)
- Stores metadata (title, excerpt, date, category, image) and the full article content as structured data (arrays of content sections with type: paragraph, heading, list, table, faq)
- This keeps the content organized and makes it easy to add more posts later

### 3. Ten New Blog Post Content Files
Create individual content files under `src/data/blog/` -- one per post -- to keep file sizes manageable:
- `custody-state-lines.ts`
- `questions-before-divorce.ts`
- `judges-fair-settlements.ts`
- `moving-out-risks.ts`
- `filing-out-of-state.ts`
- `college-expenses.ts`
- `inheritance-divorce.ts`
- `alimony-disputes.ts`
- `fast-track-dissolution.ts`
- `evidence-essentials.ts`

Each file exports the full article content (exact text from the original posts), structured as sections with headings, paragraphs, bullet lists, and tables.

### 4. New Blog Post Page Component
Create `src/pages/BlogPostPage.tsx`:
- Uses `react-router-dom` `useParams` to get the post slug from the URL
- Looks up the matching post data from the centralized data file
- Renders the `BlogPost` layout component with the post's content
- Shows a 404/not found state if the slug doesn't match any post

### 5. Update Routes in App.tsx
Add a single dynamic route:
```
/blog/:slug
```
This handles all 10 posts (and any future ones) with one route definition.

### 6. Update Resources Page
- Change the `href` for each post from external URLs to internal `/blog/{slug}` paths
- Change the `<a>` tags from external links to React Router `<Link>` components (removes `target="_blank"`)
- Update the `blogPosts` array to use slugs instead of external hrefs

## Article Layout Design
Each blog post page will feature:
- Full-width hero image at the top
- Title, category badge, and date overlaid or below the image
- Article body in a readable single-column layout (max-w-3xl, centered)
- Proper semantic HTML: h2 for section headings, p for paragraphs, ul/li for lists, table for data tables
- Blockquote styling for FAQ answers
- Bottom CTA section matching the site's existing style

## Technical Details

### File Structure
```
src/
  components/
    BlogPost.tsx          (new - reusable article layout)
  data/
    blogPosts.ts          (new - centralized post index with slugs)
    blog/
      custody-state-lines.ts
      questions-before-divorce.ts
      judges-fair-settlements.ts
      moving-out-risks.ts
      filing-out-of-state.ts
      college-expenses.ts
      inheritance-divorce.ts
      alimony-disputes.ts
      fast-track-dissolution.ts
      evidence-essentials.ts
  pages/
    BlogPostPage.tsx      (new - dynamic page component)
    Resources.tsx          (modified - internal links)
  App.tsx                  (modified - add /blog/:slug route)
```

### Content Structure Per Blog Post
Each content file will export an object like:
```typescript
{
  slug: "custody-state-lines",
  title: "Enforcing Ohio Child Custody Orders...",
  excerpt: "...",
  date: "February 10, 2026",
  category: "Child Custody",
  image: blogCustodyStateLines,
  sections: [
    { type: "paragraph", content: "..." },
    { type: "heading", content: "..." },
    { type: "paragraph", content: "..." },
    { type: "list", items: ["...", "..."] },
    { type: "table", headers: [...], rows: [[...], [...]] },
    { type: "faq", items: [{ question: "...", answer: "..." }] }
  ]
}
```

### Routing
- `/resources` -- Blog listing page (existing, updated with internal links)
- `/blog/:slug` -- Individual blog post pages (new)

All 10 articles will use the exact same text content from the original dlbcounsel.com blog posts, just redesigned to match the site's existing visual style.
