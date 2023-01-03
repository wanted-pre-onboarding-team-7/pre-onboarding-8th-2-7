import React from 'react';
import styled from 'styled-components';
import KanvanCard from './KanvanCard';

const KanvanList = ({ name, data }) => {
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
          {data.map((card) => (
            <KanvanCard key={card.id} {...card} />
          ))}
        </UlListArea>
      </DivListWrapper>
    </DivListLayout>
  );
};

export default KanvanList;

const DivListLayout = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid black;

  &:last-child {
    border-right: none;
  }
`;

const DivStatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`;

const DivStatusContainer = styled.div`
  display: flex;
`;

const StatusIcon = styled.img``;

const H2ListStatus = styled.h2`
  font-size: 15px;
`;

const DivListWrapper = styled.div``;

const UlListArea = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
