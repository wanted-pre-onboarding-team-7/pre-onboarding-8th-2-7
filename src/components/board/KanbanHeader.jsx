import React, { useRef } from 'react';
import styled from 'styled-components';
import { getCardsByStore, setCardsByStore } from '../../store/cardStore';

const KanBanHeader = ({ setCards }) => {
  const cards = getCardsByStore('kanbanBoard');
  const id = useRef(0);
  const clickCreateButton = () => {
    id.current += 1;
    const addedTodos = [
      ...cards.todos,
      {
        id: id.current,
        title: '할일을 입력하세요',
        manager: '',
        status: 'todo',
        content: '카드를 클릭해 할 일을 입력하세요',
        dueDate: '',
      },
    ];
    const result = { ...cards, todos: addedTodos };
    setCards(result);
    setCardsByStore('kanbanBoard', result);
  };

  return (
    <DivContainer>
      <SpanHeader>KanBan Board</SpanHeader>
      <BtnCreateCardButton onClick={clickCreateButton}>
        새로 만들기
      </BtnCreateCardButton>
    </DivContainer>
  );
};

export default KanBanHeader;

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  padding: 20px;
  margin: 10px;
  border-bottom: 5px solid black;
`;
const SpanHeader = styled.span`
  margin-left: 30px;
  color: black;
  font-size: 40px;
  font-weight: bold;
`;
const BtnCreateCardButton = styled.button`
  width: 100px;
  height: 40px;
  position: absolute;
  right: 40px;
  border: none;
  border-radius: 5px;
  background-color: #b2b2b2;
  cursor: pointer;
  &: hover {
    background-color: #929aab;
  }
`;
