import { readFile } from "node:fs/promises";

export async function extractReadmeReferences(readmePath = "README.md") {
  const markdown = await readFile(readmePath, "utf8");
  const sections = new Map();
  let current = "";

  for (const line of markdown.split(/\r?\n/)) {
    const heading = /^(#{2,4})\s+(.+)$/.exec(line);
    if (heading) {
      current = heading[2].replace(/\s+\{#.+\}$/, "").trim();
      if (!sections.has(current)) sections.set(current, []);
      continue;
    }

    const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
    for (const match of line.matchAll(linkPattern)) {
      if (!current) continue;
      sections.get(current).push({ label: match[1], url: match[2] });
    }
  }

  return Object.fromEntries(sections);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(await extractReadmeReferences(process.argv[2]), null, 2));
}
