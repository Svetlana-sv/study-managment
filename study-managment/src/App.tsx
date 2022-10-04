import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
