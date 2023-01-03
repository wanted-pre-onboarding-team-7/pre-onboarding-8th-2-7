import React from 'react';
import styled from 'styled-components';
import KanbanBoard from '../components/KanbanBoard';
import KanbanHeader from '../components/KanbanHeader';
import { theme } from '../theme';

const Home = () => {
  return (
    <DivWrapper bgColor={theme.background}>
      <KanbanHeader>Team 7 Kanban Board</KanbanHeader>
      <KanbanBoard />
    </DivWrapper>
  );
};
export default Home;

const DivWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
