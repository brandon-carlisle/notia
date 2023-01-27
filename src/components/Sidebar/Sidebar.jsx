import { useState } from 'react';
import {
  TbArrowDownCircle,
  TbArrowUpCircle,
  TbHome,
  TbSearch,
} from 'react-icons/tb';
import { Form, Link } from 'react-router-dom';

import Search from './Search';
import SidebarItem from './SidebarItem';

function Sidebar({ notes, query }) {
  const [displaySearch, setDisplaySearch] = useState(true);

  const toggleSearchbar = () => {
    setDisplaySearch(() => !displaySearch);
  };

  let notesSortedByDate;
  if (notes) {
    notesSortedByDate = notes.sort(
      (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated),
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 py-12 px-4 w-1/5 overflow-y-auto h-screen border-r-2">
      <div className="text-3xl flex items-center justify-center gap-2">
        <Link to="/">
          <TbHome />
        </Link>

        <button onClick={toggleSearchbar}>
          <TbSearch />
        </button>

        <button>
          <TbArrowDownCircle />
        </button>
      </div>

      {displaySearch && <Search query={query} />}

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
