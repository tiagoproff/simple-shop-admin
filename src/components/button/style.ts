import styled from 'styled-components';

/*
export const Primary = styled.button((props) => {
  console.log(props, props.color);
  return {
    background: props.color || '#007ff8',
    borderRadius: '32px',
    padding: '8px 16px',
  };
});
*/

export const Primary = styled.button`
  background: ${(props) => props.color || '#007ff8'};
  border-radius: 32px;
  color: white;
  padding: 8px 16px;
`;

//export const Primary = styled(Default)``;
export const Title = styled.div``;
export const Info = styled.div``;
export const Footer = styled.div``;
export const Prices = styled.div``;
export const Buttons = styled.div``;
