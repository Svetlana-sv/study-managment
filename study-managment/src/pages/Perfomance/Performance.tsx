import React from 'react';
import styled from 'styled-components';
import { ContainerMain } from '../../components/Containers/ContainerMainStyles';
import { FlexPerformance } from '../../components/Containers/ContainerStyles';

const PerformanceCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 16px;
  padding: 10px;
  margin: 10px auto;
`;

const Paragraph = styled.p`
  font-size: 20px;
`;
// Страница успеваемости
const Performance = () => {
  return (
    <ContainerMain>
      <FlexPerformance>
        <PerformanceCard>
          <Paragraph>Техический перевод</Paragraph>
          <div>1</div>
          <Paragraph>98%</Paragraph>
        </PerformanceCard>
      </FlexPerformance>
    </ContainerMain>
  );
};

export default Performance;
