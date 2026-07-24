# Auditoría del ajuste de frontmatter MDX

## Problema observado

El parser de `scripts/mdx-frontmatter.mjs` solo reconocía saltos de línea `LF`:

```js
/^---\n([\s\S]*?)\n---/
```

Los archivos MDX del repositorio contienen saltos `CRLF` (`\r\n`). Como resultado, el parser devolvía `{}` aunque el bloque YAML existiera. Esto hacía fallar `content-schema.test.ts`, `reference-parity.test.ts` y la validación de contenido.

## Ajuste aplicado

El patrón ahora acepta opcionalmente BOM, `LF` o `CRLF`, y exige el cierre del frontmatter:

```js
const match = /^(?:\uFEFF)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(source);
```

El cambio es local, no altera el contenido editorial ni el esquema YAML.

## Auditoría reproducible

Desde la raíz del repositorio:

```powershell
npm install
npm test
npm run verify:content
npm run check:links
```

Resultado observado después del cambio:

- `npm test`: 4 archivos y 5 pruebas aprobadas.
- La prueba de regresión en `tests/unit/content-schema.test.ts` crea un MDX temporal con terminaciones `CRLF` y confirma que `title`, `category` y `sidebar.order` se parsean correctamente; la suite queda en 6 pruebas aprobadas.
- `npm run verify:content`: termina correctamente; las líneas `Missing migrated section` son avisos del inventario histórico, no errores de salida.
- `npm run check:links`: comprobó 50 páginas sin errores de sintaxis de URL.

## Alcance y siguiente mejora

No se hizo commit ni push al repositorio upstream. El siguiente cambio independiente sería corregir la sintaxis POSIX de `ASTRO_TELEMETRY_DISABLED=1` para Windows mediante `cross-env` o un wrapper Node, y añadir una matriz de CI Windows. Ese problema no se mezcla con esta corrección de parsing.
