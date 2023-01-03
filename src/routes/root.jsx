import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet, useLoaderData } from 'react-router';
import { getNotes } from '../lib/notes';

export function loader() {
  const notes = getNotes();
  return { notes };
}

function Root({}) {
  const data = useLoaderData();

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Root;
