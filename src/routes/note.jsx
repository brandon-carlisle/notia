import { useLoaderData } from 'react-router-dom';

import { getNote } from '../lib/notes';

function NotePage({}) {
  const note = useLoaderData();

  return (
    <main>
      <p>ID: {note.id}</p>
      <p>Title: {note.title}</p>
      <p>Content: {note.content}</p>
      <p>Date: {note.dateCreated}</p>
    </main>
  );
}

export default NotePage;

export function loader({ params }) {
  return getNote(params.noteID);
}
