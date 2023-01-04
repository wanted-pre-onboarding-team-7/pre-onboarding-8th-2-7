import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isModalState } from '../../store/atom';
import { theme } from '../../theme';

const Card = ({ item }) => {
  const setIsModalState = useSetRecoilState(isModalState);
  const clickCard = () => {
    setIsModalState(true);
  };
  const clickDelBtn = () => {
    console.log('del');
  };
  return (
    <DivWrapper>
      <DivCard
        onClick={clickCard}
        borderColor={theme.border}
        shadowColor={theme.shadow}
      >
        <DivColLeft>
          <H1Title>{item.title}</H1Title>
          <SpanManager>담당자: {item.manager}</SpanManager>
          <SpanContent>{item.content}</SpanContent>
        </DivColLeft>
        <DivColRight>
          <span>{item.id}</span>
        </DivColRight>
      </DivCard>
      <ButtonDelete onClick={clickDelBtn}>🗑️</ButtonDelete>
    </DivWrapper>
  );
};
export default Card;

const DivWrapper = styled.div`
  position: relative;
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

const ButtonDelete = styled.button`
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
`;
const SpanManager = styled.span``;
const SpanContent = styled.span`
  overflow: hidden;
`;
