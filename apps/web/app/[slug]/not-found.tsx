import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900">Library Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        The component system you&apos;re looking for doesn&apos;t exist in our
        directory yet.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-medium text-white hover:bg-brand-700"
        >
          Browse Directory
        </Link>
        <a
          href="https://github.com/componentsystem/directory"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Add a Library
        </a>
      </div>
    </div>
  );
}
