import Product from 'interfaces/product';

export interface FormContext extends Partial<Product> {}

export type ReducerAction =
  | {
      type: 'CHANGE_TITLE';
      title: string;
    }
  | { type: 'CHANGE_DESCRIPTION'; description: string }
  | { type: 'CHANGE_PRICE'; price: number }
  | { type: 'CHANGE_THUMBNAIL'; thumbnail: string }
  | { type: 'CHANGE_IMAGES'; images: string[] }
  | { type: 'CHANGE_ALL'; values: FormContext };

const formReducer = (
  state: FormContext,
  action: ReducerAction
): FormContext => {
  switch (action.type) {
    case 'CHANGE_TITLE': {
      return {
        ...state,
        title: action.title,
      };
    }
    case 'CHANGE_DESCRIPTION': {
      return {
        ...state,
        description: action.description,
      };
    }
    case 'CHANGE_PRICE': {
      return {
        ...state,
        price: action.price,
      };
    }
    case 'CHANGE_ALL': {
      return {
        ...action.values,
      };
    }
    default:
      return state;
  }
};

export default formReducer;
