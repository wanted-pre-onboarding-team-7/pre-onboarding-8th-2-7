import KanbanItem from './KanbanItem';
import React from 'react';

const Kanban = ({ items, clickKanban }) => {
  return (
    <>
      {items.map(({ id, title, content, dueDate, manager }) => (
        <KanbanItem
          id={id}
          title={title}
          content={content}
          dueDate={dueDate}
          manager={manager}
          clickKanban={clickKanban}
        />
      ))}
    </>
  );
};

export default Kanban;
