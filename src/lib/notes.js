export function getNotes() {
  const items = [...localStorage];
  return items;
}

export function getAllKeys() {
  return Object.keys(localStorage);
}

export function createNote(note) {
  console.log('createNote was called');
  const id = crypto.randomUUID().toString();
  const dateCreated = new Date().toString();

  const createdNote = {
    id,
    dateCreated,
    title: note.title,
    content: note.content,
  };

  return localStorage.setItem(id, JSON.stringify(createdNote));
}
