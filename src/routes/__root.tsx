import { useEffect, useMemo, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

import CreateNoteButton from '../components/create-note-button';
import ErrorPage from '../components/error-page';
import Sidebar from '../components/sidebar';
import { getNotes, subscribeToNotesChanges } from '../lib/notes';

type RootSearch = {
  q?: string;
};

const rootSearchSchema = {
  parse(search: Record<string, unknown>): RootSearch {
    if (typeof search.q !== 'string') return {};

    const q = search.q.trim();
    return q ? { q } : {};
  },
};

export const Route = createRootRoute({
  validateSearch: (search: Record<string, unknown>): RootSearch =>
    rootSearchSchema.parse(search),
  errorComponent: ErrorPage,
  notFoundComponent: NotFoundPage,
  component: RootPage,
});

function RootPage() {
  const { q } = Route.useSearch();
  const [notesVersion, setNotesVersion] = useState(0);

  useEffect(() => {
    return subscribeToNotesChanges(() => {
      setNotesVersion((prev) => prev + 1);
    });
  }, []);

  const notes = useMemo(() => getNotes(q), [q, notesVersion]);

  return (
    <>
      <CreateNoteButton />
      <div className="flex min-h-screen w-full flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
        <Sidebar notes={notes} query={q} />
        <Outlet />
      </div>
      <div>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            className: 'text-sm',
          }}
        />
      </div>
    </>
  );
}

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Page not found</h1>
        <p className="mt-2 text-sm text-gray-700">
          The page you are looking for does not exist or was moved.
        </p>
        <Link
          to="/"
          className="mt-5 inline-flex rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
