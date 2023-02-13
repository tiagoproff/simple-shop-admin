import { useReducer } from 'react';

import Button from 'components/button';
import Form from '..';
import Input from '../input';
import InputFile from '../input-file';

import productService from 'services/product-service';

import formReducer from './form-reducer';

import { Buttons, Container, Footer } from './style';
import Product from 'interfaces/product';

const initialFormState = {
  price: 0,
  title: '',
  thumbnail: '',
};

export default function FormProductCreate() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const { title, price } = formState;

  function CreateProductHandle(params: Partial<Product>) {
    productService
      .CreateProduct(params)
      .then(() =>
        dispatch({ type: 'CHANGE_ALL', values: { ...initialFormState } })
      );
  }

  return (
    <Container>
      <Form method="post" title="Inserir produto" style={{ minWidth: 460 }}>
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
              type="submit"
              onClick={(event) => {
                CreateProductHandle(formState);
                console.log(formState);
              }}
              style={{ color: 'white' }}
            >
              Inserir
            </Button>
          </Buttons>
        </Footer>
      </Form>
    </Container>
  );
}
