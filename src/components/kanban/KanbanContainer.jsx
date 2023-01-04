import React, { useEffect, useState } from 'react';

import Kanban from './Kanban';
import Modal from './modal/Modal';
import { kanbanBoard } from '../../utils/dummyData';
import styled from 'styled-components';

const KanbanContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalKanbanItem, setModalKanbanItem] = useState({});
  const [modalKanbanStatus, setModalKanbanStatus] = useState('');
  const [kanban, setKanban] = useState({});

  useEffect(() => {
    setKanban(kanbanBoard);
  }, []);

  const clickKanban = (item, status) => {
    setModalKanbanItem(item);
    setModalKanbanStatus(status);
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  const changeModalStatus = () => {
    setModalKanbanItem({});
    setModalKanbanStatus('');
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          kanbanKeys={Object.keys(kanban)}
          modalKanbanItem={modalKanbanItem}
          modalKanbanStatus={modalKanbanStatus}
          cancelKanban={changeModalStatus}
        />
      )}
      <button onClick={changeModalStatus}>새로 만들기</button>
      <DiffKanban>
        {Object.keys(kanban).map((key) => (
          <div key={key}>
            <Kanban
              status={key}
              items={kanban[key]}
              clickKanban={clickKanban}
            />
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
