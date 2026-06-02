import { existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { spawn } from "node:child_process";
import { resolve } from "node:path";

const root = resolve(new URL("../../..", import.meta.url).pathname);
const dataFile = resolve(root, "packages/data/src/templates.ts");
const outputDir = resolve(root, "apps/web/public/templates/previews");
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const sourcePreviews = [
  {
    slug: "source-tailwind-plus",
    url: "https://tailwindcss.com/plus/templates",
  },
  {
    slug: "source-webflow",
    url: "https://webflow.com/templates",
  },
  {
    slug: "source-figma-community",
    url: "https://www.figma.com/community/website-templates",
  },
];

function readTemplates() {
  const source = readFileSync(dataFile, "utf8");
  const match = source.match(/export const templates: Template\[\] = (\[[\s\S]*\]);\s*$/);
  if (!match) {
    throw new Error(`Could not parse templates from ${dataFile}`);
  }
  return JSON.parse(match[1]);
}

function runChrome({ slug, url }) {
  const outputPath = resolve(outputDir, `${slug}.png`);
  const args = [
    "--headless",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--hide-scrollbars",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=5000",
    "--window-size=1200,800",
    `--user-data-dir=/private/tmp/component-template-previews-chrome-${process.pid}-${slug}`,
    `--screenshot=${outputPath}`,
    url,
  ];

  return new Promise((resolvePromise, rejectPromise) => {
    let settled = false;
    const child = spawn(chrome, args, {
      cwd: root,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let output = "";
    const timeout = setTimeout(() => {
      if (settled) return;
      settled = true;
      child.kill("SIGKILL");
      if (existsSync(outputPath)) {
        resolvePromise(outputPath);
        return;
      }
      rejectPromise(new Error(`Timed out capturing ${url}\n${output}`));
    }, 90000);

    const screenshotReady = setInterval(() => {
      if (!existsSync(outputPath)) {
        return;
      }
      const stats = statSync(outputPath);
      if (stats.size === 0 || settled) {
        return;
      }
      settled = true;
      clearTimeout(timeout);
      clearInterval(screenshotReady);
      child.kill("SIGKILL");
      resolvePromise(outputPath);
    }, 1000);

    child.stdout.on("data", (chunk) => {
      output += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      output += chunk.toString();
    });

    child.on("error", (error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      clearInterval(screenshotReady);
      rejectPromise(error);
    });
    child.on("close", (code) => {
      clearTimeout(timeout);
      clearInterval(screenshotReady);
      if (settled) return;
      settled = true;
      if (code !== 0 || !existsSync(outputPath)) {
        rejectPromise(new Error(`Failed to capture ${url}\n${output}`));
        return;
      }
      resolvePromise(outputPath);
    });
  });
}

mkdirSync(outputDir, { recursive: true });

const templates = readTemplates();
const captures = [
  ...sourcePreviews,
  ...templates.map((template) => ({
    slug: template.slug,
    url: template.url,
  })),
];

let completed = 0;
const missingCaptures = captures.filter(
  (capture) => !existsSync(resolve(outputDir, `${capture.slug}.png`))
);

for (const capture of missingCaptures) {
  completed += 1;
  process.stdout.write(`[${completed}/${missingCaptures.length}] ${capture.slug}\n`);
  try {
    await runChrome(capture);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
  }
}

console.log(`Captured ${missingCaptures.length} missing real preview images.`);
