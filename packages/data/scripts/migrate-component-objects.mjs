import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const systemsDirectory = path.resolve(__dirname, "../src/systems");

const overrides = {
  mui: {
    RadioGroup: {
      name: "Radio Group",
      description: "The Radio Group allows the user to select one option from a set.",
      link: "https://mui.com/material-ui/react-radio-button/",
    },
  },
};

const urlPatterns = {
  "ant-design": (s) => `https://ant.design/components/${s}`,
  "shadcn-ui": (s) => `https://ui.shadcn.com/docs/components/${s}`,
  mui: (s) => `https://mui.com/material-ui/react-${s}/`,
  "chakra-ui": (s) => `https://www.chakra-ui.com/docs/components/${s}`,
  mantine: (s) => `https://mantine.dev/core/${s}/`,
  "radix-ui": (s) => `https://www.radix-ui.com/primitives/docs/components/${s}`,
  "radix-themes": (s) => `https://www.radix-ui.com/themes/docs/components/${s}`,
  "headless-ui": (s) => `https://headlessui.com/react/${s}`,
  "react-aria": (s) => `https://react-spectrum.adobe.com/react-aria/${s}.html`,
  bootstrap: (s) => `https://getbootstrap.com/docs/5.3/components/${s}/`,
  vuetify: (s) => `https://vuetifyjs.com/en/components/${s}s/`,
  nextui: (s) => `https://nextui.org/docs/components/${s}`,
  "daisy-ui": (s) => `https://daisyui.com/components/${s}/`,
  flowbite: (s) => `https://flowbite.com/docs/components/${s}/`,
  "element-plus": (s) => `https://element-plus.org/en-US/component/${s}.html`,
  primereact: (s) => `https://primereact.org/${s}/`,
  blueprint: (s) => `https://blueprintjs.com/docs/#core/components/${s}`,
  ariakit: (s) => `https://ariakit.org/components/${s}`,
  "ark-ui": (s) => `https://ark-ui.com/react/docs/components/${s}`,
  "fluent-ui": (s) => `https://react.fluentui.dev/?path=/docs/components-${s}--default`,
  "carbon-design-system": (s) => `https://carbondesignsystem.com/components/${s}/usage/`,
  polaris: (s) => `https://polaris.shopify.com/components/${s}`,
  quasar: (s) => `https://quasar.dev/vue-components/${s}`,
  "park-ui": (s) => `https://park-ui.com/docs/components/${s}`,
  "bits-ui": (s) => `https://bits-ui.com/docs/components/${s}`,
  skeleton: (s) => `https://www.skeleton.dev/components/${s}`,
  "angular-material": (s) => `https://material.angular.io/components/${s}/overview`,
  kobalte: (s) => `https://kobalte.dev/docs/core/components/${s}`,
  "shadcn-svelte": (s) => `https://www.shadcn-svelte.com/docs/components/${s}`,
  rsuite: (s) => `https://rsuitejs.com/components/${s}/`,
  "arco-design": (s) => `https://arco.design/react/components/${s}`,
  "semi-design": (s) => `https://semi.design/en-US/show/${s}`,
};

function toSlug(name) {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function componentLink(systemSlug, systemUrl, componentName) {
  const pattern = urlPatterns[systemSlug];
  return pattern ? pattern(toSlug(componentName)) : systemUrl;
}

function componentDescription(systemName, componentName) {
  return `A ${componentName} component provided by ${systemName}.`;
}

function stringProperty(name, value) {
  return ts.factory.createPropertyAssignment(
    ts.factory.createIdentifier(name),
    ts.factory.createStringLiteral(value),
  );
}

function propertyValue(objectLiteral, propertyName) {
  const property = objectLiteral.properties.find(
    (item) =>
      ts.isPropertyAssignment(item) &&
      ts.isIdentifier(item.name) &&
      item.name.text === propertyName &&
      ts.isStringLiteralLike(item.initializer),
  );

  return property?.initializer.text;
}

function objectPropertyValue(objectLiteral, propertyName) {
  const property = objectLiteral.properties.find(
    (item) =>
      ts.isPropertyAssignment(item) &&
      ts.isIdentifier(item.name) &&
      item.name.text === propertyName,
  );

  return property?.initializer;
}

function componentObject(system, component) {
  if (ts.isObjectLiteralExpression(component)) {
    const name = propertyValue(component, "name");
    const componentName = name ?? "Component";
    const existingDescription = propertyValue(component, "description");
    const existingLink = propertyValue(component, "link");

    return ts.factory.createObjectLiteralExpression(
      [
        stringProperty("name", componentName),
        stringProperty(
          "description",
          existingDescription ?? componentDescription(system.name, componentName),
        ),
        stringProperty(
          "link",
          existingLink ?? componentLink(system.slug, system.url, componentName),
        ),
      ],
      true,
    );
  }

  if (!ts.isStringLiteralLike(component)) {
    return component;
  }

  const rawName = component.text;
  const override = overrides[system.slug]?.[rawName];
  const name = override?.name ?? rawName;

  return ts.factory.createObjectLiteralExpression(
    [
      stringProperty("name", name),
      stringProperty("description", override?.description ?? componentDescription(system.name, name)),
      stringProperty("link", override?.link ?? componentLink(system.slug, system.url, name)),
    ],
    true,
  );
}

function migrateSourceFile(sourceFile) {
  const visit = (node) => {
    if (
      ts.isVariableDeclaration(node) &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      const system = {
        slug: propertyValue(node.initializer, "slug"),
        name: propertyValue(node.initializer, "name"),
        url: propertyValue(node.initializer, "url"),
      };

      if (!system.slug || !system.name || !system.url) {
        return node;
      }

      const componentsInitializer = objectPropertyValue(node.initializer, "components");
      if (!componentsInitializer || !ts.isArrayLiteralExpression(componentsInitializer)) {
        return node;
      }

      const nextProperties = node.initializer.properties.map((property) => {
        if (
          ts.isPropertyAssignment(property) &&
          ts.isIdentifier(property.name) &&
          property.name.text === "components" &&
          ts.isArrayLiteralExpression(property.initializer)
        ) {
          return ts.factory.updatePropertyAssignment(
            property,
            property.name,
            ts.factory.createArrayLiteralExpression(
              property.initializer.elements.map((component) =>
                componentObject(system, component),
              ),
              true,
            ),
          );
        }

        return property;
      });

      return ts.factory.updateVariableDeclaration(
        node,
        node.name,
        node.exclamationToken,
        node.type,
        ts.factory.updateObjectLiteralExpression(node.initializer, nextProperties),
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

const filenames = ts.sys
  .readDirectory(systemsDirectory, [".ts"], undefined, ["*"])
  .filter((filename) => filename.endsWith(".ts"));

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
});

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

console.log(`Migrated ${filenames.length} component system files.`);
