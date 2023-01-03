import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import Card from './Card';
import Cards from './Cards';

const KanbanColumn = () => {
  return (
    <DivColsWrapper>
      <DivTitleWrapper>
        <SpanIcon>✅</SpanIcon>
        <H2Title>완료</H2Title>
      </DivTitleWrapper>
      <Cards />
    </DivColsWrapper>
  );
};
export default KanbanColumn;

const DivColsWrapper = styled.div`
  padding: 10px;
`;

const DivTitleWrapper = styled.div`
  display: flex;
`;
const SpanIcon = styled.div``;
const H2Title = styled.div``;
