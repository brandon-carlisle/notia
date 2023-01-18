export function getAllNotes() {
  return JSON.parse(localStorage.getItem('notes'));
}

export function getNote(id) {
  const allNotes = getAllNotes();
  return allNotes.find((note) => note.id === id);
}

export function createNote(note) {
  const id = crypto.randomUUID();
  const dateCreated = new Date();
  const createdNote = {
    id,
    dateCreated,
    title: note.title,
    content: note.content,
  };

  addNoteToLocalStorage(createdNote);

  return createdNote;
}

function addNoteToLocalStorage(note) {
  if (!localStorage.getItem('notes')) {
    localStorage.setItem('notes', JSON.stringify([]));
  }

  const prevNotes = JSON.parse(localStorage.getItem('notes'));
  const newNotes = [...prevNotes, note];

  return localStorage.setItem('notes', JSON.stringify(newNotes));
}

export function removeNoteFromLocalStorage(noteID) {
  const filteredNotes = JSON.stringify(
    getAllNotes().filter((note) => note.id !== noteID),
  );

  return localStorage.setItem('notes', filteredNotes);
}
