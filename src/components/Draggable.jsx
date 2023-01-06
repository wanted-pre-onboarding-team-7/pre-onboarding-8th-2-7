import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useUpdateCards } from '../hooks/useUpdateCards';
import { dragOverState, dragState } from '../store/atom';

const Draggable = ({ id, kanbanState, children }) => {
  const [dragItem, setDragItem] = useRecoilState(dragState);
  const [dragOverItem, setDragOverItem] = useRecoilState(dragOverState);

  const { updateSameStateCardsById, updateDiffStateCardsById } =
    useUpdateCards();

  const dragStart = (e) => {
    e.stopPropagation();
    setDragItem({ state: kanbanState, id: e.target.id });
  };

  const dragEnter = (enterState, e) => {
    e.stopPropagation();
    e.preventDefault();
    setDragOverItem({ state: enterState, id: e.currentTarget.id });
  };

  const drop = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    return dragItem.state === dragOverItem.state
      ? updateSameStateCardsById(dragItem.state, dragItem.id)
      : updateDiffStateCardsById(
          dragItem.state,
          dragItem.id,
          dragOverItem.state,
          dragOverItem.id,
        );
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
