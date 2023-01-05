import styled from 'styled-components';
import Modal from '../card/Modal';
import { useState } from 'react';

const Card = ({
  id,
  title,
  manager,
  dueDate,
  clickDeleteButton,
  content,
  setCards,
  status,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickCard = () => {
    setIsOpen(true);
  };

  return (
    <>
      <DivContainer>
        <div onClick={clickCard}>
          {title}
          <div>담당자: {manager}</div>
          <div>{content}</div>
        </div>
        <DivSideContainer>
          <BtnDeleteButton onClick={() => clickDeleteButton(id)}>
            X
          </BtnDeleteButton>
          <div>{id}</div>
        </DivSideContainer>
      </DivContainer>
      {isOpen && (
        <Modal
          id={id}
          content={content}
          setCards={setCards}
          status={status}
          manager={manager}
          setIsOpen={setIsOpen}
          dueDate={dueDate}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Card;

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #eeeeee;
  cursor: pointer;
`;

const DivSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BtnDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: none;
  color: white;
  background-color: #b2b2b2;
  cursor: pointer;
  &:hover {
    background-color: #f96666;
  }
`;
