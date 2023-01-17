import ReactMarkdown from 'react-markdown';

function Note({ note }) {
  const date = new Intl.DateTimeFormat('en-gb', { dateStyle: 'long' }).format(
    new Date(note.dateCreated),
  );

  return (
    <div>
      <div className="flex flex-col justify-between items-end mb-16 pb-4 border-b-2 border-gray-300">
        <span className="font-semibold">{note.title}</span>
        <span>{date}</span>
      </div>

      <ReactMarkdown className="prose lg:prose-xl">
        {note.content}
      </ReactMarkdown>
    </div>
  );
}
export default Note;
