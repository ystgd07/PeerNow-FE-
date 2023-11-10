import { create } from 'zustand';

const initialUseBurnDown = {
  burnDownObj: {
    no: 0,
    ori_no: 0,
    sprint_no: '5',
    lapse: 0,
    task: 0,
    done_job: '10',
    sub_day: 0,
    start_date: new Date(),
    end_date: new Date(),
    reg_date: new Date(),
    mod_date: new Date(),
  },
};

export const useBurnDown = create((set) => ({
  ...initialUseBurnDown,
  setBurnDownObj: (burnDownObj) =>
    set((state) => ({ burnDownObj: burnDownObj })),
}));
