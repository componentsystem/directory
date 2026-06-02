import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const root = resolve(new URL("../../..", import.meta.url).pathname);
const dataFile = resolve(root, "packages/data/src/templates.ts");
const outputDir = resolve(root, "apps/web/public/templates/previews");
const tempDir = resolve(root, "apps/web/public/templates/.preview-downloads");

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

function extractMetaImage(html, pageUrl) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of metaTags) {
    const property = tag.match(/\b(?:property|name)=["']([^"']+)["']/i)?.[1];
    if (property !== "og:image" && property !== "twitter:image") {
      continue;
    }

    const content = tag.match(/\bcontent=["']([^"']+)["']/i)?.[1];
    if (content) {
      return new URL(content, pageUrl).toString();
    }
  }
  return null;
}

async function fetchBuffer(url) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function downloadPreview({ slug, url }) {
  const outputPath = resolve(outputDir, `${slug}.png`);
  const tempPath = resolve(tempDir, `${slug}`);
  const html = (await fetchBuffer(url)).toString("utf8");
  const imageUrl = extractMetaImage(html, url);

  if (!imageUrl) {
    throw new Error(`No og:image or twitter:image found for ${url}`);
  }

  writeFileSync(tempPath, await fetchBuffer(imageUrl));

  const result = spawnSync("sips", ["-s", "format", "png", tempPath, "--out", outputPath], {
    encoding: "utf8",
  });

  if (result.status !== 0) {
    throw new Error(`Could not convert ${imageUrl}\n${result.stderr || result.stdout}`);
  }
}

mkdirSync(outputDir, { recursive: true });
rmSync(tempDir, { recursive: true, force: true });
mkdirSync(tempDir, { recursive: true });

const templates = readTemplates();
const downloads = [
  ...sourcePreviews,
  ...templates.map((template) => ({
    slug: template.slug,
    url: template.url,
  })),
];

let completed = 0;
for (const download of downloads) {
  completed += 1;
  process.stdout.write(`[${completed}/${downloads.length}] ${download.slug}\n`);
  try {
    await downloadPreview(download);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
  }
}

rmSync(tempDir, { recursive: true, force: true });
console.log(`Downloaded preview images for ${downloads.length} entries.`);
