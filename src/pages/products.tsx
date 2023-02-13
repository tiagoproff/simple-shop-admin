import { useEffect, useState } from 'react';

import Card from '../components/card';

import productService, { GetProductsResponse } from 'services/product-service';
import Product from 'interfaces/product';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productService
      .GetProducts()
      .then((data: GetProductsResponse) => setProducts(data.data.products));
  }, []);

  return (
    <div
      className="products"
      style={{
        display: 'grid',
        gap: 16,
        gridTemplateColumns: '1fr 1fr 1fr',
      }}
    >
      {products.map(({ id, title, thumbnail }) => (
        <Card key={id} productId={id} title={title} thumbnail={thumbnail} />
      ))}
    </div>
  );
}
