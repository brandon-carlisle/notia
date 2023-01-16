import ReactMarkdown from 'react-markdown';

function Note({ note }) {
  return (
    <div>
      <h1>{note.title}</h1>

      <ReactMarkdown>{note.content}</ReactMarkdown>

      <p>Date: {note.dateCreated}</p>
    </div>
  );
}
export default Note;
