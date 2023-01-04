import DragNDrop from '../components/DragNDrop';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import { defaultData } from '../utils/dummyData';
import AddBtn from '../components/AddBtn';
import DetailComponent from '../components/DetailComponent';
function Home() {
  const [data, setData] = useState();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('List')) {
      console.log(localStorage.getItem('List'));
      setData(JSON.parse(localStorage.getItem('List')));
    } else {
      setData(defaultData);
    }
  }, [setData]);
  return (
    <DivMain>
      <DivLeft>
        <AddBtn setModal={setModal}/>
      </DivLeft>
      <DragNDrop data={defaultData} />
      {modal && <DetailComponent/>}
    </DivMain>
  );
}
const DivMain = styled.div`
  width:80%;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin: 0 auto;

`
const DivLeft = styled.div`
display:flex;
justify-content:flex-end;
`
export default Home;
