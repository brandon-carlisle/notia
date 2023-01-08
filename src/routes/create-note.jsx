import { Form } from 'react-router-dom';

import Button from '../components/Button/Button';

function CreateNotePage() {
  return (
    <main>
      <h1>Create a note</h1>
      <Form method="post">
        <Button text="Create note" type="submit" />
      </Form>
    </main>
  );
}
export default CreateNotePage;

// THIS WILL CREATE A FAKE NOTE FOR NOW
export async function action() {
  const note = await createNote();
  return note;
}
