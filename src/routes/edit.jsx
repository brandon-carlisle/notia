import { toast } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

import Header from '../components/Header/Header';
import NoteForm from '../components/NoteForm/NoteForm';
import { editNote } from '../lib/notes';

function EditPage() {
  const note = useLoaderData();

  return (
    <main>
      <Header>
        <h1>Edit your note</h1>
      </Header>
      <NoteForm defaultTitle={note.title} defaultContent={note.content} />
    </main>
  );
}
export default EditPage;

export async function action({ request, params }) {
  const data = Object.fromEntries(await request.formData());

  if (!data.title || !data.content)
    return toast.error('Title or note is empty', {
      icon: '🗒️',
    });

  editNote(params.noteID, data);

  return toast.success('Updated note', { icon: '✍️' });
}
