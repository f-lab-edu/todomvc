/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as CheckSvg } from '../assets/check.svg';
import { ReactComponent as CheckedSvg } from '../assets/checked.svg';
import { useAtom } from 'jotai';
import { todosAtom } from '../atoms';

const todoItemStyle = css`
  border-bottom: 1px solid #ededed;
  font-size: 24px;
  position: relative;

  &:hover button {
    display: block;
    line-height: 1.1;
  }
`;

const labelStyle = (completed) => css`
  display: block;
  padding: 15px 15px 15px 60px;
  font-weight: 400;
  line-height: 1.2;
  color: #484848;

  ${completed && `
    color: #949494;
    text-decoration: line-through;
  `}
`;

const checkboxStyle = css`
  width: 40px;
  height: 40px;
  cursor: default;
  box-sizing: border-box;
  margin: 10px 0;
  position: absolute;
  
`;

const deleteButtonStyle = css`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 10px;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #949494;
  transition: color .2s ease-out;
  display: none;
  background: none;
  border: none;
`;



function TodoItem({todo}) {
  const [todos, setTodos] = useAtom(todosAtom);

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
  }))};

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <li css={todoItemStyle} className='todo-item' key={todo.id}>
      <div>
        {
          todo.completed ? (
            <CheckedSvg css={checkboxStyle} onClick={() => toggleTodo(todo.id)}/>
          ) : (
            <CheckSvg css={checkboxStyle} onClick={() => toggleTodo(todo.id)} />
          )
        }
        <label css={labelStyle(todo.completed)}>{todo.text}</label>
        <button css={deleteButtonStyle} onClick={() => deleteTodo(todo.id)}>×</button>
      </div>
    </li>
  )
}

export default TodoItem;