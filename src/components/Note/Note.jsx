import ReactMarkdown from 'react-markdown';

function Note({ note }) {
  return (
    <>
      <ReactMarkdown className="prose max-w-none lg:prose-xl prose-img:rounded-lg prose-img:mx-auto">
        {note.content}
      </ReactMarkdown>
    </>
  );
}
export default Note;
