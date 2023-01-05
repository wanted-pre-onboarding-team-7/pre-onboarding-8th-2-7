import { useEffect, useRef, useState } from 'react';

import Charge from './Charge';
import React from 'react';
import styled from 'styled-components';
import { users } from '../../../utils/dummyData';

const Modal = ({
  modalKanbanItem,
  modalKanbanStatus,
  kanbanKeys,
  cancelKanban,
  editNewKanbanItem,
  addNewKanbanItem,
}) => {
  const { id: beforeId, title, content, dueDate, manager } = modalKanbanItem;
  const titleRef = useRef();
  const chargeRef = useRef();
  const dueDateRef = useRef();
  const stateRef = useRef();
  const contentRef = useRef();

  const [searchArr, setSearchArr] = useState([]);

  useEffect(() => {
    titleRef.current.value = title || '';
    dueDateRef.current.value = dueDate;
  }, []);

  const changeInputValue = ({ target }) => {
    setSearchArr(() =>
      users.filter(
        (name) => target.value !== '' && name.includes(target.value),
      ),
    );
  };

  const checkEnter = ({ key }) => {
    if (key === 'Enter') {
      setSearchArr([]);
    }
  };

  const submitKanban = () => {
    beforeId ? editKanban() : addNewKanban();
  };

  const editKanban = () => {
    const kanban = {
      id: beforeId,
      title: titleRef.current.value,
      content: contentRef.current.value,
      dueDate: dueDateRef.current.value,
      manager: chargeRef.current.value,
    };
    const state = stateRef.current[stateRef.current.selectedIndex].value;
    editNewKanbanItem(state, kanban);
  };
  const addNewKanban = () => {
    //FIXME: id 다음값으로 새로 생성
    const kanban = {
      id: beforeId + 1,
      title: titleRef.current.value,
      content: contentRef.current.value,
      dueDate: dueDateRef.current.value,
      manager: chargeRef.current.value,
    };
    const state = stateRef.current[stateRef.current.selectedIndex].value;
    addNewKanbanItem(state, kanban);
  };

  return (
    <>
      <ModalSide></ModalSide>
      <ModalContent>
        <Title>
          제목: <input type="text" ref={titleRef} />
        </Title>
        담당자:
        <Charge
          searchArr={searchArr}
          changeInputValue={changeInputValue}
          checkEnter={checkEnter}
          chargeRef={chargeRef}
        ></Charge>
        <EndDate>
          마감일: <input type="datetime-local" ref={dueDateRef} />
        </EndDate>
        <Status>
          상태:
          <select ref={stateRef}>
            {kanbanKeys.map((kanbanKey) => (
              <option
                key={kanbanKey}
                selected={kanbanKey === modalKanbanStatus}
              >
                {kanbanKey}
              </option>
            ))}
          </select>
        </Status>
        <Content>
          내용: <textarea ref={contentRef}>{content}</textarea>
        </Content>
        <ButtonContainer>
          <CancelBtn onClick={cancelKanban}>취소</CancelBtn>
          <SubmitBtn onClick={submitKanban}>저장</SubmitBtn>
        </ButtonContainer>
      </ModalContent>
    </>
  );
};

const ModalSide = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #808080;
  opacity: 0.5;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  width: 300px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const Title = styled.h4``;
const ChargeSelect = styled.div``;
const EndDate = styled.div``;
const Status = styled.div``;
const Content = styled.div``;

const ButtonContainer = styled.div``;
const CancelBtn = styled.button``;
const SubmitBtn = styled.button``;

export default Modal;
