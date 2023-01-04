import { atom } from 'recoil';
import { KANBAN_STATE } from '../utils/constant';

export const creatBtnState = atom({
  key: 'creatBtnState',
  default: KANBAN_STATE.TODOS,
});
export const isModalState = atom({
  key: 'isModalState',
  default: false,
});
