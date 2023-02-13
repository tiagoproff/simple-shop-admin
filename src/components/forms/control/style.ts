import styled from 'styled-components';

const colorError = 'rgb(244, 67, 54)';
const colorDefault = 'rgba(0, 0, 0, 0.23)';

export const Control = styled.div`
  margin: 16px 0;
  position: relative;
`;

export const Base = styled.div`
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-size: 1rem;
  position: relative;
  padding: 18.5px 14px;
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  border: 1px solid ${colorDefault};
  border-radius: 4px;
  font-size: 16px;
  margin: 0;
  overflow: hidden;
  padding: 0 8px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: -5px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.75em;
  line-height: 1;
  position: absolute;
  left: 13px;
  top: -0.55em;
`;

export const Legend = styled.legend`
  height: 11px;
  font-size: 0.75em;
  padding: 0 4px;
  visibility: hidden;
`;

export const ErrorText = styled.p`
  color: ${colorError};
  font-size: 12px;
  margin-left: 14px;
  margin-top: 3px;
`;
