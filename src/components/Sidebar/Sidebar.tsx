import styles from './Sidebar.module.css';
import fakenotesdb from '../../data/fakenotes.json';

function Sidebar({}) {
  const fakeNotes = fakenotesdb;

  return (
    <div className={styles.sidebar}>
      <h1>Notia</h1>

      <div>
        <ul>
          {fakeNotes.map((note) => (
            <li key={note.id}>{note.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
