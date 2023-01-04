import React from 'react';
import KanBanHeader from '../components/board/KanbanHeader.jsx';
import CardList from '../components/board/CardList.jsx';
import Modal from '../components/card/Modal.jsx';
import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../theme.js';
import { getCardsByStore, setCardsByStore } from '../store/cardStore.js';
import { useRef } from 'react';

const Home = () => {
  // localStorage.clear();
  const [cards, setCards] = useState(getCardsByStore('kanbanBoard') || {});
  const [todoList, setTodoList] = useState(cards.todos || []);
  const [isOpen, setIsOpen] = useState(false);
  const nextId = useRef(0);

  const clickCreateButton = () => {
    nextId.current += 1;
    setTodoList([
      ...todoList,
      {
        id: nextId.current,
        title: '할일을 입력하세요',
        manager: '',
        status: 'todo',
        content: '카드를 클릭해 할 일을 입력하세요',
        dueDate: '',
      },
    ]);
    setCards({ ...cards, todos: todoList });
    setCardsByStore('kanbanBoard', cards);
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
