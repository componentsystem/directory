import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "Directory", href: "/" },
  { label: "Templates", href: "/templates" },
  { label: "Compare", href: "/compare" },
  { label: "Jobs", href: "/jobs" },
  { label: "Showcases", href: "/showcases" },
];

export function Header() {
  return (
    <header className="theme-shell sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-400 text-sm font-black text-gray-950 shadow-[0_0_24px_rgba(190,242,100,0.22)]">
            CS
          </div>
          <span className="hidden text-sm font-semibold sm:inline-block">
            componentsystem.directory
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[color:var(--muted)] transition-colors hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/componentsystem/directory"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-[color:var(--muted)] transition-colors hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--accent)] sm:inline-flex"
          >
            GitHub
          </a>
          <Link
            href="/newsletter"
            className="theme-button-primary rounded-full px-4 py-2 text-sm font-semibold"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}
