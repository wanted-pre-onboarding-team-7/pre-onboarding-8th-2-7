import styled from 'styled-components';

const CardList = ({ type, stateColor, data }) => {
  return (
    <DivContainer>
      <DivListHeader>
        <BtnStateColor stateColor={stateColor}></BtnStateColor>
        {type}
      </DivListHeader>
      {data.map((card) => console.log(card.id))}
    </DivContainer>
  );
};

export default CardList;

const DivContainer = styled.div`
  width: 30vw;
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
