export function getStorage() {
  const keys = getAllKeys();
  return keys.map((key) => JSON.parse(localStorage.getItem(key)));
}

export function getAllKeys() {
  return Object.keys(localStorage);
}

export function getNote(key) {
  return JSON.parse(localStorage.getItem(key));
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

  return localStorage.setItem(id, JSON.stringify(createdNote));
}
