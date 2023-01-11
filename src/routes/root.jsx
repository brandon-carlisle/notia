import { Outlet } from 'react-router';
import { useLoaderData } from 'react-router';

import Sidebar from '../components/Sidebar/Sidebar';
import { getAllNotes } from '../lib/notes';

function RootPage({}) {
  const notes = useLoaderData();
  console.log(notes);

  return (
    <>
      <Sidebar notes={notes} />
      <Outlet />
    </>
  );
}

export default RootPage;

export function loader() {
  return getAllNotes();
}
