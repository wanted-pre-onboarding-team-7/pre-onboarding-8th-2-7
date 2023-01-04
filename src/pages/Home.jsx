import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import Modal from '../components/Modal';
import { KANBAN_STATE } from '../utils/constant';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issueId, setIssueId] = useState('');
  const [status, setStatus] = useState('');
  const clickOpenModal = (mode, id, status) => {
    setIsModalOpen((prev) => !prev);
    setIssueId(mode === 'read' ? id : '');
    setStatus(mode === 'read' ? status : '');
  };

  return (
    <>
      <DivCreatebtn onClick={clickOpenModal}>새로 만들기</DivCreatebtn>
      {isModalOpen && (
        <>
          <DivOverlay onClick={clickOpenModal}></DivOverlay>
          <Modal
            clickOpenModal={clickOpenModal}
            issueId={issueId}
            status={status}
          />
        </>
      )}
      <DivWrapper>
        {Object.values(KANBAN_STATE).map((state, idx) => (
          <Board key={idx} status={state} clickOpenModal={clickOpenModal} />
        ))}
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
  position: relative;
  float: right;
  margin: 30px 80px 0 0;
  background-color: ${(props) => props.theme.btnColor};
  cursor: pointer;
`;
const DivWrapper = styled.div`
  width: 100vw;
  height: 100%;
  padding: 0 30px;
  padding-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const DivOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Home;
