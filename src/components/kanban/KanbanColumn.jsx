import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DUMMY_KANBAN } from '../../utils/dummyData';
import {
  getLocalStorageKanban,
  isKanbanEmpty,
  saveLocalStorageKanban,
} from '../../utils/localStorgeFn';
import CardBtnUI from '../btns/CardBtnUI';
import Cards from '../card/Cards';
import KanbanColumnTitle from './KanbanColumnTitle';

const KanbanColumn = ({ title }) => {
  const [cards, setCards] = useState(DUMMY_KANBAN[title]);
  useEffect(() => {
    loadCards();
  }, []);
  const loadCards = async () => {
    if (await isKanbanEmpty()) {
      await saveLocalStorageKanban(title, DUMMY_KANBAN[title]);
    }
    const cards = await getLocalStorageKanban(title);
    setCards(cards);
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
