# Tasks: Navigable Interview Guide Website

**Input**: Design documents from `/specs/001-navigable-website/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/](./contracts/), [quickstart.md](./quickstart.md)

**Tests**: Behavior-changing code tasks include automated or browser verification tasks. Content migration tasks include structure, link, and reference verification as required by the constitution.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Astro static documentation site and baseline tooling.

- [ ] T001 Create Astro 6.4.8 project metadata and npm scripts in package.json
- [ ] T002 [P] Configure TypeScript for Astro in tsconfig.json
- [ ] T003 [P] Configure Astro integrations, Shiki themes, and Tailwind Vite plugin in astro.config.mjs
- [ ] T004 [P] Configure Tailwind content scanning and dark-mode selector in tailwind.config.mjs
- [ ] T005 [P] Create global stylesheet with Tailwind imports and base design tokens in src/styles/global.css
- [ ] T006 [P] Configure code formatting, linting, and ignored build output in .gitignore
- [ ] T007 [P] Configure Vitest or equivalent unit test script for utilities in package.json
- [ ] T008 [P] Configure Playwright or equivalent browser verification script in package.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build shared content, layout, utility, and verification foundations required before any user story can be implemented.

**CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T009 Define the guide content collection schema from contracts/content-frontmatter.md in src/content.config.ts
- [ ] T010 [P] Create guide content types and sidebar data helpers in src/utils/guide.ts
- [ ] T011 [P] Create SEO metadata helper functions in src/utils/seo.ts
- [ ] T012 [P] Create markdown reference extraction script for README migration checks in scripts/extract-readme-references.mjs
- [ ] T013 [P] Create content migration verification script in scripts/verify-content-migration.mjs
- [ ] T014 [P] Create external reference link verification script in scripts/check-reference-links.mjs
- [ ] T015 [P] Create base documentation layout shell in src/layouts/DocsLayout.astro
- [ ] T016 [P] Create base sidebar component API in src/components/Sidebar.astro
- [ ] T017 [P] Create theme toggle component with accessible controls in src/components/ThemeToggle.astro
- [ ] T018 [P] Create reusable callout component for MDX content in src/components/Callout.astro
- [ ] T019 [P] Create reusable code example component API in src/components/CodeExample.astro
- [ ] T020 [P] Create reference list component API in src/components/ReferenceList.astro
- [ ] T021 Create home route that redirects or links to the first guide page in src/pages/index.astro
- [ ] T022 Create dynamic guide route shell for content collection pages in src/pages/guia/[...slug].astro
- [ ] T023 Add baseline unit tests for guide sorting and grouping in tests/unit/guide.test.ts
- [ ] T024 Add baseline unit tests for SEO metadata generation in tests/unit/seo.test.ts

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Browse Guide Sections (Priority: P1) MVP

**Goal**: Readers can browse each migrated guide section as its own page from a generated sidebar.

**Independent Test**: Open the site, select multiple guide sections from the sidebar, verify the selected page title/content appears, and verify a direct section URL still shows the sidebar and current page state.

### Tests and Verification for User Story 1

- [ ] T025 [P] [US1] Add browser test for sidebar navigation between guide pages in tests/e2e/sidebar-navigation.spec.ts
- [ ] T026 [P] [US1] Add browser test for direct guide page URL active sidebar state in tests/e2e/direct-section-url.spec.ts
- [ ] T027 [P] [US1] Add responsive sidebar visual/behavior test for mobile collapse in tests/e2e/mobile-sidebar.spec.ts
- [ ] T028 [P] [US1] Add content collection validation fixture for section pages in tests/unit/content-schema.test.ts

### Implementation for User Story 1

- [ ] T029 [P] [US1] Migrate core best-practices guide pages to MDX in src/content/guide/buenas-practicas/
- [ ] T030 [P] [US1] Migrate language and framework guide pages to MDX in src/content/guide/buenas-practicas-en/
- [ ] T031 [P] [US1] Migrate algorithms and data structures guide pages to MDX in src/content/guide/algoritmos-y-estructuras-de-datos/
- [ ] T032 [P] [US1] Migrate architecture, systems, database, tooling, and FAQ guide pages to MDX in src/content/guide/
- [ ] T033 [US1] Implement deterministic sidebar grouping, ordering, and active-state support in src/utils/guide.ts
- [ ] T034 [US1] Implement desktop and mobile sidebar rendering in src/components/Sidebar.astro
- [ ] T035 [US1] Integrate sidebar, theme toggle slot, and content shell in src/layouts/DocsLayout.astro
- [ ] T036 [US1] Render collection entries through the dynamic route in src/pages/guia/[...slug].astro
- [ ] T037 [US1] Connect the home page to the first guide section in src/pages/index.astro
- [ ] T038 [US1] Verify US1 with npm run build and npm run test:e2e -- tests/e2e/sidebar-navigation.spec.ts

**Checkpoint**: User Story 1 is independently functional as the MVP.

---

## Phase 4: User Story 2 - Preserve References Per Section (Priority: P2)

**Goal**: Each migrated section page displays the original reference links associated with that README section.

**Independent Test**: Compare selected README sections against website pages and verify all original reference links appear on the correct page with readable labels.

### Tests and Verification for User Story 2

- [ ] T039 [P] [US2] Add automated README-to-content reference parity test in tests/unit/reference-parity.test.ts
- [ ] T040 [P] [US2] Add browser test for visible references on section pages in tests/e2e/section-references.spec.ts
- [ ] T041 [P] [US2] Add link-check command coverage for MDX frontmatter references in scripts/check-reference-links.mjs

### Implementation for User Story 2

- [ ] T042 [P] [US2] Populate reference frontmatter for best-practices pages in src/content/guide/buenas-practicas/
- [ ] T043 [P] [US2] Populate reference frontmatter for language and framework pages in src/content/guide/buenas-practicas-en/
- [ ] T044 [P] [US2] Populate reference frontmatter for algorithms and data structure pages in src/content/guide/algoritmos-y-estructuras-de-datos/
- [ ] T045 [P] [US2] Populate reference frontmatter for remaining guide pages in src/content/guide/
- [ ] T046 [US2] Implement empty-safe reference rendering in src/components/ReferenceList.astro
- [ ] T047 [US2] Render reference lists on guide pages in src/pages/guia/[...slug].astro
- [ ] T048 [US2] Verify US2 with npm run verify:content and npm run check:links from package.json

**Checkpoint**: User Stories 1 and 2 both work independently.

---

## Phase 5: User Story 3 - Grow With Code Examples (Priority: P3)

**Goal**: Each section page has a maintainable path for future author-written examples without showing broken placeholders when examples are absent.

**Independent Test**: Add a sample example to one section and verify it appears only on that section page, while sections without examples remain clean.

### Tests and Verification for User Story 3

- [ ] T049 [P] [US3] Add unit test for optional examples metadata validation in tests/unit/content-schema.test.ts
- [ ] T050 [P] [US3] Add browser test for example rendering and absent-example behavior in tests/e2e/code-examples.spec.ts
- [ ] T051 [P] [US3] Add browser test for Shiki-highlighted code blocks in tests/e2e/syntax-highlighting.spec.ts

### Implementation for User Story 3

- [ ] T052 [P] [US3] Implement example rendering states in src/components/CodeExample.astro
- [ ] T053 [P] [US3] Add MDX component usage documentation in src/content/guide/buenas-practicas/solid-principles.mdx
- [ ] T054 [US3] Integrate example rendering support into guide pages in src/pages/guia/[...slug].astro
- [ ] T055 [US3] Add one non-placeholder sample example to a migrated guide page in src/content/guide/buenas-practicas/solid-principles.mdx
- [ ] T056 [US3] Verify US3 with npm run build and npm run test:e2e -- tests/e2e/code-examples.spec.ts

**Checkpoint**: All user stories are independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality gates, accessibility, SEO, performance, and documentation updates across the whole site.

- [ ] T057 [P] Add page-specific title and description assertions in tests/e2e/seo-metadata.spec.ts
- [ ] T058 [P] Add dark/light persistence browser test in tests/e2e/theme-toggle.spec.ts
- [ ] T059 [P] Add accessibility-focused checks for navigation controls and focus states in tests/e2e/accessibility.spec.ts
- [ ] T060 [P] Add performance timing smoke check for initial content and sidebar interaction in tests/e2e/performance.spec.ts
- [ ] T061 [P] Update README.md with website development commands and content-authoring guidance
- [ ] T062 Run full validation from quickstart.md with npm install, npm run build, npm run test, npm run test:e2e, npm run verify:content, and npm run check:links
- [ ] T063 Review migrated content for Spanish-first terminology, heading hierarchy, and readable labels in src/content/guide/
- [ ] T064 Review dependency choices, package-lock.json, and example content for security and unsafe-practice risks

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational completion - MVP scope.
- **User Story 2 (Phase 4)**: Depends on Foundational completion and can be implemented after or alongside US1 content files, but final verification depends on pages rendering.
- **User Story 3 (Phase 5)**: Depends on Foundational completion and can be implemented independently once dynamic guide pages exist.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1 (P1)**: No dependency on other user stories; establishes the navigable website MVP.
- **US2 (P2)**: Independent reference data and rendering, but practically verifies against pages created for US1.
- **US3 (P3)**: Independent example support, but practically verifies against the dynamic page route and MDX setup.

### Within Each User Story

- Tests and verification tasks should be written before implementation tasks.
- MDX migration can run in parallel by content folder after the content schema exists.
- Shared route/layout integration must complete before browser verification for the story.
- Each story should be verified independently before proceeding to the next priority.

### Parallel Opportunities

- Setup tasks T002-T008 can run in parallel after T001 decision alignment.
- Foundational component/helper tasks T010-T020 can run in parallel after T009.
- US1 migration tasks T029-T032 can run in parallel.
- US2 reference population tasks T042-T045 can run in parallel.
- US3 component and documentation tasks T052-T053 can run in parallel.
- Polish checks T057-T061 can run in parallel once all selected stories are implemented.

---

## Parallel Example: User Story 1

```bash
Task: "T025 [US1] Add browser test for sidebar navigation between guide pages in tests/e2e/sidebar-navigation.spec.ts"
Task: "T026 [US1] Add browser test for direct guide page URL active sidebar state in tests/e2e/direct-section-url.spec.ts"
Task: "T027 [US1] Add responsive sidebar visual/behavior test for mobile collapse in tests/e2e/mobile-sidebar.spec.ts"
Task: "T029 [US1] Migrate core best-practices guide pages to MDX in src/content/guide/buenas-practicas/"
Task: "T030 [US1] Migrate language and framework guide pages to MDX in src/content/guide/buenas-practicas-en/"
Task: "T031 [US1] Migrate algorithms and data structures guide pages to MDX in src/content/guide/algoritmos-y-estructuras-de-datos/"
Task: "T032 [US1] Migrate architecture, systems, database, tooling, and FAQ guide pages to MDX in src/content/guide/"
```

## Parallel Example: User Story 2

```bash
Task: "T039 [US2] Add automated README-to-content reference parity test in tests/unit/reference-parity.test.ts"
Task: "T040 [US2] Add browser test for visible references on section pages in tests/e2e/section-references.spec.ts"
Task: "T042 [US2] Populate reference frontmatter for best-practices pages in src/content/guide/buenas-practicas/"
Task: "T043 [US2] Populate reference frontmatter for language and framework pages in src/content/guide/buenas-practicas-en/"
Task: "T044 [US2] Populate reference frontmatter for algorithms and data structure pages in src/content/guide/algoritmos-y-estructuras-de-datos/"
Task: "T045 [US2] Populate reference frontmatter for remaining guide pages in src/content/guide/"
```

## Parallel Example: User Story 3

```bash
Task: "T049 [US3] Add unit test for optional examples metadata validation in tests/unit/content-schema.test.ts"
Task: "T050 [US3] Add browser test for example rendering and absent-example behavior in tests/e2e/code-examples.spec.ts"
Task: "T051 [US3] Add browser test for Shiki-highlighted code blocks in tests/e2e/syntax-highlighting.spec.ts"
Task: "T052 [US3] Implement example rendering states in src/components/CodeExample.astro"
Task: "T053 [US3] Add MDX component usage documentation in src/content/guide/buenas-practicas/solid-principles.mdx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate: direct guide URLs, generated sidebar, active state, desktop/mobile navigation, and build output.
5. Demo the navigable guide before adding reference parity and examples.

### Incremental Delivery

1. Setup + Foundational: Astro app, schemas, layout, route, helpers, base tests.
2. US1: Navigable guide pages from README sections.
3. US2: Preserved original reference links and parity/link checks.
4. US3: Future-proof examples support with one real sample.
5. Polish: SEO, theme persistence, accessibility, performance, README commands, and full quickstart validation.

### Parallel Team Strategy

1. One developer owns app setup and schema foundation.
2. Content migration can split by README section groups after T009.
3. UI/browser verification can proceed alongside content migration once route/layout skeletons exist.
4. Reference population and example support can proceed in parallel after US1 page structure is stable.

## Notes

- [P] tasks touch different files or content groups and have no dependency on incomplete same-file edits.
- [US1], [US2], and [US3] labels map directly to the prioritized user stories in spec.md.
- The suggested MVP scope is Phase 1 + Phase 2 + Phase 3.
