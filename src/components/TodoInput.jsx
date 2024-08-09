import { useAtom } from 'jotai';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { todosAtom } from '../atoms';
import styled from '@emotion/styled'
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */


const StyledTodoInput = styled.input`
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

const TodoInputWrapper = styled.div`
  display: flex;
`;


const toggleAllStyle = (toggleAll) => css`
  width: 45px;
  height: 65px;
  position: absolute;
  font-size: 22px;
  color: ${toggleAll ? '#e6e6e6' : '#737373' };
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1;
`;


function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useAtom(todosAtom);


  const handleSubmit = (e) => {
    if(e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      if(inputValue.trim()) {
        setTodos([...todos, {id: uuidv4(), text: inputValue, completed: false}]);
        setInputValue('');
      }
    }
  };

  const handleToggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    const newTodos = todos.map((todo) => ({...todo, completed: !allCompleted}));
    setTodos(newTodos);
  };

  const checkAllCompleted = todos.every((todo) => todo.completed);


  return (
    <TodoInputWrapper>
    <button css={toggleAllStyle(!checkAllCompleted)} onClick={() => handleToggleAll()}>▼</button>
    <StyledTodoInput
      class="new-todo"
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyUp={handleSubmit}
      placeholder="What needs to be done?"
    />
    </TodoInputWrapper>
  );
}

export default TodoInput;