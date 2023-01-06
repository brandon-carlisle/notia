import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet, useLoaderData } from 'react-router';
import { getNotes, createNote } from '../lib/notes';

export async function loader() {
  const notes = getNotes();
  return { notes };
}

export async function action() {
  const note = createNote();
  return { note };
}

function Root({}) {
  const { notes } = useLoaderData();

  return (
    <>
      <Sidebar notes={notes} />
      <Outlet />
    </>
  );
}

export default Root;
