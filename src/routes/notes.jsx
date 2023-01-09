function NotePage({}) {
  return (
    <main>
      <p>ID: {note.id}</p>
      <p>Title: {note.title}</p>
      <p>Content: {note.content}</p>
      <p>Date: {note.dateCreated}</p>
    </main>
  );
}

export default NotePage;
