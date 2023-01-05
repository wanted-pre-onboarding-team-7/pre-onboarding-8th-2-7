import React from 'react';
import styled from 'styled-components';

const AddBtn = ({ setModal, setInfo }) => {
  return (
    <DivWrapper
      onClick={() => {
        setInfo();
        setModal(true);
      }}
    >
      <div>새로 만들기</div>
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  cursor: pointer;
`;
export default AddBtn;
