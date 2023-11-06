import { create } from 'zustand';
// /api/user/detail
const initialUserMain = {
  userMainData: {
    id: '',
    pw: '',
    name: '',
    mail: '',
    phone: '',
    team: '',
    image: '',
    grade: '',
    reg_date: new Date(),
    mod_date: new Date(),
  },
  isOpenDropdown: false,
};

export const useUserMain = create((set) => ({
  ...initialUserMain,

  setIsOpenDropdown: (isOpenDropdown) =>
    set((state) => ({ isOpenDropdown: !state.isOpenDropdown })),

  setUserMainData: (userMainData) =>
    set((state) => ({ userMainData: userMainData })),
  reset: () => set((state) => ({ ...initialUserMain })),
}));
