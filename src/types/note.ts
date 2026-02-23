export interface Note {
  id: string;
  title: string;
  content: string;
  dateCreated: string;
}

export interface NoteInput {
  title: string;
  content: string;
}
