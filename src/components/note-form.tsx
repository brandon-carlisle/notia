import type { FormEvent } from 'react';

import Button from './button';
import type { NoteInput } from '../types/note';

interface NoteFormProps {
  defaultTitle?: string;
  defaultContent?: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  onSubmit: (payload: NoteInput) => void | Promise<void>;
}

function NoteForm({
  defaultTitle = '',
  defaultContent = '',
  submitButtonText = 'Save note',
  cancelButtonText = 'Go back',
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
    <form className="flex max-w-4xl flex-col gap-4 pb-6" onSubmit={submitForm}>
      <label htmlFor="title" className="text-sm font-medium text-gray-800">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className="rounded-md border border-gray-200 bg-white px-4 py-2 placeholder:text-gray-500 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
        defaultValue={defaultTitle}
        placeholder="Your note title"
      />

      <label htmlFor="content" className="text-sm font-medium text-gray-800">
        Content
      </label>
      <textarea
        id="content"
        name="content"
        className="min-h-56 rounded-md border border-gray-200 bg-white p-4 placeholder:text-gray-500 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
        rows={14}
        defaultValue={defaultContent}
        placeholder="Write your markdown here..."
      />

      <div className="sticky bottom-0 mt-2 flex flex-col gap-3 border-t border-gray-200 bg-gray-50/95 pt-4 backdrop-blur sm:flex-row">
        <Button text={submitButtonText} type="submit" />
        <Button
          text={cancelButtonText}
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
