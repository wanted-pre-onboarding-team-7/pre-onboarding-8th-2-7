import React from 'react';
import styled from 'styled-components';
import CreateCardBtn from '../btns/CreateCardBtn';
import Cards from '../card/Cards';
import KanbanColumnTitle from './KanbanColumnTitle';

const KanbanColumn = ({ title }) => {
  return (
    <DivColsWrapper>
      <KanbanColumnTitle title={title} />
      <Cards />
    </DivColsWrapper>
  );
};
export default KanbanColumn;

const DivColsWrapper = styled.div``;
