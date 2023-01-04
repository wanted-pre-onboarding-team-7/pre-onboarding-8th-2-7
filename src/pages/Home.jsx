import React from 'react';
import KanBanHeader from '../components/board/KanbanHeader.jsx';
import CardList from '../components/board/CardList.jsx';
import Modal from '../components/card/Modal.jsx';
import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../theme.js';
import { getCardsByStore, setCardsByStore } from '../store/cardStore.js';
import { useRef } from 'react';
import { useEffect } from 'react';

const Home = () => {
  // localStorage.clear();
  const [cards, setCards] = useState(getCardsByStore('kanbanBoard') || []);
  const [isOpen, setIsOpen] = useState(false);
  const nextId = useRef(0);

  const clickCreateButton = () => {
    nextId.current += 1;
    setCards((card) => [
      ...card,
      {
        id: nextId.current,
        title: '할일을 입력하세요',
        manager: '',
        status: 'todo',
        content: '카드를 클릭해 할 일을 입력하세요',
        dueDate: '',
      },
    ]);
  };

  // 1. 왜 useState가 비동기 처리처럼 실행될까?
  // 2. 왜 useRef 안먹지?
  useEffect(() => {
    setCardsByStore('kanbanBoard', cards);
  }, [clickCreateButton]);

  const clickDeleteButton = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  // modal
  const clickCard = () => {
    setIsOpen(true);
  };

  return (
    <>
      <KanBanHeader clickCreateButton={clickCreateButton} />
      <DivCardListContainer>
        <CardList
          type={'할 일'}
          stateColor={theme.todosColor}
          data={cards.filter((card) => card.status === 'todo')}
          clickDeleteButton={clickDeleteButton}
          clickCard={clickCard}
        />
        <CardList
          type={'진행 중'}
          stateColor={theme.progressColor}
          data={cards.filter((card) => card.status === 'progress')}
          clickDeleteButton={clickDeleteButton}
          clickCard={clickCard}
        />
        <CardList
          type={'완료'}
          stateColor={theme.doneColor}
          data={cards.filter((card) => card.status === 'done')}
          clickDeleteButton={clickDeleteButton}
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
