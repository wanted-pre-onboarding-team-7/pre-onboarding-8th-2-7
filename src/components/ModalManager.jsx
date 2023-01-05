import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { users } from '../utils/dummyData';

const ModalManager = ({ managerRef, issueValue }) => {
  const [keyword, setKeyword] = useState(issueValue || '');
  const [keywordList, setKeywordList] = useState([]);
  const [isActiveInput, setIsActiveInput] = useState(false);
  useEffect(() => {
    // 초기화면에도 update 되기때문에 자동완성창이 계속 떠있기때문에
    // isActiveInput 으로 추가사용
    updateKeywordList();
  }, [keyword]);
  const changeManager = (e) => {
    setKeyword(e.currentTarget.value);
    setIsActiveInput(true);
  };
  const blurResetSearch = () => {
    setKeywordList([]);
    setIsActiveInput(false);
  };
  const updateKeywordList = () => {
    const filteredKeyword = users.filter((ele) => ele.includes(keyword));
    setKeywordList(filteredKeyword);
  };
  const clickKeyword = (ele) => {
    blurResetSearch();
    setKeyword(ele);
  };

  return (
    <div>
      <div className="label">담당자</div>
      <Input
        onChange={changeManager}
        onBlur={blurResetSearch}
        type="text"
        required
        ref={managerRef}
        defaultValue={issueValue}
        value={keyword || ''}
      />
      {keywordList.length && isActiveInput ? (
        <SearchContainer>
          <ul>
            {keywordList.map((ele, idx) => (
              <SearchResult
                onClick={() => {
                  clickKeyword(ele);
                }}
                key={idx}
              >
                {ele}
              </SearchResult>
            ))}
          </ul>
        </SearchContainer>
      ) : (
        ''
      )}
    </div>
  );
};

const Input = styled.input`
  width: 80%;
  height: 30px;
`;
const SearchContainer = styled.div`
  width: 75%;
  position: absolute;
  top: 90px;
  border: 1px solid black;
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  margin-left: 95px;
  z-index: 9999;
  padding: 10px;
  text-align: start;
`;
const SearchResult = styled.li`
  margin-bottom: 3px;
  height: 20px;
  &:hover {
    font-weight: 500;
  }
  cursor: pointer;
`;
export default ModalManager;
