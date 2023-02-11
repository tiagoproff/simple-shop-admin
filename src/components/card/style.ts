import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  max-width: 360px;
  padding: 16px;
`;
export const Image = styled.img`
  border-radius: 8px;
  object-fit: cover;
  height: 240px;
  width: 100%;
`;
export const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
`;
export const Content = styled.div``;
export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Price = styled.span`
  color: red;
  text-decoration-line: line-through;

  &::before {
    content: 'R$ ';
    color: yellow;
    font-weight: 600;
  }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;
