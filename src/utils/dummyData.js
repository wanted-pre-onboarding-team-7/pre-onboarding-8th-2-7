import { KANBAN_STATE } from './constant';

export const USERS = [
  '유서경',
  '이수창',
  '경지윤',
  '김수진',
  '임수진',
  '차지환',
  '김형욱',
];

export const DUMMY_KANBAN = {
  [KANBAN_STATE.TODOS]: [
    {
      id: 0,
      title: '팀프로젝트 회의',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '유서경',
    },
    {
      id: 6,
      title: '세션 수강하기',
      content:
        'Clean Code와 소프트웨어를 유연하고 확장성있게 만드는 법. (Clena Code / SRP / DIP / 횡단 관심사 / Custom Hook / Context API)',
      dueDate: '2023-01-12T19:30',
      manager: '이수창',
    },
  ],
  [KANBAN_STATE.PROGRESS]: [
    {
      id: 1,
      title: '배포',
      content: 'GitHub Actions 사용하여 CD 구축하기',
      dueDate: '2023-01-13T19:30',
      manager: '경지윤',
    },
    {
      id: 2,
      title: '팀 스터디',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '김수진',
    },
  ],
  [KANBAN_STATE.DONE]: [
    {
      id: 3,
      title: '1 주차 미션 회고',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '임수진',
    },
    {
      id: 4,
      title: '새로운 미션 구현 사항 정리하기',
      content: 'Best practice 찾기',
      dueDate: '2023-01-12T19:30',
      manager: '차지환',
    },
  ],
};
