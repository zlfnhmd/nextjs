export interface ExampleStore {
  stateExample: boolean;
}

export interface ExampleStoreAction {
  type: EXAMPLE_STORE_ACTION;
  payload?: any;
}

export enum EXAMPLE_STORE_ACTION {
  EXAMPLE_ACTION = 'EXAMPLE_ACTION',
}
