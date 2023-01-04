export const KANBAN_STATE = {
  TODOS: 'todos',
  PROGRESS: 'progress',
  DONE: 'done',
};

export const KANBAN_COLS = [
  KANBAN_STATE.TODOS,
  KANBAN_STATE.PROGRESS,
  KANBAN_STATE.DONE,
];

export const KANBAN_TITLE = {
  [KANBAN_STATE.TODOS]: {
    ICON: '💡',
    NAME: '할 일',
  },
  [KANBAN_STATE.PROGRESS]: {
    ICON: '▶️',
    NAME: '진행 중',
  },
  [KANBAN_STATE.DONE]: {
    ICON: '✔️',
    NAME: '완료',
  },
};
