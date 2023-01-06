import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useUpdateCards } from '../../hooks/useUpdateCards';
import { dragColState, dragState, kanbanCardsState } from '../../store/atom';

import CardBtnUI from '../btns/CardBtnUI';
import Cards from '../card/Cards';
import KanbanColumnTitle from './KanbanColumnTitle';

const KanbanColumn = ({ title }) => {
  const [cards, setCards] = useRecoilState(kanbanCardsState[title]);
  const [dragItem, setDragItem] = useRecoilState(dragState);
  const [dragColItem, setDragColItem] = useRecoilState(dragColState);

  const { updateSameStateCardsById, updateDiffStateCardsById } =
    useUpdateCards();

  const dragStart = (e) => {
    e.stopPropagation();
    console.log('dragStart', e.target);

    // setDragItem({ state: kanbanState, id: e.target.id });
  };

  const dragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // console.log('dragEnter1', e.target.id);
    // if (cards.length === 0) {
    //   console.log('dragEnter2', title);
    //   setDragColItem({ state: title, id: -1 });
    // }
    console.log('drop', e.target);
    if (cards.length === 0) {
      console.log('drop', e.target);
      updateDiffStateCardsById(dragItem.state, dragItem.id, title, -1);
    }
  };

  const drop = async (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <DivColsWrapper
      draggable
      // onDragStart={dragStart}
      onDragEnter={dragEnter}
      onDragEnd={drop}
    >
      <KanbanColumnTitle title={title} />
      <Cards items={cards} kanbanState={title} />
      <CardBtnUI kanbanState={title} />
    </DivColsWrapper>
  );
};
export default KanbanColumn;

const DivColsWrapper = styled.div``;
