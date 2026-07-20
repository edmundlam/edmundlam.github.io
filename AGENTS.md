# AGENTS.md

## Commands
- `npm run dev` - Start dev server (localhost:4321)
- `npm run build` - Production build (outputs to `./dist/`)
- `npm run preview` - Preview production build locally
- `npm run astro` - Direct Astro CLI access

## Requirements
- Node.js >= 22.12.0

## Architecture
- **Barrel files:** `src/config/index.ts`, `src/types/index.ts`
- **Content:** `src/content/` - Add `.md` files to subdirectories (posts/, publications/, projects/, talks/, teaching/)
  - `bio.md` - Profile info (name, avatar, shortBio, institution)
  - `cv.md` - CV entries (experience, education arrays)
- **Config:** `src/config/` - Centralized configuration
  - `site.ts` - SITE (metadata), THEME_CONFIG (themes), SETTINGS (UI toggles), ANALYTICS (GA4/Umami)
  - `pages.ts` - PAGES (enable/disable sections, subtitles)
  - `navigation.ts` - NAV_LINKS (navbar)
  - `social.ts` - SOCIALS (footer/header links)
  - `themes.ts` - Color palette definitions
- **Types:** `src/types/` - TypeScript interfaces (content.ts, display.ts, config.ts, themes.ts)
- **Styles:** `src/styles/global.css` - All CSS classes (see DESIGN-GUIDE.md for class system)
- **Assets:** `src/assets/icons.ts` - Icon definitions

## Content Schema
- Collections defined in `src/content.config.ts` with Zod validation
- Supported collections: `bio`, `cv`, `posts`, `projects`, `publications`, `talks`, `teaching`
- Each collection has specific frontmatter fields (title, date, tags, external_url, etc.)
- `example_contents/` directory has template `.md` files for each collection type

## Key Constraints
- **No `<style>` in `.astro` files** - Use global.css and Tailwind classes only
- **Two-column layout:** Left sidebar (sticky profile, 280px), Right main (scrollable content, max-width 800px)
- **Markdown-driven:** All content in `.md` files with YAML frontmatter
- **Flat design:** No drop shadows, no glassmorphism, minimal border-radius (0.25rem)
- **Typography:** Inter for body/headings, JetBrains Mono for code/tags
- **One accent color per theme** - Use only for hover states and active links

## Image Assets
- **Location:** `src/assets/` for component imports, `public/images/` for content images
- **Preferred format:** WebP for photos/screenshots (much smaller than JPEG/PNG)
- **Converting to WebP:** Use `cwebp` (installed: v1.6.0)
  ```bash
  # Single file
  cwebp input.jpg -o output.webp

  # With quality (default 75)
  cwebp input.jpg -q 80 -o output.webp

  # Batch convert
  for img in *.{jpg,jpeg,png}; do
    [ -f "$img" ] && cwebp "$img" -o "${img%.*}.webp"
  done
  ```
- **Content images** (for blog posts): Place in `public/images/`, reference as `/images/filename.webp`
- **Component assets:** Place in `src/assets/`, import directly in `.astro` files

## Deployment
- Push to `staging` branch triggers GitHub Pages deployment via `.github/workflows/deploy.yml`

## Notes
- Tailwind CSS v4 uses `@tailwindcss/vite` plugin (no tailwind.config.js)
- LaTeX math rendering via `remark-math`/`rehype-katex`
- Analytics via GA4 (`ANALYTICS.ga4Id`) and Umami (`ANALYTICS.umami.websiteId`)
- No lint/typecheck scripts configured
- See DESIGN-GUIDE.md for complete CSS class system and design principles