# Research: Navigable Interview Guide Website

## Astro Version

**Decision**: Use Astro 6.4.8 as the current stable Astro version for planning.

**Rationale**: `npm view astro version` returned `6.4.8` on 2026-06-20. The user requested Astro latest stable, so the plan records the exact version rather than leaving it implicit.

**Alternatives considered**: Pinning to an older Astro major was rejected because the user requested latest stable. Leaving the version as "latest" was rejected because implementation tasks and dependency checks need a concrete baseline.

## Content Source and Routing

**Decision**: Use Astro build-time Content Collections for local `.mdx` guide pages, with a single `guide` collection and generated static routes under `/guia/[...slug]`.

**Rationale**: Astro's content collections are intended for related structured content and support local Markdown/MDX files, schema validation, type safety, querying, and build-time performance. Official docs recommend build-time collections when content is relatively static and performance matters.

**Alternatives considered**: Plain `src/pages/**/*.mdx` files were rejected because they make automatic sidebar grouping and metadata validation harder. A CMS or live collection was rejected because the spec explicitly keeps content local with no backend.

Reference: https://docs.astro.build/en/guides/content-collections/

## MDX for Guide Pages

**Decision**: Store guide pages as `.mdx` entries so explanatory Markdown can mix with reusable components such as callouts, reference lists, and future code-example blocks.

**Rationale**: The user specifically requested MDX for mixing Markdown and components. It lets the guide remain author-friendly while supporting richer technical content when examples grow.

**Alternatives considered**: Markdown-only content was rejected because future examples and callouts would need ad hoc conventions. Full `.astro` pages for every section were rejected because they would reduce consistency and make content migration harder.

Reference: https://docs.astro.build/en/guides/integrations-guide/mdx/

## Tailwind Integration

**Decision**: Use Tailwind CSS for styling, but implement it through the current official Tailwind 4 Vite plugin path rather than `@astrojs/tailwind`.

**Rationale**: The user requested Tailwind via `@astrojs/tailwind`, but current Astro docs mark `@astrojs/tailwind` as deprecated and state that Tailwind CSS now offers a Vite plugin as the preferred Tailwind 4 path in Astro. The plan preserves the styling requirement while avoiding a newly deprecated integration.

**Alternatives considered**: Installing `@astrojs/tailwind` exactly as requested was rejected because it would intentionally start the project on a deprecated integration. Writing plain CSS only was rejected because the user requested Tailwind.

Reference: https://docs.astro.build/en/guides/integrations-guide/tailwind/

## Syntax Highlighting

**Decision**: Use Astro's built-in Shiki syntax highlighting with a dark default theme and a compatible light theme for toggled light mode.

**Rationale**: Astro supports Shiki syntax highlighting through Markdown configuration, matching the user request without adding a separate highlighter. Shiki is well-suited for static code examples and future interview snippets.

**Alternatives considered**: Prism or client-side highlighting was rejected because it adds unnecessary dependency/client behavior when Astro already supports Shiki.

References:

- https://docs.astro.build/en/guides/syntax-highlighting/
- https://docs.astro.build/en/reference/configuration-reference/#markdownshikiconfig

## Sidebar Generation

**Decision**: Generate the sidebar from guide content frontmatter fields: `category`, `sidebar.label`, `sidebar.order`, and page slug.

**Rationale**: The README already has durable sections and subsections. Encoding grouping/order in frontmatter keeps navigation deterministic, lets new pages appear automatically, and avoids a separate manually maintained navigation file for the initial version.

**Alternatives considered**: A hard-coded sidebar was rejected because it would drift as content grows. Inferring all grouping from file paths alone was rejected because labels/order sometimes need author control.

## Theme Mode

**Decision**: Default to dark mode, provide a simple accessible dark/light toggle, and persist explicit reader choice in `localStorage`.

**Rationale**: This matches the user request and keeps theme behavior local to the browser. The default dark theme pairs with code-heavy content and Shiki's dark default.

**Alternatives considered**: System-only theme was rejected because the user requested a toggle and persistence. A theme library was rejected because the behavior is small and does not require a dependency.

## SEO Metadata

**Decision**: Generate per-page `<title>`, description, canonical path, and basic social metadata from required frontmatter fields.

**Rationale**: The user requested basic SEO per page. Required metadata in the content schema prevents pages from shipping without discoverable titles and descriptions.

**Alternatives considered**: Global metadata only was rejected because each guide section needs independent discovery and share text. Runtime metadata lookup was rejected because all data is available at build time.
