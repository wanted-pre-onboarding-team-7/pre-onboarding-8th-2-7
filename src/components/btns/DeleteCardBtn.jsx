import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { kanbanCardsState } from '../../store/atom';

const DeleteCardBtn = ({ id, kanbanState }) => {
  const [cards, setCards] = useRecoilState(kanbanCardsState[kanbanState]);

  const clickDelBtn = (e) => {
    const clickedId = e.target.id;
    const prevCards = [...cards];
    const newCards = prevCards.filter(
      (card) => String(card.id) !== String(clickedId),
    );
    setCards(newCards);
  };
  return (
    <ButtonDelete id={id} onClick={clickDelBtn}>
      🗑️
    </ButtonDelete>
  );
};

export default DeleteCardBtn;

const ButtonDelete = styled.button`
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
`;
