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
  pjtNoForPeer: '',
  pjtNo: '',
};

export const usePeerEv = create((set) => ({
  ...initialPeerEv,
  ...initialPeerListOfProject,

  setPeerEvNo: (p_no) =>
    set((state) => ({ peerEvDto: { ...state.peerEvDto, p_no } })),

  setUserId: (u_id) =>
    set((state) => ({ peerEvDto: { ...state.peerEvDto, u_id } })),

  setAvg: (avg) => set((state) => ({ peerEvDto: { ...state.peerEvDto, avg } })),

  setBest: (best) =>
    set((state) => ({ peerEvDto: { ...state.peerEvDto, best } })),

  setPjtNoForPeer: (data) =>
    set((state) => ({
      pjtNoForPeer: data,
    })),

  setPjtUserIdForPeer: (data) =>
    set((state) => ({
      pjtNo: data,
    })),

  setPeerId: (peerList) =>
    set((state) => ({
      peer_id: peerList,
    })),

  setPeerEvDto: (dto) => set((state) => ({ peerEvDto: dto })),
  setPeerList: (list) => set((state) => ({ peerList: list })),
}));

export const useTogetherPeerEv = create((set) => ({
  togetherPeerDto: {
    score1: null,
    score2: null,
    score3: null,
    score4: null,
    score5: null,
    comment1: '',
    comment2: '',
  },
  selectPeerId: '',
  selectedName: '',

  setSelectedPeerId: (peerId) =>
    set((state) => ({
      selectPeerId: peerId,
    })),

  setSelectedName: (sName) =>
    set((state) => ({
      selectedName: sName,
    })),

  setSelectedScore1: (selectedNum) =>
    set((state) => ({
      togetherPeerDto: {
        ...state.togetherPeerDto,
        score1: selectedNum,
      },
    })),

  setSelectedScore2: (selectedNum) =>
    set((state) => ({
      togetherPeerDto: {
        ...state.togetherPeerDto,
        score2: selectedNum,
      },
    })),
  setSelectedScore3: (selectedNum) =>
    set((state) => ({
      togetherPeerDto: {
        ...state.togetherPeerDto,
        score3: selectedNum,
      },
    })),
  setSelectedScore4: (selectedNum) =>
    set((state) => ({
      togetherPeerDto: {
        ...state.togetherPeerDto,
        score4: selectedNum,
      },
    })),
  setSelectedScore5: (selectedNum) =>
    set((state) => ({
      togetherPeerDto: {
        ...state.togetherPeerDto,
        score5: selectedNum,
      },
    })),
  setComment1: (comment_1) =>
    set((state) => ({
      togetherPeerDto: {
        ...state.togetherPeerDto,
        comment1: comment_1,
      },
    })),
  setComment2: (comment_2) =>
    set((state) => ({
      togetherPeerDto: {
        ...state.togetherPeerDto,
        comment2: comment_2,
      },
    })),
}));
