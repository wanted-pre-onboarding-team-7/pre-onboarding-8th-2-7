import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Card = () => {
  return (
    <DivWrapper borderColor={theme.border} shadowColor={theme.shadow}>
      gdgdgd
    </DivWrapper>
  );
};
export default Card;

const DivWrapper = styled.div`
  height: 70px;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => props.borderColor};
  box-shadow: 1px 3px 10px ${(props) => props.shadowColor};
`;
