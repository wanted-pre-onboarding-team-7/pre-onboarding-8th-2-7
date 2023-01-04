import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <LiIssueItem>
      <strong>제목</strong>
      <p>담당자</p>
      <p>내용</p>
      <p>고유번호</p>
    </LiIssueItem>
  );
};

const Article = styled.article`
  width: 900px;
  margin: 0 auto;
  border: 1px solid blue;
`;

const Nav = styled.div`
  height: 30px;
  text-align: right;
`;

const DivWrapper = styled.div`
  display: flex;
  border: 1px solid pink;
`;

const SectionPhase = styled.section`
  margin: 10px;
  /* border: 1px solid black; */
`;

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

export default Home;
