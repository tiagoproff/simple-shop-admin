import { FiTrash2 } from 'react-icons/fi';

import Button from '../button';

import {
  Buttons,
  Container,
  Content,
  Image,
  Price,
  Prices,
  Title,
} from './style';

interface CardProps {
  thumbnail?: string;
}

export default function Card({ thumbnail }: CardProps) {
  return (
    <Container onClick={() => console.log('Card clicked!')}>
      <Image src={thumbnail} alt="" srcSet={thumbnail} />
      <Content>
        <Title>Product</Title>
        <Prices>
          <Price>100</Price>
          <Price>40</Price>
        </Prices>
      </Content>
      <Buttons style={{ justifyContent: 'flex-end' }}>
        <Button color="#F80059">
          <FiTrash2 color="#FFF" />
        </Button>
        <Button
          onClick={(e) => {
            console.log('Button clicked!');
          }}
        >
          Editar
        </Button>
      </Buttons>
    </Container>
  );
}
