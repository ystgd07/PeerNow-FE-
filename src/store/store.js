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
