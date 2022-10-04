import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { GridTasks } from '../../components/Containers/ContainerStyles';
import { ContainerMain } from '../../components/Containers/ContainerMainStyles';

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchTasks } from '../../store/task-actions';

const TaskCard = styled.div`
  width: 100%;
  min-height: 108px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  border: 1px solid #e9e9e9;
  border-radius: 39px;
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;
const Paragrpaph = styled.p`
  font-size: 20px;
`;

const Tasks = () => {
  // ! Разобраться в useAppDispatch() и useAppSelector()
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.task.tasks);
  dispatch(fetchTasks());

  return (
    <ContainerMain>
      <GridTasks>
        {tasks.map((task: any) => (
          <TaskCard key={task.task_id}>
            <Title>{task.task_name}</Title>
            <Paragrpaph>{task.task_description}</Paragrpaph>
            <Paragrpaph>{task.task_date}</Paragrpaph>
            <Paragrpaph>{task.task_date_end}</Paragrpaph>
            <Paragrpaph>{task.status}</Paragrpaph>
          </TaskCard>
        ))}
      </GridTasks>
      <Button buttonLabel="Добавить" />
    </ContainerMain>
  );
};

export default Tasks;
