import React from 'react';
import KanBanHeader from '../components/board/KanbanHeader.jsx';
import CardList from '../components/board/CardList.jsx';
import styled from 'styled-components';
import { useState } from 'react';
import { kanbanBoard } from '../utils/dummyData.js';
import { theme } from '../theme.js';

const Home = () => {
  const [todoList, setTodoList] = useState(kanbanBoard.todos);
  const [progressList, setProgressList] = useState(kanbanBoard.progress);
  const [doneList, setDoneList] = useState(kanbanBoard.done);

  return (
    <>
      <KanBanHeader />
      <DivCardListContainer>
        <CardList
          type={'할 일'}
          stateColor={theme.todosColor}
          data={todoList}
        />
        <CardList
          type={'진행 중'}
          stateColor={theme.progressColor}
          data={progressList}
        />
        <CardList type={'완료'} stateColor={theme.doneColor} data={doneList} />
      </DivCardListContainer>
    </>
  );
};

export default Home;

const DivCardListContainer = styled.div`
  display: flex;
`;
