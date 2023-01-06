import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Card, updateLocalStorgeId } from '../../class/card';
import {
  kanbanCardsState,
  modalCardSelector,
  modalState,
} from '../../store/atom';
import { theme } from '../../theme';
import { MODAL_ROWS } from '../../utils/constant';
import ModalContent from '../inputs/ModalContent';
import ModalDueDateInput from '../inputs/ModalDueDateInput';
import ModalManagerInput from '../inputs/ModalManagerInput';
import ModalStateInput from '../inputs/ModalStateInput';
import ModalTitle from '../inputs/ModalTitle';
import ModalRow from './ModalRow';

const Modal = () => {
  const resetModal = useResetRecoilState(modalState);
  const modalData = useRecoilValue(modalCardSelector);
  const card = modalData.isUpdate
    ? Card.createCard(modalData)
    : Card.createNewCard(modalData);

  // TODO: card.state 업데이트되지 않는 오류 발생!
  const [cards, setCards] = useRecoilState(kanbanCardsState[card.state]);

  const clickOverlay = (e) => {
    if (e.target.id === 'overlay') {
      return resetModal();
    }
  };

  const clickSaveBtn = (event) => {
    event.preventDefault();
    if (!card.isNoEmpty()) {
      return alert('모든 내용을 입력해주세요');
    }

    setCards(card.getNewCards([...cards]));
    updateLocalStorgeId(card.id);
    resetModal();
  };
  const clickCancelBtn = (event) => {
    event.preventDefault();
    if (window.confirm('변경 사항을 취소하시겠습니까?')) {
      resetModal();
    }
  };

  return (
    <DivOverlay onClick={clickOverlay} id="overlay">
      <Form bgColor={theme.background} shadowColor={theme.shadow}>
        <ModalTitle card={card} />
        <ModalRow row={MODAL_ROWS.manager}>
          <ModalManagerInput card={card} />
        </ModalRow>
        <ModalRow row={MODAL_ROWS.dueDate}>
          <ModalDueDateInput card={card} />
        </ModalRow>
        <ModalRow row={MODAL_ROWS.state}>
          <ModalStateInput card={card} />
        </ModalRow>
        <ModalContent card={card} />
        <DivBtn>
          <Button onClick={clickCancelBtn}>취소</Button>
          <Button onClick={clickSaveBtn}>저장</Button>
        </DivBtn>
      </Form>

      {/* Dropdown selector */}
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
const Form = styled.form`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 10px rgba(0, 0, 0, 0.3);
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 20px;
  border-radius: 10px;
`;
