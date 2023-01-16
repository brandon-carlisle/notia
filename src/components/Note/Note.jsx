import ReactMarkdown from 'react-markdown';

import styles from './Note.module.css';

function Note({ note }) {
  const date = new Intl.DateTimeFormat('en-gb', { dateStyle: 'long' }).format(
    new Date(note.dateCreated),
  );

  return (
    <div>
      <div className={styles.heading}>
        <p className={styles.title}>{note.title}</p>
        <p className={styles.date}>{date}</p>
      </div>

      <ReactMarkdown>{note.content}</ReactMarkdown>
    </div>
  );
}
export default Note;
