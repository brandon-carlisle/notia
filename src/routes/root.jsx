import { Outlet } from 'react-router';
import { useLoaderData } from 'react-router';

import CreateNoteButton from '../components/Buttons/CreateNoteButton';
import Sidebar from '../components/Sidebar/Sidebar';
import { getAllNotes } from '../lib/notes';

function RootPage({}) {
  const notes = useLoaderData();

  return (
    <>
      <CreateNoteButton />
      <Sidebar notes={notes} />
      <Outlet />
    </>
  );
}

export default RootPage;

export function loader() {
  return getAllNotes();
}
