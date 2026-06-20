# Quickstart: Navigable Interview Guide Website

## Prerequisites

- Current stable Node.js LTS installed.
- Network access for initial dependency installation.
- Feature artifacts reviewed:
  - [plan.md](./plan.md)
  - [data-model.md](./data-model.md)
  - [content-frontmatter.md](./contracts/content-frontmatter.md)
  - [navigation-ui.md](./contracts/navigation-ui.md)

## Setup

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Expected outcome:

- Local preview starts successfully.
- The home page links into the guide.
- A guide section page can be opened directly.

## Build Validation

```bash
npm run build
```

Expected outcome:

- Astro validates content collections.
- Static guide routes are generated.
- No missing required frontmatter errors occur.
- No build errors occur from MDX imports or syntax highlighting.

## Content Migration Validation

Verify these outcomes after implementation:

- Every durable README section listed in the spec has a corresponding guide page.
- Every original README reference link appears on the correct guide page.
- Pages without examples do not show empty example placeholders.
- Pages without references do not show broken reference placeholders.

## Navigation Validation

Verify with a browser preview:

- Sidebar lists guide pages grouped by category.
- Selecting a sidebar item opens the expected page.
- Directly opening a section URL shows the correct active sidebar item.
- Any guide page can reach any other guide page in no more than two user actions.
- Mobile viewport shows a collapsible sidebar and closes it after page selection.

## Theme Validation

Verify with a browser preview:

- First visit defaults to dark mode.
- Theme toggle switches between dark and light.
- Reloading the page preserves the selected theme from `localStorage`.
- Invalid stored theme values fall back to dark mode.

## SEO Validation

Inspect generated pages:

- Each guide page has a page-specific title.
- Each guide page has a page-specific description.
- Metadata values come from MDX frontmatter.

## Responsive and Visual Validation

Check common mobile and desktop viewport widths:

- No overlapping text in the sidebar, header, code blocks, or content body.
- Long sidebar labels remain readable.
- Code examples remain readable without breaking the layout.
- Initial usable content appears within the performance target in a local or hosted preview.
