import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { kanbanBoard } from '../utils/dummyData';

const { persistAtom } = recoilPersist({
  key: 'issueList',
  storage: localStorage,
});

export const issueListState = atom({
  key: 'issueList',
  default: kanbanBoard,
  effects_UNSTABLE: [persistAtom],
});
