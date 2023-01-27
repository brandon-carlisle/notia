import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';
import { useLoaderData } from 'react-router';

import CreateNoteButton from '../components/Buttons/CreateNoteButton';
import Sidebar from '../components/Sidebar/Sidebar';
import { getNotes } from '../lib/notes';

function RootPage({}) {
  const notes = useLoaderData();

  return (
    <>
      <CreateNoteButton />

      {notes && <Sidebar notes={notes} />}

      <Outlet />
      <div>
        <Toaster
          position="bottom-center"
          toastOptions={{
            // Define default options
            duration: 3000,
            style: {
              fontSize: '20px',
            },
          }}
        />
      </div>
    </>
  );
}

export default RootPage;

export function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  return getNotes(q);
}
