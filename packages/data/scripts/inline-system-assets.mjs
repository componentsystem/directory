import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { systems } from "../dist/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const systemsDirectory = path.resolve(__dirname, "../src/systems");
const metadata = new Map(
  systems.map((system) => [
    system.slug,
    {
      logo: system.logo,
      latestVersion: system.latestVersion ?? "unknown",
    },
  ]),
);

function stringProperty(name, value) {
  return ts.factory.createPropertyAssignment(
    ts.factory.createIdentifier(name),
    ts.factory.createStringLiteral(value),
  );
}

function propertyName(property) {
  return ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)
    ? property.name.text
    : undefined;
}

function propertyValue(objectLiteral, name) {
  const property = objectLiteral.properties.find(
    (item) =>
      ts.isPropertyAssignment(item) &&
      propertyName(item) === name &&
      ts.isStringLiteralLike(item.initializer),
  );

  return property?.initializer.text;
}

function replaceOrInsertProperties(properties, entries, afterName) {
  const handled = new Set();
  const next = [];

  for (const property of properties) {
    const name = ts.isPropertyAssignment(property) ? propertyName(property) : undefined;

    if (entries.has(name)) {
      next.push(stringProperty(name, entries.get(name)));
      handled.add(name);
      continue;
    }

    if (name === "version") {
      continue;
    }

    next.push(property);

    if (name === afterName) {
      for (const [entryName, entryValue] of entries) {
        if (!handled.has(entryName) && !properties.some((item) => ts.isPropertyAssignment(item) && propertyName(item) === entryName)) {
          next.push(stringProperty(entryName, entryValue));
          handled.add(entryName);
        }
      }
    }
  }

  for (const [entryName, entryValue] of entries) {
    if (!handled.has(entryName)) {
      next.push(stringProperty(entryName, entryValue));
    }
  }

  return next;
}

function migrateSourceFile(sourceFile) {
  const visit = (node) => {
    if (
      ts.isVariableDeclaration(node) &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      const slug = propertyValue(node.initializer, "slug");
      const values = slug ? metadata.get(slug) : undefined;

      if (!values?.logo) {
        return node;
      }

      const entries = new Map([
        ["logo", values.logo],
        ["latestVersion", values.latestVersion],
      ]);

      return ts.factory.updateVariableDeclaration(
        node,
        node.name,
        node.exclamationToken,
        node.type,
        ts.factory.updateObjectLiteralExpression(
          node.initializer,
          replaceOrInsertProperties(node.initializer.properties, entries, "url"),
        ),
      );
    }

    return ts.visitEachChild(node, visit, context);
  };

  let context;
  const transformer = (ctx) => {
    context = ctx;
    return (sf) => ts.visitNode(sf, visit);
  };

  return ts.transform(sourceFile, [transformer]).transformed[0];
}

const filenames = ts.sys.readDirectory(systemsDirectory, [".ts"], undefined, ["*"]);
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

for (const filename of filenames) {
  const source = await readFile(filename, "utf8");
  const sourceFile = ts.createSourceFile(
    filename,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const migrated = migrateSourceFile(sourceFile);
  const nextSource = `${printer.printFile(migrated)}\n`;

  if (nextSource !== source) {
    await writeFile(filename, nextSource);
  }
}

console.log(`Inlined logo and latestVersion into ${filenames.length} system files.`);
