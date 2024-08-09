import React from 'react';
import TodoItem from './TodoItem';
import { useAtom } from 'jotai';
import { filterAtom, todosAtom } from '../atoms';
import {css} from '@emotion/react';
/** @jsxImportSource @emotion/react */


const todoListStyle = css`
  list-style: none;
  display:block;
  margin: 0;
  padding: 0;
`;

function TodoList() {
  const [todos] = useAtom(todosAtom);
  const [filter] = useAtom(filterAtom);

  console.log(todos);

  const filteredTodos = todos.filter((todo) => {
    if(filter === 'active') return !todo.completed;
    if(filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <ul css={todoListStyle}>
      {filteredTodos.map((todo) => 
        <TodoItem todo={todo} />
      )}
    </ul>
  );
}

export default TodoList;