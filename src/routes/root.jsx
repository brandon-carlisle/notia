import { Outlet } from 'react-router';

import Sidebar from '../components/Sidebar/Sidebar';
import { getNotes } from '../lib/notes';

export function loader() {
  const data = getNotes();
}

function RootPage({}) {
  return (
    <>
      <Sidebar notes={[]} />
      <Outlet />
    </>
  );
}

export default RootPage;
