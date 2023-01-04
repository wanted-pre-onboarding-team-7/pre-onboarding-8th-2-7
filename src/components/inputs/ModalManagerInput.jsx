import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalManagerInput = ({ card }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (card.manager) {
      inputRef.current.value = card.manager;
    }
  }, []);
  const onChange = (e) => {
    card.manager = inputRef.current.value;
  };

  return <InputTitle type="text" onChange={onChange} ref={inputRef} />;
};

export default ModalManagerInput;
const InputTitle = styled.input`
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
