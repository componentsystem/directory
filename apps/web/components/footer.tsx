import Link from "next/link";

export function Footer() {
  return (
    <footer className="theme-shell border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="theme-kicker">Directory</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="theme-muted text-sm hover:text-[color:var(--accent)]">
                  Browse All
                </Link>
              </li>
              <li>
                <Link href="/compare" className="theme-muted text-sm hover:text-[color:var(--accent)]">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/templates" className="theme-muted text-sm hover:text-[color:var(--accent)]">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/react-component-libraries" className="theme-muted text-sm hover:text-[color:var(--accent)]">
                  React Libraries
                </Link>
              </li>
              <li>
                <Link href="/vue-component-libraries" className="theme-muted text-sm hover:text-[color:var(--accent)]">
                  Vue Libraries
                </Link>
              </li>
              <li>
                <Link href="/svelte-component-libraries" className="theme-muted text-sm hover:text-[color:var(--accent)]">
                  Svelte Libraries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="theme-kicker">Community</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/jobs" className="theme-muted text-sm hover:text-[color:var(--accent)]">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/showcases" className="theme-muted text-sm hover:text-[color:var(--accent)]">
                  Showcases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="theme-kicker">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/newsletter" className="theme-muted text-sm hover:text-[color:var(--accent)]">
                  Newsletter
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/componentsystem/directory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-muted text-sm hover:text-[color:var(--accent)]"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">
              componentsystem.directory
            </h3>
            <p className="theme-muted mt-4 text-sm leading-6">
              The definitive, community-driven directory of frontend component
              systems. Open source and always up to date.
            </p>
          </div>
        </div>

        <div className="theme-divider mt-8 border-t pt-6 text-center">
          <p className="theme-muted text-sm">
            &copy; {new Date().getFullYear()} componentsystem.directory. Open
            source on{" "}
            <a
              href="https://github.com/componentsystem/directory"
              className="theme-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
