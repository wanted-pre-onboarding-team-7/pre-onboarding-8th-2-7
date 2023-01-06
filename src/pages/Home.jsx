import React, { useRef } from 'react';
import { KANBAN_STATE } from '../utils/constant';
import styled from 'styled-components';
import KanvanList from '../components/KanvanList';
import Modal from '../components/Modal';
import { useRecoilState } from 'recoil';
import { toggleModal } from '../store';

const Home = () => {
  const [toggle, setToggle] = useRecoilState(toggleModal);
  const handleClose = (e) => {
    setToggle(false);
  };

  return (
    <>
      <DivPageLayout>
        <DivInnerLayout>
          <KanvanList name="할 일" stateName={KANBAN_STATE.TODOS} />
          <KanvanList name="진행중" stateName={KANBAN_STATE.PROGRESS} />
          <KanvanList name="완료" stateName={KANBAN_STATE.DONE} />
        </DivInnerLayout>
      </DivPageLayout>
      {toggle && <Modal handleClose={handleClose} />}
    </>
  );
};

export default Home;

const DivPageLayout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const DivInnerLayout = styled.div`
  width: 80%;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(3, 360px);
  z-index: 0;
`;
