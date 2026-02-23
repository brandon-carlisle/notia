import { toast } from 'react-hot-toast';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import Header from '../components/Header/Header';
import NoteForm from '../components/NoteForm/NoteForm';
import { createNote } from '../lib/notes';
import type { NoteInput } from '../types/note';

export const Route = createFileRoute('/create')({
  component: CreatePage,
});

function CreatePage() {
  const navigate = useNavigate({ from: '/create' });

  const handleCreate = async (data: NoteInput) => {
    if (!data.title || !data.content) {
      toast.error('Title or note is empty', { icon: '🗒️' });
      return;
    }

    const note = createNote(data);
    toast.success('Successfully noted', { icon: '📘' });
    await navigate({ to: '/$noteID', params: { noteID: note.id } });
  };

  return (
    <main>
      <Header>
        <span className="font-semibold">Create a note</span>
      </Header>
      <NoteForm onSubmit={handleCreate} />
    </main>
  );
}
