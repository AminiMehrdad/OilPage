# Oil & Gas Dashboard

Next.js 16 App Router application for oil and gas production analysis, production prediction, well planning, and reservoir calculations.

## Project Plan

Read the project structure and implementation roadmap here:

- [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Main App Areas

- Public home page with product introduction.
- Login and register pages using server-side validation and JWT session cookies.
- Protected dashboard pages for production, prediction, wells, reservoir calculations, scenarios, reports, and settings.
- Formula modules under `lib/formulas` so engineering calculations stay testable and separate from UI.

## Next.js Usage

This app uses the App Router in `app/`.

- Use static rendering for public pages such as the home page.
- Use dynamic server rendering for authenticated dashboard pages.
- Use client components only for interactive forms, charts, filters, and calculators.
- Use route handlers or server actions for auth, saving scenarios, and calculation APIs.
