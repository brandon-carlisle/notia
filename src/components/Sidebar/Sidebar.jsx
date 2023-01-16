import styles from './Sidebar.module.css';
import SidebarItem from './SidebarItem';

function Sidebar({ notes }) {
  let notesSortedByDate;

  if (notes) {
    notesSortedByDate = notes.sort(
      (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated),
    );
  }

  return (
    <div className={styles.sidebar}>
      {!notes && <p>No notes found!</p>}
      {notes && (
        <ul className={styles.list}>
          {notesSortedByDate.map((note) => (
            <SidebarItem key={note.id} title={note.title} id={note.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
