import { toast } from 'react-hot-toast';
import { Form, useLoaderData, useParams, useSubmit } from 'react-router-dom';

import Note from '../components/Note/Note';
import { getNote } from '../lib/notes';

function NotePage({}) {
  const note = useLoaderData();
  const submit = useSubmit();
  const { noteID } = useParams();

  const submitHanlder = (event) => {
    event.preventDefault();

    toast(
      (t) => (
        <span>
          <button
            onClick={() => {
              console.log(event.target);

              submit(null, {
                method: 'post',
                action: `${noteID}/remove-note`,
              });

              toast.dismiss(t.id);
            }}
          >
            Click to confirm
          </button>
        </span>
      ),
      { icon: '🖱️' },
    );
  };

  return (
    <main>
      <Note note={note} />

      <Form onSubmit={(event) => submitHanlder(event)}>
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
