import Link from "next/link";

export default function NotFound() {
  return (
    <div className="theme-page mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="theme-kicker">Directory</p>
      <h1 className="mt-4 text-4xl font-semibold">Library Not Found</h1>
      <p className="theme-muted mt-4 text-lg">
        The component system you&apos;re looking for doesn&apos;t exist in our
        directory yet.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="theme-button-primary rounded-md px-6 py-3 text-sm font-semibold"
        >
          Browse Directory
        </Link>
        <a
          href="https://github.com/componentsystem/directory"
          target="_blank"
          rel="noopener noreferrer"
          className="theme-button-secondary rounded-md px-6 py-3 text-sm font-medium"
        >
          Add a Library
        </a>
      </div>
    </div>
  );
}
