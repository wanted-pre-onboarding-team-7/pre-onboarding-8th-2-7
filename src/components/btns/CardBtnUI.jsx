import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import CreateCard from './CreateCardBtn';

const CardBtnUI = ({ kanbanState }) => {
  return (
    <CreateCard kanbanState={kanbanState}>
      <Button bgColor={theme.background}>+ 새로 만들기</Button>
    </CreateCard>
  );
};
export default CardBtnUI;

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.bgColor};
  margin-top: 20px;
  cursor: pointer;
`;
