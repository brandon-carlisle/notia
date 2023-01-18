import { redirect } from 'react-router-dom';

import { removeNoteFromLocalStorage } from '../lib/notes';

export function action({ params }) {
  removeNoteFromLocalStorage(params.noteID);
  return redirect('/');
}
