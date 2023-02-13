import {
  DialogContext,
  HIDE_CONFIRM,
  ReducerAction,
  SHOW_CONFIRM,
} from 'interfaces/dialog';

export const initialState = {
  show: false,
  title: '',
  message: '',
};

const dialogReducer = (
  state: DialogContext,
  action: ReducerAction
): DialogContext => {
  switch (action.type) {
    case SHOW_CONFIRM: {
      return {
        show: true,
        title: action.title,
        message: action.message,
        onConfirm: action.onConfirm,
      };
    }
    case HIDE_CONFIRM: {
      return {
        ...initialState,
      };
    }
  }
};

export default dialogReducer;
