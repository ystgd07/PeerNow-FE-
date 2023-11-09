import { create } from 'zustand';

// 칸반보드
const initialKanbanData = {
  datalist: [
    {
      no: 0,
      sprint_no: 0,
      user_id: '',
      title: '',
      detail: '',
      status: '',
      image: '',
      reg_date: '',
      mod_date: '',
    },
  ],
};

export const useKanbanData = create((set) => ({
  ...initialKanbanData,

  setKanbanData: (res) => set((state) => ({ datalist: res })),
}));
