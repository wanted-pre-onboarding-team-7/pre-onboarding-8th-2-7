import React, { useCallback } from 'react';
import styled from 'styled-components';
import KanvanCard from './KanvanCard';
import { useRecoilState } from 'recoil';
import { cardState } from '../store';

const KanvanList = ({ name, stateName }) => {
  const [kanvanCards, setKanvanCards] = useRecoilState(cardState);

  const handleAdd = useCallback(() => {
    const initialTemplate = {
      id: new Date().getTime(),
      title: '',
      content: '',
      dueDate: '',
      status: stateName,
      author: [],
    };

    setKanvanCards((prev) => ({
      ...prev,
      [stateName]: [...prev[stateName], initialTemplate],
    }));
  }, [stateName, setKanvanCards]);

  const handleRemove = useCallback(
    (cardId) => {
      setKanvanCards((prev) => ({
        ...prev,
        [stateName]: prev[stateName].filter(({ id }) => id !== cardId),
      }));
    },
    [stateName, setKanvanCards],
  );

  const handleUpdateTitle = useCallback((cardId, title) => {
    setKanvanCards((prev) => ({
      ...prev,
      [stateName]: prev[stateName].map((card) =>
        card.id === cardId ? { ...card, title } : card,
      ),
    }));
  });

  const handleDragStart = (e) => {
    console.log('드래그 시작');
    e.dataTransfer.setData('card', JSON.stringify(card));
    console.log(e.target.getBoundingClientRect());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragDrop = (e) => {
    e.preventDefault();
    console.log(e.clientX, e.clientY);
    console.log(stateName);
    console.log('드랍', JSON.parse(e.dataTransfer.getData('card')));
  };

  return (
    <DivListLayout>
      <DivStatusWrapper>
        <DivStatusContainer>
          <StatusIcon alt="상태 아이콘" />
          <H2ListStatus>{name}</H2ListStatus>
        </DivStatusContainer>
      </DivStatusWrapper>
      <DivListWrapper>
        <UlListArea>
          {kanvanCards[stateName].map((card) => (
            <KanvanCard
              key={card.id}
              {...card}
              onRemove={handleRemove}
              onUpdate={handleUpdateTitle}
              onDragOver={handleDragOver}
              onDragStart={handleDragStart}
              onDragEnd={handleDragDrop}
            />
          ))}
        </UlListArea>
        <ButtonAdd onClick={handleAdd}>+ 새로 만들기</ButtonAdd>
      </DivListWrapper>
    </DivListLayout>
  );
};

export default KanvanList;

const DivListLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* border-right: 2px solid black; */
  margin-bottom: 250px;

  &:last-child {
    border-right: none;
  }
`;

const DivStatusWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

const DivStatusContainer = styled.div`
  display: flex;
`;

const StatusIcon = styled.img``;

const H2ListStatus = styled.h2`
  font-size: 15px;
`;

const DivListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UlListArea = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 10px 0 10px;
`;

const ButtonAdd = styled.button`
  font-size: 15px;
  background: none;
  background-color: transparent;
  width: 85%;
  border: none;
  cursor: pointer;
  text-align: left;
  color: rgba(51, 51, 51, 0.4);
  height: 2rem;
  border-radius: 5px;

  &:hover {
    background-color: rgba(51, 51, 51, 0.1);
  }
`;
