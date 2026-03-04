import Link from "next/link";

const navItems = [
  { label: "Directory", href: "/" },
  { label: "Compare", href: "/compare" },
  { label: "News", href: "/news" },
  { label: "Jobs", href: "/jobs" },
  { label: "Prompts", href: "/prompts" },
  { label: "Showcases", href: "/showcases" },
  { label: "Events", href: "/events" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-bold text-sm">
            CS
          </div>
          <span className="hidden font-semibold text-gray-900 sm:inline-block">
            componentsystem.directory
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/componentsystem/directory"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            GitHub
          </a>
          <Link
            href="/newsletter"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}
