import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Index from './routes';
import CreateNotePage, {
  action as createNoteAction,
} from './routes/create-note';
import ErrorPage from './routes/error-page';
import NotePage, { loader as noteLoader } from './routes/note-page';
import { action as removeNoteAction } from './routes/remove-note';
import RootPage, { loader as rootLoader } from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: rootLoader,

    children: [
      { index: true, element: <Index /> },
      {
        path: 'create-note',
        element: <CreateNotePage />,
        action: createNoteAction,
      },

      {
        path: ':noteID',
        element: <NotePage />,
        loader: noteLoader,
      },
      {
        path: ':noteID/remove-note',
        action: removeNoteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
