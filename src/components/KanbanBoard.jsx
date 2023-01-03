import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = () => {
  return (
    <DivColsWrapper>
      <KanbanColumn />
      <KanbanColumn />
      <KanbanColumn />
    </DivColsWrapper>
  );
};
export default KanbanBoard;

const DivColsWrapper = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;
