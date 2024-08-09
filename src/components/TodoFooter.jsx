import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { filterAtom, todosAtom } from '../atoms';
import styled from '@emotion/styled'
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */


const StyledFooter = styled.footer`
  display: block;
  padding: 10px 15px;
  border-top: 1px solid #e6e6e6;
  font-size: 15px;
  height: 20px;
  text-align: center;
`;

const leftTodosStyle = css`
  float: left;
`;

const filterUlStyle = css`
  left: 0;
  right: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
`;

const filterLiStyle = css`
  display: inline;  
`;

const filterLinkStyle = (selected) => css`
  border: 1px solid transparent;
  border-radius: 3px;
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;

  ${selected && `
    border-color: #ce4646;
  `}

  &:hover {
    border-color: #ce4646;
  }
`;

const clearCompletedStyle = css`
  float: right;
  line-height: 19px;
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: none;

  appearance: none;
  color: inherit;
  font-family: inherit;
  font-size: 100%
  font-weight: inherit;
`;

function TodoFooter() {
  const [todos] = useAtom(todosAtom);

  const leftTodos = todos.filter((todo) => !todo.completed);

  const [selectedFilter, setSelectedFilter] = useAtom(filterAtom);

  return (
    <StyledFooter>
      <span css={leftTodosStyle}>{leftTodos.length} items left!</span>
      <ul css={filterUlStyle}>
        <li css={filterLiStyle}><a href="#/" css={filterLinkStyle(selectedFilter === 'all')} onClick={() => setSelectedFilter('all')}>All</a></li>
        <li css={filterLiStyle}><a href="#/active" css={filterLinkStyle(selectedFilter === 'active')} onClick={() => setSelectedFilter('active')}>Active</a></li>
        <li css={filterLiStyle}><a href="#/completed" css={filterLinkStyle(selectedFilter === 'completed')} onClick={() => setSelectedFilter('completed')}>Completed</a></li>
      </ul>
      <button css={clearCompletedStyle}>Clear completed</button>
    </StyledFooter>
  )
}

export default TodoFooter;