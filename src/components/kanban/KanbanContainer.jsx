import Kanban from './Kanban';
import Modal from './modal/Modal';
import React from 'react';
import styled from 'styled-components';

const KanbanContainer = ({ kanban }) => {
  const clickKanban = (items) => {};
  const clickNewKanban = () => {};
  return (
    <>
      <Modal />
      <button onClick={clickNewKanban}>새로 만들기</button>
      <DiffKanban>
        {Object.keys(kanban).map((key) => (
          <div>
            <Kanban items={kanban[key]} clickKanban={clickKanban} />
          </div>
        ))}
      </DiffKanban>
    </>
  );
};

const DiffKanban = styled.div`
  display: flex;
  width: 300px;
`;

export default KanbanContainer;
