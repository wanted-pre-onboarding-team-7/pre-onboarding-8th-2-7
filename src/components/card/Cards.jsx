import React, { useRef } from 'react';
import styled from 'styled-components';
import Draggable from '../Draggable';
import Card from './Card';

const Cards = ({ items, kanbanState }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  return (
    <DivCardWrapper>
      {items.map((card) => (
        <Draggable
          id={card.id}
          key={card.id}
          kanbanState={kanbanState}
          dragItem={dragItem}
          dragOverItem={dragOverItem}
        >
          <Card item={card} kanbanState={kanbanState} />
        </Draggable>
      ))}
    </DivCardWrapper>
  );
};
export default Cards;

const DivCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
