import { Link } from 'react-router-dom';

import styles from './NotePreview.module.css';

function NotePreview({ title, id }) {
  return (
    <li>
      <Link to={`/notes/${id}`}>
        <div className={styles.preview}>
          <p>{title}</p>
        </div>
      </Link>
    </li>
  );
}

export default NotePreview;
