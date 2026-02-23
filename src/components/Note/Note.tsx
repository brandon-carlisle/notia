import ReactMarkdown from 'react-markdown';

import type { Note as NoteType } from '../../types/note';

interface NoteProps {
  note: NoteType;
}

function Note({ note }: NoteProps) {
  return (
    <div className="prose max-w-none prose-img:mx-auto prose-img:rounded-lg lg:prose-xl">
      <ReactMarkdown>{note.content}</ReactMarkdown>
    </div>
  );
}

export default Note;
