# Implementation Plan: Navigable Interview Guide Website

**Branch**: `001-navigable-website` | **Date**: 2026-06-20 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-navigable-website/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Convert the current README-based technical interview guide into a static, documentation-style Astro website. The implementation will use Astro 6.4.8, local MDX content collections, generated section routes, an automatically grouped sidebar, Shiki syntax highlighting with a dark default, Tailwind CSS styling, a persisted dark/light toggle, responsive navigation, and page-level SEO metadata from MDX frontmatter. There is no backend, database, authentication, or remote CMS in this phase.

## Technical Context

**Language/Version**: TypeScript with Astro 6.4.8, using current stable Node.js LTS for local development and builds.

**Primary Dependencies**: Astro 6.4.8, `@astrojs/mdx`, Tailwind CSS through the current Astro-supported Tailwind 4 Vite plugin path, Shiki via Astro markdown configuration, Content Collections with local `.mdx` entries.

**Storage**: Local repository files only. Guide pages live as `.mdx` content entries; no database, CMS, or authentication storage.

**Testing**: Astro type/content validation, production build, markdown/content checks, link/reference verification, responsive visual checks, and focused browser checks for navigation, theme persistence, SEO metadata, and mobile sidebar behavior.

**Target Platform**: Static documentation website for modern desktop and mobile browsers.

**Project Type**: Static frontend documentation site.

**Performance Goals**: Initial usable content visible within 2 seconds in local/hosted preview; static routes generated at build time; no backend request required to render guide pages; sidebar navigation interaction responds in under 100 ms on typical local preview hardware.

**Constraints**: All content must reside in local `.mdx` files; sidebar generated from content collection metadata; no backend, database, authentication, reader accounts, or external CMS; dark mode is default; theme preference persists in `localStorage`; mobile layout must avoid overlapping text and provide a collapsible sidebar.

**Scale/Scope**: Initial migration covers all durable README sections and original reference links. The structure must remain maintainable for at least 100 guide pages and future section-level code examples.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Code and Content Quality**: PASS. The plan creates a clear Astro documentation structure, migrates README content into typed local content entries, preserves original references, and reserves a consistent place for future examples.
- **Testing and Verification Discipline**: PASS. Verification includes content schema validation, build, link/reference checks, responsive checks, and browser checks for each independently testable user story.
- **Consistent User Experience**: PASS. The design preserves the guide's Spanish-first topic names and information architecture while adding documentation-style sidebar navigation, clear page hierarchy, accessible controls, and responsive behavior.
- **Performance by Design**: PASS. The feature is statically generated from local content, avoids backend rendering, sets user-visible timing goals, and keeps navigation client behavior small.
- **Security and Best Practices**: PASS. The plan avoids secrets and backend input handling, treats local MDX as trusted author content, verifies external links, and records dependency/deprecation risks for Tailwind integration.

All gates pass. No Complexity Tracking entries are required.

## Project Structure

### Documentation (this feature)

```text
specs/001-navigable-website/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── content-frontmatter.md
│   └── navigation-ui.md
└── tasks.md
```

### Source Code (repository root)

```text
astro.config.mjs
package.json
tsconfig.json
tailwind.config.mjs
src/
├── content.config.ts
├── content/
│   └── guide/
│       ├── buenas-practicas/
│       │   ├── solid-principles.mdx
│       │   └── clean-code.mdx
│       └── ...
├── components/
│   ├── Sidebar.astro
│   ├── ThemeToggle.astro
│   ├── ReferenceList.astro
│   ├── Callout.astro
│   └── CodeExample.astro
├── layouts/
│   └── DocsLayout.astro
├── pages/
│   ├── index.astro
│   └── guia/
│       └── [...slug].astro
├── styles/
│   └── global.css
└── utils/
    ├── guide.ts
    └── seo.ts
```

**Structure Decision**: Use a single Astro static site at the repository root. The current repository has only README content and Spec Kit files, so introducing a nested app directory would add indirection without a competing app to isolate. `src/content/guide` owns migrated MDX pages; layouts/components own the documentation shell; `src/utils/guide.ts` owns content sorting/grouping so sidebar generation stays testable and reusable.

## Phase 0: Research

See [research.md](./research.md). All technical choices have been resolved with no remaining `NEEDS CLARIFICATION` items.

## Phase 1: Design & Contracts

See [data-model.md](./data-model.md), [content-frontmatter.md](./contracts/content-frontmatter.md), [navigation-ui.md](./contracts/navigation-ui.md), and [quickstart.md](./quickstart.md).

## Post-Design Constitution Check

- **Code and Content Quality**: PASS. The data model and contracts define required frontmatter, references, slugs, grouping, and example behavior so migrated content remains consistent and traceable.
- **Testing and Verification Discipline**: PASS. The quickstart defines build, content, link, SEO, navigation, responsive, and theme checks that map to the spec's user stories and success criteria.
- **Consistent User Experience**: PASS. Contracts define active sidebar state, collapsible mobile navigation, accessible theme toggle behavior, and page metadata.
- **Performance by Design**: PASS. Build-time content collections and static routes meet the performance goals; browser checks verify usable load and navigation responsiveness.
- **Security and Best Practices**: PASS. The design excludes backend auth/data flows, avoids committed secrets, documents dependency risks, and constrains MDX/component usage to local author content.

All gates pass after design. No Complexity Tracking entries are required.

## Complexity Tracking

No constitution violations.
