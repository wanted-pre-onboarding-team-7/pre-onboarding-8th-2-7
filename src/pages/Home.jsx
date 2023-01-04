import React from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import { KANBAN_STATE } from '../utils/constant';

const Home = () => {
  return (
    <>
      <DivCreatebtn>새로 만들기</DivCreatebtn>
      <DivWrapper>
        <Board status={KANBAN_STATE.TODOS}></Board>
        <Board status={KANBAN_STATE.PROGRESS}></Board>
        <Board status={KANBAN_STATE.DONE}></Board>
      </DivWrapper>
    </>
  );
};
const DivCreatebtn = styled.div`
  width: 100px;
  height: 30px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  float: right;
  margin: 30px 80px 0 0;
  background-color: ${(props) => props.theme.btnColor};
`;

const DivWrapper = styled.div`
  width: 100vw;
  height: 100%;
  padding: 0 30px;
  padding-top: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export default Home;
