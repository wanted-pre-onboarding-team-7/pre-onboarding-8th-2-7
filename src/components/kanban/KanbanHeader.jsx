import React from 'react';
import styled from 'styled-components';
import CreateCardBtn from '../btns/CreateCardBtn';

const KanbanHeader = ({ children }) => {
  return (
    <DivWrapper>
      <H1Title>{children}</H1Title>
      <CreateCardBtn />
    </DivWrapper>
  );
};
export default KanbanHeader;

const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H1Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
