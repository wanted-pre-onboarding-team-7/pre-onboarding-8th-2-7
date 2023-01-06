import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { KANBAN_COLS } from '../../utils/constant';
import Dropdown from '../modal/Dropdown';

const ModalStateInput = ({ card }) => {
  const [value, setValue] = useState(card.state);
  const [isDropdown, setIsDropdown] = useState(false);
  useEffect(() => {
    card.state = value;
  }, [value, card]);

  return (
    <DivWrapper onClick={() => setIsDropdown((prev) => !prev)}>
      <InputTitle type="text" value={value} disabled />
      {isDropdown && <Dropdown items={KANBAN_COLS} setValue={setValue} />}
    </DivWrapper>
  );
};

export default ModalStateInput;
const DivWrapper = styled.div`
  position: relative;
`;
const InputTitle = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
