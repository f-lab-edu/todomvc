import React from 'react';
import TodoItem from './TodoItem';
import { useAtom } from 'jotai';
import { todosAtom } from '../atoms';

function TodoList() {
  const [todos] = useAtom(todosAtom);
  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => 

        <TodoItem todo={todo} />
      )}
    </ul>
  );
}

export default TodoList;