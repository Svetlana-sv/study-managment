import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header'

const Wrapper = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 10px;
  max-width: 100%;

  @media (max-width: 645px) {
    width: calc(100vw - 30px);
    margin-top: 15px;
  }
`

const Content = styled.div`
    padding: 40px 0;
  `
const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>     
    </Wrapper>
  );
};

export default Layout;