import axios from 'axios';

export const postEvData = async (
  // togetherPeerDto,
  currentProjectNumber,
  selectPeerId,
  togetherPeerDto,
) => {
  // const formData = new FormData();
  console.log('togetherPeerDtotogetherPeerDto', togetherPeerDto);

  // formData.append(
  //   'togetherPeerDto',
  //   new Blob([JSON.stringify(togetherPeerDto)], { type: 'application/json' }),
  // );

  // console.log('formDataformData', formData);

  const res = await axios.post(
    `${process.env.REACT_APP_API_DOMAIN}/api/peer/evaluation?projectNumber=${currentProjectNumber}&peerId=${selectPeerId}`,
    togetherPeerDto,
    // formData,
    {
      withCredentials: true,
    },
  );
  return res;
};
