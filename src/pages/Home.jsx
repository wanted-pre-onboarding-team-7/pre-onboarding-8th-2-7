import React from 'react';
import KanBanHeader from '../components/board/KanbanHeader.jsx';
import CardList from '../components/board/CardList.jsx';
import Modal from '../components/card/Modal.jsx';
import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../theme.js';
import { getCardsByStore } from '../store/cardStore.js';

const Home = () => {
  // localStorage.clear();
  const [cards, setCards] = useState(getCardsByStore('kanbanBoard') || {});
  const [isOpen, setIsOpen] = useState(false);

  // modal
  const clickCard = () => {
    setIsOpen(true);
  };

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
          clickCard={clickCard}
        />
        <CardList
          type={'진행 중'}
          status={'progress'}
          stateColor={theme.progressColor}
          data={cards.progress}
          clickCard={clickCard}
        />
        <CardList
          type={'완료'}
          status={'done'}
          stateColor={theme.doneColor}
          data={cards.done}
          clickCard={clickCard}
        />
      </DivCardListContainer>
      {isOpen && (
        <Modal
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Home;

const DivCardListContainer = styled.div`
  display: flex;
`;
