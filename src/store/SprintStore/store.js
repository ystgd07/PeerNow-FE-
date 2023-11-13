import { format } from 'date-fns';
import { create } from 'zustand';

// [sprint : NewSprintCreatePage.jsx] 스프린트 생성
const initialSprintBackLog = {
  sprintDto: {
    title: '',
    detail: '',
    start_date: format(new Date(), 'yyyy-MM-dd'),
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
      no: '',
      project_no: '',
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
  recentDate: '',
  setDatalist: (res) => set((state) => ({ datalist: res })),
  setRecentDate: (date) =>
    set((state) => ({
      recentDate: state?.datalist?.reduce((prev, curr) => {
        return new Date(prev?.end_date).getTime() <=
          new Date(curr?.end_date).getTime()
          ? curr
          : prev;
      }).end_date,
      //   recentDate:
      //     new Date(state.datalist[0].end_date).getTime() <=
      //     new Date(state.datalist[1].end_date).getTime()
      //       ? state.datalist[0].end_date
      //       : state.datalist[1].end_date,
    })),
}));

export const useSelectedSprint = create((set) => ({
  projectNo: 0,
  sprintNo: null,
  selectedSprintTitle: '',
  selectedValidate: false,
  // setSprintTitle: (data) => set((state) => ({ selectedSprintTitle: state })),
  // setProjectNo: (data) => set((state) => ({ projectNo: state })),
  // setSprintNo: (data) => set((state) => ({ sprintNo: state })),
  setSprintTitle: (data) => set((state) => ({ selectedSprintTitle: data })),
  setProjectNo: (data) => set((state) => ({ projectNo: data })),
  setSprintNo: (data) => set((state) => ({ sprintNo: data })),
  setSelectedValidate: (data) =>
    set((state) => ({ selectedValidate: !state.selectedValidate })),
}));
