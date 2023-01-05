import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const IssueItem = ({ data, phase }) => {
  const location = useLocation();

  const clickDeleteIssue = () => {
    axios.delete(`http://localhost:3001/${phase}/${data.id}`);
    window.location.reload();
  };
  {
    /* <Link to="/modal" state={{ background: location }}>
          <button>새로 만들기</button> <Outlet />
        </Link> */
  }
  return (
    <Link to="/modal" state={{ background: location }}>
      <LiIssueItem>
        <ButtonDelete onClick={clickDeleteIssue}>삭제</ButtonDelete>
        <StrongTitle>{data.title}</StrongTitle>
        <p>{data.manager}</p>
        <p>{data.content}</p>
        <DivDataId># {data.id}</DivDataId>
      </LiIssueItem>
    </Link>
  );
};

const LiIssueItem = styled.li`
  /* border: 1px solid gray; */
  position: relative;
  min-width: 280px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  &:hover {
    background-color: #dfe1e3b6;
    cursor: pointer;
  }
`;

const ButtonDelete = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 10px;
  right: 8px;
  color: #ffffff;
  font-weight: 400;
  border: none;
  background-color: transparent;
  cursor: pointer;
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
