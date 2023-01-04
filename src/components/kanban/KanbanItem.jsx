import React from 'react';
import styled from 'styled-components';

const KanbanItem = ({ id, title, content, dueDate, manager, clickKanban }) => {
  const clickEraseKanbanItem = () => {};
  const clickKanbanItem = ({ id, title, content, dueDate, manager }) => {
    clickKanban({ id, title, content, dueDate, manager });
  };
  return (
    <ItemContainer
      onClick={() => clickKanbanItem({ id, title, content, dueDate, manager })}
    >
      <div>{title}</div>
      <button onClick={clickEraseKanbanItem}>X</button>
      <div>{manager}</div>
      <div>{content}</div>
      <div>{id}</div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  background-color: #d9d9d9;
  padding: 10px;
  margin: 10px 0px;
`;

export default KanbanItem;
