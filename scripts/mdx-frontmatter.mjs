import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

export async function listMdxFiles(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(root, entry.name);
    if (entry.isDirectory()) return listMdxFiles(path);
    return entry.name.endsWith(".mdx") ? [path] : [];
  }));
  return files.flat();
}

export async function readMdxFrontmatter(path) {
  const source = await readFile(path, "utf8");
  const match = /^---\n([\s\S]*?)\n---/.exec(source);
  if (!match) return {};
  return parseYamlSubset(match[1]);
}

function parseYamlSubset(yaml) {
  const data = {};
  const lines = yaml.split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const pair = /^([A-Za-z][\w-]*):(?:\s+(.*))?$/.exec(line);
    if (!pair) {
      i += 1;
      continue;
    }

    const [, key, rawValue] = pair;
    if (rawValue !== undefined) {
      data[key] = parseScalar(rawValue);
      i += 1;
      continue;
    }

    if (lines[i + 1]?.startsWith("  - ")) {
      const items = [];
      i += 1;
      while (i < lines.length && lines[i].startsWith("  - ")) {
        const item = {};
        const first = lines[i].slice(4);
        const [firstKey, firstValue] = first.split(/:\s+/);
        item[firstKey] = parseScalar(firstValue ?? "");
        i += 1;
        while (i < lines.length && /^    [A-Za-z]/.test(lines[i])) {
          const [itemKey, itemValue] = lines[i].trim().split(/:\s+/);
          item[itemKey] = parseScalar(itemValue ?? "");
          i += 1;
        }
        items.push(item);
      }
      data[key] = items;
      continue;
    }

    if (lines[i + 1]?.startsWith("  ")) {
      const object = {};
      i += 1;
      while (i < lines.length && lines[i].startsWith("  ")) {
        const [objectKey, objectValue] = lines[i].trim().split(/:\s+/);
        object[objectKey] = parseScalar(objectValue ?? "");
        i += 1;
      }
      data[key] = object;
      continue;
    }

    data[key] = "";
    i += 1;
  }

  return data;
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed === "[]") return [];
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  return trimmed.replace(/^["']|["']$/g, "");
}
