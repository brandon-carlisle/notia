export function getNotes(q) {
  const allNotes = JSON.parse(localStorage.getItem('notes'));

  if (!q) {
    return allNotes;
  }

  const query = q.toLowerCase();

  const filteredNotes = allNotes.filter((note) =>
    note.title.toLowerCase().includes(query),
  );

  return filteredNotes;
}

export function getNote(id) {
  const allNotes = getNotes();
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
    getNotes().filter((note) => note.id !== noteID),
  );

  if (getNotes().length === 1) {
    localStorage.clear();
  } else {
    localStorage.setItem('notes', filteredNotes);
  }
}

export function editNote(id, update) {
  const notes = getNotes();
  const idx = notes.findIndex((note) => note.id === id);

  notes[idx].title = update.title;
  notes[idx].content = update.content;

  localStorage.setItem('notes', JSON.stringify(notes));
}
