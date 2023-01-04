import React from 'react';

const KanbanItem = ({ id, title, content, dueDate, manager, clickKanban }) => {
  const clickEraseKanbanItem = () => {};
  const clickKanbanItem = () =>
    clickKanban({ id, title, content, dueDate, manager });
  return (
    <div onClick={clickKanbanItem}>
      <div>{title}</div>
      <button onClick={clickEraseKanbanItem}>X</button>
      <div>{manager}</div>
      <div>{content}</div>
      <div>{id}</div>
    </div>
  );
};

export default KanbanItem;
