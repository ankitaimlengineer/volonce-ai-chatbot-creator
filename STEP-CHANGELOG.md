# Step changelog

## Step 01 - Project foundation and UI

This is the foundation of the same continuing project. Later steps extend this codebase.

### Files created
Config: `package.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.mjs`,
`postcss.config.mjs`, `tailwind.config.ts`, `.eslintrc.json`, `.gitignore`, `.env.example`.
App: `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `app/features/page.tsx`,
`app/dashboard/layout.tsx`, `app/dashboard/page.tsx`, `app/dashboard/chatbots/new/page.tsx`,
`app/not-found.tsx`, `app/icon.png`.
Components: `components/layout/*` (4), `components/ui/*` (4), `components/dashboard/*` (2),
`components/chatbot/*` (2). Lib: `lib/site.ts`, `lib/validation.ts`, `lib/cn.ts`.
Other: `public/logo.png`, `README.md`, `STEP-CHANGELOG.md`.

### Main features
Landing page, features page (all items labelled planned), dashboard preview with empty and
demonstration views, onboarding form with label-based validation (URL format checked), 404
page, responsive header with mobile menu, skip link, visible focus styles.

### Tests actually performed (in the build environment)
- Ran: `lib/validation.ts` logic tests in Node - 10 website URL cases and the required-field
  checks behaved as expected.
- Ran: TypeScript strict check of `lib/*.ts` only.
- Ran: scan confirming every `@/...` import points to an existing file.

### Tests NOT performed
The build environment had no internet access, so `npm install` could not run. Therefore
these were **not** run and are **not** verified: `npm install`, `npm run typecheck` (full),
`npm run lint`, `npm run build`, `npm run dev`, and any browser or responsive check.
`package-lock.json` was not generated for the same reason.

### Build result
Not run. Please run the commands below and report any error.

### Known limitations
See README.md. First-run errors are possible in files that could not be compiled here.

### Commands to run
```powershell
cd D:\VOLONCE-AI-CHATBOT-CREATOR
npm install
npm run typecheck
npm run lint
npm run build
npm run dev
```
