import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components';

const Gate = ({ children }) => {
  const $modalRoot = document.querySelector('#modal');

  return ReactDOM.createPortal(children, $modalRoot);
};

const Portal = ({ children }) => {
  return (
    <Gate>
      <DivModalWrapper>{children}</DivModalWrapper>
    </Gate>
  );
};

export default Portal;

const DivModalWrapper = styled.div`
  position: fixed;
  top: 0;
  display: grid;
  place-items: center;
  background-color: rgba(128, 128, 128, 0.4);
  height: 100vh;
  width: 100%;
  z-index: 0;
`;
