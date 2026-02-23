import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { removeNoteFromLocalStorage } from '../lib/notes';

export const Route = createFileRoute('/$noteID/remove')({
  component: RemovePage,
});

function RemovePage() {
  const navigate = useNavigate({ from: '/$noteID/remove' });
  const { noteID } = Route.useParams();

  useEffect(() => {
    removeNoteFromLocalStorage(noteID);
    toast.success('Removed your note', { icon: '👋' });
    void navigate({ to: '/' });
  }, [navigate, noteID]);

  return (
    <main>
      <p>Removing note...</p>
    </main>
  );
}
