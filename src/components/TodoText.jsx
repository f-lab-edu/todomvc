import React from 'react';
import styled from '@emotion/styled';

const Text = styled.h1`
  color: #b83f45;
  font-size: 80px;
  font-weight: 200;
  text-align: center;
  width: 100%;
`;

function TodoText() {
  return (
    <Text>todos</Text>
  )
}

export default TodoText;