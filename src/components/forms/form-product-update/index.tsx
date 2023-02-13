import Form from '..';
import Input from '../input';
import InputFile from '../input-file';

import { Container } from './style';

export default function FormProductUpdate() {
  return (
    <Container>
      <Form title="Atualizar produto" style={{ minWidth: 460 }}>
        <Input label="Título" placeholder="Título" required error />
        <Input label="Preço" placeholder="Preço" required error />
        <InputFile label="Imagem principal" required draggable />
        <InputFile label="Imagens" draggable multiple />
      </Form>
    </Container>
  );
}
