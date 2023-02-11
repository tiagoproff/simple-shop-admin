import { useEffect, useState } from 'react';

import Card from '../components/card';

import service, { GetProductsResponse } from 'services/product-service';
import Product from 'interfaces/product';

export default function Root() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    service
      .GetProducts()
      .then((data: GetProductsResponse) => setProducts(data.data.products));
  }, []);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <div
          className="products"
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          {products.map(({ thumbnail }) => (
            <Card thumbnail={thumbnail} />
          ))}
        </div>
      </div>
    </>
  );
}
