import fakenotesdb from '../data/fakenotes.json';

function Notes({}) {
  const fakeNote = fakenotesdb[0];

  return (
    <main>
      <p>ID: {fakeNote.id}</p>
      <p>Title: {fakeNote.title}</p>
      <p>content: {fakeNote.content}</p>
    </main>
  );
}

export default Notes;
