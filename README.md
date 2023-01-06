# Team :seven: | 칸반보드 구현하기 (Week 2)

이 레파지토리는 원티드 프리온보딩 프론트엔드 인턴십 2주차 과제를 위해 만들어졌습니다.

팀원들과 토론해 선발과제의 요구사항별로 Best Practice를 도출해 하나의 프로젝트로 만들었습니다.

## :heavy_check_mark: 팀원 소개

<table>
  <tbody >
    <tr >
      <td align="center"><a href="https://github.com/SeokyoungYou"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/79842380?v=4" width="100px; height="100px" alt=""/><br /><sub><b>유서경 (팀장)</b></a><ul><li>프로젝트 총괄</li><li>최종 배포 (Github Actions 사용)</li></sub><br /></td>
      <td align="center"><a href="https://github.com/JiyoonZ"><img style="margin-top: 20px;" src="https://avatars.githubusercontent.com/u/81758576?v=4" width="100px;" alt=""/><br /><sub><b>경지윤</b></sub></a><ul><li>회의록 작성</li><li>Github issue(기능 구현) 생성</li><br /></td>
      <td align="center"><a href=""><img style="margin-top: 20px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56298540?v=4" width="100px;" alt=""/><br /><sub><b>김수진</b></sub></a><ul><li>리드미 구조 작성 및 배분</li><li>Github issue(기능 구현) 생성</li><br /></td>
      <td align="center"><a href="https://github.com/khw970421"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/59253551?v=4" width="100px;" alt=""/><br /><sub><b>김형욱</b></sub></a><ul><li>과제/토론 일정 관리 및 과제 제출</li><li>제출 전 최종 코드 확인</li><br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/eternalclash"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/77526745?v=4" width="100px;" alt=""/><br /><sub><b>이수창</b></sub></a><ul><li>CSS theme, constants 파일 총괄</li><li>Best Practice 토론 총괄 및 과제 배분</li><br /></td>
      <td align="center"><a href="https://github.com/etoile-j?tab=repositories"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/102905624?v=4" width="100px;" alt=""/><br /><sub><b>임수진</b></sub></a><ul><li>팀/코드 컨벤션 총괄</li><li>제출 전 최종 코드 확인</li><br /></td>
      <td align="center"><a href="https://github.com/ckwlghks123"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/83552466?v=4" width="100px;" alt=""/><br /><sub><b>차지환</b></sub></a><ul><li>프로젝트 기초 세팅 및 폴더/파일 트리 총괄</li><li>Best Practice 토론 총괄 및 과제 배분</li><br /></td>
    </tr>
  </tbody>
</table>

##### :point_right: [팀 컨벤션](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-2-7/wiki/%5B7%ED%8C%80%5D-%ED%8C%80-%EC%BB%A8%EB%B2%A4%EC%85%98) 보러가기

## :heavy_check_mark: 사용 라이브러리 및 툴

<div style="float: left;">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/React Router Dom-CA4245?style=for-the-badge&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/Recoil-3776AB?style=for-the-badge&logo=Recoil&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Husky-808080?style=for-the-badge&logo=husky&logoColor=white">
  
</div>

<br/>

## :heavy_check_mark: 프로젝트 살펴 보기

### :one: 실행 방법

```
git clone https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-2-7.git
cd pre-onboarding-8th-2-7
npm install
npm start
```

### :two: [배포 링크](https://wanted-pre-onboarding-team-7.github.io/pre-onboarding-8th-2-7/)

### :three: 프로젝트 구조

```



```

## :heavy_check_mark: 과제 요구사항에 따른 Best Practice

꼭 Best Practice로 선정되지 않아도 스스로 공부해보고 싶은 부분을 담당해 코드를 구현했습니다.

### [Assignment1] 데이터 전역 상태 관리 로직 구현

#### 📝 로컬 데이터 저장 로직 구현 (Recoil-Persist) (Best Practice By <span style="background-color: #BFCFFF">유서경</span> )

- 담당자: 김형욱, 김수진

* 선정 이유: Recoil-Persist라는 라이브러리를 사용하여 로컬 저장 데이터 로직을 구현했습니다.

```js
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const todoCardsState = atom({
  key: 'TodoCards',
  default: DUMMY_KANBAN[KANBAN_STATE.TODOS], //array
  effects: [persistAtom],
});
const progressCardsState = atom({
  key: 'ProgressCards',
  default: DUMMY_KANBAN[KANBAN_STATE.PROGRESS], //array
  effects: [persistAtom],
});
const doneCardsState = atom({
  key: 'DoneCards',
  default: DUMMY_KANBAN[KANBAN_STATE.DONE], //array
  effects: [persistAtom],
});
```

- recoil을 사용한 전역 상태관리

* LocalStorage에 저장되는 로컬 데이터는 recoil-persist를 추가로 사용

### [Assignment2] 칸반보드의 모달창(이슈카드 Read, Update)

#### 📝 Modal 데이터를 atom, selector를 사용하여 전역 관리

- 객체 전역 데이터인 `modalState`를 사용하여 모달창 on/off
- 새로만들기 클릭 시 칸반보드 state 정보를, 카드 클릭 시 카드 데이터 정보를 `modalState`에 전달
- `selector`를 사용하여 `atom`의 정보 변환하여 모달창에 전달

