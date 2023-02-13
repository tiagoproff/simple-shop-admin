import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from '../pages/root';
import ErrorPage from '../pages/error-page';
import ProductDetails from 'pages/product-details';
import ProductUpdate from 'pages/product-update';
import Products from 'pages/products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/product',
        element: <ProductDetails />,
      },
      {
        path: '/product/:id',
        element: <ProductUpdate />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
