import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { kanbanCardsState } from '../../store/atom';

import CardBtnUI from '../btns/CardBtnUI';
import Cards from '../card/Cards';
import KanbanColumnTitle from './KanbanColumnTitle';

const KanbanColumn = ({ title }) => {
  const [cards, setCards] = useRecoilState(kanbanCardsState[title]); // const [cards, setCards] = useState(DUMMY_KANBAN[title]);

  return (
    <DivColsWrapper>
      <KanbanColumnTitle title={title} />
      <Cards items={cards} kanbanState={title} />
      <CardBtnUI kanbanState={title} />
    </DivColsWrapper>
  );
};
export default KanbanColumn;

const DivColsWrapper = styled.div``;
