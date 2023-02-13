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
import Product from 'interfaces/product';

interface CardProps extends React.BaseHTMLAttributes<any> {
  discountPercentage: number;
  productId: number;
  price: number;
  thumbnail?: string;
  title: string;
}

function formatCurrence(value: number): string {
  return value.toFixed(2).replace('.', ',');
}

function discount(price: number, discount: number) {
  const priceWithDiscount = price * (1 - discount / 100);

  return formatCurrence(priceWithDiscount);
}

export default function Card({
  discountPercentage,
  productId,
  price,
  thumbnail,
  title,
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
            <Price style={styles.priceLagged}>{formatCurrence(price)}</Price>
            <Price>{discount(price, discountPercentage)}</Price>
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

const styles = {
  priceLagged: {
    color: '#F80059',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
};
