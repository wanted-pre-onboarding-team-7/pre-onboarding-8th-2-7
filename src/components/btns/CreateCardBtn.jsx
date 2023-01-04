import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const CreateCardBtn = () => {
  return <Button bgColor={theme.button}>새로 만들기</Button>;
};
export default CreateCardBtn;

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 8px;
  border-radius: 10px;
  font-weight: 300;
  cursor: pointer;
`;
