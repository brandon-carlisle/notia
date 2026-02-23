import { Toaster } from 'react-hot-toast';
import { Outlet, createRootRoute } from '@tanstack/react-router';

import CreateNoteButton from '../components/Buttons/CreateNoteButton';
import ErrorPage from '../components/ErrorPage';
import Sidebar from '../components/Sidebar/Sidebar';
import { getNotes } from '../lib/notes';

type RootSearch = {
  q?: string;
};

export const Route = createRootRoute({
  validateSearch: (search: Record<string, unknown>): RootSearch => ({
    q: typeof search.q === 'string' ? search.q : undefined,
  }),
  errorComponent: ErrorPage,
  component: RootPage,
});

function RootPage() {
  const { q } = Route.useSearch();
  const notes = getNotes(q);

  return (
    <>
      <CreateNoteButton />
      <Sidebar notes={notes} query={q} />
      <Outlet />
      <div>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            style: {
              fontSize: '20px',
            },
          }}
        />
      </div>
    </>
  );
}
