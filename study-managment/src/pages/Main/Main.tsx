import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ContainerMain } from '../../components/Containers/ContainerMainStyles';

// TODO: карточка текущего времени
// TODO: карточка текущей даты

const Main = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('render');
  }, [counter]);

  const renderCount = useRef(1)
  // debugger
  return (
    <ContainerMain>
      <h2>{counter}</h2>
      
      <button onClick={() => setCounter((prev) => prev + 1)} style={{ width: '40px' }}>
        +
      </button>
      <button onClick={() => setCounter((prev) => prev - 1)} style={{ width: '40px' }}>
        -
      </button>
      <button onClick={() => counter === 0 ? renderCount.current++ : setCounter((prev) => prev)} >ничего не делать</button>
      <br />
      <h1>{renderCount.current}</h1>
    </ContainerMain>
  );
};

export default Main;
