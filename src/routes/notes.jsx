function Notes({}) {
  const FAKE_NOTE = {
    id: '999',
    dateCreated: new Date().toISOString(),
    title: 'This is a FAKE NOTE',
    content: 'This is the content to a fake note!',
  };

  return (
    <main>
      <p>ID: {FAKE_NOTE.id}</p>
      <p>Title: {FAKE_NOTE.title}</p>
      <p>Content: {FAKE_NOTE.content}</p>
      <p>Date: {FAKE_NOTE.dateCreated}</p>
    </main>
  );
}

export default Notes;
