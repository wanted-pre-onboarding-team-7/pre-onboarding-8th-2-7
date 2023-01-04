import PhaseList from './PhaseList';
import { kanbanBoard } from '../utils/dummyData';
import styled from 'styled-components';

const Container = () => {
  console.log(kanbanBoard);
  return (
    <Article>
      <Nav>
        <button>새로 만들기</button>
      </Nav>
      <DivWrapper>
        <PhaseList title="할 일" issue={kanbanBoard.done} />
        <PhaseList title="진행 중" issue={kanbanBoard.progress} />
        <PhaseList title="완료" issue={kanbanBoard.todos} />
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

export default Container;
