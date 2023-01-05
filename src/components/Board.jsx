import { useEffect, useState } from 'react';
import axios from 'axios';
import PhaseList from './PhaseList';
import { kanbanBoard } from '../utils/dummyData';
import styled from 'styled-components';

const Board = () => {
  //   console.log('kanbanBoard', kanbanBoard);
  const [todos, setTodos] = useState([]);
  const [progress, setProgress] = useState([]);
  const [done, setDone] = useState([]);

  const getData = async (phase, state) => {
    const response = await axios.get(`http://localhost:3001/${phase}`);
    state(response.data);
  };
  useEffect(() => {
    getData('todos', setTodos);
    getData('progress', setProgress);
    getData('done', setDone);
  }, []);

  return (
    <Article>
      <Nav>
        <button>새로 만들기</button>
      </Nav>
      <DivWrapper>
        <PhaseList title="할 일" issue={todos} phase="todos" />
        <PhaseList title="진행 중" issue={progress} phase="progress" />
        <PhaseList title="완료" issue={done} phase="done" />
      </DivWrapper>
    </Article>
  );
};

const Article = styled.article`
  width: 900px;
  margin: 0 auto;
  padding-top: 20px;
`;

const Nav = styled.div`
  height: 30px;
  text-align: right;
`;

const DivWrapper = styled.div`
  display: flex;
  /* border: 1px solid pink; */
`;

export default Board;
