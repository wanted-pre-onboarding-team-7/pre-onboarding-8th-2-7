import React from 'react';
import KanBanHeader from '../components/board/KanbanHeader.jsx';
import CardList from '../components/board/CardList.jsx';
import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../theme.js';
import { getCardsByStore, setCardsByStore } from '../store/cardStore.js';

const Home = () => {
  const [cards, setCards] = useState([getCardsByStore('kanbanBoard')]);
  console.log(cards);

  return (
    <>
      <KanBanHeader />
      <DivCardListContainer>
        <CardList
          type={'할 일'}
          stateColor={theme.todosColor}
          data={cards.filter((card) => card.status === 'todo')}
        />
        <CardList
          type={'진행 중'}
          stateColor={theme.progressColor}
          data={cards.filter((card) => card.status === 'progress')}
        />
        <CardList
          type={'완료'}
          stateColor={theme.doneColor}
          data={cards.filter((card) => card.status === 'done')}
        />
      </DivCardListContainer>
    </>
  );
};

export default Home;

const DivCardListContainer = styled.div`
  display: flex;
`;
