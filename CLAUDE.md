# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server at localhost:3000
pnpm build    # Production build
pnpm lint     # Run ESLint
```

## Architecture

This is a Next.js 16 portfolio site using the App Router with React 19. It uses pnpm as the package manager.

### Key Technologies

- **Styling**: SCSS modules (`.module.scss` files in `styles/`)
- **Animations**: GSAP with ScrollTrigger for intro and scroll-based animations
- **Smooth Scrolling**: Lenis library wrapping the app
- **Blog**: MDX files in `app/blog/post/[slug]/page.mdx` with Shiki syntax highlighting

### Project Structure

- `app/` - App Router pages and layouts
  - `page.tsx` - Homepage with hero, about, blog preview, and projects sections
  - `blog/post/` - MDX blog posts with shared layout
- `components/` - React components
  - `intro-overlay.tsx` - Initial ball animation overlay (client component)
  - `smooth-scroll.tsx` - Lenis smooth scroll wrapper (client component)
- `utils/`
  - `project-data.ts` - Portfolio project definitions with images
  - `hooks/use-ball-animation.tsx` - GSAP intro animation hook with responsive breakpoints and reduced motion support
- `styles/` - SCSS modules and global styles

### Animation System

The homepage uses a GSAP-powered intro animation (`use-ball-animation.tsx`) that:

- Bounces a ball element, then scales it to reveal content
- Uses `gsap.matchMedia()` for responsive behavior (768px breakpoint)
- Respects `prefers-reduced-motion`
- ScrollTrigger animations for projects and footer
- Skip animation with `?back=true` query param (used when navigating back from blog posts)

### MDX Configuration

MDX is configured in `next.config.mjs` with:

- Shiki rehype plugin for syntax highlighting (one-dark-pro theme)
- Custom components in `mdx-components.tsx` for links, images, and code blocks
