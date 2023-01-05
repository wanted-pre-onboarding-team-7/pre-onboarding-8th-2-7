import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Manager from './Manager';

const Modal = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const phaseRef = useRef(null);
  const dueDateRef = useRef(null);

  const clickPostIssue = async () => {
    const response = await axios.post(
      `http://localhost:3001/${phaseRef.current?.value}`,
      {
        title: titleRef.current?.value,
        content: contentRef.current?.value,
        dueDate: dueDateRef.current?.value,
      },
    );
    if (response.status === 201) window.location.replace('/');
  };

  return (
    <DivModal>
      <DivContainer>
        <section>
          <div>
            <Label htmlFor="">제목</Label>
            <input type="text" ref={titleRef}></input>
          </div>
          <div>
            <Label htmlFor="">담당자</Label>
            <Manager />
          </div>
          <div>
            <Label htmlFor="">마감일</Label>
            <input type="datetime-local" ref={dueDateRef}></input>
          </div>
          <div>
            <Label htmlFor="">상태</Label>
            <select ref={phaseRef}>
              <option value="todos">할 일</option>
              <option value="progress">진행 중</option>
              <option value="done">완료</option>
            </select>
          </div>
          <div>
            <Label htmlFor="">내용</Label>
            <textarea ref={contentRef}></textarea>
          </div>
        </section>
        <section>
          <Link to="/">
            <button>취소</button>
          </Link>
          <button onClick={clickPostIssue}>저장</button>
        </section>
      </DivContainer>
    </DivModal>
  );
};

const DivModal = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: rgba(91, 112, 131, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivContainer = styled.div`
  width: 500px;
  height: 400px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  text-align: left;
`;

const Label = styled.label`
  display: inline-block;
  width: 100px;
`;

export default Modal;
