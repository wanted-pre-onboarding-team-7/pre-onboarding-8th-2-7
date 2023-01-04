import styled from 'styled-components';

const IssueItem = ({ data }) => {
  return (
    <LiIssueItem>
      <StrongTitle>{data.title}</StrongTitle>
      <p>{data.manager}</p>
      <p>{data.content}</p>
      <DivDataId># {data.id}</DivDataId>
    </LiIssueItem>
  );
};

const LiIssueItem = styled.li`
  /* border: 1px solid gray; */
  min-width: 280px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  &:hover {
    background-color: #f6f8fa;
    cursor: pointer;
  }
`;

const StrongTitle = styled.strong`
  display: inline-block;
  margin-bottom: 7px;
  font-weight: 400;
`;

const DivDataId = styled.div`
  text-align: right;
`;

export default IssueItem;
