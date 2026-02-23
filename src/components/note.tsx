import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import type { Note as NoteType } from '../types/note';

interface NoteProps {
  note: NoteType;
}

function Note({ note }: NoteProps) {
  return (
    <div className="prose prose-gray max-w-4xl leading-relaxed prose-headings:tracking-tight prose-img:mx-auto prose-img:rounded-lg">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
    </div>
  );
}

export default Note;
