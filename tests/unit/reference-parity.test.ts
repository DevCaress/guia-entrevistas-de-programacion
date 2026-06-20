import { describe, expect, it } from "vitest";
import { extractReadmeReferences } from "../../scripts/extract-readme-references.mjs";
import { readMdxFrontmatter } from "../../scripts/mdx-frontmatter.mjs";

describe("README reference parity", () => {
  it("preserves original references for representative sections", async () => {
    const readmeReferences = await extractReadmeReferences("README.md");
    const solid = await readMdxFrontmatter("src/content/guide/buenas-practicas/solid-principles.mdx");
    const visualgo = await readMdxFrontmatter("src/content/guide/algoritmos-y-estructuras-de-datos/visualgo.mdx");

    expect(solid.references).toEqual(readmeReferences["Principios SOLID"]);
    expect(visualgo.references).toEqual(readmeReferences["[Visualgo](https://visualgo.net/)"]);
  });
});
