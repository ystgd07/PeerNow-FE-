import axios from 'axios';

// 스프린트 생성
export async function createSprintApi(pjtNum, sprintDto, backlogDto) {
  const formData = new FormData();

  const sprintBlob = new Blob([JSON.stringify(sprintDto)], {
    type: 'application/json',
  });
  const backBlob = new Blob([JSON.stringify(backlogDto)], {
    type: 'application/json',
  });

  formData.append('sprintDto', sprintBlob);
  formData.append('backlogDto', backBlob);

  console.log('sprintDto :', sprintDto);
  console.log('backBlob', backlogDto);

  const res = await axios.post(
    `http://www.peernow.site/api/project/sprint?project_no=${pjtNum}`,
    formData,
  );

  return res;
}

// 스프린트 내용(전체 스프린트)
export const fetchAllSprints = async (pjtNum) => {
  const res = await axios.get(
    `http://www.peernow.site/api/project/sprint/list?project_no=${pjtNum}`,
    {
      withCredentials: true,
    },
  );
  return res;
};
