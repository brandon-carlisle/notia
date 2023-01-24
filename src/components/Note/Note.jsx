import ReactMarkdown from 'react-markdown';
import { Form } from 'react-router-dom';

import Button from '../Buttons/Button';
import Header from '../Header/Header';

function Note({ note }) {
  const date = new Intl.DateTimeFormat('en-gb', { dateStyle: 'long' }).format(
    new Date(note.dateCreated),
  );

  return (
    <>
      <Header>
        <span className="font-semibold capitalize">{note.title}</span>
        <span>{date}</span>
      </Header>

      <ReactMarkdown className="prose max-w-none lg:prose-xl prose-img:rounded-lg prose-img:self-center">
        {note.content}
      </ReactMarkdown>
    </>
  );
}
export default Note;
