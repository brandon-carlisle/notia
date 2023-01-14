import { toast } from 'react-hot-toast';
import { redirect } from 'react-router-dom';

import CreateNoteForm from '../components/CreateNote/CreateNoteForm';
import { createNote } from '../lib/notes';

function CreateNotePage() {
  return (
    <main>
      <h1>Create a note</h1>
      <CreateNoteForm />
    </main>
  );
}
export default CreateNotePage;

// THIS WILL GET FORM DATA AND CREATE NOTE
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  if (!data.title || !data.content) return redirect(`/`);
  const note = createNote(data);

  toast.success('Successfully noted', {
    icon: '📝',
  });

  return redirect(`/${note.id}`);
}
