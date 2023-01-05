import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { users } from '../utils/dummyData';
import { KANBAN_ARR } from '../utils/constant';
function DetailComponent({ setModal, data, info }) {
  const [form, setForm] = useState();
  useEffect(() => {
    console.log(info);
    if (info) {
      setTitle(info[0].title);
      setDueDate(info[0].dueDate);
      setContent(info[0].content);
      setSituation([info[1], info[2]]);
    }
  }, [info]);
  const [title, setTitle] = useState();
  const [manager, setManager] = useState();
  const [findManager, setFindManager] = useState([]);
  const [dueDate, setDueDate] = useState();
  const [situation, setSituation] = useState(['할 일', 'grey']);
  const [content, setContent] = useState();

  const [checkManager, setCheckManager] = useState();
  const [checkSituation, setCheckSituation] = useState();

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeManager = (e) => {
    setFindManager(
      users.filter((element) => {
        return element.includes(e.target.value);
      }),
    );
  };

  const onChangeDueDate = (e) => setDueDate(e.target.value);
  const onChangeSituation = (e) => setSituation(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);

  const onClickCheckManager = () => setCheckManager(!checkManager);
  const onClickCheckSituation = () => setCheckSituation(!checkSituation);

  const onClickManager = (el) => {
    setManager(el);
    setCheckManager(false);
  };
  const onClickSituation = (el) => {
    setSituation([...el]);
    setCheckSituation(false);
  };
  const onSubmit = () => {
    console.log(manager);
    console.log(situation);
    let newList = JSON.parse(JSON.stringify(data));
    if (title && situation && content) {
      if (info && info[0].id) {
        for (let i = 0; i < newList.length; i++) {
          console.log('반복문');
          if (newList[i].title === info[1]) {
            for (let j = 0; j < newList[i].items.length; j++) {
              if (newList[i].items[j].id === info[0].id) {
                newList[i].items[j].title = title;
                newList[i].items[j].manager = manager
                  ? manager
                  : info[0].manager;
                newList[i].items[j].dueDate = dueDate;
                newList[i].items[j].content = content;
                if(info[1] !== situation[0]) {
                   for (let k = 0 ; k<3; k++) {
                    if(situation[0]===newList[k].title) {
                        newList[k].items.push(newList[i].items[j])
                        newList[i].items.splice(j,1)
                    }
                   }
                }
                console.log(newList[i].items[j]);
                break;
              }
            }
          }
        }
        console.log('지나감');
        localStorage.setItem('List', JSON.stringify(newList));
        setModal(false);
        return;
      }
    }
    if (title && situation && content && manager) {
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].title === situation[0]) {
          newList[i].items.push({
            title,
            manager,
            content,
            dueDate,
            id:
              newList[0].items.length +
              newList[1].items.length +
              newList[2].items.length,
          });
          console.log(newList[i]);
          break;
        }
      }
      localStorage.setItem('List', JSON.stringify(newList));
    } else {
      window.alert('뭔가 빠졌습니다');
      console.log(title);
      console.log(manager);
      console.log(dueDate);
      console.log(situation);
      console.log(content);
      return;
    }

    setModal(false);
  };
  return (
    <>
      <ModalOverlay />
      <ModalWrapper tabIndex="-1">
        <ModalInner tabIndex="0">
          <Flex>
            <div>제목</div>
            <input
              type="text"
              defaultValue={info && info[0].title}
              value={title}
              onChange={onChangeTitle}
            />
          </Flex>
          <Flex onClick={onClickCheckManager}>
            <div>담당자</div>
            <FlexColumn>
              <input
                type="text"
                defaultValue={info && info[0].manager}
                value={manager}
                onChange={onChangeManager}
              />
              {checkManager && findManager
                ? findManager.map((el, index) => {
                    return (
                      <div key={index} onClick={() => onClickManager(el)}>
                        {el}
                      </div>
                    );
                  })
                : manager || info
                ? ''
                : '해당하는 담당자가 없습니다'}
            </FlexColumn>
          </Flex>
          <Flex>
            <div>마감일</div>
            <input
              type="datetime-local"
              value={dueDate}
              defaultValue={info && info[0].dueDate}
              onChange={onChangeDueDate}
            />
          </Flex>
          <Flex onClick={onClickCheckSituation}>
            <div>상태</div>
            <FlexColumn>
              <DivSituation>
                {
                  <FlexCenter>
                    <DivCircle flag={situation[1]} />
                    {situation[0]}
                  </FlexCenter>
                }
              </DivSituation>
              {checkSituation
                ? KANBAN_ARR.map((el, index) => {
                    return (
                      <FlexCenter onClick={() => onClickSituation(el)}>
                        <DivCircle flag={el[1]} />
                        {el[0]}
                      </FlexCenter>
                    );
                  })
                : ''}
            </FlexColumn>
          </Flex>
          <Flex>
            <div>내용</div>
            <textarea
              defaultValue={info && info[0].content}
              value={content}
              onChange={onChangeContent}
            />
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
const DivSituation = styled.div`
  border: 1px solid;
  width: 100px;
  height: 40px;
`;
const DivCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.flag};
`;
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`;
const Flex = styled.div`
  display: flex;
  height: 20%;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
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
