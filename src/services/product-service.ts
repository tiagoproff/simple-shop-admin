import api from 'helpers/api';

import Product from 'interfaces/product';

interface Data {
  limit: number;
  skip: number;
  total: number;
}

interface ResponseRequest<T> {
  status: number;
  data: T;
}

interface ProductsData extends Data {
  products: Product[];
}

export interface GetProductsResponse extends ResponseRequest<ProductsData> {}
export interface GetProductResponse extends ResponseRequest<Product> {}
export interface CreateProductResponse extends ResponseRequest<Product> {}

const CreateProduct = async (params: Partial<Product>) => {
  return await api.post(`products/add`, params);
};

const GetProduct = async (productId: number) => {
  return await api.get(`products/${productId}`);
};

const GetProducts = async () => {
  return await api.get(`products/?limit=10`);
};

const RemoveProduct = async (productId: number) => {
  return await api.delete(`products/${productId}`);
};

const productService = {
  CreateProduct,
  //UpdateProduct,
  GetProduct,
  RemoveProduct,
  GetProducts,
};

export default productService;
