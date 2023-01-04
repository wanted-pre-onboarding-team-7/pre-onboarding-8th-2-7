import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import KanbanBoard from '../components/kanban/KanbanBoard';
import KanbanHeader from '../components/kanban/KanbanHeader';
import Modal from '../components/modal/Modal';
import { modalState } from '../store/atom';
import { theme } from '../theme';
import { isObjectHasKey } from '../utils/utilFn';

const Home = () => {
  const modalData = useRecoilValue(modalState);
  return (
    <DivWrapper>
      <DivKanbanWrapper bgColor={theme.background}>
        <KanbanHeader>Team 7 Kanban Board</KanbanHeader>
        <KanbanBoard />
      </DivKanbanWrapper>
      {isObjectHasKey(modalData) && <Modal />}
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
