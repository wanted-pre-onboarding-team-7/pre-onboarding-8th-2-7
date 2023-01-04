import KanbanItem from './KanbanItem';
import React from 'react';

const Kanban = ({ status, items, clickKanban }) => {
  const clickKanbanItem = (item) => clickKanban(item, status);
  return (
    <>
      <h3>{status}</h3>
      {items.map(({ id, title, content, dueDate, manager }) => (
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
    </>
  );
};

export default Kanban;
