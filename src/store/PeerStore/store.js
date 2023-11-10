import { create } from 'zustand';

const initialPeerEv = {
  peerEvDto: {
    no: 0,
    user_id: '',
    avg: 0,
    best: '',
    peer_id: {},
  },
};

const initialPeerListOfProject = {
  peerList: [],
};

export const usePeerEv = create((set) => ({
  ...initialPeerEv,

  setPeerEvNo: (p_no) =>
    set((state) => ({ peerEvDto: { ...state.peerEvDto, p_no } })),
  setUserId: (u_id) =>
    set((state) => ({ peerEvDto: { ...state.peerEvDto, u_id } })),
  setAvg: (avg) => set((state) => ({ peerEvDto: { ...state.peerEvDto, avg } })),
  setBest: (best) =>
    set((state) => ({ peerEvDto: { ...state.peerEvDto, best } })),

  setPeerId: (peerList) =>
    set((state) => ({
      peer_id: peerList,
    })),

  setPeerEvDto: (dto) => set((state) => ({ peerEvDto: dto })),
  setPeerList: (list) => set((state) => ({ peerList: list })),
}));
