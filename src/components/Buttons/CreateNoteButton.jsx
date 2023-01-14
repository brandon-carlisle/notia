import { Link } from 'react-router-dom';

import styles from './CreateNoteButton.module.css';

function CreateNoteButton() {
  return (
    <Link className={styles.createNoteBtn} to="/">
      <div className={styles.lineContainer}>
        <div className={`${styles.line} ${styles.lineOne}`}></div>
        <div className={`${styles.line} ${styles.lineTwo}`}></div>
      </div>
    </Link>
  );
}
export default CreateNoteButton;
