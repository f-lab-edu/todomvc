import './App.css';
import TodoForm from './components/TodoForm';
import TodoText from './components/TodoText';
import { Global, css } from '@emotion/react';

const globalStyle = css`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <TodoText />
      <TodoForm />
    </>
  );
}

export default App;
