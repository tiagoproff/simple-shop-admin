import Dialog from 'lib/dialog';

import styled from 'styled-components';

export const DialogConteiner = styled(Dialog)`
  border-radius: 8px;
  padding: 24px;
  overflow: hidden;
`;
export const DialogTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  margin-bottom: 48px;
`;
export const DialogContent = styled.div``;
export const DialogContentText = styled.div``;
export const DialogActions = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;
