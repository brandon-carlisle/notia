import { useLoaderData } from 'react-router-dom';
import { getNoteByID } from '../lib/notes';

export async function loader({ params }) {
  return getNoteByID(params.noteID);
}

function Notes({}) {
  // const FAKE_NOTE = {
  //   id: '999',
  //   dateCreated: new Date().toISOString(),
  //   title: 'This is a FAKE NOTE',
  //   content: 'This is the content to a fake note!',
  // };

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

export default Notes;
