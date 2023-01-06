import React, { useRef } from 'react';
import styled from 'styled-components';
import { KANBAN_STATE } from '../../utils/constant';

const ModalStateInput = ({ card }) => {
  const stateRef = useRef(card.state);

  const optionClick = () => {
    card.state = stateRef.current.value;
  };

  return (
    <DivWrapper>
      <select ref={stateRef} defaultValue={stateRef} onChange={optionClick}>
        <option value={KANBAN_STATE.TODOS}>할 일</option>
        <option value={KANBAN_STATE.PROGRESS}>진행 중</option>
        <option value={KANBAN_STATE.DONE}>완료</option>
      </select>
    </DivWrapper>
  );
};

export default ModalStateInput;
const DivWrapper = styled.div`
  position: relative;
`;
