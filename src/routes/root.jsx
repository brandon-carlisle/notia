import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet, useLoaderData } from 'react-router';
import { getNotes } from '../lib/notes';

export async function loader() {
  const notes = getNotes();
  return { notes };
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
