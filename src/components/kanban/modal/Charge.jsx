import React from 'react';
import styled from 'styled-components';

const Charge = ({ searchArr, changeInputValue, checkEnter, chargeRef }) => {
  return (
    <div>
      <Input
        type="text"
        onChange={changeInputValue}
        onKeyUp={checkEnter}
        ref={chargeRef}
      />
      <Ul>
        {searchArr.map((v) => (
          <Li>{v}</Li>
        ))}
      </Ul>
    </div>
  );
};

const Input = styled.input`
  width: 200px;
`;

const Ul = styled.ul`
  width: 200px;
  position: absolute;
  background-color: white;
  border: 1px solid black;
`;

const Li = styled.li`
  padding: 5px 10px;
`;

export default Charge;
