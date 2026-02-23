import { Outlet, createFileRoute, notFound, useRouterState } from '@tanstack/react-router';

import DeleteNoteButton from '../components/delete-note-button';
import EditNoteButton from '../components/edit-note-button';
import Header from '../components/header';
import Note from '../components/note';
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
  const showingChildRoute = useRouterState({
    select: (state) =>
      state.matches.some((match) => match.routeId === '/$noteID/edit' || match.routeId === '/$noteID/remove'),
  });

  if (showingChildRoute) {
    return <Outlet />;
  }

  const date = new Intl.DateTimeFormat('en-gb', { dateStyle: 'long' }).format(
    new Date(note.dateCreated),
  );

  return (
    <main>
      <Header>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tight capitalize">{note.title}</h1>
          <p className="text-sm text-gray-600">{date}</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <EditNoteButton noteID={noteID} />
          <DeleteNoteButton noteID={noteID} />
        </div>
      </Header>

      <Note note={note} />
    </main>
  );
}
