import React, { useReducer } from 'react';

import { DefaultLayout } from '@layouts/default';

import { ExampleStoreContext, ExampleStoreReducer } from './store';

export const DefaultApp = () => {
  const [exampleState, dispatch] = useReducer(ExampleStoreReducer, { stateExample: true });

  return (
    <ExampleStoreContext.Provider value={{ exampleState, dispatch }}>
      <DefaultLayout>
        <div>Example App</div>
      </DefaultLayout>
    </ExampleStoreContext.Provider>
  );
};
