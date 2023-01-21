import { Link } from 'react-router-dom';

function CreateNoteButton() {
  return (
    <Link
      className="inline-block fixed right-8 bottom-8 rounded-full bg-gray-900 w-12 h-12 active:translate-y-1 transition-all"
      to="create"
    >
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 rounded bg-white w-1/2 h-[3px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 rounded bg-white w-1/2 h-[3px] -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
      </div>
    </Link>
  );
}
export default CreateNoteButton;
