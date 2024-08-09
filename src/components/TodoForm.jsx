import React, {useState} from 'react';
import { todosAtom } from '../atoms';
import styled from '@emotion/styled'
import TodoList from './TodoList';
import { useAtom } from 'jotai';

const TodoInput = styled.input`
  width: 550px;
  height: 65px;
  font-size: 24px;
  position: relative;
  padding: 16px 16px 16px 60px;
  box-sizing: border-box;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,.03);

  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  border: none;
`;

function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useAtom(todosAtom);

  const handleSubmit = (e) => {
    if(e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      if(inputValue.trim()) {
        setTodos([...todos, {id: todos.length + 1, text: inputValue, completed: false}]);
        setInputValue('');
      }
    }
  };

  return (
    <section>
      <TodoInput
        class="new-todo"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleSubmit}
        placeholder="What needs to be done?"
      />
      <TodoList/>
      {/* <TodoFooter/> */}
    </section>
  );
}

export default TodoForm;