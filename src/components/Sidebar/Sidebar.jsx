import { TbHome } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import SidebarItem from './SidebarItem';

function Sidebar({ notes }) {
  let notesSortedByDate;

  if (notes) {
    notesSortedByDate = notes.sort(
      (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated),
    );
  }

  return (
    <div className="flex flex-col justify-between items-center gap-8 py-12 px-4 w-1/5 overflow-y-auto h-screen border-r-2">
      <Link to="/">
        <TbHome className="text-3xl" />
      </Link>

      {notes && notes.length > 0 && (
        <ul className="flex flex-col gap-4 w-full list-none">
          {notesSortedByDate.map((note) => (
            <SidebarItem key={note.id} title={note.title} id={note.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
