import { Form, useLoaderData, useParams } from 'react-router-dom';

import Button from '../components/Buttons/Button';
import DeleteNoteButton from '../components/Buttons/DeleteNoteButton';
import Note from '../components/Note/Note';
import { getNote } from '../lib/notes';

function NotePage({}) {
  const note = useLoaderData();
  const { noteID } = useParams();

  return (
    <main>
      <Note note={note} />

      <div className="flex gap-2 mt-8">
        <Form action="edit">
          <Button text="Edit" />
        </Form>
        <DeleteNoteButton noteID={noteID} />
      </div>
    </main>
  );
}

export default NotePage;

export function loader({ params }) {
  return getNote(params.noteID);
}
