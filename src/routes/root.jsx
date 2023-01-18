import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';
import { useLoaderData } from 'react-router';

import CreateNoteButton from '../components/Buttons/CreateNoteButton';
import Sidebar from '../components/Sidebar/Sidebar';
import { getAllNotes, removeNoteFromLocalStorage } from '../lib/notes';

function RootPage({}) {
  const notes = useLoaderData();

  return (
    <>
      <CreateNoteButton />
      <Sidebar notes={notes} />
      <Outlet />
      <div>
        <Toaster
          position="bottom-center"
          toastOptions={{
            // Define default options
            duration: 3000,
          }}
        />
      </div>
    </>
  );
}

export default RootPage;

export function loader() {
  return getAllNotes();
}
