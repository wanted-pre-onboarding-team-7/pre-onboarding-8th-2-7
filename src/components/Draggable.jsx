import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { dragOverState, dragState, kanbanCardsState } from '../store/atom';
import { KANBAN_STATE } from '../utils/constant';
import { createCard, deleteCard, getCardById } from '../utils/utilFn';

const Draggable = ({ id, kanbanState, children }) => {
  const [dragItem, setDragItem] = useRecoilState(dragState);
  const [dragOverItem, setDragOverItem] = useRecoilState(dragOverState);

  const [todos, setTodos] = useRecoilState(
    kanbanCardsState[KANBAN_STATE.TODOS],
  );
  const [progress, setProgress] = useRecoilState(
    kanbanCardsState[KANBAN_STATE.PROGRESS],
  );
  const [done, setDone] = useRecoilState(kanbanCardsState[KANBAN_STATE.DONE]);

  const cardsArr = {
    todos: [...todos],
    progress: [...progress],
    done: [...done],
  };
  const setCardsArr = {
    todos: setTodos,
    progress: setProgress,
    done: setDone,
  };
  const dragStart = (e) => {
    e.stopPropagation();
    setDragItem({ state: kanbanState, id: e.target.id });
  };

  const dragEnter = (enterState, e) => {
    e.stopPropagation();
    e.preventDefault();
    setDragOverItem({ state: enterState, id: e.currentTarget.id });
  };

  const updateSameState = () => {
    const selectedCard = getCardById(cardsArr[dragItem.state], dragItem.id);
    const deletedArr = deleteCard(cardsArr[dragItem.state], dragItem.id);
    const newDragCards = createCard(deletedArr, selectedCard);

    setCardsArr[dragItem.state](newDragCards);
  };

  const updateDiffState = () => {
    const selectedCard = getCardById(cardsArr[dragItem.state], dragItem.id);
    const newDragCards = deleteCard(cardsArr[dragItem.state], dragItem.id);
    const newDragOverCards = createCard(
      cardsArr[dragOverItem.state],
      selectedCard,
    );

    setCardsArr[dragItem.state](newDragCards);
    setCardsArr[dragOverItem.state](newDragOverCards);
  };

  const drop = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (dragItem.state === dragOverItem.state) {
      return updateSameState();
    }
    return updateDiffState();
  };

  return (
    <DivDragabble
      draggable
      onDragStart={dragStart}
      onDragOver={dragEnter.bind(this, kanbanState)}
      onDragEnd={drop}
      id={id}
    >
      {children}
    </DivDragabble>
  );
};

export default Draggable;

const DivDragabble = styled.div``;
