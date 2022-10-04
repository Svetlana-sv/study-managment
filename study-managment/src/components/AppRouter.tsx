import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Main/Main';
import Materials from '../pages/Materials/Materials';
import Perfomance from '../pages/Perfomance/Performance';
import Schedule from '../pages/Schedule/Schedule';
import Tasks from '../pages/Tasks/Tasks';

import {
  MAIN_ROUTE,
  MATERIALS_ROUTE,
  PERFOMANCE_ROUTE,
  SCHEDULE_ROUTE,
  TASKS_ROUTE,
} from '../utils/consts';

const AppRouter= () => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainPage />} />
      <Route path={TASKS_ROUTE} element={<Tasks />} />
      <Route path={PERFOMANCE_ROUTE} element={<Perfomance />} />
      <Route path={SCHEDULE_ROUTE} element={<Schedule />} />
      <Route path={MATERIALS_ROUTE} element={<Materials />} />
    </Routes>
  );
};

export default AppRouter;
