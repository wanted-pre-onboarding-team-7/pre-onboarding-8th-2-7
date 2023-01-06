사용자 추가하기를 검색기능을 통해 구현합니다.
사용자는 등록된 더미데이터를 기반으로 합니다.

## Assignment8) 사용자 검색기능

- 담당자 : 경지윤
- 코드 : `ModalManagerInput.jsx`, `useDebounce.js` 파일

  - `filterUserByCurrValue` : onChange로 keyword가 계속 갱신 되기때문에 리렌더링시 해당 함수가 계속 재생산되지 않도록 `useCallback` 으로 구현
    - 자동검색 기능은 `filter`와 `includes`를 사용했습니다.

  ```jsx
  // 리렌더링 될때마다 filter되는 함수 재생산되지 않도록 useCallback 사용
  const filterUserByCurrValue = useCallback(() => {
    return USERS.filter((user) => user.includes(keyword));
  }, [keyword]);
  ```

- `useDebounce`
  - keyword 값과 delay 시키고 싶은 시간을 매개변수받음
  - 받은 value 값을 0.5초 지연후에 setter 함수로 상태변경
- `debounceValue`
  - 위에서 작성한 useDebounce 에서 받은 값을 의존성에 추가
  - 해당 값이 변경될때마다 (0.5초 딜레이) filter 함수를 실행시켜 추후 api 호출 코드로 변경 되어도 성능 관련 이슈에 대처하도록함

```jsx
import { useEffect, useState } from 'react';

const useDebounce = (value, delay = 500) => {
  const [debounceVal, setdebounceVal] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebounceVal(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceVal;
};

export default useDebounce;
```

```jsx
import useDebounce from '../../hooks/useDebounce';

const [keyword, setKeyword] = useState();
const [filterdUser, setFilterdUser] = useState([]);
const [isDropdown, setIsDropdown] = useState(false);

const debounceValue = useDebounce(keyword);

useEffect(() => {
  setFilterdUser(filterUserByCurrValue());
}, [debounceValue, setFilterdUser, filterUserByCurrValue]);

// 타이핑 할때마다가 필터링하지 않고 .5초 정도 사용자가 타이핑이 끝났을때 filter하기
const onChange = (evt) => {
  setKeyword(evt.currentTarget.value);
  card.manager = evt.currentTarget.value;
};
```

## Assignment9) 로딩

- 담당자 : 경지윤

- `Home.jsx` > 데이터관련 변경시 로딩컴포넌트 띄우기
  - recoil로 관리되고있는 3가지 상태의 데이터를 `useEffect`의 의존성에 추가
  - 데이터가 변경될때마다 tick함수로 0.5초 동안 로딩컴포넌트를 렌더링하도록 `setIsKanbanChanged`사용

```jsx
  const modalData = useRecoilValue(modalState);
  const todos = useRecoilValue(todoCardsState);
  const progress = useRecoilValue(progressCardsState);
  const done = useRecoilValue(doneCardsState);

  const [isKanbanChanged, setIsKanbanChanged] = useState(false);
  useEffect(() => {
    const tick = () => {
      return setTimeout(() => setIsKanbanChanged(false), 500);
    };
    setIsKanbanChanged(true);
    tick();
    return () => clearTimeout(tick);
  }, [todos, progress, done]);

  return(
  //...중략
    {isKanbanChanged && <DivLoading>로딩중</DivLoading>}
  //... 중략
  )
```

-`Modal.jsx` > form 제출 등 액션 발생시 2번 이상의 중복액션 방지

- setTimeout을 사용하여 0.5초의 딜레이를 발생시킴
- 타이머가 존재하면 등록된 모든 이벤트와 timerId를 제거하도록 코드작성
- 클릭 관련이벤트에 중복 방지 0.5초 딜레이를 모두 적용

```jsx
let timer;
const clickSaveBtn = (event) => {
  event.preventDefault();
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    if (!card.isNoEmpty()) {
      return alert('모든 내용을 입력해주세요');
    }

    if (initialState === card.state) {
      updateSameStateCardsByCard(card);
    } else {
      updateDiffStateCardsByCard(initialState, card);
    }

    updateLocalStorgeId(card.id);
    resetModal();
  }, 500);
};
```
