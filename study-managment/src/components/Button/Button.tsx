import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 105px;
  height: 41px;
  border-radius: 20.5px;
  color: #221c1c;
  font-size: 18px;
  background: #d9d9d9;
  text-align: center;
  border: none;
`

const Button = ({
  buttonLabel = "Действие: Подробное Описание",
}) => {
  return (
    <ButtonStyle>
      <p>{buttonLabel}</p>
    </ButtonStyle>
  );
};

export default Button;