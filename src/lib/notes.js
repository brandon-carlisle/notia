import fakenotesdb from '../data/fakenotes.json';

const FAKE_NOTE = {
  id: '1',
  dateCreated: 'Today',
  title: 'My first note!',
  content:
    'Sed risus ultricies tristique nulla. Blandit massa enim nec dui nunc mattis enim. Fringilla est ullamcorper eget nulla facilisi. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Et ultrices neque ornare aenean euismod elementum nisi. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Viverra nam libero justo laoreet sit amet cursus. In vitae turpis massa sed elementum tempus egestas. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Justo donec enim diam vulputate ut pharetra sit amet. Purus in massa tempor nec feugiat nisl pretium fusce id. Purus sit amet luctus venenatis. Tincidunt eget nullam non nisi est. Ipsum dolor sit amet consectetur adipiscing. Quisque non tellus orci ac auctor augue mauris. Imperdiet massa tincidunt nunc pulvinar. Massa ultricies mi quis hendrerit dolor.',
};

const FAKE_NOTES_STORE = [];

export function getNotes() {
  console.log('getNotes was called');
  return FAKE_NOTES_STORE;
}

export function createNote() {
  console.log('createNote was called');
  const newNote = FAKE_NOTE;
  FAKE_NOTES_STORE.push(newNote);

  return newNote;
}