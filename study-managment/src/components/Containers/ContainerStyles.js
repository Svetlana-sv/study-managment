import styled from 'styled-components';

export const GridSchedule = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
`;

export const GridTasks = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
`;

export const FlexMaterial = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const FlexPerformance = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

