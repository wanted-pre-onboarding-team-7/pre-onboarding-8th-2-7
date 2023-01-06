import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalContent = ({ card }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (card.content) {
      inputRef.current.value = card.content;
    }
  }, []);
  const onChange = () => {
    card.content = inputRef.current.value;
  };

  return (
    <TextAreaContent
      id="content"
      placeholder="내용을 입력해주세요."
      onChange={onChange}
      ref={inputRef}
      rows="10"
    />
  );
};

export default ModalContent;
const TextAreaContent = styled.textarea`
  margin-top: 20px;
  font-size: 16px;
  border: none;
  :focus {
    outline: none;
  }
`;
