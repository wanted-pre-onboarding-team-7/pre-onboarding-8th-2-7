import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Cards = () => {
  return (
    <DivCardWrapper>
      <Card />
      <Card />
      <Card />
    </DivCardWrapper>
  );
};
export default Cards;

const DivCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
