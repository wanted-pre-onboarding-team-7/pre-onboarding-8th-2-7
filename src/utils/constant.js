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
    ICON: 'π‘',
    NAME: 'ν  μΌ',
  },
  [KANBAN_STATE.PROGRESS]: {
    ICON: 'βΆοΈ',
    NAME: 'μ§ν μ€',
  },
  [KANBAN_STATE.DONE]: {
    ICON: 'βοΈ',
    NAME: 'μλ£',
  },
};

export const MODAL_ROWS = {
  manager: {
    id: 'manager',
    labelText: 'λ΄λΉμ',
    type: 'text',
  },
  dueDate: {
    id: 'dueDate',
    labelText: 'λ§κ°μΌ',
    type: 'datetime-local',
  },
  state: {
    id: 'state',
    labelText: 'μν',
    type: 'text',
  },
};
