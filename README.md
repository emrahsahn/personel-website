# Emrah Şahin — Personal Portfolio

Bilingual personal portfolio website built with Next.js. Showcases projects, experience, skills, and a blog in Turkish and English.

## Features

- **Bilingual (TR/EN)** — Language switcher with `next-intl`
- **Sections** — Hero, About, Experience, Projects, Skills, Contact
- **Blog** — MDX-based posts with locale-specific content
- **Design** — Colorful gradients, glassmorphism, Framer Motion animations
- **Responsive** — Mobile-first layout
- **SEO** — Open Graph metadata and locale-aware URLs

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| i18n | next-intl |
| Blog | MDX + gray-matter |
| Icons | Lucide React |
| Deploy | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/emrahsahn/github_own_website.git
cd github_own_website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000/tr](http://localhost:3000/tr) or [http://localhost:3000/en](http://localhost:3000/en).

### Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  [locale]/           # Locale-based routes (tr, en)
    blog/             # Blog list and post pages
    page.tsx          # Home page
components/           # UI components
content/blog/         # MDX blog posts (tr/, en/)
messages/             # i18n translation files
lib/                  # Data, blog helpers, site config
i18n/                 # next-intl routing and request config
```

## Adding Blog Posts

Create an MDX file under `content/blog/tr/` or `content/blog/en/`:

```mdx
---
title: "Post Title"
description: "Short description"
date: "2026-06-13"
---

Your content here...
```

## Deployment

The project is configured for [Vercel](https://vercel.com):

1. Import the GitHub repository on Vercel
2. Deploy (no extra configuration required)

## Author

**Emrah Şahin** — Software Engineer | AI & Computer Vision

- GitHub: [@emrahsahn](https://github.com/emrahsahn)
- LinkedIn: [emrah-şahin](https://www.linkedin.com/in/emrah-şahin-788799253)
- Email: sahinemrah3344@gmail.com

## License

This project is private and intended for personal portfolio use.
