import { Link, Navigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import Button from '../button';

import service from 'services/product-service';

import { useDialogDispatch } from 'hooks/useDialog';
import { SHOW_CONFIRM } from 'interfaces/dialog';

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

interface CardProps extends React.BaseHTMLAttributes<any> {
  productId: number;
  thumbnail?: string;
}

export default function Card({
  thumbnail,
  title,
  productId,
  ...props
}: CardProps) {
  const dialog = useDialogDispatch();

  return (
    <Container {...props}>
      <Image src={thumbnail} alt="" srcSet={thumbnail} />
      <Content>
        <Title>{title}</Title>
        <Footer>
          <Prices>
            <Price>100</Price>
            <Price>40</Price>
          </Prices>
          <Buttons style={{ justifyContent: 'flex-end' }}>
            <Button
              color="#F80059"
              onClick={(e) => {
                dialog({
                  type: SHOW_CONFIRM,
                  title: 'Deseja remover este produto?',
                  onConfirm: () => service.RemoveProduct(productId),
                });
              }}
            >
              <FiTrash2 color="#FFF" />
            </Button>
            <Link to={`/product/${productId}`}>
              <Button>Editar</Button>
            </Link>
          </Buttons>
        </Footer>
      </Content>
    </Container>
  );
}
