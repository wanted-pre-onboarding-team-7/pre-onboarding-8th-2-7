import { recoilPersist } from 'recoil-persist';
import { atom, selectorFamily } from 'recoil';
// import { KANBAN_STATE } from './constant';
import { kanbanBoard } from '../utils/dummyData';

const { persistAtom } = recoilPersist({
  key: 'KanvanCards',
  storage: localStorage,
});

export const cardState = atom({
  key: 'cardState',
  // default: {
  //   [KANBAN_STATE.TODOS]: [],
  //   [KANBAN_STATE.PROGRESS]: [],
  //   [KANBAN_STATE.DONE]: [],
  // },
  default: kanbanBoard,
  effects_UNSTABLE: [persistAtom],
});

export const toggleModal = atom({
  key: 'toggleModal',
  default: false,
});

export const selectedCardId = atom({
  key: 'selectedCardId',
  default: {
    id: 0,
    status: '',
  },
});

export const getCardState = selectorFamily({
  key: 'getCardState',
  get:
    ({ id, status }) =>
    ({ get }) =>
      get(cardState)[status].find((card) => card.id === id),
});
