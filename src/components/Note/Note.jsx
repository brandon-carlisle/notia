function Note({ note }) {
  return (
    <div>
      <p>ID: {note.id}</p>
      <p>Title: {note.title}</p>
      <p>Content: {note.content}</p>
      <p>Date: {note.dateCreated}</p>
    </div>
  );
}
export default Note;
