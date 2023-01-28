import ReactMarkdown from 'react-markdown';

import Header from '../Header/Header';

function Note({ note }) {
  const date = new Intl.DateTimeFormat('en-gb', { dateStyle: 'long' }).format(
    new Date(note.dateCreated),
  );

  return (
    <>
      <ReactMarkdown className="prose max-w-none lg:prose-xl prose-img:rounded-lg prose-img:mx-auto">
        {note.content}
      </ReactMarkdown>
    </>
  );
}
export default Note;
