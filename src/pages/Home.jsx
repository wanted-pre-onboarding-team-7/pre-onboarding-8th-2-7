import React from 'react';
import KanBanHeader from '../components/board/KanbanHeader.jsx';
import CardList from '../components/board/CardList.jsx';
import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../theme.js';
import { getCardsByStore } from '../store/cardStore.js';

const Home = () => {
  // localStorage.clear();
  const [cards, setCards] = useState(getCardsByStore('kanbanBoard') || {});

  return (
    <>
      <KanBanHeader setCards={setCards} />
      <DivCardListContainer>
        <CardList
          type={'할 일'}
          status={'todos'}
          stateColor={theme.todosColor}
          data={cards.todos}
          setCards={setCards}
        />
        <CardList
          type={'진행 중'}
          status={'progress'}
          stateColor={theme.progressColor}
          data={cards.progress}
        />
        <CardList
          type={'완료'}
          status={'done'}
          stateColor={theme.doneColor}
          data={cards.done}
        />
      </DivCardListContainer>
    </>
  );
};

export default Home;

const DivCardListContainer = styled.div`
  display: flex;
`;
