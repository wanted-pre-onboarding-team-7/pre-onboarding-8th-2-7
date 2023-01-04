import { atom, atomFamily, selectorFamily } from 'recoil';
import { KANBAN_STATE } from '../utils/constant';
import { DUMMY_KANBAN } from '../utils/dummyData';
import {
  getLocalStorageKanban,
  isKanbanEmpty,
  postDummyData,
  postLocalStorageKanban,
} from '../utils/localStorgeFn';

export const clickedKanbanState = atom({
  key: 'clickedKanbanState',
  default: KANBAN_STATE.TODOS,
});
export const isModalState = atom({
  key: 'isModalState',
  default: false,
});

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (isKanbanEmpty()) {
      postDummyData();
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
