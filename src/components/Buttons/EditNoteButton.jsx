import { Form } from 'react-router-dom';

import Button from './Button';

function EditNoteButton() {
  return (
    <Form action="edit">
      <Button text="Edit" />
    </Form>
  );
}
export default EditNoteButton;
