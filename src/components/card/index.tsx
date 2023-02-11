import { FiTrash2 } from 'react-icons/fi';

import Button from '../button';

import {
  Buttons,
  Container,
  Content,
  Footer,
  Image,
  Price,
  Prices,
  Title,
} from './style';
import { useDialogDispatch } from 'hooks/useDialog';
import { SHOW_CONFIRM } from 'interfaces/dialog';

interface CardProps extends React.BaseHTMLAttributes<any> {
  productId: number;
  thumbnail?: string;
}

export default function Card({ thumbnail, productId, ...props }: CardProps) {
  const dialog = useDialogDispatch();

  return (
    <Container {...props}>
      <Image src={thumbnail} alt="" srcSet={thumbnail} />
      <Content>
        <Title>Product</Title>
        <Footer>
          <Prices>
            <Price>100</Price>
            <Price>40</Price>
          </Prices>
          <Buttons style={{ justifyContent: 'flex-end' }}>
            <Button
              color="#F80059"
              onClick={async (e) => {
                dialog({
                  type: SHOW_CONFIRM,
                  message: 'Deseja remover este produto?',
                  onConfirm: () => console.log('REMOVIDO'),
                });
              }}
            >
              <FiTrash2 color="#FFF" />
            </Button>
            <Button>Editar</Button>
          </Buttons>
        </Footer>
      </Content>
    </Container>
  );
}
