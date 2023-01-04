import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { clickedKanbanState, isModalState } from '../../store/atom';
import { KANBAN_STATE } from '../../utils/constant';

const CreateCard = ({ children, kanbanState }) => {
  const setclickedKanbanState = useSetRecoilState(clickedKanbanState);
  const setIsModalState = useSetRecoilState(isModalState);
  const clickBtn = () => {
    const clickedKanbanState = kanbanState || KANBAN_STATE.TODOS;
    setclickedKanbanState(clickedKanbanState);
    setIsModalState(true);
  };
  return <DivWrapper onClick={clickBtn}>{children}</DivWrapper>;
};
export default CreateCard;

const DivWrapper = styled.div`
  cursor: pointer;
`;
