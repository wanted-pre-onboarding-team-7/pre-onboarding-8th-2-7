import styled from 'styled-components';
import Card from './Card';
import { getCardsByStore, setCardsByStore } from '../../store/cardStore';

const CardList = ({ type, stateColor, status, setCards, data, clickCard }) => {
  const cards = getCardsByStore('kanbanBoard');
  // delete
  const clickDeleteButton = (id) => {
    const result = {
      ...cards,
      [status]: data.filter((prev) => prev.id !== id),
    };
    setCards(result);
    setCardsByStore('kanbanBoard', result);
  };

  return (
    <DivContainer>
      <DivListHeader>
        <BtnStateColor stateColor={stateColor}></BtnStateColor>
        {type}
      </DivListHeader>
      {data?.map((card) => (
        <Card
          key={card.id}
          {...card}
          clickCard={clickCard}
          setCards={setCards}
          clickDeleteButton={clickDeleteButton}
          status={status}
        />
      ))}
    </DivContainer>
  );
};

export default CardList;

const DivContainer = styled.div`
  width: 20vw;
  margin: 15px;
`;

const DivListHeader = styled.div`
  padding: 5px;
  font-size: 22px;
  font-weight: 600;
`;

const BtnStateColor = styled.button`
  width: 22px;
  height: 22px;
  margin-right: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.stateColor};
`;
