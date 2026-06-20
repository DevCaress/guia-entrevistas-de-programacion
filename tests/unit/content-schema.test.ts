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
});
