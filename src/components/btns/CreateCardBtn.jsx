import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState } from '../../store/atom';
import { KANBAN_STATE } from '../../utils/constant';

const CreateCard = ({ children, kanbanState }) => {
  const setmodalState = useSetRecoilState(modalState);
  const clickBtn = () => {
    const clickedKanbanState = kanbanState || KANBAN_STATE.TODOS;
    setmodalState({ state: clickedKanbanState });
  };
  return <DivWrapper onClick={clickBtn}>{children}</DivWrapper>;
};
export default CreateCard;

const DivWrapper = styled.div`
  cursor: pointer;
`;
