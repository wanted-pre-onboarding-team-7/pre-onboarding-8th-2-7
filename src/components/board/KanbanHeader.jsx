import React from 'react';
import styled from 'styled-components';

const KanBanHeader = () => {
  return (
    <DivContainer>
      <SpanHeader>KanBan Board</SpanHeader>
      <BtnCreateCardButton>새로 만들기</BtnCreateCardButton>
    </DivContainer>
  );
};

export default KanBanHeader;

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  padding: 20px;
  margin: 10px;
  border-bottom: 5px solid black;
`;
const SpanHeader = styled.span`
  margin-left: 30px;
  color: black;
  font-size: 40px;
  font-weight: bold;
`;
const BtnCreateCardButton = styled.button`
  width: 100px;
  height: 40px;
  position: absolute;
  right: 40px;
  border: none;
  border-radius: 5px;
  background-color: #b2b2b2;
  cursor: pointer;
  &: hover {
    background-color: #929aab;
  }
`;
