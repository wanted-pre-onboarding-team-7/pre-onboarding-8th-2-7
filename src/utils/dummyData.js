import { KANBAN_STATE } from './constant';

export const users = [
  '유서경',
  '이수창',
  '경지윤',
  '김수진',
  '임수진',
  '차지환',
  '김형욱',
];

export const kanbanBoard = {
  [KANBAN_STATE.TODOS]: [
    {
      id: 0,
      title: '팀프로젝트 회의',
      magager: '유서경',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
    },
    {
      id: 6,
      title: '팀프로젝트 회의',
      magager: '이수창',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
    },
  ],
  [KANBAN_STATE.PROGRESS]: [
    {
      id: 1,
      title: '팀프로젝트 회의',
      magager: '경지윤',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
    },
    {
      id: 2,
      title: '팀프로젝트 회의',
      magager: '김수진',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
    },
  ],
  [KANBAN_STATE.DONE]: [
    {
      id: 3,
      title: '팀프로젝트 회의',
      magager: '임수진',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
    },
    {
      id: 4,
      title: '팀프로젝트 회의',
      magager: '차지환',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
    },
  ],
};
