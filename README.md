# VOLONCE AI Chatbot Creator

**Company:** VOLONIS TECHNOLOGIES (https://www.volonis.in)
**Tagline:** Create Your AI. Connect Your Website. Grow Your Business.
**Description:** An AI chatbot builder for every business.

## Step 1 scope

This is **Step 1 of 15**: the project foundation and a frontend prototype.

Included: landing page (`/`), features page (`/features`), dashboard preview (`/dashboard`),
new chatbot form (`/dashboard/chatbots/new`), custom 404 page, responsive navigation,
reusable UI components, and browser-side form validation.

**Not included yet:** sign-up/login, database, website scanning, AI replies, live chat,
embed widget, leads, subscriptions, payments. Nothing in this project talks to a server or
stores data. Any numbers on the dashboard are labelled demonstration data.

## Prerequisites (Windows)

- Windows 10 or 11 with PowerShell
- Node.js **20 LTS or newer** (22 LTS is fine). Minimum supported: 18.18.
- npm (installed together with Node.js)

Check your versions:

```powershell
node -v
npm -v
```

## Install and run

```powershell
cd D:\VOLONCE-AI-CHATBOT-CREATOR
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Press `Ctrl + C` in PowerShell to stop.

## Check the production build

```powershell
npm run typecheck
npm run lint
npm run build
npm run start
```

`npm run start` serves the production build at http://localhost:3000.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next.js rules) |
| `npm run typecheck` | TypeScript check, no output files |

## Folder structure

```
app/                     Pages (Next.js App Router)
  layout.tsx, globals.css, page.tsx, not-found.tsx, icon.png
  features/page.tsx
  dashboard/layout.tsx, page.tsx
  dashboard/chatbots/new/page.tsx
components/
  layout/                Header, footer, logo, page shell
  ui/                    Button, Card, Badge, form Field
  dashboard/             Sidebar and overview
  chatbot/               Onboarding form and widget illustration
lib/                     Site constants, validation, small helpers
public/logo.png          Logo supplied by the project owner
```

Differences from the suggested structure: `app/icon.png` (browser tab icon) and
`.eslintrc.json` were added; `components/layout/site-shell.tsx` wraps the public pages;
`app/dashboard/layout.tsx` provides the dashboard sidebar. Tailwind CSS 3 is used, so
`tailwind.config.ts` is present.

## Current limitations

- The form only validates input in your browser. It does not save or send anything.
- The widget on the landing page is a static illustration, not a chatbot.
- The dashboard "Demonstration data" view is sample text, not real data.
- Dependencies were pinned but `package-lock.json` is not included (see STEP-CHANGELOG.md).

## Planned steps

1. Project foundation and UI (this step)
2. Authentication and database foundation
3. Dashboard improvements and account structure
4. Chatbot creation and configuration
5. Safe public website URL scanner
6. Business knowledge base and review workflow
7. AI chat engine with grounded answers
8. Embeddable website chatbot widget
9. Conversation history and leads
10. Widget customization
11. Subscription plan foundation
12. Payment integration and server-side access control
13. Security hardening and testing
14. Deployment
15. Integration with the VOLONIS website product section

This is a roadmap, not a claim that these features exist.

## Keeping secrets out of GitHub

- Put real keys only in `.env.local`. `.gitignore` already excludes `.env` and `.env.*`
  (except `.env.example`).
- `.env.example` must contain names only, never real values.
- Before every commit run `git status` and check no `.env*` file is listed.
- Never paste tokens or passwords into commands or code. If a secret is ever committed,
  revoke it at the provider first, then clean the history.
