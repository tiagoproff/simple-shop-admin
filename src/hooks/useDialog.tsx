import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

import { DialogContext, ReducerAction } from 'interfaces/dialog';
import dialogReducer, { initialState } from 'store/dialog-reducer';

export interface DialogConfig {
  component: React.ReactElement<any, any>;
}

interface DialogProviderProps extends PropsWithChildren {
  initialValue?: DialogContext;
}

const DialogContextState = createContext<DialogContext>({ ...initialState });

const DialogContextReducer = createContext<
  React.Dispatch<ReducerAction> | Function
>(() => null);

export function DialogProvider(props: DialogProviderProps) {
  const [state, dispatch] = useReducer(
    dialogReducer,
    props.initialValue ?? { ...initialState }
  );

  return (
    <DialogContextState.Provider value={state}>
      <DialogContextReducer.Provider value={dispatch}>
        {props.children}
      </DialogContextReducer.Provider>
    </DialogContextState.Provider>
  );
}

export const useDialog = () => {
  return useContext(DialogContextState);
};

export const useDialogDispatch = () => {
  return useContext(DialogContextReducer);
};
