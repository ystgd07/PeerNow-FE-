import { create } from 'zustand';

export const PjtNumNow = create((set) => ({
  nowNum: 1,
  setNowNum: (project) => set({ nowNum: project }),
}));
