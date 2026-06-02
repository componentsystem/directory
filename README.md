# componentsystem.directory

The definitive, community-driven directory of frontend component systems, design systems, and UI libraries.

**[componentsystem.directory](https://componentsystem.directory)**

## What is this?

A comprehensive directory of 125+ frontend component systems — searchable, filterable, and community-maintained. Think of it as **what cursor.directory did for AI rules, but for UI component libraries**.

### Features

- **Directory**: Browse 125+ component systems with framework, styling, and category filters
- **Search**: Instant fuzzy search across all libraries
- **Compare**: Side-by-side comparison pages for popular library matchups
- **AI Finder**: AI-powered library recommendations based on your project needs
- **Prompts**: Curated AI prompts for using component libraries with Cursor, Claude, and Copilot
- **Jobs**: Frontend & design system job board
- **Newsletter**: Weekly component digest

## Data Model

Each component system entry includes:

```ts
{
  slug: string;           // "shadcn-ui"
  name: string;           // "shadcn/ui"
  url: string;            // Website URL
  github?: string;        // GitHub repository URL
  npm?: string;           // npm package name
  description: string;    // Short description
  frameworks: string[];   // "react" | "vue" | "svelte" | ...
  styling: string[];      // "tailwind" | "css-in-js" | "headless" | ...
  category: string[];     // "general" | "enterprise" | "data-viz" | ...
  maturity: string;       // "active" | "stable" | "deprecated" | ...
  components: string[];   // ["Button", "Modal", "Table", ...]
  tags: string[];
}
```

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

**Quick start:**

1. Fork the repo
2. Add a file in `packages/data/src/systems/your-library.ts`
3. Fill in the schema
4. Open a PR

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Data | TypeScript files (open source friendly) |
| Search | Fuse.js |
| Validation | Zod |
| Hosting | Vercel |
| CI | GitHub Actions |

## Project Structure

```
componentsystem.directory/
├── apps/
│   └── web/                 ← Next.js 15 app
│       ├── app/             ← App Router pages
│       └── components/      ← React components
├── packages/
│   └── data/
│       └── src/
│           ├── systems/     ← One .ts file per component system
│           ├── schema.ts    ← Zod schema & TypeScript types
│           ├── validate.ts  ← Validation script
│           └── index.ts     ← Exports all systems
├── .github/
│   └── workflows/           ← CI validation
├── CONTRIBUTING.md
└── README.md
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Validate all data entries
npm run validate

# Build for production
npm run build
```

## License

MIT
