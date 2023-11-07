import { create } from 'zustand';

// [sprint : NewSprintCreatePage.jsx] 스프린트 생성
// const initialSprintBackLog = {
//   sprintBacklogDto: {
//     title: '',
//     detail: '',
//     backlog_no: [],
//     start_date: '',
//     end_date: '',
//   },
//   backlogs: [],
// };

const initialSprintBackLog = {
  sprintDto: {
    title: 'JWT 생성',
    detail: 'spring security 공부',
    start_date: '2023-10-23',
    end_date: '2023-10-30',
  },
  backlogDto: [
    // { no: 1 }, { no: 2 }
  ],
};

export const createSprint = create((set) => ({
  ...initialSprintBackLog,
  // sprintBacklogDto
  setTitle: (title) =>
    set((state) => ({
      sprintBacklogDto: { ...state.sprintBacklogDto, title },
    })),
  setDetail: (detail) =>
    set((state) => ({
      sprintBacklogDto: { ...state.sprintBacklogDto, detail },
    })),
  setStartDate: (start_date) =>
    set((state) => ({
      sprintBacklogDto: { ...state.sprintBacklogDto, start_date },
    })),
  setEndDate: (end_date) =>
    set((state) => ({
      sprintBacklogDto: { ...state.sprintBacklogDto, end_date },
    })),
  //   backlogs
  setBacklogs: (no) =>
    set((state) => ({
      backlogDto: [...state.backlogDto, { no }],
    })),
}));

// [sprint : BacklogIcon.jsx] 스프린트에 미등록된 백로그 목록
const initialnoSprintBacklog = {
  datalist: [
    {
      no: null,
      project_no: null,
      sprint_no: null,
      user_id: '',
      title: '',
      detail: '',
      status: '',
      reg_date: '',
      mod_date: '',
    },
  ],
};

export const addNoSprintBacklogs = create((set) => ({
  ...initialnoSprintBacklog,

  setDatalist: (res) => set((state) => ({ datalist: res })),
}));
