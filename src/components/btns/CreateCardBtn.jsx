import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { creatBtnState } from '../../store/atom';
import { KANBAN_STATE } from '../../utils/constant';

const CreateCard = ({ children, kanbanState }) => {
  const setcreatBtnState = useSetRecoilState(creatBtnState);
  const clickBtn = () => {
    const creatBtnState = kanbanState || KANBAN_STATE.TODOS;
    setcreatBtnState(creatBtnState);
  };
  return <DivWrapper onClick={clickBtn}>{children}</DivWrapper>;
};
export default CreateCard;

const DivWrapper = styled.div`
  cursor: pointer;
`;
