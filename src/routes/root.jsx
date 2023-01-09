import { Outlet } from 'react-router';
import { useLoaderData } from 'react-router';

import Sidebar from '../components/Sidebar/Sidebar';
import { getStorage } from '../lib/notes';

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

export function loader() {
  return getStorage();
}
