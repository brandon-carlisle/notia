import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Index from './routes';
import CreatePage, { action as createAction } from './routes/create';
import EditPage, { action as editAction } from './routes/edit';
import ErrorPage from './routes/error';
import NotePage, { loader as noteLoader } from './routes/note';
import { action as removeAction } from './routes/remove';
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
        path: 'create',
        element: <CreatePage />,
        action: createAction,
      },

      {
        path: ':noteID',
        element: <NotePage />,
        loader: noteLoader,
      },
      {
        path: ':noteID/edit',
        element: <EditPage />,
        loader: noteLoader,
        action: editAction,
      },
      {
        path: ':noteID/remove',
        action: removeAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
