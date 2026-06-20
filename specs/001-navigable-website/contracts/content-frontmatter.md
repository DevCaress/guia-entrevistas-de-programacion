# Contract: Guide Content Frontmatter

This contract defines the required metadata for each guide `.mdx` entry in `src/content/guide`.

## Required Fields

```yaml
title: "SOLID Principles"
description: "Resumen de los principios SOLID para entrevistas tecnicas."
category: "Buenas practicas"
sidebar:
  label: "SOLID Principles"
  order: 10
references:
  - label: "Readable article title"
    url: "https://example.com/article"
```

## Optional Fields

```yaml
section: "Principios"
examples:
  - title: "Single Responsibility Principle"
    description: "Ejemplo breve de una clase con una sola razon de cambio."
    language: "ts"
```

## Rules

- `title`, `description`, `category`, `sidebar.order`, and `references` are present on every guide entry.
- `references` may be an empty list only when the source README section has no links.
- `sidebar.label` defaults to `title` when not provided.
- `sidebar.order` must be stable and numeric so navigation order does not depend on filesystem order.
- `url` values in `references` must be absolute external URLs.
- MDX body content may import approved local components for callouts and code examples.
- Empty example metadata must not render visible placeholder UI.

## Validation Expectations

- Content collection schema rejects missing required metadata.
- Build fails when metadata shape is invalid.
- Link verification checks every `references[].url`.
- Migration verification compares README references against migrated page references.
