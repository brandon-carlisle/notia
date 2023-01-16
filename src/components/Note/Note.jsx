import ReactMarkdown from 'react-markdown';

import styles from './Note.module.css';

function Note({ note }) {
  const date = new Intl.DateTimeFormat('en-gb', { dateStyle: 'long' }).format(
    new Date(note.dateCreated),
  );

  return (
    <div>
      <div className={styles.heading}>
        <span className={styles.title}>{note.title}</span>
        <span className={styles.date}>{date}</span>
      </div>

      <ReactMarkdown>{note.content}</ReactMarkdown>
    </div>
  );
}
export default Note;
