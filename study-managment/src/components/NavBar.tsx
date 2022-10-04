import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  MAIN_ROUTE,
  MATERIALS_ROUTE,
  PERFOMANCE_ROUTE,
  SCHEDULE_ROUTE,
  TASKS_ROUTE,
} from '../utils/consts';

const HeaderWrapper = styled.div`
  border-bottom: 1px solid;
  padding: 20px 0;
`;

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
`;
const NavBar = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to={MAIN_ROUTE} className="header__link">
          Main Page :)
        </NavLink>
        <NavLink to={TASKS_ROUTE} className="header__link">
          Задания
        </NavLink>
        <NavLink to={PERFOMANCE_ROUTE} className="header__link">
          Успеваемость
        </NavLink>
        <NavLink to={SCHEDULE_ROUTE} className="header__link">
          Расписание
        </NavLink>
        <NavLink to={MATERIALS_ROUTE} className="header__link">
          Материалы
        </NavLink>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
export default NavBar;
