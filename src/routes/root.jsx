import { Outlet, useLoaderData } from 'react-router';

import Sidebar from '../components/Sidebar/Sidebar';
import { getNotes } from '../lib/notes';

export async function loader() {
  const notes = await getNotes();
  return notes;
}

function RootPage({}) {
  const notes = useLoaderData();

  return (
    <>
      <Sidebar notes={notes} />
      <Outlet />
    </>
  );
}

export default RootPage;
