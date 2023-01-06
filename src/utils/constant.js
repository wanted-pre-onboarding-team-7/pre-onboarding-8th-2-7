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

export const MODAL_ROWS = {
  manager: {
    id: 'manager',
    labelText: '담당자',
    type: 'text',
  },
  dueDate: {
    id: 'dueDate',
    labelText: '마감일',
    type: 'datetime-local',
  },
  state: {
    id: 'state',
    labelText: '상태',
    type: 'text',
  },
};
