import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { USERS } from '../../utils/dummyData';
import Dropdown from '../modal/Dropdown';
import useDebounce from '../../hooks/useDebounce';
import { useCallback } from 'react';

const ModalManagerInput = ({ card }) => {
  const [keyword, setKeyword] = useState();
  const [filterdUser, setFilterdUser] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false);
  const debounceValue = useDebounce(keyword);

  useEffect(() => {
    if (card.manager) {
      setKeyword(card.manager);
    }
  }, []);

  // 리렌더링 될때마다 filter되는 함수 재생산되지 않도록 useCallback 사용
  const filterUserByCurrValue = useCallback(() => {
    return USERS.filter((user) => user.includes(keyword));
  }, [keyword]);

  useEffect(() => {
    setFilterdUser(filterUserByCurrValue());
  }, [debounceValue, setFilterdUser, filterUserByCurrValue]);

  const setValue = (value) => {
    card.manager = value;
    setKeyword(value);
  };
  // 검색 기능에 디바운싱 적용
  // 타이핑 할때마다가 필터링하지 않고 .5초 정도 사용자가 타이핑이 끝났을때 filter하기
  const onChange = (evt) => {
    setKeyword(evt.currentTarget.value);
  };
  // 포커스 아웃되었을때
  // action 순서 딜레이 해주기 => 이름클릭시 input 먼저 채워지고 DropDown 렌더링 없애기
  const onBlurAction = () => {
    const tick = () => {
      setTimeout(() => {
        setIsDropdown(false);
      }, 200);
    };
    tick();
  };

  return (
    <DivWrapper>
      <InputTitle
        type="text"
        onChange={onChange}
        value={keyword}
        name="manager"
        onFocus={() => setIsDropdown(true)}
        onBlur={onBlurAction}
      />
      {isDropdown && <Dropdown items={filterdUser} setValue={setValue} />}
    </DivWrapper>
  );
};

export default ModalManagerInput;
const DivWrapper = styled.div`
  position: relative;
`;
const InputTitle = styled.input`
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
