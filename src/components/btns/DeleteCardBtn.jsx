import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { kanbanCardsState } from '../../store/atom';
import { deleteCard } from '../../utils/utilFn';

const DeleteCardBtn = ({ id, kanbanState }) => {
  const [cards, setCards] = useRecoilState(kanbanCardsState[kanbanState]);

  const clickDelBtn = (e) => {
    const newCards = deleteCard([...cards], e.target.id);
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
