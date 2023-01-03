import React from 'react';
import styled from 'styled-components';
import KanvanList from '../components/KanvanList';
import { kanbanBoard } from '../utils/dummyData';

const Home = () => {
  return (
    <DivPageLayout>
      <DivInnerLayout>
        <KanvanList name="할 일" data={kanbanBoard.todos} />
        <KanvanList name="진행중" data={kanbanBoard.progress} />
        <KanvanList name="완료" data={kanbanBoard.done} />
      </DivInnerLayout>
    </DivPageLayout>
  );
};

export default Home;

const DivPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const DivInnerLayout = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
