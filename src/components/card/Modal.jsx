import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../../hooks/useOutSidClick';
import { users } from '../../utils/dummyData';
import { getCardsByStore, setCardsByStore } from '../../store/cardStore';

const Modal = ({
  title,
  content,
  onClose,
  setCards,
  status,
  id,
  setIsOpen,
  manager,
  dueDate,
}) => {
  const statusList = ['todos', 'progress', 'done'];
  const [titleValue, setTitleValue] = useState(title);
  const [contentValue, setContentValue] = useState(content);
  const [managerValue, setManagerValue] = useState(manager);
  const [dateValue, setDateValue] = useState(dueDate);
  const [statusValue, setStatusValue] = useState(status);
  const modalRef = useRef(null);
  const cards = getCardsByStore('kanbanBoard');
  const clickCloseButton = () => {
    onClose?.();
  };

  const clickSaveButton = (id) => {
    const result = cards[status].map((card, index) =>
      index === id
        ? {
            id: id || '',
            title: titleValue || '',
            manager: managerValue || '',
            content: contentValue || '',
            dueDate: dateValue || '',
          }
        : card,
    );
    console.log(result);
    setCards({ ...cards, [status]: result });
    setCardsByStore('kanbanBoard', { ...cards, [status]: result });
    setIsOpen(false);
  };
  useOutSideClick(modalRef, clickCloseButton);

  const changeTitleValue = (e) => {
    const { value } = e.target;
    setTitleValue(value);
  };

  const changeManagerValue = (e) => {
    const { value } = e.target;
    setManagerValue(value);
  };

  const changeDateValue = (e) => {
    const { value } = e.target;
    setDateValue(value);
  };

  const changeContentValue = (e) => {
    const { value } = e.target;
    setContentValue(value);
  };

  const changeStatusValue = (e) => {
    const { value } = e.target;
    setStatusValue(value);
  };

  return (
    <DivOverLay>
      <DivModalWrap ref={modalRef}>
        제목:
        <input
          key={id}
          type="text"
          value={titleValue}
          onChange={changeTitleValue}
        />
        담당자:
        <select
          label="담당자"
          value={managerValue}
          onChange={changeManagerValue}
        >
          {users.map((user) => (
            <option value={user}>{user}</option>
          ))}
        </select>
        마감일: <input type="datetime-local" onChange={changeDateValue} />
        상태:{' '}
        <select label="상태" onChange={changeStatusValue}>
          {statusList.map((status) => (
            <option value={status}>{status}</option>
          ))}
        </select>
        내용:{' '}
        <input type="text" value={contentValue} onChange={changeContentValue} />
        <BtnCloseButton onClick={clickCloseButton}>취소</BtnCloseButton>
        <BtnCloseButton onClick={() => clickSaveButton(id)}>
          저장
        </BtnCloseButton>
      </DivModalWrap>
    </DivOverLay>
  );
};

export default Modal;

const DivOverLay = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const DivModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: fit-content;
  padding: 30px 130px;
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
