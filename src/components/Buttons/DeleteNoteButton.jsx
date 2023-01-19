import { toast } from 'react-hot-toast';
import { Form, useSubmit } from 'react-router-dom';

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
    <Form onSubmit={(event) => submitHanlder(event)}>
      <button className="underline font-bold text-4xl" type="submit">
        Delete
      </button>
    </Form>
  );
}
export default DeleteNoteButton;
