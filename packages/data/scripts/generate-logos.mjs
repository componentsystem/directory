import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as simpleIcons from "simple-icons";
import { systems } from "../dist/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../../..");
const logoDirectory = path.join(repoRoot, "apps/web/public/logos/component-systems");
const manifestPath = path.join(logoDirectory, "manifest.json");
const downloadMissing = process.argv.includes("--download-missing");

const simpleIconAliases = {
  "angular-material": ["Angular", "Material Design"],
  "ant-design": ["Ant Design"],
  atlaskit: ["Atlassian"],
  "base-ui": ["MUI"],
  "base-web": ["Uber"],
  catalyst: ["Tailwind CSS"],
  "cf-design": ["Cloudflare"],
  "clarity-design": ["VMware"],
  "elastic-ui": ["Elastic"],
  evergreen: ["Segment"],
  "fast-design": ["Microsoft"],
  "fluent-ui": ["Microsoft"],
  "flowbite-svelte": ["Flowbite"],
  "framework7-react": ["Framework7"],
  garden: ["Zendesk"],
  gestalt: ["Pinterest"],
  "govuk-react": ["GOV.UK"],
  "hackclub-design": ["Hack Club"],
  "hackclub-theme": ["Hack Club"],
  "headless-ui": ["Tailwind CSS"],
  ice: ["Alibaba Cloud"],
  "lightning-design": ["Salesforce"],
  lit: ["Lit"],
  mdbootstrap: ["Bootstrap"],
  "mongodb-design": ["MongoDB"],
  "ng-bootstrap": ["Bootstrap", "Angular"],
  "onsen-ui": ["Onsen UI"],
  orbit: ["Kiwi.com"],
  polaris: ["Shopify"],
  "radix-themes": ["Radix UI"],
  reactstrap: ["Bootstrap", "React"],
  restyle: ["Shopify"],
  "ring-ui": ["JetBrains"],
  rnui: ["Wix"],
  "solid-bootstrap": ["Bootstrap", "Solid"],
  "stitch-es": ["Stitches"],
  "svelte-material-ui": ["Material Design"],
  ui5: ["SAP"],
  visx: ["Airbnb"],
};

const simpleIconList = Object.values(simpleIcons).filter(
  (value) =>
    value &&
    typeof value === "object" &&
    typeof value.title === "string" &&
    typeof value.svg === "string",
);

