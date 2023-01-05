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
      id: 9,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '김형욱',
    },
    {
      id: 1,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '임수진',
    },
    {
      id: 15,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '임수진',
    },
    {
      id: 14,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '임수진',
    },
  ],
  [KANBAN_STATE.PROGRESS]: [
    {
      id: 1,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '김수진',
    },
    {
      id: 2,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '김수진',
    },
  ],
  [KANBAN_STATE.DONE]: [
    {
      id: 3,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '이수창',
    },
    {
      id: 4,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '김형욱',
    },
  ],
};
