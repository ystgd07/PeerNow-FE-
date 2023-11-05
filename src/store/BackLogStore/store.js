import { create } from 'zustand';

const initialUseBackLog = {
  searchUser: '',
  searchRes: [
    {
      id: 'btc11',
      pw: '',
      name: '양성수',
      mail: '',
      phone: '',
      team: '',
      image: '',
      grade: '',
      reg_date: '',
      mod_date: '',
    },
  ],
};

export const UseBackLog = create((set) => ({
  ...initialUseBackLog,
  //UseBackLog store의 searchRes 객체에 새로운 객체를 할당해 줌.
  setSearchRes: (Res) => set((state) => ({ searchRes: Res })),
  setSearchUser: (user) => set((state) => ({ searchUser: user })),
  reset: () => set((state) => ({ ...initialUseBackLog })),
}));