const iconsByTitle = new Map();
for (const icon of simpleIconList) {
  iconsByTitle.set(normalize(icon.title), icon);
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function findSimpleIcon(system) {
  const candidates = [
    ...(simpleIconAliases[system.slug] ?? []),
    system.name,
    system.name.replace(/\b(ui|react|svelte|vue|angular|solid|components?|system|framework|design)\b/gi, "").trim(),
    system.company,
  ].filter(Boolean);

  for (const candidate of candidates) {
    const icon = iconsByTitle.get(normalize(candidate));
    if (icon) {
      return icon;
    }
  }

  return undefined;
}

function toSimpleIconSvg(icon) {
  return icon.svg
    .replace("<svg ", '<svg fill="#111827" ')
    .replace(/<title>.*?<\/title>/, `<title>${escapeXml(icon.title)}</title>`);
}

function getInitials(system) {
  const words = system.name
    .replace(/\/.*$/, "")
    .split(/[^a-z0-9]+/i)
    .filter(Boolean);
  return (words.length > 1 ? `${words[0][0]}${words[1][0]}` : system.name.slice(0, 2)).toUpperCase();
}

function toFallbackSvg(system) {
  const initials = escapeXml(getInitials(system));

  return `<svg role="img" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <title>${escapeXml(system.name)}</title>
  <rect width="64" height="64" rx="14" fill="#111827"/>
  <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="#f9fafb" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700">${initials}</text>
</svg>
`;
}

function parseGithubOwner(github) {
  if (!github) {
    return undefined;
  }

  try {
    const url = new URL(github);
    if (url.hostname !== "github.com") {
      return undefined;
    }

    return url.pathname.split("/").filter(Boolean)[0];
  } catch {
    return undefined;
  }
}

function extensionForContentType(contentType, sourceUrl) {
  if (contentType.includes("svg")) return "svg";
  if (contentType.includes("png")) return "png";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return "jpg";
  if (contentType.includes("webp")) return "webp";
  if (contentType.includes("icon") || contentType.includes("ico")) return "ico";

  const extension = path.extname(new URL(sourceUrl).pathname).replace(".", "").toLowerCase();
  return ["svg", "png", "jpg", "jpeg", "webp", "ico"].includes(extension) ? extension : "png";
}

async function fetchWithTimeout(url) {
  return fetch(url, {
    headers: {
      "user-agent": "component-system-directory-logo-generator/1.0",
      accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(7000),
  });
}

async function downloadImage(sourceUrl, slug) {
  const response = await fetchWithTimeout(sourceUrl);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.startsWith("image/")) {
    throw new Error(`Unexpected content type: ${contentType || "unknown"}`);
  }

  const extension = extensionForContentType(contentType, response.url);
  const filename = `${slug}.${extension}`;
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(path.join(logoDirectory, filename), buffer);

  return {
    filename,
    source: response.url,
  };
}

async function findSiteIcon(system) {
  const pageResponse = await fetch(system.url, {
    headers: {
      "user-agent": "component-system-directory-logo-generator/1.0",
      accept: "text/html,application/xhtml+xml",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(7000),
  });

  if (!pageResponse.ok) {
    throw new Error(`HTTP ${pageResponse.status}`);
  }

  const html = await pageResponse.text();
  const iconLinks = [...html.matchAll(/<link\s+[^>]*>/gi)]
    .map(([tag]) => {
      const rel = tag.match(/\brel=["']([^"']+)["']/i)?.[1] ?? "";
      const href = tag.match(/\bhref=["']([^"']+)["']/i)?.[1];
      return { rel, href };
    })
    .filter(({ rel, href }) => href && /icon/i.test(rel))
    .sort((a, b) => scoreIconLink(b) - scoreIconLink(a));

  for (const { href } of iconLinks) {
    try {
      return await downloadImage(new URL(href, pageResponse.url).toString(), system.slug);
    } catch {
      // Try the next advertised icon before falling back to common paths.
    }
  }

  for (const filename of ["favicon.svg", "apple-touch-icon.png", "favicon.ico"]) {
    try {
      return await downloadImage(new URL(`/${filename}`, pageResponse.url).toString(), system.slug);
    } catch {
      // Keep looking.
    }
  }

  throw new Error("No usable site icon found");
}

function scoreIconLink({ rel, href }) {
  const value = `${rel} ${href}`.toLowerCase();
  if (value.includes("svg")) return 4;
  if (value.includes("apple-touch-icon")) return 3;
  if (value.includes("icon")) return 2;
  return 1;
}

async function downloadMissingLogo(system) {
  const owner = parseGithubOwner(system.github);
  if (owner) {
    try {
      return {
        ...(await downloadImage(`https://github.com/${owner}.png?size=128`, system.slug)),
        sourceType: "github-avatar",
      };
    } catch {
      // Try the official site icon next.
    }
  }

  return {
    ...(await findSiteIcon(system)),
    sourceType: "site-icon",
  };
}

async function mapWithConcurrency(items, limit, callback) {
  const results = [];
  let cursor = 0;

  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        results[index] = await callback(items[index]);
      }
    }),
  );

  return results;
}

async function createLogo(system) {
  const icon = findSimpleIcon(system);
  if (icon) {
    const filename = `${system.slug}.svg`;
    await writeFile(path.join(logoDirectory, filename), toSimpleIconSvg(icon));
    return {
      slug: system.slug,
      name: system.name,
      file: `/logos/component-systems/${filename}`,
      sourceType: "simple-icons",
      source: `simple-icons:${icon.slug}`,
      matchedTitle: icon.title,
    };
  }

  if (downloadMissing) {
    try {
      const downloaded = await downloadMissingLogo(system);
      return {
        slug: system.slug,
        name: system.name,
        file: `/logos/component-systems/${downloaded.filename}`,
        sourceType: downloaded.sourceType,
        source: downloaded.source,
      };
    } catch (error) {
      console.warn(`Could not download logo for ${system.slug}: ${error.message}`);
    }
  }

  const filename = `${system.slug}.svg`;
  await writeFile(path.join(logoDirectory, filename), toFallbackSvg(system));
  return {
    slug: system.slug,
    name: system.name,
    file: `/logos/component-systems/${filename}`,
    sourceType: "generated-fallback",
    source: "local-generated-initials",
  };
}

await mkdir(logoDirectory, { recursive: true });

const manifest = await mapWithConcurrency(systems, 8, createLogo);
const sortedManifest = manifest.toSorted((a, b) => a.slug.localeCompare(b.slug));

await writeFile(`${manifestPath}`, `${JSON.stringify(sortedManifest, null, 2)}\n`);

const activeFiles = new Set([
  "manifest.json",
  ...sortedManifest.map((entry) => path.basename(entry.file)),
]);

for (const filename of await readdir(logoDirectory)) {
  if (!activeFiles.has(filename)) {
    await unlink(path.join(logoDirectory, filename));
  }
}

const counts = sortedManifest.reduce((accumulator, entry) => {
  accumulator[entry.sourceType] = (accumulator[entry.sourceType] ?? 0) + 1;
  return accumulator;
}, {});

console.log(`Generated ${sortedManifest.length} logo assets.`);
console.log(counts);
