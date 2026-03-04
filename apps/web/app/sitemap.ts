import { systems } from "@componentsystem/data";
import type { MetadataRoute } from "next";

const BASE_URL = "https://componentsystem.directory";

export default function sitemap(): MetadataRoute.Sitemap {
  const systemPages = systems.map((system) => ({
    url: `${BASE_URL}/${system.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/compare`, priority: 0.9 },
    { url: `${BASE_URL}/news`, priority: 0.7 },
    { url: `${BASE_URL}/jobs`, priority: 0.7 },
    { url: `${BASE_URL}/prompts`, priority: 0.8 },
    { url: `${BASE_URL}/showcases`, priority: 0.6 },
    { url: `${BASE_URL}/events`, priority: 0.6 },
    { url: `${BASE_URL}/newsletter`, priority: 0.7 },
    { url: `${BASE_URL}/ai`, priority: 0.8 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));

  return [...staticPages, ...systemPages];
}
