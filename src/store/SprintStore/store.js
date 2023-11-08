import { format } from 'date-fns';
import { create } from 'zustand';

// [sprint : NewSprintCreatePage.jsx] 스프린트 생성
const initialSprintBackLog = {
  sprintDto: {
    title: '',
    detail: '',
    start_date: new Date(),
    end_date: new Date(),
  },
  backlogDto: [
    // {1},{no:2}
  ],
  selectedBackLog: false,
};

export const createSprint = create((set) => ({
  ...initialSprintBackLog,
  // sprintBacklogDto

  setTitle: (title) =>
    set((state) => ({
      sprintDto: { ...state.sprintDto, title },
    })),

  setDetail: (detail) =>
    set((state) => ({
      sprintDto: { ...state.sprintDto, detail },
    })),

  setStartDate: (start_date) =>
    set((state) => ({
      sprintDto: {
        ...state.sprintDto,
        start_date: start_date,
      },
    })),

  setEndDate: (end_date) =>
    set((state) => ({
      sprintDto: {
        ...state.sprintDto,
        end_date: end_date,
      },
    })),
  //   backlogs
  setBacklogs: (no) =>
    set((state) => ({
      backlogDto: [...new Set(state.backlogDto.concat(no))],
    })),

  setSelectedBackLog: (data) =>
    set((state) => ({
      selectedBackLog: !state.selectedBackLog,
    })),

  setRemoveBackLog: (data) =>
    set((state) => ({
      backlogDto: state.backlogDto.includes(data)
        ? state.backlogDto.filter((e) => e !== data)
        : state.backlogDto.concat(data),
    })),
}));

// [sprint : Sprints.jsx] 스프린트 내용(전체 스프린트)
const initialSprints = {
  datalist: [
    {
      no: null,
      project_no: null,
      user_id: '',
      title: '',
      detail: '',
      start_date: '',
      end_date: '',
      reg_date: '',
      mod_date: '',
    },
  ],
};

export const AllThisSprints = create((set) => ({
  ...initialSprints,

  setDatalist: (res) => set((state) => ({ datalist: res })),
}));
