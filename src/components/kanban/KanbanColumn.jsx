import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getCardsByStateQuery, kanbanCardsState } from '../../store/atom';
import { DUMMY_KANBAN } from '../../utils/dummyData';
import {
  getLocalStorageKanban,
  isKanbanEmpty,
  postLocalStorageKanban,
} from '../../utils/localStorgeFn';
import CardBtnUI from '../btns/CardBtnUI';
import Cards from '../card/Cards';
import KanbanColumnTitle from './KanbanColumnTitle';

const KanbanColumn = ({ title }) => {
  const [cards, setCards] = useRecoilState(kanbanCardsState[title]); // const [cards, setCards] = useState(DUMMY_KANBAN[title]);
  // useEffect(() => {
  //   loadCards();
  // }, []);
  // const loadCards = async () => {
  //   if (await isKanbanEmpty()) {
  //     await postLocalStorageKanban(title, DUMMY_KANBAN[title]);
  //   }
  //   const cards = await getLocalStorageKanban(title);
  //   setCards(cards);
  // };
  return (
    <DivColsWrapper>
      <KanbanColumnTitle title={title} />
      <Cards items={cards} kanbanState={title} />
      <CardBtnUI kanbanState={title} />
    </DivColsWrapper>
  );
};
export default KanbanColumn;

const DivColsWrapper = styled.div``;
