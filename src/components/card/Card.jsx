import React, { useRef, useState } from 'react';

import DeleteCardBtn from '../btns/DeleteCardBtn';
import { modalState } from '../../store/atom';
import styled from 'styled-components';
import { theme } from '../../theme';
import { useSetRecoilState } from 'recoil';

const Card = ({ item, kanbanState }) => {
  const [isHover, setIsHover] = useState(false);
  const setmModalState = useSetRecoilState(modalState);
  const clickCard = () => {
    setmModalState({ ...item, state: kanbanState });
  };

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <DivWrapper
      id={item.id}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <DivCard borderColor={theme.border} shadowColor={theme.shadow}>
        <DivColLeft>
          <H1Title>{item.title}</H1Title>
          <SpanManager>담당자: {item.manager}</SpanManager>
          <SpanContent>{item.content}</SpanContent>
        </DivColLeft>
        <DivColRight>
          <span>{item.id}</span>
        </DivColRight>
      </DivCard>
      {isHover && (
        <>
          <EditCardBtn onClick={clickCard}>✏️</EditCardBtn>
          <DeleteCardBtn id={item.id} kanbanState={kanbanState} />
        </>
      )}
    </DivWrapper>
  );
};
export default Card;

const DivWrapper = styled.div`
  position: relative;
  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }
`;

const DivCard = styled.div`
  height: 100px;
  display: flex;
  border-radius: 10px;
  padding: 15px;
  border: 1px solid;
  border-color: ${(props) => props.borderColor};
  box-shadow: 1px 3px 10px ${(props) => props.shadowColor};
  cursor: pointer;
`;
const DivColLeft = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const H1Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
`;
const DivColRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const SpanManager = styled.span``;
const SpanContent = styled.span`
  overflow: hidden;
`;

const EditCardBtn = styled.button`
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 55px;
`;
