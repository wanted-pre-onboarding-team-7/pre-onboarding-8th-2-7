import { useEffect, useRef } from 'react';

import Charge from './Charge';
import React from 'react';
import styled from 'styled-components';

const Modal = ({
  modalKanbanItem,
  modalKanbanStatus,
  kanbanKeys,
  cancelKanban,
}) => {
  const { id, title, content, dueDate, manager } = modalKanbanItem;
  const titleRef = useRef();
  const dueDateRef = useRef();

  useEffect(() => {
    titleRef.current.value = title || '';
    dueDateRef.current.value = dueDate;
  }, []);

  return (
    <div>
      <Title>
        제목: <input type="text" ref={titleRef} />
      </Title>
      <ChargeSelect>
        담당자: <Charge />
      </ChargeSelect>
      <EndDate>
        마감일: <input type="datetime-local" ref={dueDateRef} />
      </EndDate>
      <Status>
        상태:
        <select>
          {kanbanKeys.map((kanbanKey) => (
            <option key={kanbanKey} selected={kanbanKey === modalKanbanStatus}>
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
    </div>
  );
};

const Title = styled.div``;
const ChargeSelect = styled.div``;
const EndDate = styled.div``;
const Status = styled.div``;
const Content = styled.div``;

const ButtonContainer = styled.div``;
const CancelBtn = styled.button``;
const SubmitBtn = styled.button``;

export default Modal;
