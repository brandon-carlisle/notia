import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

function Root({}) {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Root;
