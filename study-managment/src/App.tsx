import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle';
// styled - стилизация компонента
// createGlobalStyle - глобальные стили
// keyframes - анимация



import MainPage from './pages/Main/Main';
import Materials from './pages/Materials/Materials';
import Perfomance from './pages/Perfomance/Performance';
import Schedule from './pages/Schedule/Schedule';
import Tasks from './pages/Tasks/Tasks';
import Layout from './layouts/Layout';



const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/perfomance" element={<Perfomance />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/materials" element={<Materials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
