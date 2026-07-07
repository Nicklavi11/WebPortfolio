# Nicholas Laviano Portfolio - Angular Redesign

This branch rebuilds the portfolio as a modern Angular application. The old root-level static HTML pages were replaced with a component-driven Angular app in `src/`.

## Run Locally

```bash
npm install
npm start
```

Then open `http://localhost:4200/`.

## Build

```bash
npm run build
```

The production site is generated in:

```text
dist/nicholas-laviano-portfolio/browser
```

## Deploy

This branch includes `.github/workflows/deploy-angular.yml`. When the `angular-redesign` branch is pushed, GitHub Actions installs dependencies, builds the Angular app, and deploys the compiled output to GitHub Pages.

The custom domain is preserved through `public/CNAME`.

## Where Things Live

- `src/app/app.ts` stores the portfolio data and interaction logic.
- `src/app/app.html` renders the page using Angular template syntax.
- `src/styles.css` contains the full responsive visual design.
- `public/assets/docs/` contains the resume and project PDFs.
- `public/icons/favicon.svg` contains the site icon.
