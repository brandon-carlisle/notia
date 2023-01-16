import { Form } from 'react-router-dom';

function CreateNoteForm() {
  return (
    <Form method="post">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />

      <label htmlFor="content">content</label>
      <textarea type="text" id="content" name="content" />

      <button text="Create note" type="submit">
        Submit
      </button>
    </Form>
  );
}
export default CreateNoteForm;
