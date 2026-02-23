import { Link } from '@tanstack/react-router';

interface EditNoteButtonProps {
  noteID: string;
}

function EditNoteButton({ noteID }: EditNoteButtonProps) {
  return (
    <Link
      to="/$noteID/edit"
      params={{ noteID }}
      className="inline-flex w-full min-w-32 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-150 hover:bg-gray-800 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 sm:w-auto"
    >
      Edit note
    </Link>
  );
}

export default EditNoteButton;
