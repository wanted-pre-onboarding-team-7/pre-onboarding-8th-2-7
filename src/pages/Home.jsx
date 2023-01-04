import React, { useEffect, useState } from 'react';

import KanbanContainer from './../components/kanban/KanbanContainer';
import { kanbanBoard } from '../utils/dummyData';

const Home = () => {
  const [kanban, setKanban] = useState({});

  useEffect(() => {
    setKanban(kanbanBoard);
  }, []);

  return (
    <div>
      <KanbanContainer kanban={kanban} />
    </div>
  );
};

export default Home;
