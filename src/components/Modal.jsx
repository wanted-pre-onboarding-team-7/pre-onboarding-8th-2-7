import { useRef } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { issueListState } from '../store/atoms';
import { KANBAN_STATE, BOARD_TITLE } from '../utils/constant';

const INIT_VAL = {
  id: 0,
  title: '',
  content: '',
  dueDate: '',
  manager: '',
};
const Modal = () => {
  const [newIssue, setNewIssue] = useState(INIT_VAL);
  const [issues, setIssues] = useRecoilState(issueListState);
  // const issuesArr = issu;

  const titleRef = useRef();
  const managerRef = useRef();
  const dueDateRef = useRef();
  const statusRef = useRef();
  const contentRef = useRef();

  const clickAddIssue = (evt) => {
    evt.preventDefault();
    if (window.confirm('제출하시겠습니까?')) {
      const tmpIssue = {
        id: Number(Date.now()),
        title: titleRef.current.value,
        content: contentRef.current.value,
        dueDate: dueDateRef.current.value,
        manager: managerRef.current.value,
      };
      setIssues((prev) => {
        const update = [...prev[statusRef.current.value], tmpIssue];
        return { ...issues, [statusRef.current.value]: update };
      });
    }
  };

  return (
    <DivModal>
      <DivWrapper>
        <form onSubmit={clickAddIssue}>
          <DivInputWrapper>
            <div>제목</div>
            <InputTitle type="text" required ref={titleRef} />
            <div>담당자</div>
            <InputTitle type="text" required ref={managerRef} />
            <div>마감일</div>
            <InputTitle type="datetime-local" required ref={dueDateRef} />
            <div>상태</div>
            <Select name="status" ref={statusRef}>
              <option value={KANBAN_STATE.TODOS}>
                {BOARD_TITLE[KANBAN_STATE.TODOS]}
              </option>
              <option value={KANBAN_STATE.PROGRESS}>
                {BOARD_TITLE[KANBAN_STATE.PROGRESS]}
              </option>
              <option value={KANBAN_STATE.DONE}>
                {BOARD_TITLE[KANBAN_STATE.DONE]}
              </option>
            </Select>
            <br />
            <div>내용</div>
            <TextArea required ref={contentRef} />
            <Button type="button">취소</Button>
            <Button type="submit" isSave={true}>
              저장
            </Button>
          </DivInputWrapper>
        </form>
      </DivWrapper>
    </DivModal>
  );
};

const DivModal = styled.div`
  width: 800px;
  height: 700px;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
`;
const DivWrapper = styled.div`
  width: 600px;
  height: fit-content;
`;
const DivInputWrapper = styled.div`
  margin: 20px;
  text-align: center;
  div {
    display: inline-block;
    width: 80px;
    font-weight: 400;
  }
`;
const InputTitle = styled.input`
  width: 80%;
  height: 30px;
  margin-bottom: 10px;
`;
const Select = styled.select`
  width: 80%;
  height: 30px;
  margin-bottom: 15px;
`;
const TextArea = styled.textarea`
  width: 80%;
  height: 250px;
`;
const Button = styled.button`
  border: none;
  height: 40px;
  width: 100px;
  margin: 15px 10px;
  background-color: ${(props) => props.isSave && props.theme.btnColor};
  color: ${(props) => props.isSave && 'white'};
  cursor: pointer;
`;

export default Modal;
