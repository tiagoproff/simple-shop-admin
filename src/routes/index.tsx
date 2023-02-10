import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from '../pages/root';
import ErrorPage from '../pages/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
