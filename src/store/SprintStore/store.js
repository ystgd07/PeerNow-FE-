import { create } from 'zustand';

// [sprint : NewSprintCreatePage.jsx] 스프린트 생성
const initialSprintBackLog = {
  sprintBacklogDto: {
    title: '',
    detail: '',
    backlog_no: [],
    start_date: '',
    end_date: '',
  },
  backlogs: [],
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
  setBacklogNo: (backlog_no) =>
    set((state) => ({
      sprintBacklogDto: { ...state.sprintBacklogDto, backlog_no },
    })),
  setStartDate: (start_date) =>
    set((state) => ({
      sprintBacklogDto: { ...state.sprintBacklogDto, start_date },
    })),
  setEndDate: (end_date) =>
    set((state) => ({
      sprintBacklogDto: { ...state.sprintBacklogDto, end_date },
    })),

  // backlogs
  //   addBacklogs: (no) =>
  //     set((state) => ({
  //       backlogs: [...state.backlogs, { no }],
  //     })),
}));

// [sprint : BacklogIcon.jsx] 스프린트에 미등록된 백로그 목록
const initialnoSprintBacklog = {
  noSprintBacklog: [
    {
      no: 0,
      project_no: 0,
      sprint_no: 0,
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
  setNoSprintBacklog: (res) => set((state) => ({ noSprintBacklog: res })),
}));
