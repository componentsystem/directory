import Link from "next/link";
import { systems } from "@componentsystem/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Component Libraries — componentsystem.directory",
  description:
    "Side-by-side comparisons of popular UI component libraries. Compare shadcn/ui vs Mantine, Radix UI vs Headless UI, MUI vs Ant Design, and more.",
};

const popularComparisons = [
  { a: "shadcn-ui", b: "mantine" },
  { a: "shadcn-ui", b: "radix-ui" },
  { a: "mui", b: "ant-design" },
  { a: "radix-ui", b: "headless-ui" },
  { a: "chakra-ui", b: "mantine" },
  { a: "mui", b: "chakra-ui" },
  { a: "nextui", b: "shadcn-ui" },
  { a: "daisy-ui", b: "flowbite" },
  { a: "vuetify", b: "element-plus" },
  { a: "primereact", b: "ant-design" },
  { a: "skeleton", b: "shadcn-svelte" },
  { a: "bits-ui", b: "melt-ui" },
];

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Compare Component Libraries
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Side-by-side comparisons to help you choose the right component system
          for your project.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Popular Comparisons
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularComparisons.map(({ a, b }) => {
            const systemA = systems.find((s) => s.slug === a);
            const systemB = systems.find((s) => s.slug === b);
            if (!systemA || !systemB) return null;

            return (
              <Link
                key={`${a}-${b}`}
                href={`/compare/${a}-vs-${b}`}
                className="group flex items-center justify-between rounded-xl border border-gray-200 p-5 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 font-bold text-gray-600 group-hover:bg-brand-50 group-hover:text-brand-600">
                    {systemA.name.charAt(0)}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-900">
                    {systemA.name}
                  </p>
                </div>
                <span className="text-lg font-bold text-gray-300">vs</span>
                <div className="text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 font-bold text-gray-600 group-hover:bg-brand-50 group-hover:text-brand-600">
                    {systemB.name.charAt(0)}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-900">
                    {systemB.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Compare by Framework
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { fw: "react", label: "React Libraries" },
            { fw: "vue", label: "Vue Libraries" },
            { fw: "svelte", label: "Svelte Libraries" },
            { fw: "angular", label: "Angular Libraries" },
            { fw: "solid", label: "Solid Libraries" },
            { fw: "web-components", label: "Web Component Libraries" },
          ].map(({ fw, label }) => {
            const count = systems.filter((s) =>
              s.frameworks.includes(fw as any)
            ).length;
            return (
              <Link
                key={fw}
                href={`/?framework=${fw}`}
                className="rounded-xl border border-gray-200 p-5 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900">{label}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {count} libraries to compare
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
