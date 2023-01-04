import Charge from './Charge';
import React from 'react';
import { users } from './../../../utils/dummyData';

const Modal = ({
  id,
  title,
  content,
  dueDate,
  manager,
  userStatus = users,
}) => {
  return (
    <div>
      제목: <input type="text" />
      담당자: <Charge />
      마감일: <input type="datetime-local" />
      상태:
      <select>
        {userStatus.map((user) => (
          <option>{user}</option>
        ))}
      </select>
      내용: <textarea />
    </div>
  );
};

export default Modal;
