# Contributing to componentsystem.directory

Thank you for contributing to the definitive directory of frontend component systems! This project is community-driven and we welcome contributions of all kinds.

## Adding a Component System

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/directory.git
cd directory
npm install
```

### 2. Create a Data File

Add a new TypeScript file in `packages/data/src/systems/`:

```bash
touch packages/data/src/systems/your-library.ts
```

### 3. Fill in the Schema

```ts
import type { ComponentSystem } from "../schema.js";

const yourLibrary: ComponentSystem = {
  slug: "your-library",           // lowercase, hyphens only
  name: "Your Library",
  url: "https://your-library.dev",
  github: "https://github.com/org/your-library",
  npm: "your-library",
  description: "A brief description of your component library in 1-2 sentences.",
  frameworks: ["react"],          // see options below
  styling: ["tailwind"],          // see options below
  category: ["general"],          // see options below
  maturity: "active",             // see options below
  components: [                   // list of included components
    "Button",
    "Input",
    "Modal",
    "Table",
  ],
  tags: ["accessible", "typescript"],
};

export default yourLibrary;
```

### Schema Options

**Frameworks**: `react` | `vue` | `svelte` | `angular` | `solid` | `native` | `web-components` | `astro` | `qwik` | `html`

**Styling**: `tailwind` | `css-in-js` | `css-modules` | `headless` | `styled-components` | `bootstrap` | `material` | `vanilla-css` | `design-tokens`

**Categories**: `general` | `data-viz` | `native` | `enterprise` | `animation` | `layout` | `forms` | `charts` | `primitives` | `design-system` | `documentation` | `dashboard` | `mobile`

**Maturity**: `experimental` | `active` | `stable` | `deprecated` | `unmaintained`

### 4. Add the Import

Add your library to `packages/data/src/index.ts`:

```ts
import yourLibrary from "./systems/your-library.js";

// Add to the systems array:
export const systems: ComponentSystem[] = [
  // ... existing entries
  yourLibrary,
];
```

### 5. Validate

```bash
npm run validate
```

### 6. Open a PR

Push your branch and open a Pull Request. Our CI will:

- Validate the schema with Zod
- Check for duplicate slugs
- Verify URL format

## Updating an Existing Entry

If you notice outdated information for a listed library:

1. Find the file in `packages/data/src/systems/`
2. Update the relevant fields
3. Open a PR with a description of what changed and why

## Guidelines

- **Slug format**: lowercase, alphanumeric, hyphens only (e.g., `shadcn-ui`)
- **Description**: 1-2 sentences, 10-300 characters, factual and neutral
- **Components list**: Use PascalCase names (e.g., `Button`, `DataTable`, `DatePicker`)
- **Maturity**: Be honest — mark deprecated/unmaintained libraries accordingly
- **No duplicates**: Check existing entries before adding
- **One library per PR**: Keep PRs focused and easy to review

## Reporting Issues

- Library data is wrong? Open an issue or PR
- Found a bug on the website? Open an issue
- Have a feature idea? Open a discussion

## Code of Conduct

Be respectful, constructive, and welcoming. We're all here to build something useful for the frontend community.
