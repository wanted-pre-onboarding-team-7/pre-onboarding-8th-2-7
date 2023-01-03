import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const KanbanHeader = ({ children }) => {
  return (
    <DivWrapper>
      <h1>{children}</h1>
      <button>새로 만들기</button>
    </DivWrapper>
  );
};
export default KanbanHeader;

const DivWrapper = styled.div`
  display: flex;
`;
