import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function SidebarItem({ title, id }) {
  return (
    <li
      className="rounded-md text-center break-words hover:bg-gray-300 w-full"
      onClick={() => toast.dismiss()}
    >
      <Link to={`/${id}`}>
        <p className="w-full h-full py-2 capitalize">{title}</p>
      </Link>
    </li>
  );
}

export default SidebarItem;
