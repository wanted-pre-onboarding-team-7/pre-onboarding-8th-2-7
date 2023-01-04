import React, { Children } from 'react';
import styled from 'styled-components';

const ModalRow = ({ children, row }) => {
  return (
    <DivRow key={row.id}>
      <LabelRow htmlFor={row.id}>{row.labelText}</LabelRow>
      <DivInputWrapper>{children}</DivInputWrapper>
    </DivRow>
  );
};
export default ModalRow;

const DivRow = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;
const LabelRow = styled.label`
  width: 80px;
`;
const DivInputWrapper = styled.div`
  padding: 10px;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
