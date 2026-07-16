# Oil & Gas Production Dashboard Structure

This project is a Next.js 16 App Router application for oil and gas production analysis, forecasting, and engineering calculations. The first milestone should be a working product shell: public home page, auth pages, protected dashboard, input forms, formula engine, and result visualizations.

## Product Goal

The app should help a user:

- Enter well, reservoir, and production data.
- Calculate engineering outputs from formulas.
- Estimate production decline and forecast future production.
- Estimate required wells or reservoir capacity from user inputs.
- Save scenarios and compare forecast cases.
- View production and prediction results in dashboard charts.

## Recommended Pages

| Route | Purpose | Rendering |
| --- | --- | --- |
| `/` | Public landing page introducing the app with Login and Register buttons. | SSG/static Server Component |
| `/login` | User login form. | Server page + Client form |
| `/register` | User registration form. | Server page + Client form |
| `/dashboard` | Main authenticated overview with KPIs and latest scenarios. | SSR/dynamic Server Component |
| `/dashboard/production` | Production data entry, uploaded records, and production charts. | SSR + Client charts/forms |
| `/dashboard/prediction` | Forecast and decline-curve prediction workspace. | SSR + Client interactive charts |
| `/dashboard/wells` | Well planning inputs and necessary-well calculations. | SSR + Client forms |
| `/dashboard/reservoir` | Reservoir property inputs and reservoir calculation results. | SSR + Client forms |
| `/dashboard/scenarios` | Saved engineering cases and comparison table. | SSR/dynamic |
| `/dashboard/reports` | Exportable summaries and report history. | SSR; later PDF/API route |
| `/dashboard/settings` | Profile, units, company defaults, and security settings. | SSR/dynamic |

## Next.js Rendering Plan

Use the App Router from `app/`. In this Next.js version, pages and layouts are Server Components by default. Add `"use client"` only to components that need browser behavior such as form state, chart hover state, tabs, filters, or local interactions.

| Technique | Use In This App | Why |
| --- | --- | --- |
| SSG/static rendering | Home page, public docs, static formula descriptions. | Fast and cacheable; no user-specific data. |
| SSR/dynamic rendering | Dashboard pages, saved scenarios, user profile, protected data. | Reads cookies/session and database per user. |
| CSR/client components | Forms, calculators, Recharts charts, sliders, scenario comparison controls. | Needs state, events, and browser interactivity. |
| Route Handlers | Auth endpoints, imports, exports, prediction API, report generation. | Server-only APIs under `app/api/.../route.ts`. |
| Server Actions | Login/register submissions, save scenario, delete scenario. | Secure server-side mutations from forms. |

Note: you wrote `CSG`; in Next.js terms this is usually `CSR` (Client-Side Rendering) or client components. We can use client components inside SSR/SSG pages.

## Proposed Folder Structure

```text
app/
  layout.tsx
  globals.css
  (marketing)/
    page.tsx
    _components/
      hero.tsx
      feature-list.tsx
  (auth)/
    login/
      page.tsx
    register/
      page.tsx
    _components/
      auth-form.tsx
  dashboard/
    layout.tsx
    page.tsx
    production/
      page.tsx
    prediction/
      page.tsx
    wells/
      page.tsx
    reservoir/
      page.tsx
    scenarios/
      page.tsx
      [scenarioId]/
        page.tsx
    reports/
      page.tsx
    settings/
      page.tsx
    _components/
      dashboard-shell.tsx
      sidebar.tsx
      kpi-grid.tsx
      production-chart.tsx
      forecast-chart.tsx
      calculation-form.tsx
  api/
    auth/
      login/
        route.ts
      register/
        route.ts
      logout/
        route.ts
    scenarios/
      route.ts
      [scenarioId]/
        route.ts
    calculations/
      production/
        route.ts
      reservoir/
        route.ts
      wells/
        route.ts

components/
  ui/
    button.tsx
  charts/
    line-chart.tsx
    decline-curve-chart.tsx
  forms/
    field.tsx
    unit-input.tsx

lib/
  auth/
    session.ts
    password.ts
    jwt.ts
  data/
    users.ts
    scenarios.ts
    production.ts
  formulas/
    production.ts
    reservoir.ts
    wells.ts
    decline.ts
  validation/
    auth.ts
    production.ts
    reservoir.ts
    wells.ts
  units/
    conversions.ts
  types/
    domain.ts
```

Route groups such as `(marketing)` and `(auth)` organize files without changing the URL. Private folders such as `_components` are not routes.

## Auth Plan

Use JWT only in an `HttpOnly`, `Secure`, `SameSite=Lax` cookie. Do not store JWT in `localStorage`.

Recommended flow:

1. Register validates email/password with Zod on the server.
2. Password is hashed before storing.
3. Login verifies password and creates signed JWT/session cookie.
4. Dashboard server pages verify the cookie before reading user data.
5. Logout clears the cookie.
6. Server Actions and Route Handlers repeat authorization checks before mutations.

Add `middleware.ts` or `proxy.ts` later if you want fast redirects from protected routes. Keep the real security checks close to the data functions in `lib/data`.

## Formula Modules

Keep formulas pure and testable in `lib/formulas`. UI components should call typed functions instead of embedding engineering math directly in React components.

Initial formula areas:

- `production.ts`: daily/monthly production totals, water cut, gas-oil ratio, cumulative production.
- `decline.ts`: exponential, harmonic, and hyperbolic decline curve calculations.
- `wells.ts`: required well count from target production, average well rate, uptime, and decline assumptions.
- `reservoir.ts`: STOIIP/GIIP style volumetric calculations, recovery factor, estimated ultimate recovery.
- `units/conversions.ts`: bbl, STB, MSCF, Mscm, psi, bar, ft, m, acre-ft conversions.

Example domain inputs:

- Oil rate, gas rate, water rate.
- Reservoir pressure and temperature.
- Porosity, permeability, net pay, area, saturation.
- Initial production rate, decline rate, decline exponent.
- Target production, facility capacity, uptime factor.

## Data Model Draft

Start simple. A future database can use these entities:

- `User`: id, name, email, passwordHash, role, createdAt.
- `Project`: id, userId, name, fieldName, country, unitSystem.
- `Well`: id, projectId, name, type, status, depth, coordinates.
- `ProductionRecord`: id, wellId, date, oilRate, gasRate, waterRate, pressure.
- `ReservoirCase`: id, projectId, name, area, netPay, porosity, saturation, formationVolumeFactor, recoveryFactor.
- `Scenario`: id, projectId, name, assumptions, resultSummary, createdAt.
- `Report`: id, projectId, scenarioId, title, generatedAt.

## Build Order

1. Replace the starter home page with the oil and gas landing page.
2. Add route groups for marketing, auth, and dashboard.
3. Build register/login UI and server-side validation.
4. Add JWT session cookie helpers.
5. Build protected dashboard layout and navigation.
6. Add formula modules and unit tests for formulas.
7. Add production/reservoir/well input forms.
8. Add Recharts visualizations.
9. Add scenario persistence.
10. Add reports/export.

## Engineering Notes

- Use Server Components by default.
- Use client components only for interactive forms/charts.
- Keep secrets and JWT signing code in server-only modules.
- Keep formulas independent from React so they can be tested.
- Validate every user input with Zod before calculating or saving.
- Store units with values or normalize values at the boundary.
- Add tests first around formulas because wrong engineering math is the highest product risk.
