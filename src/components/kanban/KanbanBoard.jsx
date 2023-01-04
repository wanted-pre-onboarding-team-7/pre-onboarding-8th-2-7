import React, { useEffect } from 'react';
import styled from 'styled-components';
import KanbanColumn from './KanbanColumn';
import { KANBAN_COLS } from '../../utils/constant';
const KanbanBoard = () => {
  return (
    <DivColsWrapper>
      {KANBAN_COLS.map((col) => (
        <KanbanColumn title={col} key={col} />
      ))}
    </DivColsWrapper>
  );
};
export default KanbanBoard;

const DivColsWrapper = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
`;
