# Portfolio design rules

The approved direction is an editorial archive: warm paper, expressive serif headings, fine rules, numbered sections, and engineering work as the subject. Keep the implementation in React, JavaScript, and plain CSS.

## Palette

| Role | Color |
| --- | --- |
| Main parchment | `#f5f1e9` |
| PhysioCore ivory | `#faf7f1` |
| Sou2AI pale sage | `#e9eee6` |
| Diagram paper | `#f3f5ef` |
| Contact stone | `#e8e2d9` |
| Main text | `#302a25` |
| Secondary text | `#5e5850` |
| Burgundy accent | `#702f3c` |
| Architecture plate | `#542b34` |

Use background bands to distinguish major sections. Avoid rounded cards, gradients, gold ornament, unnecessary animation, and unrelated photographs. Illustrations must be clearly labeled; screenshots must come from the real project.

## Typography and reading

- Self-hosted Cormorant Garamond for English display typography; DM Sans for body text; Noto Sans Arabic for Arabic.
- Body copy is 17px relative to a 16px browser default, with 1.8–1.85 line height. Arabic paragraphs use 2.0 line height. Do not reduce reading text on mobile.
- Supporting details use 14–15px. Reserve 12px for short captions, section numbers, and archival labels.
- Keep paragraphs around 44–56 characters wide. Use short paragraphs, descriptive subheadings, and lists for parallel capabilities.
- Project titles, section headings, detail headings, body text, and captions must have distinct roles.

## Layout

- Limit the main grid to 1440px and keep generous responsive margins.
- Preserve the asymmetric introduction. Stack complex project grids below 1100px.
- PhysioCore uses a burgundy architecture plate. Sou2AI uses a paper workflow composition on sage. Both receive full project sections.
- Use a compact project index and a persistent place for Contact in the main navigation. Keep mobile navigation visible.
- Contact details belong in a distinct section, with visible labels and values inside generous link targets.

## Content, language, and links

- Store bilingual copy in `src/content.js`; use shared components for both languages. Every new substantive label, caption, and description needs an Arabic counterpart.
- Update document language, direction, title, and description when switching. Remember the selected language locally, with a safe fallback if storage is blocked.
- Use logical CSS properties. Keep phone numbers, email addresses, URLs, and technical identifiers isolated with `bdi` and an explicit left-to-right direction where appropriate.
- Email and phone links use normal `mailto:` and `tel:` protocols. External web links use `target="_blank"` with `rel="noopener noreferrer"`.
- Only expose the phone number supplied and authorized by the user.
- Sou2AI is in development. Describe supplied implemented capabilities separately from status; do not invent adoption, commercial outcomes, repositories, demos, or screenshots.
- Preserve factual limits around PhysioCore; tester feedback does not establish clinical validation.

## CV and accessibility

- Use only the actual supplied CV PDF. Put it at `public/documents/mohamad-khaled-waked-cv.pdf`, then set `profile.cvUrl` to `/documents/mohamad-khaled-waked-cv.pdf` after verifying it.
- The shared `CvLinks` component provides View CV in a new tab and a separate download link, near the introduction and contact section. It renders no links while the PDF is missing.
- Keep text contrast at WCAG AA, preserve 3px visible focus outlines and the skip link, and use semantic controls.
- Touch targets should be at least 44px high. Respect reduced motion, allow text zoom, and prevent horizontal overflow at narrow widths.
