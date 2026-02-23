import { notFound } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';

import DeleteNoteButton from '../components/Buttons/DeleteNoteButton';
import EditNoteButton from '../components/Buttons/EditNoteButton';
import Header from '../components/Header/Header';
import Note from '../components/Note/Note';
import { getNote } from '../lib/notes';

export const Route = createFileRoute('/$noteID')({
  loader: ({ params }) => {
    const note = getNote(params.noteID);
    if (!note) throw notFound();
    return note;
  },
  component: NotePage,
});

function NotePage() {
  const note = Route.useLoaderData();
  const { noteID } = Route.useParams();

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
          <EditNoteButton noteID={noteID} />
          <DeleteNoteButton noteID={noteID} />
        </div>
      </Header>

      <Note note={note} />
    </main>
  );
}
