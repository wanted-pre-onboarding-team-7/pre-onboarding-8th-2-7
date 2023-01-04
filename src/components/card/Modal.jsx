import React, { useRef } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../../hooks/useOutSidClick';

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);

  return (
    <DivOverLay>
      <DivModalWrap ref={modalRef}>
        <BtnCloseButton onClick={handleClose}>닫기</BtnCloseButton>
      </DivModalWrap>
    </DivOverLay>
  );
};

export default Modal;

const DivOverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const DivModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BtnCloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;
