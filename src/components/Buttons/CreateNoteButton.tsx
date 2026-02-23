import { Link } from '@tanstack/react-router';

function CreateNoteButton() {
  return (
    <Link
      className="fixed bottom-8 right-8 inline-block h-12 w-12 rounded-full bg-gray-900 transition-all active:translate-y-1"
      to="/create"
    >
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-[3px] w-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white" />
        <div className="absolute left-1/2 top-1/2 h-[3px] w-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 rounded bg-white" />
      </div>
    </Link>
  );
}

export default CreateNoteButton;
