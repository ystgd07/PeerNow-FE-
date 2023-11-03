import { create } from 'zustand';

export const useHover = create((set) => ({
  hover: false,
  setHover: (hover) => set((state) => ({ hover: !state.hover })),
}));

export const useProjectModal = create((set) => ({
  pjtModal: false,
  setPjtModal: (pjtModal) => set((state) => ({ pjtModal: !state.pjtModal })),
  setPjtModalFalse: () => set({ pjtModal: false }),
}));

export const useOpenMainPage = create((set) => ({
  openMainPage: true,
  setOpenMainPage: (openMainPage) =>
    set((state) => ({ openMainPage: !state.openMainPage })),
}));

export const useOpenMypage = create((set) => ({
  openMypage: false,
  setOpenMypage: (openMypage) =>
    set((state) => ({ openMypage: !state.openMypage })),
}));

export const useCreatePjtOne = create((set) => ({
  pjtObj: {
    title: '',
    detail: '',
    peer_id: {},
    start_date: new Date(),
    end_date: new Date(),
  },
  isValidPjt1: false,
  isValidPjt2: false,
  peerName: '',
  page: 1,
  setPjtTitle: (title) =>
    set((state) => ({ pjtObj: { ...state.pjtObj, title } })),

  setPjtDetail: (detail) =>
    set((state) => ({ pjtObj: { ...state.pjtObj, detail } })),

  setPjtStartDate: (start_date) =>
    set((state) => ({ pjtObj: { ...state.pjtObj, start_date } })),

  setPjtEndDate: (end_date) =>
    set((state) => ({ pjtObj: { ...state.pjtObj, end_date } })),

  setPjtObj: (pjtObj) => set((state) => ({ pjtObj })),
  setPeerName: (peerName) => set((state) => ({ peerName })),

  setIsValidPjt1: (pjtObj) =>
    set((state) => ({
      isValidPjt1:
        state.pjtObj.title.length > 0 &&
        state.pjtObj.detail.length > 0 &&
        state.pjtObj.start_date < state.pjtObj.end_date,
    })),

  setIsValidPjt2: (pjtObj) =>
    set((state) => ({
      isValidPjt2: Object.keys(state.pjtObj.peer_id).length > 0,
    })),

  setNextPage: (page) => set((state) => ({ page: 2 })),
  setPrevPage: (page) => set((state) => ({ page: 1 })),
}));

export const useLoginAndCreateAccount = create((set) => ({
  loginObj: {
    id: '',
    pw: '',
  },
  createAccountObj: {
    id: '',
    pw: '',
    name: '',
  },
  checkPw: '',
  isValidLogin: false,
  isValidCreateAccount: false,
  setpwCheck: false,

  setLoginValid: (loginObj) =>
    set((state) => ({
      isValidLogin:
        state.loginObj.id.length > 0 && state.loginObj.pw.length > 0,
    })),

  setCreateAccountValid: (createAccountObj) =>
    set((state) => ({
      isValidCreateAccount:
        state.createAccountObj.id.length > 0 &&
        state.createAccountObj.pw.length > 0 &&
        state.createAccountObj.name.length > 0 &&
        state.createAccountObj.pw === state.checkPw,
    })),

  setId: (id) => set((state) => ({ loginObj: { ...state.loginObj, id } })),

  setpw: (pw) => set((state) => ({ loginObj: { ...state.loginObj, pw } })),

  setAccountId: (id) =>
    set((state) => ({ createAccountObj: { ...state.createAccountObj, id } })),

  setAccountpw: (pw) =>
    set((state) => ({
      createAccountObj: { ...state.createAccountObj, pw },
    })),

  setName: (name) =>
    set((state) => ({ createAccountObj: { ...state.createAccountObj, name } })),

  setCheckPw: (checkPw) => set((state) => ({ checkPw })),

  setCheckPwVaild: (checkPw) =>
    set((state) => ({
      setpwCheck: state.createAccountObj.pw === state.checkPw,
    })),
}));

export const useBackLogPage = create((set) => ({
  isBackLogModalOpen: false,
  setBackLogModalOpen: (isBackLogModalOpen) =>
    set((state) => ({ isBackLogModalOpen: !state.isBackLogModalOpen })),
  // set((state) => ({ isBackLogModalOpen: !state.isBackLogModalOpen })),
  setBackLogModalOpenFalse: () => set({ isBackLogModalOpen: false }),
}));
