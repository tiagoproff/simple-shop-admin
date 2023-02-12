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

interface ProductData extends Data {
  products: Product[];
}

export interface GetProductsResponse extends ResponseRequest<ProductData> {}

//const newBusinessUrl = process.env.REACT_APP_NEW_BUSINESS_URL;

const CreateProduct = async (params: Product) => {
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

/*
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    
  }),
})
  .then((res) => res.json())
  .then(console.log);
*/
/*
const UpdateProduct = async (
  applicationId,
  versionNumber,
  customerId,
  params: CustomerDTO
) => {
  return await api.put(
    `${newBusinessUrl}applications/${applicationId}/versions/${versionNumber}/customers/${customerId}`,
    params.customer
  );
};


*/
const productService = {
  CreateProduct,
  //UpdateProduct,
  GetProduct,
  RemoveProduct,
  GetProducts,
};

export default productService;
