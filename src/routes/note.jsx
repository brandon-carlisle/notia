import { useLoaderData, useParams } from 'react-router-dom';

import DeleteNoteButton from '../components/Buttons/DeleteNoteButton';
import EditNoteButton from '../components/Buttons/EditNoteButton';
import Header from '../components/Header/Header';
import Note from '../components/Note/Note';
import { getNote } from '../lib/notes';

function NotePage({}) {
  const note = useLoaderData();
  const { noteID } = useParams();

  const date = new Intl.DateTimeFormat('en-gb', { dateStyle: 'long' }).format(
    new Date(note.dateCreated),
  );

  return (
    <main>
      <Header>
        <div className="flex flex-col">
          <span className="font-semibold capitalize">{note.title}</span>
          <span>{date}</span>
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <EditNoteButton />
          <DeleteNoteButton noteID={noteID} />
        </div>
      </Header>

      <Note note={note} />
    </main>
  );
}

export default NotePage;

export function loader({ params }) {
  return getNote(params.noteID);
}
