import { Link } from '@tanstack/react-router';

function CreateNoteButton() {
  return (
    <Link
      className="fixed bottom-6 right-6 inline-block h-12 w-12 rounded-full bg-gray-900 shadow-md transition-all duration-200 hover:scale-105 hover:bg-gray-800 active:translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 md:bottom-8 md:right-8"
      to="/create"
      aria-label="Create new note"
      title="Create new note"
    >
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-[3px] w-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white" />
        <div className="absolute left-1/2 top-1/2 h-[3px] w-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 rounded bg-white" />
      </div>
    </Link>
  );
}

export default CreateNoteButton;