```jsx
export const modalState = atom({
  key: 'ModalState',
  default: {},
});

export const modalCardSelector = selector({
  key: 'modalCardSelector',
  get: ({ get }) => {
    const modal = get(modalState);
    return modal.id !== undefined
      ? { ...modal, isUpdate: true }
      : { state: modal.state, isUpdate: false };
  },
});
```

- `selector`에서 반환하는 값으로 Card 인스턴스를 생성함(인스턴스 팩토리 함수 사용)

```jsx
Modal.js;
const modalData = useRecoilValue(modalCardSelector);
const card = modalData.isUpdate
  ? Card.createCard(modalData)
  : Card.createNewCard(modalData);
```

#### 📝 Card class를 활용한 데이터와 로직 관리

- Modal 컴포넌트에서 데이터 get/set 로직과 필요한 객체 반환 로직을 클래스 인스턴스를 사용하여 처리
- Static method인`createCard` `createNewCard`를 사용하여 기존 카드 생성/ 새로운 카드 생성하는 인스턴스 팩토리 함수 구햔

```jsx
export class Card {
  #id; // 각 필드는 gettet와 setter로 접근 가능
  #title;
  #content;
  #dueDate;
  #manager;
  #state;

  constructor(obj) {
    this.#id = obj.id;
    this.#title = obj.title;
    this.#content = obj.content;
    this.#dueDate = obj.dueDate;
    this.#manager = obj.manager;
    this.#state = obj.state;
  }

  get object() {
    return {
      id: this.#id,
      title: this.#title,
      content: this.#content,
      dueDate: this.#dueDate,
      manager: this.#manager,
      state: this.#state,
    };
  }

  get objectExceptState() {
    return {
      id: this.#id,
      title: this.#title,
      content: this.#content,
      dueDate: this.#dueDate,
      manager: this.#manager,
    };
  }

  get isNewCard() {
    return false;
  }

  isNoEmpty() {
    const values = Object.values(this.object);
    const emptyValues = values.filter((v) => v === '');
    return emptyValues.length === 0;
  }

  static createCard(modalObj) {
    return new Card(modalObj);
  }

  static createNewCard(modalObj) {
    const newCard = {
      id: createNewId(),
      dueDate: getFormattedToday(),
      ...defaultCard,
      state: modalObj.state,
    };
    return new NewCard(newCard);
  }
}

export class NewCard extends Card {
  get isNewCard() {
    return true;
  }
}
```

#### 📝 useUpdateCards 커스텀 훅을 사용한 Cards 배열 데이터 관리

- 모달 창에서 저장 버튼 클릭 시 빈 input 값이 있다면 alert 발생
- 새로운 카드 생성 / 기존 카드 수정에 따라 커스텀 훅 실행

```jsx
const clickSaveBtn = (event) => {
  event.preventDefault();
  if (!card.isNoEmpty()) {
    return alert('모든 내용을 입력해주세요');
  }

  if (initialState === card.state) {
    updateSameStateCardsByCard(card);
  } else {
    updateDiffStateCardsByCard(initialState, card);
  }
};
```

- 전역으로 관리하는 3 개의 상태(배열)을 수정하는 커스텀 훅

```jsx
export const useUpdateCards = () => {
  const [todos, setTodos] = useRecoilState(todoCardsState);
  const [progress, setProgress] = useRecoilState(progressCardsState);
  const [done, setDone] = useRecoilState(doneCardsState);

  const cardsArr = {
    todos: [...todos],
    progress: [...progress],
    done: [...done],
  };

  const setCardsArr = {
    todos: setTodos,
    progress: setProgress,
    done: setDone,
  };

  const updateSameStateCardsByCard = (card) => {
    const newCard = card.isNewCard
      ? createCard(cardsArr[card.state], card)
      : updateCard(cardsArr[card.state], card);
    setCardsArr[card.state](newCard);
  };

  const updateDiffStateCardsByCard = (prevState, card) => {
    const newPrevCards = deleteCard(cardsArr[prevState], card.id);
    const newCard = createCard(cardsArr[card.state], card);

    setCardsArr[prevState](newPrevCards);
    setCardsArr[card.state](newCard);
  };

  return {
    updateSameStateCardsByCard,
    updateDiffStateCardsByCard,
  };
};
```

#### 📝 모달 상태 값 관리

- 담당자: 임수진

```js
import { KANBAN_STATE } from '../../utils/constant';

const ModalStateInput = ({ card }) => {
  const stateRef = useRef(card.state);

  const optionClick = () => {
    card.state = stateRef.current.value;
  };

  return (
    <DivWrapper>
      <select ref={stateRef} defaultValue={stateRef} onChange={optionClick}>
        <option value={KANBAN_STATE.TODOS}>할 일</option>
        <option value={KANBAN_STATE.PROGRESS}>진행 중</option>
        <option value={KANBAN_STATE.DONE}>완료</option>
      </select>
    </DivWrapper>
  );
};
```

- `useRef`로 선택된 값을 받고, `create`ㆍ`read`ㆍ`update`의 모달창이 동일하기 때문에 `create`가 아닐 경우 이미 선택된 값을 받아와 사용
- 각각의 option value는 값이 변하지 않기 때문에 상수를 불러와 사용
