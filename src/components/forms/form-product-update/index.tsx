import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/button';
import Form from '..';
import Input from '../input';
import InputFile from '../input-file';

import productService, { GetProductResponse } from 'services/product-service';

import formReducer from './form-reducer';

import { Buttons, Container, Footer } from './style';

interface FormProductUpdateProps {
  productId: number;
}

const initialFormState = {
  price: 0,
  title: '',
  thumbnail: '',
};

export default function FormProductUpdate({
  productId,
}: FormProductUpdateProps) {
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialFormState);
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const { title, price } = formState;

  useEffect(() => {
    productService
      .GetProduct(productId)
      .then(({ data }: GetProductResponse) => setProduct(data));
  }, []);

  useEffect(() => {
    dispatch({ type: 'CHANGE_ALL', values: { ...product } });
  }, [product]);

  return (
    <Container>
      <Form method="post" title="Atualizar produto" style={{ minWidth: 460 }}>
        <Input
          label="Título"
          placeholder="Título"
          required
          error
          value={title}
          onChange={({ target }) =>
            dispatch({ type: 'CHANGE_TITLE', title: target.value })
          }
        />
        <Input
          label="Preço"
          placeholder="Preço"
          type="number"
          required
          error
          value={price}
          onChange={({ target }) =>
            dispatch({ type: 'CHANGE_PRICE', price: target.value })
          }
        />
        <InputFile label="Imagem principal" required draggable />
        <InputFile label="Imagens" draggable multiple />
        <Footer>
          <Buttons style={{ justifyContent: 'flex-end' }}>
            <Button
              style={{ backgroundColor: 'white', color: 'black' }}
              onClick={(e) => navigate('/products')}
            >
              Cancelar
            </Button>
            <Button
              onClick={(e) => console.log(formState)}
              style={{ color: 'white' }}
            >
              Atualizar
            </Button>
          </Buttons>
        </Footer>
      </Form>
    </Container>
  );
}
