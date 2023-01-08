import { useLoaderData } from 'react-router-dom';

import { getNoteByID } from '../lib/notes';

export async function loader({ params }) {
    return getNoteByID(params.noteID);
}

function Notes({}) {
    const note = useLoaderData();

    return (
        <main>
            <p>ID: {note.id}</p>
            <p>Title: {note.title}</p>
            <p>Content: {note.content}</p>
            <p>Date: {note.dateCreated}</p>
        </main>
    );
}

export default Notes;
