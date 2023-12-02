import {getRequestApi, postRequestApi} from './axios';
import {DOCTOR_PROFILE_DETAIL_URL, DOCTOR_VIDEO_HOME_URL} from './url';

export const findDoctorHomeAPI = async () => {
  let response = (await getRequestApi(DOCTOR_VIDEO_HOME_URL)) as any;
  console.log('findDoctorHomeAPI>>>>:', response);
  if (response.success) {
    if (response.code === 200) {
      return response?.data;
    } else {
      return false;
    }
  } else {
    if (response.code === 500) {
      return false;
    } else {
      alert(response.message);
    }
  }
};

export const DoctorDetailListAPI = async (id: number) => {
  const data = {
    doc_id: id,
  };
  let response = (await postRequestApi(DOCTOR_PROFILE_DETAIL_URL, data)) as any;
  if (response.success) {
    if (response.code === 200) {
      return response?.data;
    } else {
      return false;
    }
  } else {
    if (response.code === 500) {
      return false;
    } else {
      alert(response.message);
    }
  }
};
