import { atom, selector } from 'recoil';

import { DUMMY_KANBAN } from '../utils/dummyData';
import { KANBAN_STATE } from '../utils/constant';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const dragState = atom({
  key: 'DragState',
  default: {},
});
export const dragOverState = atom({
  key: 'DragOverState',
  default: {},
});

export const modalState = atom({
  key: 'ModalState',
  default: {},
});

export const modalCardSelector = selector({
  key: 'modalCardSelector',
  get: ({ get }) => {
    const modal = get(modalState);
    return modal.id ? modal : modal.state;
  },
});

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

export const kanbanCardsState = {
  [KANBAN_STATE.TODOS]: todoCardsState,
  [KANBAN_STATE.PROGRESS]: progressCardsState,
  [KANBAN_STATE.DONE]: doneCardsState,
};
