import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { USERS } from '../../utils/dummyData';
import Dropdown from '../modal/Dropdown';

const ModalManagerInput = ({ card }) => {
  const inputRef = useRef();
  const [filterdUser, setFilterdUser] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    if (card.manager) {
      setInputRef(card.manager);
    }
  }, []);

  const setInputRef = (value) => {
    inputRef.current.value = value;
    card.manager = inputRef.current.value;
    setIsDropdown(false);
  };

  const filterUserByCurrValue = () => {
    return USERS.filter((user) => user.includes(inputRef.current.value));
  };

  const onChange = () => {
    setFilterdUser(filterUserByCurrValue());
    card.manager = inputRef.current.value;
  };

  return (
    <DivWrapper>
      <InputTitle
        type="text"
        onChange={onChange}
        ref={inputRef}
        onFocus={() => setIsDropdown(true)}
      />
      ;{isDropdown && <Dropdown items={filterdUser} setValue={setInputRef} />}
    </DivWrapper>
  );
};

export default ModalManagerInput;
const DivWrapper = styled.div`
  position: relative;
`;
const InputTitle = styled.input`
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
