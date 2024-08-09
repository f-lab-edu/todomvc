import React from 'react';
import TodoItem from './TodoItem';
import { useAtom } from 'jotai';
import { todosAtom } from '../atoms';
import {css} from '@emotion/react';
/** @jsxImportSource @emotion/react */


const todoListStyle = css`
  list-style: none;
  display:block;
  margin: 0;
  padding: 0;
  background: #fff;
`;

function TodoList() {
  const [todos] = useAtom(todosAtom);
  console.log(todos);

  return (
    <ul css={todoListStyle}>
      {todos.map((todo) => 
        <TodoItem todo={todo} />
      )}
    </ul>
  );
}

export default TodoList;