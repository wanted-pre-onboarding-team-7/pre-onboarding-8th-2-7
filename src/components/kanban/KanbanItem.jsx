import React from 'react';

const KanbanItem = ({ id, title, content, dueDate, manager, clickKanban }) => {
  const clickEraseKanbanItem = () => {};
  const clickKanbanItem = ({ id, title, content, dueDate, manager }) => {
    clickKanban({ id, title, content, dueDate, manager });
  };
  return (
    <div
      onClick={() => clickKanbanItem({ id, title, content, dueDate, manager })}
    >
      <div>{title}</div>
      <button onClick={clickEraseKanbanItem}>X</button>
      <div>{manager}</div>
      <div>{content}</div>
      <div>{id}</div>
    </div>
  );
};

export default KanbanItem;
