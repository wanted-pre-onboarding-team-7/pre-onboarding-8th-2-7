import KanbanItem from './KanbanItem';
import React from 'react';
import styled from 'styled-components';

const Kanban = ({ status, items, clickKanban }) => {
  const clickKanbanItem = (item) => clickKanban(item, status);
  return (
    <KanbanContainer>
      <h3>{status}</h3>
      {items
        .sort((a, b) => a.id - b.id)
        .map(({ id, title, content, dueDate, manager }) => (
          <KanbanItem
            id={id}
            title={title}
            content={content}
            dueDate={dueDate}
            manager={manager}
            clickKanban={clickKanbanItem}
            key={id}
          />
        ))}
    </KanbanContainer>
  );
};

const KanbanContainer = styled.div`
  margin: 10px;
`;

export default Kanban;
