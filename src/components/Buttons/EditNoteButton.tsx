import { Link } from '@tanstack/react-router';

import Button from './Button';

interface EditNoteButtonProps {
  noteID: string;
}

function EditNoteButton({ noteID }: EditNoteButtonProps) {
  return (
    <Link to="/$noteID/edit" params={{ noteID }}>
      <Button text="Edit" type="button" />
    </Link>
  );
}

export default EditNoteButton;
