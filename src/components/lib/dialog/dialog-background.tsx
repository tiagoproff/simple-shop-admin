import { useContext } from 'react';

import { DialogBackground as DialogBackgroundComponent } from './style';
import { DialogContext } from '.';

export default function DialogBackground({
  children,
  ...props
}: React.BaseHTMLAttributes<any>) {
  const open = useContext(DialogContext);

  return open ? (
    <DialogBackgroundComponent {...props}>{children}</DialogBackgroundComponent>
  ) : null;
}
