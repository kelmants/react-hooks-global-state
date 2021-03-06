import React, { useEffect, StrictMode } from 'react';

import { GlobalStateProvider, setPageTitle } from './state';

import ErrorMessage from './ErrorMessage';
import PageInfo from './PageInfo';
import RandomButton from './RandomButton';

const initPageInfo = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const response = await fetch(url);
  const body = await response.json();
  setPageTitle(body.title);
};

const App = () => {
  useEffect(
    () => {
      initPageInfo();
    },
    [],
  );

  return (
    <StrictMode>
      <GlobalStateProvider>
        <PageInfo />
        <RandomButton />
        <ErrorMessage />
      </GlobalStateProvider>
    </StrictMode>
  );
};

export default App;
