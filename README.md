# Professional Portfolio

[![Astro](https://img.shields.io/badge/ASTRO-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind](https://img.shields.io/badge/TAILWIND-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/MIT-44CC11?style=for-the-badge)](https://opensource.org/license/mit)

A fast, minimalist portfolio site built with Astro. Originally based on the [Academic Portfolio Astro](https://github.com/rubzip/academic-portfolio-astro) template, customized for a professional software developer portfolio. 

Strongly inspired by [Academic Pages](https://github.com/academicpages/academicpages.github.io) and [AstroPaper](https://github.com/satnaing/astro-paper), this template prioritizes content readability, SEO discoverability, and ease of configuration without touching the UI code.

## ✨ Features

- **Markdown-Driven Content:** Manage bio, CV, projects, and writing through `.md` files
- **LaTeX Support:** Math rendering via `remark-math`/`rehype-katex` for technical writing
- **Light/Dark Mode:** Toggleable theme with customizable color palettes
- **Toggleable Sections:** Enable/disable sections (blog, publications, talks, teaching) via config
- **Fast Performance:** Built with Astro for minimal JavaScript and fast load times
- **Analytics Ready:** Configuration options for Umami and GA4
- **Two-Column Layout:** Sticky left sidebar with scrollable main content area

## 🚀 Getting Started

### Install Dependencies
This project uses Node.js (requires **Node.js >= 22.12.0**).
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Your local server will start at `http://localhost:4321`.

## 📂 Architecture & Structure

This project follows a centralized configuration architecture and is driven entirely by Markdown/MDX content.

```text
/
├── public/                 # Static assets (images, favicon, robots.txt)
├── src/
│   ├── assets/             # Global icons (`icons.ts`)
│   ├── components/         # Reusable Astro UI components (Tailwind classes used for styling)
│   ├── config/             # ⚙️ ALL GLOBAL CONFIGURATION LIVES HERE
│   │   ├── site.ts         # Meta details & Analytics (SITE, THEME_CONFIG, SETTINGS)
│   │   ├── pages.ts        # Enable/Disable sections & subtitles (PAGES)
│   │   ├── themes.ts       # Color palettes
│   │   ├── navigation.ts   # Navbar links (NAV_LINKS)
│   │   └── social.ts       # Social media links (SOCIALS)
│   ├── content/            # 📝 ALL MARKDOWN CONTENT LIVES HERE
│   │   ├── bio.md
│   │   ├── cv.md
│   │   ├── posts/          # Blog posts (optional)
│   │   ├── projects/       # Featured projects
│   │   ├── publications/   # Research papers (optional)
│   │   ├── talks/          # Presentations (optional)
│   │   └── teaching/       # Courses (optional)
│   ├── layouts/            # Page layout wrappers
│   ├── pages/              # Astro routing
│   ├── styles/             # Global CSS (`global.css` - Theme colors, base styles)
│   └── types/              # TypeScript interfaces (content, display, config, themes)
└── content.config.ts       # Zod schemas for all markdown collections
```

## 📖 Configuration

All configuration is managed centrally in the `src/config` directory. Modify these files to personalize your portfolio:

## 📋 Configuration

All configuration is managed centrally in the `src/config` directory. Modify these files to personalize your portfolio without touching any UI code:

| File | Purpose |
| :--- | :--- |
| [`pages.ts`](src/config/pages.ts) | Enable/disable entire sections (e.g., `talks`, `teaching`) and set page subtitles. |
| [`themes.ts`](src/config/themes.ts) | Define and manage all color palettes. Use `THEME_CONFIG` in `site.ts` to apply. |
| [`site.ts`](src/config/site.ts) | Manage metadata, analytics keys (Umami/GA4), and critical file paths. |
| [`navigation.ts`](src/config/navigation.ts) | Define the primary navigation bar links. |
| [`social.ts`](src/config/social.ts) | Configure social media links appearing in the footer and header. |

## 🛠️ Build Commands

All standard build commands run through `npm`:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server on `localhost:4321` |
| `npm run build` | Builds your project for production output into `./dist/` |
| `npm run preview` | Previews your production build locally |
| `npm run format` | Runs Prettier on all files to format code |

## 📄 License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.
