import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  border-bottom: 1px solid;
  padding: 20px 0;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 645px) {
      flex-direction: column;
    }

    .header__link {
      font-size: 18px;
    }
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to="/" className='header__link'>Main Page :)</NavLink>
        <NavLink to="/tasks" className='header__link'>Задания</NavLink>
        <NavLink to="/perfomance" className='header__link'>Успеваемость</NavLink>
        <NavLink to="/schedule" className='header__link'>Расписание</NavLink>
        <NavLink to="/materials" className='header__link'>Материалы</NavLink>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
