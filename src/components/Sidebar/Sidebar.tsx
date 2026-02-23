import { useMemo, useState } from 'react';
import {
  TbArrowDownCircle,
  TbArrowUpCircle,
  TbHome,
  TbSearch,
} from 'react-icons/tb';
import { Link } from '@tanstack/react-router';

import Search from './Search';
import SidebarItem from './SidebarItem';
import type { Note } from '../../types/note';

interface SidebarProps {
  notes: Note[];
  query?: string;
}

function Sidebar({ notes, query }: SidebarProps) {
  const [displaySearch, setDisplaySearch] = useState(true);
  const [noteSortedDesc, setNoteSortedDesc] = useState(true);

  const notesSortedByDate = useMemo(() => {
    return [...notes].sort((a, b) => {
      if (noteSortedDesc) {
        return (
          new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
        );
      }
      return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime();
    });
  }, [noteSortedDesc, notes]);

  return (
    <div className="flex h-screen w-1/5 flex-col items-center gap-8 overflow-y-auto border-r-2 px-4 py-12">
      <div className="flex flex-col items-center justify-center gap-2 text-3xl md:flex-row">
        <Link to="/">
          <TbHome />
        </Link>

        <button
          type="button"
          onClick={() => {
            setDisplaySearch((prev) => !prev);
          }}
        >
          <TbSearch />
        </button>

        <button
          type="button"
          onClick={() => {
            setNoteSortedDesc((prev) => !prev);
          }}
        >
          {noteSortedDesc ? <TbArrowDownCircle /> : <TbArrowUpCircle />}
        </button>
      </div>

      {displaySearch && <Search query={query} />}

      {notesSortedByDate.length > 0 && (
        <ul className="flex w-full list-none flex-col gap-4">
          {notesSortedByDate.map((note) => (
            <SidebarItem key={note.id} title={note.title} id={note.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
