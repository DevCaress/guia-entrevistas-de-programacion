# Contract: Navigation and Page UI

This contract defines the expected reader-facing behavior for the documentation shell.

## Sidebar

- Displays all guide pages grouped by `category`.
- Orders pages by `sidebar.order`, then title when orders are equal.
- Shows the current page state for direct links and in-site navigation.
- Provides links to all pages from every guide page.
- Collapses behind a menu control on mobile viewports.
- Closes after selecting a page on mobile.
- Keeps long labels readable without overlapping neighboring UI.

## Page Content

- Shows page title, description, MDX body, references, and examples when present.
- Does not show empty References or Examples sections when their content is absent.
- Uses readable technical typography with clear heading hierarchy.
- Uses Shiki-highlighted code blocks with dark styling by default.

## Theme Toggle

- Defaults to dark mode.
- Provides a visible, keyboard reachable control for toggling dark/light mode.
- Persists explicit choice in `localStorage`.
- Applies the stored theme before or during first paint to avoid an obvious flash of the wrong theme.
- Ignores invalid stored values and falls back to dark mode.

## SEO

- Each guide page uses frontmatter `title` and `description` for metadata.
- Direct section URLs produce meaningful metadata without relying on client-side rendering.

## Accessibility and Responsive Behavior

- Navigation controls have accessible names.
- Focus states are visible.
- Sidebar and theme controls are keyboard reachable.
- Mobile layout keeps content readable with no overlapping text or controls.
