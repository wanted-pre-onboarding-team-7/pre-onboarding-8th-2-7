import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { clickedKanbanState, isModalState } from '../../store/atom';
import { theme } from '../../theme';

const Modal = () => {
  const kanbanState = useRecoilValue(clickedKanbanState);
  const setIsModalState = useSetRecoilState(isModalState);
  const clickOverlay = (e) => {
    if (e.target.id === 'overlay') {
      return setIsModalState(false);
    }
  };
  return (
    <DivOverlay onClick={clickOverlay} id="overlay">
      <DivWrapper
        bgColor={theme.background}
        shadowColor={theme.shadow}
      ></DivWrapper>
    </DivOverlay>
  );
};
export default Modal;

const DivOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DivWrapper = styled.div`
  width: 70%;
  height: 80%;
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 10px rgba(0, 0, 0, 0.3);
`;
