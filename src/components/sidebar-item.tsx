import { toast } from 'react-hot-toast';
import { Link } from '@tanstack/react-router';

interface SidebarItemProps {
  title: string;
  id: string;
}

function SidebarItem({ title, id }: SidebarItemProps) {
  const baseClassName =
    'inline-block h-full w-full break-words rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2';

  return (
    <li
      onClick={() => {
        toast.dismiss();
      }}
    >
      <Link
        to="/$noteID"
        params={{ noteID: id }}
        activeProps={{ className: `${baseClassName} bg-gray-100 text-gray-900` }}
        inactiveProps={{ className: baseClassName }}
      >
        {title}
      </Link>
    </li>
  );
}

export default SidebarItem;
