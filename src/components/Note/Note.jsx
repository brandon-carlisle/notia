import ReactMarkdown from 'react-markdown';

import styles from './Note.module.css';

function Note({ note }) {
  const date = new Intl.DateTimeFormat('en-gb', { dateStyle: 'medium' }).format(
    new Date(note.dateCreated),
  );

  return (
    <div>
      <div className={styles.heading}>
        <h1>{note.title}</h1>
        <p>{date}</p>
      </div>

      <ReactMarkdown>{note.content}</ReactMarkdown>
    </div>
  );
}
export default Note;
