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
}) => {
  const { id, title, content, dueDate, manager } = modalKanbanItem;
  const titleRef = useRef();
  const dueDateRef = useRef();

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
        ></Charge>
        <EndDate>
          마감일: <input type="datetime-local" ref={dueDateRef} />
        </EndDate>
        <Status>
          상태:
          <select>
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
          내용: <textarea>{content}</textarea>
        </Content>
        <ButtonContainer>
          <CancelBtn onClick={cancelKanban}>취소</CancelBtn>
          <SubmitBtn>저장</SubmitBtn>
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
