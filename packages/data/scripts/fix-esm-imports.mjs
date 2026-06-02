import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = fileURLToPath(new URL("../dist/", import.meta.url));

async function listJavaScriptFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      return entry.isDirectory() ? listJavaScriptFiles(path) : path;
    })
  );

  return files.flat().filter((path) => path.endsWith(".js"));
}

const files = await listJavaScriptFiles(distDir);

await Promise.all(
  files.map(async (file) => {
    const source = await readFile(file, "utf8");
    const updated = source.replace(
      /(from\s+["'])(\.{1,2}\/[^"']+)(["'])/g,
      (match, prefix, specifier, suffix) =>
        extname(specifier) ? match : `${prefix}${specifier}.js${suffix}`
    );

    if (updated !== source) {
      await writeFile(file, updated);
    }
  })
);
