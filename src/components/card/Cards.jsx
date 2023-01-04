import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Cards = ({ items }) => {
  return (
    <DivCardWrapper>
      {items.map((card) => (
        <Card item={card} key={card.id} />
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
