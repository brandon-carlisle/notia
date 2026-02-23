import { useMemo } from 'react';

import Search from './search';
import SidebarItem from './sidebar-item';
import type { Note } from '../types/note';

interface SidebarProps {
  notes: Note[];
  query?: string;
}

function Sidebar({ notes, query }: SidebarProps) {
  const notesSortedByDate = useMemo(() => {
    return [...notes].sort((a, b) => {
      return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
    });
  }, [notes]);
  const noteLabel = notesSortedByDate.length === 1 ? '1 note' : `${notesSortedByDate.length} notes`;

  return (
    <aside className="flex w-full flex-col border-b border-gray-200 bg-white lg:h-full lg:w-72 lg:border-b-0 lg:border-r">
      <div className="space-y-3 border-b border-gray-200 px-4 py-4 lg:space-y-4 lg:py-6">
        <div className="space-y-1">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Notes</h2>
          <p className="text-xs font-medium text-gray-500">{noteLabel}</p>
        </div>

        <Search query={query} />
      </div>

      <div className="max-h-56 overflow-y-auto px-4 py-3 lg:max-h-none lg:flex-1 lg:py-4">
        {notesSortedByDate.length > 0 && (
          <ul className="flex w-full list-none flex-col gap-1.5">
            {notesSortedByDate.map((note) => (
              <SidebarItem key={note.id} title={note.title} id={note.id} />
            ))}
          </ul>
        )}

        {notesSortedByDate.length === 0 && (
          <p className="w-full px-2 pt-2 text-center text-sm text-gray-600">
            {query?.trim() ? 'No notes match your search.' : 'No notes yet.'}
          </p>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
