import localforage from 'localforage';

// TODO: ADD ERROR HANDLING FOR THESE FUNCTIONS
export async function getNotes() {
  console.log('getNotes was called');
  const keys = await localforage.keys();
  const notes = [];

  keys.forEach(async (key) => {
    const note = await localforage.getItem(key);
    notes.push(note);
  });

  return notes;
}

export async function createNote(note) {
  console.log('createNote was called');
  const id = crypto.randomUUID().toString();
  const dateCreated = new Date().toString();

  const createdNote = {
    id,
    dateCreated,
    title: note.title,
    content: note.content,
  };

  const setNote = await localforage.setItem(id, createdNote);
  return setNote;
}

export function getNoteByID(noteID) {
  console.log('getNoteByID was called');
  const note = FAKE_NOTES_STORE.filter((note) => note.id === noteID);
  return note[0];
}

// const FAKE_NOTE = {
//   id: '1',
//   dateCreated: 'Today',
//   title: 'My first note!',
//   content:
//     'Sed risus ultricies tristique nulla. Blandit massa enim nec dui nunc mattis enim. Fringilla est ullamcorper eget nulla facilisi. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Et ultrices neque ornare aenean euismod elementum nisi. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Viverra nam libero justo laoreet sit amet cursus. In vitae turpis massa sed elementum tempus egestas. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Justo donec enim diam vulputate ut pharetra sit amet. Purus in massa tempor nec feugiat nisl pretium fusce id. Purus sit amet luctus venenatis. Tincidunt eget nullam non nisi est. Ipsum dolor sit amet consectetur adipiscing. Quisque non tellus orci ac auctor augue mauris. Imperdiet massa tincidunt nunc pulvinar. Massa ultricies mi quis hendrerit dolor.',
// };

// const FAKE_NOTES_STORE = [];
