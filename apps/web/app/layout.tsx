import type { Metadata } from "next";
import "./globals.css";
import { systems } from "@componentsystem/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompareTray } from "@/components/compare-basket";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://componentsystem-directory.pages.dev";
const title = "componentsystem.directory — UI Component Systems Directory";
const description =
  "Discover, compare, and choose from 150+ frontend component systems, design systems, and UI libraries.";
const ogImage = {
  url: "/opengraph-componentsystems.png",
  width: 1731,
  height: 909,
  alt: "componentsystem.directory preview showing a curated directory of UI component systems",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
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
    title,
    description,
    url: "/",
    siteName: "componentsystem.directory",
    images: [ogImage],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
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
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}})()`,
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
