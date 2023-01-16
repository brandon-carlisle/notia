import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import CreateNotePage, {
  action as createNoteAction,
} from './routes/create-note';
import ErrorPage from './routes/error-page';
import NotePage, { loader as noteLoader } from './routes/note-page';
import RootPage, { loader as rootLoader } from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: rootLoader,

    children: [
      {
        path: '/:noteID',
        element: <NotePage />,
        loader: noteLoader,
      },
      {
        path: '/',
        element: <CreateNotePage />,
        action: createNoteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
