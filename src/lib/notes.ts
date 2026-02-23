import type { Note, NoteInput } from '../types/note';

const NOTES_STORAGE_KEY = 'notes';
const NOTES_CHANGED_EVENT = 'notia:notes-changed';

function emitNotesChanged(): void {
  window.dispatchEvent(new Event(NOTES_CHANGED_EVENT));
}

function readNotes(): Note[] {
  const raw = localStorage.getItem(NOTES_STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (note): note is Note =>
        typeof note === 'object' &&
        note !== null &&
        typeof (note as Note).id === 'string' &&
        typeof (note as Note).title === 'string' &&
        typeof (note as Note).content === 'string' &&
        typeof (note as Note).dateCreated === 'string',
    );
  } catch {
    return [];
  }
}

function writeNotes(notes: Note[]): void {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  emitNotesChanged();
}

export function subscribeToNotesChanges(onStoreChange: () => void): () => void {
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === null || event.key === NOTES_STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener('storage', handleStorageChange);
  window.addEventListener(NOTES_CHANGED_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('storage', handleStorageChange);
    window.removeEventListener(NOTES_CHANGED_EVENT, onStoreChange);
  };
}

export function getNotes(query?: string): Note[] {
  const allNotes = readNotes();
  if (!query) return allNotes;

  const normalized = query.toLowerCase();
  return allNotes.filter((note) =>
    note.title.toLowerCase().includes(normalized),
  );
}

export function getNote(id: string): Note | undefined {
  return readNotes().find((note) => note.id === id);
}

export function createNote(input: NoteInput): Note {
  const createdNote: Note = {
    id: crypto.randomUUID(),
    dateCreated: new Date().toISOString(),
    title: input.title,
    content: input.content,
  };

  writeNotes([...readNotes(), createdNote]);
  return createdNote;
}

export function editNote(id: string, update: NoteInput): Note | undefined {
  const notes = readNotes();
  const idx = notes.findIndex((note) => note.id === id);
  if (idx < 0) return undefined;

  const updated: Note = {
    ...notes[idx],
    title: update.title,
    content: update.content,
  };
  notes[idx] = updated;
  writeNotes(notes);

  return updated;
}

export function removeNoteFromLocalStorage(noteID: string): void {
  const filtered = readNotes().filter((note) => note.id !== noteID);
  if (filtered.length === 0) {
    localStorage.removeItem(NOTES_STORAGE_KEY);
    emitNotesChanged();
    return;
  }

  writeNotes(filtered);
}
