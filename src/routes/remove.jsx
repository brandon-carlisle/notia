import { toast } from 'react-hot-toast';
import { redirect } from 'react-router-dom';

import { removeNoteFromLocalStorage } from '../lib/notes';

export function action({ params }) {
  removeNoteFromLocalStorage(params.noteID);
  toast.success('Removed your note', { icon: '👋' });
  return redirect('/');
}
