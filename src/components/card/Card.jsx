import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isModalState } from '../../store/atom';
import { theme } from '../../theme';

const Card = () => {
  const setIsModalState = useSetRecoilState(isModalState);
  const clickCard = () => {
    setIsModalState(true);
  };
  return (
    <DivWrapper
      onClick={clickCard}
      borderColor={theme.border}
      shadowColor={theme.shadow}
    ></DivWrapper>
  );
};
export default Card;

const DivWrapper = styled.div`
  height: 70px;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => props.borderColor};
  box-shadow: 1px 3px 10px ${(props) => props.shadowColor};
  cursor: pointer;
`;
