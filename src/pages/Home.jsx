import React from 'react';
import KanBanHeader from '../components/KanbanHeader.jsx';
import styled from 'styled-components';

const Home = () => {
  return (
    <DivContainer>
      <KanBanHeader />
    </DivContainer>
  );
};

export default Home;

const DivContainer = styled.div``;
