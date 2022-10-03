import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { GridTasks } from '../../components/Containers/ContainerStyles';
import { ContainerMain } from '../../components/Containers/ContainerMainStyles';

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
const Description = styled.p`
  font-size: 20px;
`;

const Tasks = () => {
  return (
    <ContainerMain>
      <GridTasks>
        <TaskCard>
          <Title>Task1 {'от 29.02'}</Title>
          <Description>Description task</Description>
        </TaskCard>{' '}
        <TaskCard>
          <Title>Task1 {'от 29.02'}</Title>
          <Description>Description task</Description>
        </TaskCard>{' '}
        <TaskCard>
          <Title>Task1 {'от 29.02'}</Title>
          <Description>Description task</Description>
        </TaskCard>
      </GridTasks>

      <Button buttonLabel="Добавить" />
    </ContainerMain>
  );
};

export default Tasks;
