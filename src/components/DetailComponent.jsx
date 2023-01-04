import React, { useState } from 'react';
import styled from 'styled-components';

function DetailComponent({ setModal }) {
  const [title, setTitle] = useState();
  const [manager, setManager] = useState();
  const [dueDate, setDueDate] = useState();
  const [situation, setSituation] = useState();
  const [content, setContent] = useState();

  const [checkManager,setCheckManager] = useState();
  const [checkSituation,setCheckSituation] = useState();

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeManager = (e) => setManager(e.target.value);
  const onChangeDueDate = (e) => setDueDate(e.target.value);
  const onChangeSituation = (e) => setSituation(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
 
  const onClickCheckManager = (e) => setCheckManager(!checkManager)
  const onClickCheckSituation = (e) => setCheckSituation(!checkSituation)

  const onSubmit = () =>{
    console.log(title)
    console.log(manager)
    console.log(dueDate)
    console.log(situation)
    console.log(content)
  }
  return (
    <>
      <ModalOverlay />
      <ModalWrapper tabIndex="-1">
        <ModalInner tabIndex="0">
          <Flex>
            <div>제목</div>
            <input type="text" value={title} onChange={onChangeTitle} />
          </Flex>
          <Flex onClick={onClickCheckManager}>
            <div>담당자</div>
            {checkManager? "" :
            <input type="text" value={manager} onChange={onChangeManager} />
            }
            
          </Flex>
          <Flex >
            <div>마감일</div>
            <input
              type="datetime-local"
              value={dueDate}
              onChange={onChangeDueDate}
            />
          </Flex>
          <Flex onClick={onClickCheckSituation}>
          <div>상태</div>
            {
                checkSituation? "" : <input value={situation} onChange={onChangeSituation} />
            }
          </Flex>
          <Flex>
            <div>내용</div>
            <textarea value={content} onChange={onChangeContent} />
          </Flex>
          <Flex>
            <div onClick={() => setModal(false)}>취소</div>
            <div onClick={onSubmit}>저장</div>
          </Flex>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}
const Flex = styled.div`
  display: flex;
  height: 20%;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 600px;
  max-width: 800px;
  height: 700px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

export default DetailComponent;
