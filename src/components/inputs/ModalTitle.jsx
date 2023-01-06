import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalTitle = ({ card }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (card.title) {
      inputRef.current.value = card.title;
    }
  }, []);
  const onChange = () => {
    card.title = inputRef.current.value;
  };

  return (
    <InputTitle
      type="text"
      placeholder="제목 없음"
      onChange={onChange}
      ref={inputRef}
    />
  );
};

export default ModalTitle;
const InputTitle = styled.input`
  border: none;
  font-size: 32px;
  font-weight: 600;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
