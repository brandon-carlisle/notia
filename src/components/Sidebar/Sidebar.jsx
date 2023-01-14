import { Link } from 'react-router-dom';

import NotePreview from './NotePreview';
import styles from './Sidebar.module.css';

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
        <ul>
          {notesSortedByDate.map((note) => (
            <NotePreview key={note.id} title={note.title} id={note.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
