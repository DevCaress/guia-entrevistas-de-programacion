import { access } from "node:fs/promises";
import { join } from "node:path";
import { extractReadmeReferences } from "./extract-readme-references.mjs";
import { listMdxFiles, readMdxFrontmatter } from "./mdx-frontmatter.mjs";

const requiredSections = {
  "Principios SOLID": "buenas-practicas/solid-principles",
  DRY: "buenas-practicas/dry-kiss-yagni-grasp-lod",
  "Clean Code": "buenas-practicas/clean-code",
  "Clean architecture": "buenas-practicas/clean-architecture",
  Angular: "buenas-practicas-en/angular",
  "C++": "buenas-practicas-en/cpp",
  Dart: "buenas-practicas-en/dart",
  Django: "buenas-practicas-en/django",
  Flutter: "buenas-practicas-en/flutter",
  Java: "buenas-practicas-en/java",
  Javascript: "buenas-practicas-en/javascript",
  PHP: "buenas-practicas-en/php",
  Python: "buenas-practicas-en/python",
  "React.js": "buenas-practicas-en/reactjs",
  Typescript: "buenas-practicas-en/typescript",
  "Vue.js": "buenas-practicas-en/vuejs",
  "Complejidad algorítmica": "algoritmos-y-estructuras-de-datos/complejidad-algoritmica",
  Algoritmos: "algoritmos-y-estructuras-de-datos/algoritmos",
  "Estructuras de datos": "algoritmos-y-estructuras-de-datos/estructuras-de-datos",
  "Practicar algoritmos y estructuras de datos": "algoritmos-y-estructuras-de-datos/practicar-algoritmos",
  "[Visualgo](https://visualgo.net/)": "algoritmos-y-estructuras-de-datos/visualgo",
  "Patrones de diseño": "patrones-de-diseno",
  "Diseño de sistemas": "diseno-de-sistemas",
  "Bases de datos": "bases-de-datos",
  "ORM's": "orms",
  "Arquitectura de Software": "arquitectura-de-software",
  Frontend: "frontend",
  "React Clean Architecture": "react-clean-architecture",
  "Vue JS Clean Architecture": "vue-js-clean-architecture",
  Backend: "backend",
  "Clean Architecture Express JS": "clean-architecture-express-js",
  "Clean Architecture Java": "clean-architecture-java",
  "Clean Architecture PHP": "clean-architecture-php",
  "Clean Architecture Python": "clean-architecture-python",
  "Preguntas más frecuentes": "preguntas-frecuentes",
  "Preguntas de Frontend": "preguntas-frontend",
  "Preguntas de Backend": "preguntas-backend",
  "Control de Versiones": "control-de-versiones",
  Workflows: "workflows",
  "CI/CD": "cicd",
  "Contenedores y Orquestación": "contenedores-orquestacion",
  "IA para desarrolladores": "ia-para-desarrolladores"
};

const contentRoot = join(process.cwd(), "src/content/guide");

try {
  await access(contentRoot);
} catch {
  console.error(`Missing content directory: ${contentRoot}`);
  process.exit(1);
}

const files = await listMdxFiles(contentRoot);
const bySlug = new Map(files.map((file) => [file.slice(contentRoot.length + 1, -4), file]));
const missing = Object.values(requiredSections).filter((slug) => !bySlug.has(slug));
const readmeReferences = await extractReadmeReferences("README.md");

const invalid = [];
for (const file of files) {
  const data = await readMdxFrontmatter(file);
  for (const key of ["title", "description", "category", "sidebar", "references"]) {
    if (!(key in data)) invalid.push(`${file}: missing ${key}`);
  }
}

for (const [readmeSection, slug] of Object.entries(requiredSections)) {
  const file = bySlug.get(slug);
  if (!file) continue;
  const data = await readMdxFrontmatter(file);
  const migrated = new Set((data.references ?? []).map((reference) => `${reference.label}\n${reference.url}`));
  for (const reference of readmeReferences[readmeSection] ?? []) {
    const key = `${reference.label}\n${reference.url}`;
    if (!migrated.has(key)) {
      invalid.push(`${file}: missing README reference "${reference.label}" <${reference.url}>`);
    }
  }
}

if (missing.length || invalid.length) {
  for (const slug of missing) console.error(`Missing migrated section: ${slug}`);
  for (const issue of invalid) console.error(issue);
  process.exit(1);
}

console.log(`Verified ${files.length} migrated guide pages.`);
