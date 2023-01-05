import { useEffect, useState } from 'react';
import { users } from '../utils/dummyData';

const Manager = ({ keyword, setKeyword }) => {
  const [filtered, setFiltered] = useState([]);

  const search = () => {
    const filterd = users.filter((user) => user.includes(keyword));
    setFiltered(filterd);
    console.log(filterd);
  };
  useEffect(() => {
    search();
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={keyword}
      ></input>
      <ul>
        {filtered.map((user, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setKeyword(user);
              }}
            >
              {user}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Manager;
