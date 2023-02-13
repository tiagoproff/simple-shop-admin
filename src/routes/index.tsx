import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from '../pages/root';
import ErrorPage from '../pages/error-page';
import ProductDetails from 'pages/product-details';
import ProductCreate from 'pages/product-create';
import ProductUpdate from 'pages/product-update';
import Products from 'pages/products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product',
        element: <ProductDetails />,
      },
      {
        path: '/product-create',
        element: <ProductCreate />,
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
