import { describe, expect, it } from "vitest";
import { buildPageMeta } from "../../src/utils/seo";

describe("SEO helpers", () => {
  it("builds page-specific metadata from guide frontmatter", () => {
    expect(
      buildPageMeta({
        title: "SOLID Principles",
        description: "Resumen de SOLID para entrevistas tecnicas.",
        slug: "buenas-practicas/solid-principles"
      })
    ).toEqual({
      title: "SOLID Principles | Guia de entrevistas tecnicas",
      description: "Resumen de SOLID para entrevistas tecnicas.",
      canonicalPath: "/guia/buenas-practicas/solid-principles"
    });
  });
});
