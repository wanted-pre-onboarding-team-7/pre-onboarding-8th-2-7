import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState } from '../../store/atom';
import { KANBAN_STATE } from '../../utils/constant';

const CreateCard = ({ children, kanbanState }) => {
  const setmodalState = useSetRecoilState(modalState);
  let timer;
  const clickBtn = () => {
    if (timer) {
      setTimeout(timer);
    }
    timer = setTimeout(() => {
      const clickedKanbanState = kanbanState || KANBAN_STATE.TODOS;
      setmodalState({ state: clickedKanbanState });
    }, [500]);
  };
  return <DivWrapper onClick={clickBtn}>{children}</DivWrapper>;
};
export default CreateCard;

const DivWrapper = styled.div`
  cursor: pointer;
`;
