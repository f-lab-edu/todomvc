import styled from '@emotion/styled'
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import TodoInput from './TodoInput';


const StyledSection = styled.section`
  background: #fff;
`;

function TodoForm() {
  return (
    <StyledSection>
      <TodoInput />
      <TodoList/>
      <TodoFooter/>
    </StyledSection>
  );
}

export default TodoForm;