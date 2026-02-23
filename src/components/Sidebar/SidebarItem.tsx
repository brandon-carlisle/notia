import { toast } from 'react-hot-toast';
import { Link } from '@tanstack/react-router';

interface SidebarItemProps {
  title: string;
  id: string;
}

function SidebarItem({ title, id }: SidebarItemProps) {
  return (
    <li
      onClick={() => {
        toast.dismiss();
      }}
    >
      <Link
        to="/$noteID"
        params={{ noteID: id }}
        activeProps={{ className: 'bg-gray-200 sidebar-item' }}
        inactiveProps={{ className: 'sidebar-item' }}
      >
        {title}
      </Link>
    </li>
  );
}

export default SidebarItem;
