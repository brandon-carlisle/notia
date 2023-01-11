import { Link } from 'react-router-dom';

import styles from './NotePreview.module.css';

function NotePreview({ title, id }) {
  return (
    <li className={styles.preview}>
      <Link to={`/notes/${id}`}>{title}</Link>
    </li>
  );
}

export default NotePreview;
