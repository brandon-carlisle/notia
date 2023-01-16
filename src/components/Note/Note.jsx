function Note({ note }) {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>Content: {note.content}</p>
      <p>Date: {note.dateCreated}</p>
    </div>
  );
}
export default Note;
