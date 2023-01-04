import DragNDrop from '../components/DragNDrop';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { defaultData } from '../utils/dummyData';
function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    if (localStorage.getItem('List')) {
      console.log(localStorage.getItem('List'));
      setData(JSON.parse(localStorage.getItem('List')));
    } else {
      setData(defaultData);
    }
  }, [setData]);
  return<DragNDrop data={defaultData} />
}

export default Home;
                        