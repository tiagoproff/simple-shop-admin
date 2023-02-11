import Button from 'components/button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'components/lib/dialog';

import { useDialog, useDialogDispatch } from 'hooks/useDialog';

export default function ConfirmRemove() {
  const { show, message, onConfirm } = useDialog();
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
    <Dialog open={show} onClose={handleClose}>
      <DialogTitle>{message}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          não
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}
