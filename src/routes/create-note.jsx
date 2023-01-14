import { Form, redirect } from 'react-router-dom';

import { createNote } from '../lib/notes';

function CreateNotePage() {
  return (
    <main>
      <h1>Create a note</h1>
      <Form method="post">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="content">content</label>
        <input type="text" id="content" name="content" />

        <button text="Create note" type="submit">
          Submit
        </button>
      </Form>
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

  return redirect(`/${note.id}`);
}
