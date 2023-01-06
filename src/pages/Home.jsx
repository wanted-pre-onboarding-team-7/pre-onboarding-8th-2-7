import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import KanbanBoard from '../components/kanban/KanbanBoard';
import KanbanHeader from '../components/kanban/KanbanHeader';
import Modal from '../components/modal/Modal';
import {
  doneCardsState,
  modalState,
  progressCardsState,
  todoCardsState,
} from '../store/atom';
import { theme } from '../theme';
import { isObjectHasKey } from '../utils/utilFn';

const Home = () => {
  const modalData = useRecoilValue(modalState);
  const todos = useRecoilValue(todoCardsState);
  const progress = useRecoilValue(progressCardsState);
  const done = useRecoilValue(doneCardsState);

  const [isKanbanChanged, setIsKanbanChanged] = useState(false);
  useEffect(() => {
    const tick = () => {
      return setTimeout(() => setIsKanbanChanged(false), 500);
    };
    setIsKanbanChanged(true);
    tick();
    return () => clearTimeout(tick);
  }, [todos, progress, done]);

  return (
    <DivWrapper>
      <DivKanbanWrapper bgColor={theme.background}>
        <KanbanHeader>Team 7 Kanban Board</KanbanHeader>
        <KanbanBoard />
      </DivKanbanWrapper>
      {isObjectHasKey(modalData) && <Modal />}
      {isKanbanChanged && <DivLoading>로딩중</DivLoading>}
    </DivWrapper>
  );
};
export default Home;

const DivWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const DivKanbanWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const DivLoading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
