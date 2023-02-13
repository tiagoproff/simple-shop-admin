import styled from 'styled-components';

const colorError = 'rgb(244, 67, 54)';
const colorDefault = 'rgba(0, 0, 0, 0.23)';

export const Control = styled.div`
  position: relative;
`;

export const Base = styled.div``;

export const Button = styled.div`
  background: #ff4081;
  border-radius: 2px;
  color: white;
  font-size: 20px;
  height: 36px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  min-width: 64px;
  padding: 0 16px;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  z-index: 10;
  font-size: 20px;
  cursor: pointer;
  height: 36px;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

export const Legend = styled.p`
  color: rgba(0, 0, 0, 0.48);
  line-height: 1;
  margin: 0;
  margin-left: 12px;
`;

export const ErrorText = styled.p``;
