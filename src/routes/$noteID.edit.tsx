import { toast } from 'react-hot-toast';
import { createFileRoute, notFound, useNavigate } from '@tanstack/react-router';

import Header from '../components/header';
import NoteForm from '../components/note-form';
import { editNote, getNote } from '../lib/notes';
import type { NoteInput } from '../types/note';

export const Route = createFileRoute('/$noteID/edit')({
  loader: ({ params }) => {
    const note = getNote(params.noteID);
    if (!note) throw notFound();
    return note;
  },
  component: EditPage,
});

function EditPage() {
  const navigate = useNavigate({ from: '/$noteID/edit' });
  const note = Route.useLoaderData();
  const { noteID } = Route.useParams();

  const handleEdit = async (data: NoteInput) => {
    if (!data.title || !data.content) {
      toast.error('Title or note is empty', { icon: '🗒️' });
      return;
    }

    editNote(noteID, data);
    toast.success('Updated note', { icon: '✍️' });
    await navigate({ to: '/$noteID', params: { noteID } });
  };

  return (
    <main>
      <Header>
        <h1 className="text-2xl font-semibold tracking-tight">Edit your note</h1>
      </Header>
      <NoteForm
        defaultTitle={note.title}
        defaultContent={note.content}
        submitButtonText="Save changes"
        cancelButtonText="Discard changes"
        onSubmit={handleEdit}
      />
    </main>
  );
}
