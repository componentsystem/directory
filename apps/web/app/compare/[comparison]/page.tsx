import { notFound } from "next/navigation";
import { systems } from "@componentsystem/data";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { ComparisonPageView } from "@/components/comparison-page-view";
import { parseComparison, popularComparisonSlugs } from "@/lib/compare";

export function generateStaticParams() {
  return popularComparisonSlugs.map((comparison) => ({ comparison }));
}

function findSystems(slugs: string[]) {
  return slugs
    .map((slug) => systems.find((system) => system.slug === slug))
    .filter((system): system is ComponentSystem => Boolean(system));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const compared = findSystems(parseComparison(comparison));

  if (compared.length < 2) return {};

  const names = compared.map((system) => system.name).join(" vs ");

  return {
    title: `${names} - Component Library Comparison`,
    description: `Compare ${names}: frameworks, styling approaches, components, maturity, links, and more.`,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const slugs = parseComparison(comparison);
  const compared = findSystems(slugs);

  if (compared.length < 2 || compared.length !== slugs.length) {
    notFound();
  }

  return <ComparisonPageView compared={compared} systems={systems} />;
}
