import React, { useRef } from 'react';
import styled from 'styled-components';
import { KANBAN_STATE } from '../../utils/constant';

const ModalStateInput = ({ card }) => {
  const stateRef = useRef('');

  const optionClick = () => {
    card.state = stateRef.current.value;
  };
  return (
    <DivWrapper>
      <select ref={stateRef} onChange={optionClick}>
        <option
          value={KANBAN_STATE.TODOS}
          selected={card.state === KANBAN_STATE.TODOS}
        >
          할 일
        </option>
        <option
          value={KANBAN_STATE.PROGRESS}
          selected={card.state === KANBAN_STATE.PROGRESS}
        >
          진행 중
        </option>
        <option
          value={KANBAN_STATE.DONE}
          selected={card.state === KANBAN_STATE.DONE}
        >
          완료
        </option>
      </select>
    </DivWrapper>
  );
};

export default ModalStateInput;
const DivWrapper = styled.div`
  position: relative;
`;
