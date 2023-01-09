import { Outlet } from 'react-router';

import Sidebar from '../components/Sidebar/Sidebar';

function RootPage({}) {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default RootPage;
