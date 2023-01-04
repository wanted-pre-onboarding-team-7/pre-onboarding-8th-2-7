import styled from 'styled-components';

const Card = ({ title, content, manager, id, status, clickOpenModal }) => {
  return (
    <>
      <DivCard
        onClick={() => {
          clickOpenModal('read', id, status);
        }}
      >
        <DivFlexWrapper>
          <DivCardTitle>
            {title}
            <span>#{id}</span>
          </DivCardTitle>
          <DivDelBtn>
            <div>x</div>
          </DivDelBtn>
        </DivFlexWrapper>
        <DivManager>{manager}</DivManager>
        <DivContent>{content}</DivContent>
      </DivCard>
    </>
  );
};

const DivCard = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 15px;
  padding: 12px 17px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 10px;
  cursor: pointer;
`;
const DivFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DivCardTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  span {
    font-size: 16px;
    font-weight: 300;
  }
`;
const DivManager = styled.div`
  font-size: 14px;
  text-decoration: underline;
`;
const DivContent = styled.div`
  margin-top: 7px;
  height: 55px;
  padding: 3px;
  /* background-color: white; */
  border-radius: 8px;
`;
const DivDelBtn = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.doneColor};
  opacity: 70%;
  text-align: center;
  div {
    opacity: 100%;
    font-weight: 500;
    color: white;
  }
`;

export default Card;
