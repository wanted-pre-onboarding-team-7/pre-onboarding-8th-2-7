import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DUMMY_KANBAN } from '../../utils/dummyData';
import CardBtnUI from '../btns/CardBtnUI';
import Cards from '../card/Cards';
import KanbanColumnTitle from './KanbanColumnTitle';

const KanbanColumn = ({ title }) => {
  const [cards, setCards] = useState();
  useEffect(() => {
    loadCards();
  }, []);
  const loadCards = () => {
    let result = DUMMY_KANBAN[title];
    setCards(result);
  };
  return (
    <DivColsWrapper>
      <KanbanColumnTitle title={title} />
      <Cards items={cards} />
      <CardBtnUI kanbanState={title} />
    </DivColsWrapper>
  );
};
export default KanbanColumn;

const DivColsWrapper = styled.div``;
