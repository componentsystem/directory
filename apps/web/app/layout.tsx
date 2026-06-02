import type { Metadata } from "next";
import "./globals.css";
import { systems } from "@componentsystem/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompareTray } from "@/components/compare-basket";

export const metadata: Metadata = {
  title: "componentsystem.directory — The Definitive Directory of UI Component Systems",
  description:
    "Discover, compare, and choose from 150+ frontend component systems, design systems, and UI libraries. Community-driven, open-source, and always up to date.",
  keywords: [
    "component library",
    "design system",
    "UI library",
    "React components",
    "Vue components",
    "Svelte components",
    "frontend",
    "shadcn",
    "radix",
    "mantine",
    "tailwind components",
  ],
  openGraph: {
    title: "componentsystem.directory",
    description: "The definitive directory of frontend component systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme"),d=t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches);if(d)document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CompareTray systems={systems} />
        </div>
      </body>
    </html>
  );
}
