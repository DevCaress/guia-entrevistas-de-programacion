import { describe, expect, it } from "vitest";
import { getFirstGuidePath, groupGuideEntries } from "../../src/utils/guide";

describe("guide navigation helpers", () => {
  it("groups entries by category and sorts by sidebar order then title", () => {
    const groups = groupGuideEntries([
      {
        id: "b.mdx",
        slug: "b",
        data: {
          title: "B",
          description: "B",
          category: "Categoria",
          sidebar: { order: 20 }
        }
      },
      {
        id: "a.mdx",
        slug: "a",
        data: {
          title: "A",
          description: "A",
          category: "Categoria",
          sidebar: { label: "Etiqueta A", order: 10 }
        }
      },
      {
        id: "z.mdx",
        slug: "z",
        data: {
          title: "Z",
          description: "Z",
          category: "Otra",
          sidebar: { order: 5 }
        }
      }
    ]);

    expect(groups).toEqual([
      {
        category: "Otra",
        items: [
          {
            href: "/guia/z",
            label: "Z",
            title: "Z",
            slug: "z",
            order: 5
          }
        ]
      },
      {
        category: "Categoria",
        items: [
          {
            href: "/guia/a",
            label: "Etiqueta A",
            title: "A",
            slug: "a",
            order: 10
          },
          {
            href: "/guia/b",
            label: "B",
            title: "B",
            slug: "b",
            order: 20
          }
        ]
      }
    ]);
  });

  it("returns the first deterministic guide path", () => {
    expect(
      getFirstGuidePath([
        {
          id: "later.mdx",
          slug: "later",
          data: {
            title: "Later",
            description: "Later",
            category: "Categoria",
            sidebar: { order: 30 }
          }
        },
        {
          id: "first.mdx",
          slug: "first",
          data: {
            title: "First",
            description: "First",
            category: "Categoria",
            sidebar: { order: 1 }
          }
        }
      ])
    ).toBe("/guia/first");
  });
});
