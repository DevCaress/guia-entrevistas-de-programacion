# Data Model: Navigable Interview Guide Website

## Guide Page

Represents one durable interview-guide section rendered as a website page.

**Fields**

- `title`: Human-readable page title.
- `description`: Short page summary used for SEO and previews.
- `category`: Top-level sidebar group, such as `Buenas practicas`, `Algoritmos y estructuras de datos`, or `Arquitectura de Software`.
- `section`: Optional subgroup label for nested topics.
- `slug`: URL path derived from the content entry path.
- `sidebar.label`: Navigation label. Defaults to `title` when omitted.
- `sidebar.order`: Numeric order within the category or section.
- `references`: List of reference links associated with this page.
- `examples`: Optional list of authored examples, or MDX-rendered example components in the body.
- `body`: MDX explanatory content.

**Validation Rules**

- `title`, `description`, `category`, and `sidebar.order` are required.
- `description` must be concise enough for page metadata.
- `references` may be empty but, when present, every item must include a readable label and absolute URL.
- `sidebar.order` values should produce deterministic ordering within a category.
- Slugs must be unique.
- Pages with no examples must not render an empty examples block.

**Relationships**

- Belongs to one sidebar category.
- Owns zero or more reference links.
- Owns zero or more code examples.
- Renders inside `DocsLayout`.

## Reference Link

Represents an external source article/resource preserved from the README.

**Fields**

- `label`: Reader-facing link text.
- `url`: External destination.
- `sourceSection`: Original README section or migrated guide page.

**Validation Rules**

- `label` must be non-empty and descriptive.
- `url` must be absolute.
- Link verification must report broken or redirected references.

**Relationships**

- Belongs to exactly one guide page in the initial migration.

## Code Example

Represents an author-written code sample connected to a concept.

**Fields**

- `title`: Optional example title.
- `description`: Context explaining what the example demonstrates.
- `language`: Syntax highlighting language identifier.
- `code`: Example source content, or MDX code fence/component body.
- `relatedConcept`: Section concept demonstrated by the example.

**Validation Rules**

- If present, an example must include either a title or description.
- `language` should be set when the example contains code.
- Example content must avoid secrets, credentials, or unsafe practices unless clearly framed as an anti-pattern.

**Relationships**

- Belongs to one guide page.

## Sidebar Group

Represents an automatically generated navigation group.

**Fields**

- `category`: Group label.
- `order`: Derived from the lowest page order or explicit category ordering.
- `items`: Ordered guide pages and optional subgroups.

**Validation Rules**

- Groups with pages must render in the sidebar.
- Empty groups must not render.
- Current page must be identifiable from the sidebar state.

**Relationships**

- Contains one or more guide pages.

## Theme Preference

Represents the reader's local display choice.

**Fields**

- `mode`: `dark` or `light`.
- `source`: `default` or `localStorage`.

**Validation Rules**

- Default mode is dark when no stored preference exists.
- Stored values outside the supported modes are ignored.

**State Transitions**

- First visit with no stored preference: `default` -> `dark`.
- Toggle from dark: `dark` -> `light`, persisted.
- Toggle from light: `light` -> `dark`, persisted.
