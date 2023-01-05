import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import Portal from './Portal';
import { KANBAN_STATE } from '../utils/constant';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { getCardState, selectedCardId, cardState } from '../store';

const Modal = ({ handleClose }) => {
  const selectedCard = useRecoilValue(selectedCardId);
  const { id, title, status, content, author, dueDate } = useRecoilValue(
    getCardState(selectedCard),
  );
  const setCardState = useSetRecoilState(cardState);
  const titleRef = useRef();
  const authorRef = useRef();
  const statusRef = useRef();
  const contentRef = useRef();

  const handleSave = () => {
    const formData = {
      id,
      title: titleRef.current.value,
      status: statusRef.current.value,
      content: contentRef.current.value,
      author,
      dueDate,
    };

    setCardState((prev) => {
      if (status !== statusRef.current.value) {
        return {
          ...prev,
          [status]: prev[status].filter((card) => card.id !== id),
          [statusRef.current.value]: [
            ...prev[statusRef.current.value],
            formData,
          ],
        };
      } else {
        return {
          ...prev,
          [status]: prev[status].map((card) =>
            card.id === id ? formData : card,
          ),
        };
      }
    });
    handleClose();
  };

  const handleChange = ({ target }) => {
    console.log(target.value);
  };

  return (
    <Portal>
      <DivHandleCloseTag onClick={handleClose} />
      <DivModalCardWrapper>
        <InputTitle
          type="text"
          placeholder="제목 없음"
          defaultValue={title}
          ref={titleRef}
        />
        <InputAuthor
          type="text"
          placeholder="담당자를 선택해주세요."
          ref={authorRef}
        />
        <InputDueDate type="datetime-local" />
        <SelectStatus
          defaultValue={status}
          ref={statusRef}
          onChange={handleChange}
        >
          <option value={KANBAN_STATE.TODOS}>할 일</option>
          <option value={KANBAN_STATE.PROGRESS}>진행중</option>
          <option value={KANBAN_STATE.DONE}>완료</option>
        </SelectStatus>
        <TextAreaContent
          placeholder="내용을 입력 해 주세요"
          defaultValue={content}
          ref={contentRef}
        />
        <DivButtonWrapper>
          <Button delete onClick={handleClose}>
            취소하기
          </Button>
          <Button save onClick={handleSave}>
            저장하기
          </Button>
        </DivButtonWrapper>
      </DivModalCardWrapper>
    </Portal>
  );
};

export default Modal;

const CommonCss = css`
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

const DivHandleCloseTag = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 0;
`;

const DivModalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 800px;
  background-color: white;
  border-radius: 35px;
  overflow: hidden;
  padding: 40px;
  z-index: 100;
`;

const InputTitle = styled.input`
  ${CommonCss}

  font-size: 40px;
  font-weight: bold;

  &::placeholder {
    color: rgba(128, 128, 128, 0.4);
  }
`;

const InputDueDate = styled.input`
  ${CommonCss}

  cursor: pointer;
  font: inherit;
`;

const InputAuthor = styled.input`
  ${CommonCss}

  font-size: 20px;
`;

const SelectStatus = styled.select`
  ${CommonCss}
  padding-bottom: 10px;
  font-size: 14px;

  &::-ms-expand {
    padding-bottom: 50px;
  }
`;

const TextAreaContent = styled.textarea`
  font-size: 18px;
  height: 55%;
  resize: none;
  border: none;
  outline: none;
  font: inherit;
`;

const DivButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  margin: 0 20px;
  padding: 0 15px;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  ${(props) =>
    props.delete &&
    css`
      background-color: red;
    `}

  ${(props) =>
    props.save &&
    css`
      background-color: green;
    `}

  &:hover {
    opacity: 0.6;
  }
`;
