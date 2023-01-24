import { toast } from 'react-hot-toast';
import { Form, useSubmit } from 'react-router-dom';

import Button from './Button';

function DeleteNoteButton({ noteID }) {
  const submit = useSubmit();

  const submitHanlder = (event) => {
    event.preventDefault();

    toast(
      (t) => (
        <span>
          <button
            className="underline underline-offset-2"
            onClick={() => {
              console.log(event.target);

              submit(null, {
                method: 'post',
                action: `${noteID}/remove`,
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
    <Form onSubmit={(event) => submitHanlder(event)}>
      <Button text="Delete" />
    </Form>
  );
}
export default DeleteNoteButton;
