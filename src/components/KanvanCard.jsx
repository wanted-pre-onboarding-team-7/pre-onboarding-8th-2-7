import React, { memo, useRef, useState } from 'react';
import styled from 'styled-components';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { toggleModal, selectedCardId, getCardState } from '../store';

const KanvanCard = ({
  id,
  content,
  title,
  author,
  onRemove,
  onUpdate,
  status,
}) => {
  const [isHover, setIsHover] = useState(false);
  const setToggle = useSetRecoilState(toggleModal);
  const setCardId = useSetRecoilState(selectedCardId);
  const inputRef = useRef();
  const [mode, setMode] = useState(true);
  const card = useRecoilValue(getCardState({ id, status }));

  const handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) return;
    setCardId({
      id,
      status,
    });
    setToggle(true);
  };

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const handleToggle = () => {
    setMode(!mode);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('card', JSON.stringify(card));
  };

  return (
    <DivCardWrapper
      draggable
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleOpenModal}
      onDragStart={handleDragStart}
    >
      <div>
        <DivTitleWrapper onClick={handleOpenModal}>
          {mode ? (
            <H1CardTitle placeholder="제목 없음" onClick={handleOpenModal}>
              {title}
            </H1CardTitle>
          ) : (
            <input defaultValue={title} ref={inputRef} />
          )}
        </DivTitleWrapper>
        {author.length > 0 ? (
          <DivAuthorWrapper>
            {author.map((name, i) => (
              <SpanAuthor key={i}>{name}</SpanAuthor>
            ))}
          </DivAuthorWrapper>
        ) : null}
      </div>
      {isHover ? (
        <ButtonWrapper>
          {mode ? (
            <Button onClick={handleToggle}>
              <BsPencil />
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleToggle();
                onUpdate(id, inputRef.current.value);
              }}
            >
              수정완료
            </Button>
          )}
          <Button onClick={() => onRemove(id)}>
            <BsTrash />
          </Button>
        </ButtonWrapper>
      ) : null}
    </DivCardWrapper>
  );
};

export default memo(KanvanCard);

const DivCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 20px;
  border-radius: 7px;
  border: 1px solid rgba(204, 204, 204, 0.7);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }
`;

const DivTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
`;

const H1CardTitle = styled.h1`
  font-size: 15px;
  width: 100%;
  border: none;
  outline: none;
  font-weight: bold;
  background-color: transparent;
  word-break: break-all;
  display: flex;
  align-items: center;
  /* cursor: pointer; */

  &:empty:before {
    content: attr(placeholder);
    color: rgba(51, 51, 51, 0.4);
  }
`;

const DivAuthorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  padding: 0.3rem 0;
  border-radius: 5px;

  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }
`;

const SpanAuthor = styled.span`
  padding: 0.2rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 12px;
  right: 10px;
`;

const Button = styled.button`
  display: grid;
  place-items: center;
`;
