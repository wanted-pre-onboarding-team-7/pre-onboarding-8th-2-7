import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { issueListState } from '../store/atoms';
import { KANBAN_STATE, BOARD_TITLE } from '../utils/constant';
import Card from './Card';

const Board = ({ status, clickOpenModal }) => {
  const datas = useRecoilValue(issueListState);

  return (
    <DivWrapper>
      <DivFlexWrapper>
        <DivCircle status={status} />
        <BoardTitle>{BOARD_TITLE[status]}</BoardTitle>
      </DivFlexWrapper>
      {datas[status].map((issue, idx) => (
        <Card
          key={idx}
          title={issue.title}
          content={issue.content}
          manager={issue.manager}
          id={issue.id}
          status={status}
          clickOpenModal={clickOpenModal}
        />
      ))}
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  width: 30%;
  height: min-content;
  min-height: 430px;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.bgColor};
  border-radius: 12px;
`;
const DivFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const DivCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.status === KANBAN_STATE.TODOS
      ? props.theme.todosColor
      : props.status === KANBAN_STATE.DONE
      ? props.theme.doneColor
      : props.theme.processColor};
`;

export default Board;
