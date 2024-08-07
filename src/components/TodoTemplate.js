import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const TodoTemplateBlock = css`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  
  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({children}) {
  return <div css={TodoTemplateBlock}><div>{children}</div></div>
}

export default TodoTemplate; 