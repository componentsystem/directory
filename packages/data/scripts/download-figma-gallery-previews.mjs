import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const root = resolve(new URL("../../..", import.meta.url).pathname);
const dataFile = resolve(root, "packages/data/src/templates.ts");
const outputDir = resolve(root, "apps/web/public/templates/previews");
const tempDir = resolve(root, "apps/web/public/templates/.figma-downloads");

const landingGallery = "https://www.figma.com/templates/landing-page-design-inspiration/";
const dashboardGallery = "https://www.figma.com/templates/dashboard-designs/";

function readTemplates() {
  const source = readFileSync(dataFile, "utf8");
  const match = source.match(/export const templates: Template\[\] = (\[[\s\S]*\]);\s*$/);
  if (!match) {
    throw new Error(`Could not parse templates from ${dataFile}`);
  }
  return JSON.parse(match[1]);
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0 Safari/537.36",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }
  return response.text();
}

function collectTemplateImages(html) {
  const matches = [
    ...html.matchAll(/https:\/\/cdn\.sanity\.io\/images\/599r6htc\/regionalized\/[^"'<>\s]+/g),
  ].map((match) => match[0].replaceAll("&amp;", "&"));

  const byAsset = new Map();
  for (const url of matches) {
    const asset = url.match(/regionalized\/([^?]+)/)?.[1];
    if (!asset || byAsset.has(asset)) {
      continue;
    }
    if (!url.includes("w=2400&h=2400") && !url.includes("w=540&h=540")) {
      continue;
    }
    byAsset.set(asset, url);
  }

  return [...byAsset.values()];
}

function extractOgImage(html) {
  return html
    .match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)?.[1]
    ?.replaceAll("&amp;", "&");
}

async function downloadPng({ slug, imageUrl }) {
  const tempPath = resolve(tempDir, `${slug}`);
  const outputPath = resolve(outputDir, `${slug}.png`);
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${imageUrl}`);
  }
  writeFileSync(tempPath, Buffer.from(await response.arrayBuffer()));

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

const [landingHtml, dashboardHtml] = await Promise.all([
  fetchText(landingGallery),
  fetchText(dashboardGallery),
]);

const landingImages = collectTemplateImages(landingHtml);
const dashboardImages = collectTemplateImages(dashboardHtml);
const dashboardOgImage = extractOgImage(dashboardHtml);
const templates = readTemplates().filter((template) => template.sourceName === "Figma Community");

const landingTemplates = templates.filter((template) => !template.categories.includes("dashboard"));
const dashboardTemplates = templates.filter((template) => template.categories.includes("dashboard"));

if (landingImages.length < landingTemplates.length) {
  throw new Error(`Only found ${landingImages.length} landing images for ${landingTemplates.length} templates`);
}
if (dashboardImages.length < dashboardTemplates.length) {
  throw new Error(
    `Only found ${dashboardImages.length} dashboard images for ${dashboardTemplates.length} templates`
  );
}

let completed = 0;
const downloads = [
  ...(dashboardOgImage ? [{ slug: "source-figma-community", imageUrl: dashboardOgImage }] : []),
  ...landingTemplates.map((template, index) => ({
    slug: template.slug,
    imageUrl: landingImages[index],
  })),
  ...dashboardTemplates.map((template, index) => ({
    slug: template.slug,
    imageUrl: dashboardImages[index],
  })),
];

for (const download of downloads) {
  completed += 1;
  process.stdout.write(`[${completed}/${downloads.length}] ${download.slug}\n`);
  await downloadPng(download);
}

rmSync(tempDir, { recursive: true, force: true });
console.log(`Downloaded ${downloads.length} Figma gallery preview images.`);
