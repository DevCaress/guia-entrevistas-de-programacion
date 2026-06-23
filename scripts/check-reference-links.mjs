import { join } from "node:path";
import { listMdxFiles, readMdxFrontmatter } from "./mdx-frontmatter.mjs";

const contentRoot = join(process.cwd(), "src/content/guide");
const shouldFetch = process.argv.includes("--fetch");
const files = await listMdxFiles(contentRoot);
const invalid = [];

for (const file of files) {
  const data = await readMdxFrontmatter(file);
  for (const reference of data.references ?? []) {
    try {
      const url = new URL(reference.url);
      if (!["http:", "https:"].includes(url.protocol)) invalid.push(`${file}: ${reference.url}`);
      if (shouldFetch) {
        const response = await fetch(url, { method: "HEAD", redirect: "follow" });
        if (response.status >= 400) invalid.push(`${file}: ${reference.url} returned ${response.status}`);
      }
    } catch {
      invalid.push(`${file}: ${reference.url}`);
    }
  }
}

if (invalid.length) {
  console.error("Invalid reference links:");
  for (const issue of invalid) console.error(issue);
  process.exit(1);
}

console.log(`Checked reference ${shouldFetch ? "availability" : "URL syntax"} across ${files.length} guide pages.`);
