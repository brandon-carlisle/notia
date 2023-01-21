import { useLoaderData, useParams } from 'react-router-dom';

import DeleteNoteButton from '../components/Buttons/DeleteNoteButton';
import Note from '../components/Note/Note';
import { getNote } from '../lib/notes';

function NotePage({}) {
  const note = useLoaderData();
  const { noteID } = useParams();

  return (
    <main>
      <Note note={note} />
      <DeleteNoteButton noteID={noteID} />
    </main>
  );
}

export default NotePage;

export function loader({ params }) {
  return getNote(params.noteID);
}
