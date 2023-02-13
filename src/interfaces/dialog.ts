export interface DialogContext {
  show: boolean;
  title: string;
  message?: string;
  onConfirm?: Function;
}

export const SHOW_CONFIRM = 'SHOW_CONFIRM';
export const HIDE_CONFIRM = 'HIDE_CONFIRM';

export type ReducerAction =
  | {
      type: 'SHOW_CONFIRM';
      title: string;
      message?: string;
      onConfirm?: Function;
    }
  | { type: 'HIDE_CONFIRM' };
