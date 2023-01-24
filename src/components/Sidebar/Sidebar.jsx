import SidebarItem from './SidebarItem';

function Sidebar({ notes }) {
  let notesSortedByDate;

  if (notes && notes.length > 0) {
    notesSortedByDate = notes.sort(
      (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated),
    );
  }

  return (
    <div className="flex flex-col gap-8 py-8 px-4 w-1/5 overflow-y-auto h-screen border-r-2">
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
