import { Form, redirect } from 'react-router-dom';

import Button from '../components/Button/Button';
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

        <Button text="Create note" type="submit" />
      </Form>
    </main>
  );
}
export default CreateNotePage;

// THIS WILL CREATE NOTE
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const note = createNote(data);
  return redirect(`/notes/${note.id}`);
}

// <p>ID: {note.id}</p>
// <p>Title: {note.title}</p>
// <p>Content: {note.content}</p>
// <p>Date: {note.dateCreated}</p>
