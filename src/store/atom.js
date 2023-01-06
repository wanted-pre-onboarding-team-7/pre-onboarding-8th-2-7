import { atom, selector } from 'recoil';
import { KANBAN_STATE } from '../utils/constant';
import { DUMMY_KANBAN } from '../utils/dummyData';
import {
  getLocalStorageKanban,
  isKanbanEmpty,
  postDummyData,
  postLocalStorageId,
  postLocalStorageKanban,
} from '../utils/localStorgeFn';

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
    if (modal.id !== undefined) {
      return { ...modal };
    }
    return modal.state;
  },
});

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (isKanbanEmpty()) {
      postDummyData();
      postLocalStorageId(6);
    }
    const savedValue = getLocalStorageKanban(key);

    setSelf(savedValue);

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : postLocalStorageKanban(key, newValue);
    });
  };

const todoCardsState = atom({
  key: 'TodoCards',
  default: DUMMY_KANBAN[KANBAN_STATE.TODOS], //array
  effects: [localStorageEffect(KANBAN_STATE.TODOS)],
});
const progressCardsState = atom({
  key: 'ProgressCards',
  default: DUMMY_KANBAN[KANBAN_STATE.PROGRESS], //array
  effects: [localStorageEffect(KANBAN_STATE.PROGRESS)],
});
const doneCardsState = atom({
  key: 'DoneCards',
  default: DUMMY_KANBAN[KANBAN_STATE.DONE], //array
  effects: [localStorageEffect(KANBAN_STATE.DONE)],
});

export const kanbanCardsState = {
  [KANBAN_STATE.TODOS]: todoCardsState,
  [KANBAN_STATE.PROGRESS]: progressCardsState,
  [KANBAN_STATE.DONE]: doneCardsState,
};
