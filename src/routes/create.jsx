import { toast } from 'react-hot-toast';
import { redirect } from 'react-router-dom';

import Header from '../components/Header/Header';
import NoteForm from '../components/NoteForm/NoteForm';
import { createNote } from '../lib/notes';

function CreatePage() {
  return (
    <main>
      <Header>
        <span className="font-semibold">Create a note</span>
      </Header>
      <NoteForm />
    </main>
  );
}
export default CreatePage;

// THIS WILL GET FORM DATA AND CREATE NOTE
export async function action({ request }) {
  const data = Object.fromEntries(await request.formData());

  if (!data.title || !data.content)
    return toast.error('Title or note is empty', {
      icon: '🗒️',
    });

  const note = createNote(data);

  toast.success('Successfully noted', {
    icon: '📘',
  });

  return redirect(`/${note.id}`);
}
