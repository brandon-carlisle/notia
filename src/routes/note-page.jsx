import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';

import Note from '../components/Note/Note';
import { getNote } from '../lib/notes';

function NotePage({}) {
  const note = useLoaderData();
  const submit = useSubmit();
  const formRef = useRef();

  const submitHanlder = (event) => {
    event.preventDefault();

    console.log(formRef.current);

    toast(
      (t) => (
        <span>
          <button
            onClick={() => {
              console.log('clicked');

              submit(formRef.current, {
                method: 'post',
                action: 'remove-note',
              });

              toast.dismiss(t.id);
            }}
          >
            <strong>Delete?</strong>
          </button>
        </span>
      ),
      {
        icon: '🤔',
      },
    );
  };

  return (
    <main>
      <Note note={note} />

      <Form ref={formRef} onSubmit={(event) => submitHanlder(event)}>
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
