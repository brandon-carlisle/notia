import type { FormEvent } from 'react';

import Button from '../Buttons/Button';
import type { NoteInput } from '../../types/note';

interface NoteFormProps {
  defaultTitle?: string;
  defaultContent?: string;
  onSubmit: (payload: NoteInput) => void | Promise<void>;
}

function NoteForm({
  defaultTitle = '',
  defaultContent = '',
  onSubmit,
}: NoteFormProps) {
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = String(formData.get('title') ?? '').trim();
    const content = String(formData.get('content') ?? '').trim();

    await onSubmit({ title, content });
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={submitForm}>
      <input
        type="text"
        id="title"
        name="title"
        className="border border-gray-200 px-4 py-2"
        defaultValue={defaultTitle}
        placeholder="Your note title"
      />

      <textarea
        id="content"
        name="content"
        className="border border-gray-200 p-4"
        rows={20}
        defaultValue={defaultContent}
        placeholder="Write your markdown here..."
      />

      <div className="flex flex-col gap-2 md:flex-row">
        <Button text="Submit" type="submit" />
        <Button
          text="Cancel"
          type="button"
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
    </form>
  );
}

export default NoteForm;
