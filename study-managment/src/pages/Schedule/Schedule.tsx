import React from 'react';
import styled from 'styled-components';
import { GridSchedule } from '../../components/Containers/ContainerStyles';
import { ContainerMain } from '../../components/Containers/ContainerMainStyles';

const ScheduleCard = styled.div`
  width: 230px;
  min-height: 258px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 12px;
  border: 1px solid #e9e9e9;
  border-radius: 16px;
`;

const Title = styled.p`
  font-size: 16px;
  padding: 4px;
`;

const Time = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 4px;
`;

const Name = styled.p`
  font-size: 16px;
  color: #610084;
  padding: 4px;
`;

const Schedule = () => {
  return (
    <ContainerMain>
      <GridSchedule>
      <ScheduleCard>
        <Title>Понедельник</Title>
        <Time>12:20 - 13:50</Time>
        <Name>Технический перевод</Name>
      </ScheduleCard>

      <ScheduleCard>
        <Title>Понедельник</Title>
        <Time>12:20 - 13:50</Time>
        <Name>Технический перевод</Name>
      </ScheduleCard>

      <ScheduleCard>
        <Title>Понедельник</Title>
        <Time>12:20 - 13:50</Time>
        <Name>Технический перевод</Name>
      </ScheduleCard>
      </GridSchedule>
      
    </ContainerMain>
  );
};

export default Schedule;
