import Button from 'components/button';

import { useDialog, useDialogDispatch } from 'hooks/useDialog';

import {
  Buttons,
  DialogActions,
  DialogConteiner,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from './style';

export default function ConfirmRemove() {
  const { show, title, message, onConfirm } = useDialog();
  const dispatch = useDialogDispatch();

  const handleClose = () => {
    dispatch({ type: 'HIDE_CONFIRM' });
  };

  const handleConfirm = (event: any) => {
    if (typeof onConfirm === 'function') {
      onConfirm(event);
    }

    handleClose();
  };

  return (
    <DialogConteiner open={show} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Buttons>
          <Button style={styles.buttonConfirm} onClick={handleClose}>
            excluir
          </Button>
          <Button onClick={handleConfirm} autoFocus>
            não
          </Button>
        </Buttons>
      </DialogActions>
    </DialogConteiner>
  );
}

const styles = {
  buttonConfirm: {
    backgroundColor: '#F80059',
  },
};
