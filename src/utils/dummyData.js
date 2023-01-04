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
      title:
        '팀프로젝트 회의 dfvdfvdsfvsdfvsdfvdsfvdsvfdsvfdvdvfdvfdsvfddsfvdsfvdfvvdsvsdfvdfsvdsvvdsfvdfsvdfsvfdsvsvdvsdfv',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      author: [
        '차지환',
        '이상조',
        '전세현',
        '고나현',
        '김동한',
        '김동한',
        '김동한',
        '김동한',
        '김동한',
        '김동한',
        '김동한',
        '김동한',
        '김동한',
      ],
    },
    {
      id: 6,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      author: [],
    },
  ],
  [KANBAN_STATE.PROGRESS]: [
    {
      id: 1,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      author: [],
    },
    {
      id: 2,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      author: [],
    },
  ],
  [KANBAN_STATE.DONE]: [
    {
      id: 3,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      author: [],
    },
    {
      id: 4,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      author: [],
    },
  ],
};
