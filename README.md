# Portfolio 2025

A modern, single-page portfolio site built with React, TypeScript, Vite, and Tailwind CSS. The layout focuses on clarity, credibility, and conversion for product-focused frontend engineers.

## Features

- Responsive, accessible layout with polished typography and motion-ready structure
- Modular sections (Hero, About, Experience, Projects, Skills, Contact) backed by typed content data
- Tailwind CSS utilities with custom theme tokens for consistent visuals
- Mobile navigation drawer and smooth scrolling between sections
- Ready for deployment on Netlify, Vercel, Cloudflare Pages, or static hosting

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build locally:

   ```bash
   npm run preview
   ```

## Customization tips

- Update hero copy, social links, and contact details in the section components under `src/sections` and `src/components`.
- Modify the project, experience, and skill entries in `src/data` to reflect your work.
- Tailwind theme tokens, fonts, and shadows live in `tailwind.config.ts` and `src/index.css`.
- The Vite alias `@` resolves to `src`, keeping imports tidy when you add new modules.

## Deployment

Run `npm run build` and deploy the generated `dist` folder. Vite outputs a fully static bundle suitable for most hosting providers.
