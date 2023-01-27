import { toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

function SidebarItem({ title, id }) {
  return (
    <li className="" onClick={() => toast.dismiss()}>
      <NavLink
        to={`/${id}`}
        className={({ isActive, isPending }) =>
          isActive
            ? 'bg-gray-200 sidebar-item'
            : isPending
            ? 'pending'
            : 'sidebar-item'
        }
      >
        {title}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
