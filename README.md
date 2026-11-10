# Mohamad Khaled Waked — Portfolio

React + Vite, JavaScript, and plain CSS. The approved editorial design now includes the introduction, complete PhysioCore and Sou2AI project sections, a project index, and an actionable contact section in English and Arabic.

## Local development

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5174
```

Open the URL printed by Vite. Port 5174 avoids the existing Sou2AI development app on port 5173.

```sh
npm run build
npm run lint
npm run preview -- --host 127.0.0.1 --port 4174
```

No deployment is configured or performed.

## Editing

- `src/content.js`: structured English and Arabic copy, project facts, and contact destinations.
- `src/components/Projects.jsx`: full PhysioCore and Sou2AI presentations. Sou2AI is explicitly in development, with supplied implemented capabilities clearly separated from its current status.
- `src/components/ArchitectureDiagram.jsx`: illustrative PhysioCore architecture, with a readable narrow-container variant.
- `src/components/Contact.jsx`: labeled email, phone, WhatsApp, LinkedIn, and GitHub links. Phone publication is explicitly authorized by the user's latest brief.
- `src/components/Shared.jsx`: shared link, CV, project fact, and technology components.
- `src/App.css` and `src/index.css`: responsive layouts, typography, colors, spacing, and accessibility rules.
- `DESIGN.md`: the approved design system and content rules.

Fonts are self-hosted in `public/fonts/`, with their licenses. PhysioCore's captured public homepage is in `public/images/`. The Sou2AI workflow is a labeled code-native illustration, not a screenshot or live demo. Project repository links, commercial results, education, and dates have not been invented.

## Actual CV required

No PDF is present in the workspace. The user has been asked to provide the actual CV. No CV has been fabricated and no broken or disabled CV links appear.

After receiving the actual PDF:

1. Verify it is the supplied CV and copy it to `public/documents/mohamad-khaled-waked-cv.pdf`.
2. Set `profile.cvUrl` in `src/content.js` to `/documents/mohamad-khaled-waked-cv.pdf`.
3. The shared component will show separate **View CV** and **Download CV** links near the introduction and contact section, translated in Arabic. View opens a new tab; Download uses a clean filename.
4. Rebuild and verify that the PDF loads in development and the production preview and that downloading returns the actual PDF.

The original brief's tester count (`1015`) remains omitted until it can be verified from the CV.

## Verification

- Production build and lint passed after the component and typography changes.
- English and Arabic have 117 matching content fields.
- Primary text colors meet WCAG AA on all five section backgrounds. Minimum measured contrast is 5.46:1 for secondary text on stone, and 7.55:1 for accent links on stone.
- Chrome checks confirmed 17px reading text, Arabic line height of 34px, language persistence, translated document title, correct `lang`/`dir`, internal anchors, and no horizontal overflow at the tested 320px, 390px, 768px, 1440px, and 1920px widths.
- Keyboard checks confirmed the 3px focus outline, skip link moving focus to `main`, Tab/Space language switching, and contact link focus.
- The contact destinations match the user's exact addresses. Email and telephone are normal protocol links. WhatsApp, LinkedIn, GitHub, and the live project use safe new-tab links. Phone and email values retain left-to-right formatting in Arabic.
- The local production preview was checked separately: two project sections, exact contact destinations, zero unsafe external links, working screenshot disclosure and image asset, translated metadata, and persistent Arabic RTL after reload. Chrome reported no application warnings or errors.
- CV links cannot be verified until the real PDF is supplied. OS email/telephone handlers, external account pages, other browsers, and screen-reader behavior have not been exercised.

Review screenshots are saved locally in `artifacts/`. The development server is kept running for review.
