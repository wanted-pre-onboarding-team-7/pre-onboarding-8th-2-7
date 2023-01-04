import React from 'react';
import styled from 'styled-components';
import CardBtnUI from '../btns/CardBtnUI';
import Cards from '../card/Cards';
import KanbanColumnTitle from './KanbanColumnTitle';

const KanbanColumn = ({ title }) => {
  return (
    <DivColsWrapper>
      <KanbanColumnTitle title={title} />
      <Cards />
      <CardBtnUI kanbanState={title} />
    </DivColsWrapper>
  );
};
export default KanbanColumn;

const DivColsWrapper = styled.div``;
