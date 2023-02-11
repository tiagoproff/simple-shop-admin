export type DialogContext = {
  show: boolean;
  message: string;
  onConfirm?: Function;
};

export const SHOW_CONFIRM = 'SHOW_CONFIRM';
export const HIDE_CONFIRM = 'HIDE_CONFIRM';

export type ReducerAction =
  | {
      type: 'SHOW_CONFIRM';
      message: string;
      onConfirm?: Function;
    }
  | { type: 'HIDE_CONFIRM' };
