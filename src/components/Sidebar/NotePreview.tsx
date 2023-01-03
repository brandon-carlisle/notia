import styles from './NotePreview.module.css';
import { Link } from 'react-router-dom';

interface NotePreviewProps {
  title: string;
  id: string;
}

function NotePreview({ title, id }: NotePreviewProps) {
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
