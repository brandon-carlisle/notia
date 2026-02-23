import { toast } from 'react-hot-toast';
import { useNavigate } from '@tanstack/react-router';

import Button from './Button';

interface DeleteNoteButtonProps {
  noteID: string;
}

function DeleteNoteButton({ noteID }: DeleteNoteButtonProps) {
  const navigate = useNavigate({ from: '/$noteID' });

  const submitHandler = () => {
    toast(
      (t) => (
        <span>
          <button
            className="underline underline-offset-2"
            onClick={() => {
              void navigate({ to: '/$noteID/remove', params: { noteID } });
              toast.dismiss(t.id);
            }}
          >
            Click to confirm
          </button>
        </span>
      ),
      { icon: '🖱️' },
    );
  };

  return <Button text="Delete" type="button" onClick={submitHandler} />;
}

export default DeleteNoteButton;
