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
      status: 'todos',
      author: [
        '피카츄',
        '라이츄',
        '파이리',
        '꼬부기',
        '버터풀',
        '야도란',
        '피죤투',
        '또가스',
        '디그다',
        '윤겔라',
        '잉어킹',
        '꼬마돌',
        '근육몬',
      ],
    },
    {
      id: 6,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      status: 'todos',
      author: [],
    },
  ],
  [KANBAN_STATE.PROGRESS]: [
    {
      id: 1,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      status: 'progress',
      author: [],
    },
    {
      id: 2,
      title: '',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      status: 'progress',
      author: [],
    },
  ],
  [KANBAN_STATE.DONE]: [
    {
      id: 3,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      status: 'done',
      author: [],
    },
    {
      id: 4,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      status: 'done',
      author: [],
    },
  ],
};
