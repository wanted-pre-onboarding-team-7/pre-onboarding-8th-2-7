import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ModalDueDateInput = ({ card }) => {
  const [dueDate, setDueDate] = useState(card.dueDate);
  useEffect(() => {
    if (card.dueDate) {
      setDueDate(card.dueDate);
    }
  }, []);
  const onChange = (e) => {
    setDueDate(e.target.value);
    card.dueDate = e.target.value;
  };

  return (
    <InputTitle type="datetime-local" onChange={onChange} value={dueDate} />
  );
};

export default ModalDueDateInput;
const InputTitle = styled.input`
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
