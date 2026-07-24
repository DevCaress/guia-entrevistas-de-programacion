import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { readMdxFrontmatter } from "../../scripts/mdx-frontmatter.mjs";

describe("guide content frontmatter", () => {
  it("validates representative section metadata", async () => {
    const data = await readMdxFrontmatter("src/content/guide/buenas-practicas/solid-principles.mdx");

    expect(data).toMatchObject({
      title: "Principios SOLID",
      category: "Buenas practicas",
      sidebar: { order: 10 }
    });
    expect(data.references.length).toBeGreaterThan(0);
  });

  it("parses frontmatter from an MDX file with CRLF line endings", async () => {
    const directory = await mkdtemp(join(tmpdir(), "guia-mdx-crlf-"));
    const file = join(directory, "crlf-fixture.mdx");
    const source = [
      "---",
      "title: Compatibilidad CRLF",
      "category: Pruebas",
      "sidebar:",
      "  order: 42",
      "---",
      "",
      "# Contenido",
      ""
    ].join("\r\n");

    try {
      await writeFile(file, source, "utf8");
      await expect(readMdxFrontmatter(file)).resolves.toMatchObject({
        title: "Compatibilidad CRLF",
        category: "Pruebas",
        sidebar: { order: 42 }
      });
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });

  it("parses frontmatter from an MDX file with a UTF-8 BOM", async () => {
    const directory = await mkdtemp(join(tmpdir(), "guia-mdx-bom-"));
    const file = join(directory, "bom-fixture.mdx");
    const source = [
      "\uFEFF---",
      "title: Compatibilidad BOM",
      "category: Pruebas",
      "sidebar:",
      "  order: 43",
      "---",
      "",
      "# Contenido",
      ""
    ].join("\n");

    try {
      await writeFile(file, source, "utf8");
      await expect(readMdxFrontmatter(file)).resolves.toMatchObject({
        title: "Compatibilidad BOM",
        category: "Pruebas",
        sidebar: { order: 43 }
      });
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
});
