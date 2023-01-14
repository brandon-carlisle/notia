import { Link } from 'react-router-dom';

import styles from './CreateNoteButton.module.css';

function CreateNoteButton() {
  return (
    <Link className={styles.createNoteBtn} to="/">
      Add note
    </Link>
  );
}
export default CreateNoteButton;
