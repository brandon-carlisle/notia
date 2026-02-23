import { toast } from 'react-hot-toast';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import Button from '../components/button';
import Header from '../components/header';
import { removeNoteFromLocalStorage } from '../lib/notes';

export const Route = createFileRoute('/$noteID/remove')({
  component: RemovePage,
});

function RemovePage() {
  const navigate = useNavigate({ from: '/$noteID/remove' });
  const { noteID } = Route.useParams();

  const handleDelete = async () => {
    removeNoteFromLocalStorage(noteID);
    toast.success('Removed your note', { icon: '👋' });
    await navigate({ to: '/' });
  };

  return (
    <main>
      <Header>
        <h1 className="text-2xl font-semibold tracking-tight">Delete note</h1>
      </Header>
      <section className="px-6 pb-6">
        <p className="text-sm text-gray-700">Are you sure you want to delete this note?</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button text="Delete note" type="button" onClick={handleDelete} />
          <Button
            text="Cancel"
            type="button"
            onClick={() => {
              void navigate({ to: '/$noteID', params: { noteID } });
            }}
          />
        </div>
      </section>
    </main>
  );
}
