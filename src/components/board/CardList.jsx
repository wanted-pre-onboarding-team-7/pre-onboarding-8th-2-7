import styled from 'styled-components';
import Card from './Card';

const CardList = ({ type, stateColor, data, clickDeleteButton }) => {
  return (
    <DivContainer>
      <DivListHeader>
        <BtnStateColor stateColor={stateColor}></BtnStateColor>
        {type}
      </DivListHeader>
      {data.map((card) => (
        <Card key={card.id} {...card} clickDeleteButton={clickDeleteButton} />
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
