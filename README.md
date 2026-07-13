# Nicholas Laviano Portfolio

A responsive developer portfolio for Nicholas Laviano.

**Technology:** Angular, TypeScript, CSS

## Local Setup

```bash
npm ci
npm start
```

## Production Build

```bash
npm run build
```

## Live Site

[nicholaslaviano.dev](https://nicholaslaviano.dev)

## Deployment

Pushes to `main` trigger GitHub Actions, which builds the Angular app and deploys `dist/nicholas-laviano-portfolio/browser` to GitHub Pages.

## Project Structure

- `src/app/data` contains portfolio content.
- `src/app/components` contains reusable components.
- `src/app/pages` contains routed pages.
- `public/assets/docs` contains the resume and project reports.
- `public/CNAME` configures the custom domain.
