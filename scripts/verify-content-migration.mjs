import { access } from "node:fs/promises";
import { join } from "node:path";
import { listMdxFiles, readMdxFrontmatter } from "./mdx-frontmatter.mjs";

const requiredSections = [
  "solid-principles",
  "dry-kiss-yagni-grasp-lod",
  "clean-code",
  "clean-architecture",
  "angular",
  "cpp",
  "dart",
  "django",
  "flutter",
  "java",
  "javascript",
  "php",
  "python",
  "reactjs",
  "typescript",
  "vuejs",
  "complejidad-algoritmica",
  "algoritmos",
  "estructuras-de-datos",
  "practicar-algoritmos",
  "visualgo",
  "patrones-de-diseno",
  "diseno-de-sistemas",
  "bases-de-datos",
  "orms",
  "arquitectura-de-software",
  "frontend",
  "react-clean-architecture",
  "vue-js-clean-architecture",
  "backend",
  "clean-architecture-express-js",
  "clean-architecture-java",
  "clean-architecture-php",
  "clean-architecture-python",
  "preguntas-frecuentes",
  "preguntas-frontend",
  "preguntas-backend",
  "control-de-versiones",
  "workflows",
  "cicd",
  "contenedores-orquestacion",
  "ia-para-desarrolladores"
];

const contentRoot = join(process.cwd(), "src/content/guide");

try {
  await access(contentRoot);
} catch {
  console.error(`Missing content directory: ${contentRoot}`);
  process.exit(1);
}

const files = await listMdxFiles(contentRoot);
const slugs = new Set(files.map((file) => file.slice(contentRoot.length + 1, -4)));
const missing = requiredSections.filter((slug) => !slugs.has(slug));

const invalid = [];
for (const file of files) {
  const data = await readMdxFrontmatter(file);
  for (const key of ["title", "description", "category", "sidebar", "references"]) {
    if (!(key in data)) invalid.push(`${file}: missing ${key}`);
  }
}

if (missing.length || invalid.length) {
  for (const slug of missing) console.error(`Missing migrated section: ${slug}`);
  for (const issue of invalid) console.error(issue);
  process.exit(1);
}

console.log(`Verified ${files.length} migrated guide pages.`);
