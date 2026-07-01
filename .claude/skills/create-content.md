# Create content for guia-entrevistas-de-programacion

Use this skill when the user asks to create, add, or write a new content page for this project.

All content lives in `src/content/guide/` as `.mdx` files. Every file must follow the structure below exactly.

---

## Frontmatter (required)

```yaml
---
title: "Full title of the article"
description: "One sentence describing the topic. No accent marks — keep ASCII."
category: "Category name"
section: "Section name"
sidebar:
  label: "Short label (shown in sidebar nav)"
  order: 21
references:
  - label: "Display text for the link"
    url: "https://..."
---
```

**Rules:**
- `description` must be plain ASCII (no tildes, no accent marks, no special chars).
- `sidebar.order` must be a unique integer. Check existing files in the same folder before picking one.
- `references` requires at least one entry. Use authoritative sources (official docs, well-known books, reputable articles).

---

## Body — Principle/concept pages

Follow the pattern used in `src/content/guide/buenas-practicas/dry.mdx` and `kiss.mdx`:

1. **Intro paragraph** — Bold the principle name or acronym on first mention. Explain what it is and why it matters in 2–4 sentences. No heading for this block.

2. `## Violacion del principio` — Show a realistic bad code example in a fenced code block with the language tag. Follow with one short paragraph explaining what is wrong.

3. `## Aplicando [Principle name]` — Show the corrected version. Follow with one short paragraph explaining what improved and why.

**Code block rules:**
- Always include the language identifier (` ```js `, ` ```ts `, ` ```python `, etc.).
- Keep examples short and self-contained — no imports unless strictly necessary.
- All code must be written in English: identifiers, variable names, function names, class names, string values, and inline comments. This is a best practice — English is the universal language of code, regardless of the prose language of the guide.

---

## Body — Topic overview pages

Follow the pattern used in `src/content/guide/bases-de-datos.mdx`:

- Use `###` headings for each sub-topic.
- No enforced section order — structure naturally around the topic.

---

## File placement

| Content type | Folder |
|---|---|
| Buenas practicas / principios | `src/content/guide/buenas-practicas/` |
| Algoritmos y estructuras | `src/content/guide/algoritmos-y-estructuras-de-datos/` |
| Topic overview (general) | `src/content/guide/` |

Name the file using lowercase kebab-case: `nombre-del-tema.mdx`.

---

## Checklist before writing

1. Read 1–2 existing files in the target folder to confirm the `order` range and category/section values already in use.
2. Pick an `order` value that fits sequentially after the last file in that folder.
3. Write the frontmatter first, then the body.
4. Do not add trailing comments, author notes, or task references inside the file.
