import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import CreateCard from './CreateCardBtn';

const KanbanBtnUI = () => {
  return (
    <CreateCard>
      <Button bgColor={theme.button}>새로 만들기</Button>
    </CreateCard>
  );
};
export default KanbanBtnUI;

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 8px;
  border-radius: 10px;
  font-weight: 300;
  cursor: pointer;
`;
