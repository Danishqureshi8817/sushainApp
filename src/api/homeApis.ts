import {BASE_URL} from '@env';
import {DoctorSpecialityList} from '../types/Types';
import {getRequestApi, postRequestApi} from './axios';
import {
  DOCTOR_SPEC_LIST_URL,
  HOME_PAGE,
  SEARCH_API_URL,
  SPEC_LIST_URL,
} from './url';

export const DoctorSpecListAPI = async () => {
  let response = (await getRequestApi(SPEC_LIST_URL)) as DoctorSpecialityList;
  if (response.success) {
    if (response.code === 200) {
      return response?.data[0]?.specList;
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

export const DoctorListAPI = async (specName: string) => {
  try {
    const response = await fetch(BASE_URL + DOCTOR_SPEC_LIST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        specialization: specName,
      }),
    });
    const data = await response.json();
    return {
      success: data.success,
      code: data.code,
      data: data.data,
      message: data.message,
    };
  } catch (error) {
    console.log('error>>>>:', error);
    if (error?.response) {
      return {
        code: error?.response?.data?.code,
        success: error?.response?.data?.success,
        message: error?.response?.data?.message,
      };
    } else if (error?.request) {
      return {
        code: 500,
        success: false,
        message: 'Network Error',
      };
    } else {
      throw error;
    }
  }
};

export const HomePageAPI = async () => {
  let response = (await getRequestApi(HOME_PAGE)) as any;
  if (response.success) {
    if (response.code === 200) {
      return response?.data[0];
    } else {
      return false;
    }
  } else {
    if (response.code === 500) {
      console.log("Home Respo",response);
      
      return false;
    } else {
      alert(response.message);
    }
  }
};

export const SearchAPI = async (searchText: string) => {
  const data = {
    productName: searchText,
  };
  let response = (await postRequestApi(SEARCH_API_URL, data)) as any;
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
