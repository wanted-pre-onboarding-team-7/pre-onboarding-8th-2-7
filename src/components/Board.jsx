import styled from 'styled-components';
import { KANBAN_STATE } from '../utils/constant';

const Board = ({ status }) => {
  return (
    <DivWrapper>
      <DivFlexWrapper>
        <DivCircle status={status} />
        <BoardTitle>{status}</BoardTitle>
      </DivFlexWrapper>
      <IssueCard></IssueCard>
      <IssueCard></IssueCard>
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
const IssueCard = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 10px;
  cursor: pointer;
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
