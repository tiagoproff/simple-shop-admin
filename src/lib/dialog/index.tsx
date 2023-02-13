import {
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import {
  DialogActions,
  DialogConteiner,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from './style';
import DialogBackground from './dialog-background';

interface DialogProps extends PropsWithChildren {
  open: boolean;
  onClose?: MouseEventHandler<any>;
}

export const DialogContext = createContext(false);

export default function Dialog({
  children,
  open,
  onClose,
  ...props
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  function onCloseHandle(event: any) {
    if (typeof onClose === 'function') {
      onClose(event);
    }

    setIsOpen(false);
  }

  return open ? (
    <DialogContext.Provider value={isOpen}>
      <DialogBackground>
        <DialogConteiner {...props}>{children}</DialogConteiner>
      </DialogBackground>
    </DialogContext.Provider>
  ) : null;
}

export { DialogActions, DialogContent, DialogContentText, DialogTitle };
