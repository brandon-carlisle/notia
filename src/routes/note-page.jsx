import { Form, useLoaderData } from 'react-router-dom';

import Note from '../components/Note/Note';
import { getNote } from '../lib/notes';

function NotePage({}) {
  const note = useLoaderData();

  return (
    <main>
      <Note note={note} />

      <Form
        method="post"
        action="remove-note"
        onSubmit={(event) => {
          if (!confirm('Please confirm you want to delete this record.')) {
            event.preventDefault();
          }
        }}
      >
        <button className="underline font-bold text-4xl" type="submit">
          Delete
        </button>
      </Form>
    </main>
  );
}

export default NotePage;

export function loader({ params }) {
  return getNote(params.noteID);
}

export function action() {}
