import { Form, useNavigate } from 'react-router-dom';

import Button from '../Buttons/Button';

function NoteForm({ defaultTitle, defaultContent }) {
  const navigate = useNavigate();

  return (
    <Form method="post" className="flex flex-col gap-3">
      <input
        type="text"
        id="title"
        name="title"
        className="px-4 py-2 border border-gray-200"
        defaultValue={`${defaultTitle ? defaultTitle : ''}`}
        placeholder="Your note title"
      />

      <textarea
        type="text"
        id="content"
        name="content"
        className="p-4 border border-gray-200"
        rows="20"
        defaultValue={`${defaultContent ? defaultContent : ''}`}
        placeholder="Write your markdown here..."
      />

      <Button text="Submit" type="submit" />
      <Button
        text="Cancel"
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      />
    </Form>
  );
}
export default NoteForm;
