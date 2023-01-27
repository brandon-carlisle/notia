import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';
import { useLoaderData } from 'react-router';

import CreateNoteButton from '../components/Buttons/CreateNoteButton';
import Sidebar from '../components/Sidebar/Sidebar';
import { getNotes } from '../lib/notes';

function RootPage({}) {
  const { notes, q } = useLoaderData();

  return (
    <>
      <CreateNoteButton />

      {notes && <Sidebar notes={notes} query={q} />}

      <Outlet />
      <div>
        <Toaster
          position="bottom-center"
          toastOptions={{
            // Define default options
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

export default RootPage;

export function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const notes = getNotes(q);

  return { notes, q };
}
