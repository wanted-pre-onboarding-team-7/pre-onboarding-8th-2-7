import React, { useEffect, useState } from 'react';

import Kanban from './Kanban';
import Modal from './modal/Modal';
import { kanbanBoard } from '../../utils/dummyData';
import styled from 'styled-components';

const KanbanContainer = () => {
  const [kanban, setKanban] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalKanbanItem, setModalKanbanItem] = useState({});
  const [modalKanbanStatus, setModalKanbanStatus] = useState('');

  useEffect(() => {
    setKanban(kanbanBoard);
  }, []);

  const clickKanban = (item, status) => {
    setModalKanbanItem(item);
    setModalKanbanStatus(status);
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  const editNewKanbanItem = (status, kanbanItem) => {
    const newKanbanStatus = [...kanban[status]].map((v) => {
      const { id } = v;
      return id === kanbanItem.id ? kanbanItem : v;
    });
    setKanban((kanban) => ({ ...kanban, [status]: newKanbanStatus }));
    changeModalStatus();
  };

  const addNewKanbanItem = (status, kanbanItem) => {
    const newKanbanStatus = [...kanban[status], kanbanItem];
    setKanban((kanban) => ({ ...kanban, [status]: newKanbanStatus }));
    changeModalStatus();
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
          editNewKanbanItem={editNewKanbanItem}
          addNewKanbanItem={addNewKanbanItem}
        />
      )}
      <button onClick={changeModalStatus}>새로 만들기</button>
      <DiffKanban>
        {Object.keys(kanban).map((key) => (
          <div key={key}>
            <Kanban
              status={key}
              items={kanban[key]}
              setKanban={setKanban}
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
`;

export default KanbanContainer;
