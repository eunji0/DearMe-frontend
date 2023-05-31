import { atom, useRecoilState } from 'recoil';

export const usernameState = atom({
  key: 'usernameState',
  default: '',
});

export const yearState = atom({
  key: 'yearState',
  default: 0, // 초기값 설정
});

export const monthState = atom({
  key: 'monthState',
  default: 0, // 초기값 설정
});

export const dayState = atom({
  key: 'dayState',
  default: 0, // 초기값 설정
});