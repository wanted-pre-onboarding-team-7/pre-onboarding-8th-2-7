import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalStateInput = ({ card }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (card.state) {
      inputRef.current.value = card.state;
    }
  }, []);
  const onChange = () => {
    card.state = inputRef.current.value;
  };

  return <InputTitle type="text" onChange={onChange} ref={inputRef} />;
};

export default ModalStateInput;
const InputTitle = styled.input`
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
