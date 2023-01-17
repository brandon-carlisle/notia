import { Link } from 'react-router-dom';

function CreateNoteButton() {
  return (
    <Link
      className="inline-block fixed right-8 bottom-8 rounded-full bg-gray-900 w-12 h-12"
      to="/"
    >
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 rounded bg-gray-100 w-1/2 h-1 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 rounded bg-gray-100 w-1/2 h-1 -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
      </div>
    </Link>
  );
}
export default CreateNoteButton;
