import { KANBAN_STATE } from './constant';

export const isKanbanEmpty = async () => {
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
export const saveLocalStorageKanban = async (key, cards) => {
  return localStorage.setItem(key, JSON.stringify(cards));
};

// export const getLocalStorageTodos = () => {
//   const cards = localStorage.getItem(KANBAN_STATE.TODOS);
//   if (cards === null) {
//     return cards;
//   }
//   return JSON.parse(cards);
// };
// export const saveLocalStorageTodos = (cards) => {
//   return localStorage.setItem(KANBAN_STATE.TODOS, JSON.stringify(cards));
// };
