import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const Dropdown = ({ items, setValue }) => {
  const clickItem = (e) => {
    setValue(e.target.id);
  };

  return (
    <DivWrapper>
      {items.map((item) => (
        <DivItem
          id={item}
          key={item}
          bgColor={theme.border}
          onClick={clickItem}
        >
          {item}
        </DivItem>
      ))}
    </DivWrapper>
  );
};

export default Dropdown;
const DivWrapper = styled.div`
  position: absolute;
  top: 25px;
  z-index: 99;
`;
const DivItem = styled.div`
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 400;
`;
