import { createContext } from 'react';

import { EXAMPLE_STORE_ACTION, ExampleStore, ExampleStoreAction } from './types';

export const initialState: ExampleStore = {
  stateExample: true,
};

export const initialContextState = {
  exampleState: initialState,
  dispatch: (action: any) => action,
};

export const ExampleStoreContext = createContext(initialContextState);

export const ExampleStoreReducer = (state: ExampleStore, action: ExampleStoreAction): ExampleStore => {
  const { type, payload } = action;
  switch (type) {
    case EXAMPLE_STORE_ACTION.EXAMPLE_ACTION:
      return {
        ...state,
        stateExample: payload || !state.stateExample,
      };
    default:
      return state;
  }
};
