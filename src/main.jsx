import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import CreateNotePage from './routes/create-note';
import ErrorPage from './routes/error-page';
import NotesPage, { loader as notesLoader } from './routes/notes';
import RootPage, {
  action as rootAction,
  loader as rootLoader,
} from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'notes/:noteID',
        element: <NotesPage />,
        loader: notesLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
