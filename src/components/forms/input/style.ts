import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  border: none;
  height: 1.1876em;
  outline: none;
  z-index: 1;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
