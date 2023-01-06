import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { KANBAN_TITLE } from '../../utils/constant';

const KanbanColumnTitle = ({ title }) => {
  return (
    <DivTitleWrapper>
      <DivIcon borderColor={theme[title]}>{KANBAN_TITLE[title].ICON}</DivIcon>
      <H2Title color={theme[title]}>{KANBAN_TITLE[title].NAME}</H2Title>
    </DivTitleWrapper>
  );
};
export default KanbanColumnTitle;

const DivTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;
const DivIcon = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 12.5px;
  color: ${(props) => props.borderColor};
`;
const H2Title = styled.h2`
  color: ${(props) => props.color};
  font-weight: 400;
`;
