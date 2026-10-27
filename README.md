# WHOZIN UI, Branding and Navigation

Krishi Patel's part of the Whozin project for COMP 3415 (P2): the shared UI, branding and navigation for the React + Vite website. It's built on the team repository's frontend so it can be merged into [JINAL-1/Whozin](https://github.com/JINAL-1/Whozin) as the `feature/ui-branding` branch.

## What's included

- React Router routes with a shared layout: navbar with a mobile menu, footer and a skip link
- Homepage with a keyword and location search that hands off to the search page
- Shared `Button`, `FormField` and `EventCard` components for the other features to reuse
- Original WHOZIN logo, square mark and favicon, plus the site title
- Design guidelines covering colours, typography, spacing, logo use and layout checks
- Automated tests for routing, the navbar, the homepage search and the shared components

Pages for log in, sign up, create event and search show a placeholder until those features are merged.

## Run it

You need Node.js 20 or newer.

```bash
cd frontend
npm install
npm run dev     # http://localhost:5173
npm test
npm run lint
```

## For teammates

- How to plug a page into the routes and use the shared components: [`frontend/README.md`](frontend/README.md)
- Design rules and logo files: [`docs/design-guidelines.md`](docs/design-guidelines.md), `frontend/public/brand/`
