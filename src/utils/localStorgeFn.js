import { KANBAN_COLS, KANBAN_STATE } from './constant';
import { DUMMY_KANBAN } from './dummyData';

export const isKanbanEmpty = () => {
  const isEmpty =
    getLocalStorageKanban(KANBAN_STATE.TODOS).length === 0 &&
    getLocalStorageKanban(KANBAN_STATE.PROGRESS).length === 0 &&
    getLocalStorageKanban(KANBAN_STATE.DONE).length === 0;
  return isEmpty;
};

export const getLocalStorageKanban = (key) => {
  const cards = localStorage.getItem(key);
  if (cards === null) {
    return [];
  }
  return JSON.parse(cards);
};
export const postLocalStorageKanban = (key, cards) => {
  return localStorage.setItem(key, JSON.stringify(cards));
};
export const postDummyData = () => {
  KANBAN_COLS.map((key) => postLocalStorageKanban(key, DUMMY_KANBAN[key]));
};
