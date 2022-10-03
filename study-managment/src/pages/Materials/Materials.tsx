import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { ContainerMain } from '../../components/Containers/ContainerMainStyles';
import { FlexMaterial } from '../../components/Containers/ContainerStyles';

const MaterialCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 16px;
  padding: 10px;
  margin: 10px auto;
`;

const Title = styled.p`
  font-size: 22px;
  padding-bottom: 10px;
`;

const Materials = () => {
  return (
    <ContainerMain>
<FlexMaterial>
<MaterialCard>
        <Title>Технический перевод - {2} метериала</Title>
        <Button buttonLabel="Показать" />
      </MaterialCard>

      <MaterialCard>
        <Title>Технический перевод - {2} метериала</Title>
        <Button buttonLabel="Показать" />
      </MaterialCard>

      <MaterialCard>
        <Title>Технический перевод - {2} метериала</Title>
        <Button buttonLabel="Показать" />
      </MaterialCard>
</FlexMaterial>
      

      <Button buttonLabel="Создать" />
    </ContainerMain>
  );
};

export default Materials;
