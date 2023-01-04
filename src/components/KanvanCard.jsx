import React from 'react';
import styled from 'styled-components';

const KanvanCard = ({ id, content, title, author }) => {
  return (
    <DivCardWrapper>
      <DivTitleWrapper>
        <H1CardTitle>{title}</H1CardTitle>
      </DivTitleWrapper>
      {author.length > 0 ? (
        <DivAuthorWrapper>
          {author.map((name) => (
            <SpanAuthor>{name}</SpanAuthor>
          ))}
        </DivAuthorWrapper>
      ) : null}
    </DivCardWrapper>
  );
};

export default KanvanCard;

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
  background-color: transparent;
  word-break: break-all;
  font-weight: 500;
  display: flex;
  align-items: center;
  /* cursor: pointer; */
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
