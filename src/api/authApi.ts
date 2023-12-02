import {CheckByEmailResponse, UserSettingData} from '../types/Types';
import {getRequestApi, postRequestApi} from './axios';
import {
  FORGET_PASSWORD_OTP_URL,
  NEW_PASSWORD_URL,
  USER_CHECK_BY_EMAIL,
  USER_SETTING,
} from './url';

export const isUserRegistered = async (email: String) => {
  let payload = {
    email: email,
  };
  let response = (await postRequestApi(
    USER_CHECK_BY_EMAIL,
    payload,
  )) as CheckByEmailResponse;
  if (response.success) {
    if (response.code === 200) {
      return response.data[0];
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

export const userSettingAPI = async () => {
  let response = (await getRequestApi(USER_SETTING)) as UserSettingData;
  console.log('response>>>', response);
  if (response.success) {
    if (response.code === 200) {
      return response;
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

export const forgotePwdOtpAPI = async (mobile: String) => {
  let payload = {
    mobile: mobile,
  };
  let response = (await postRequestApi(
    FORGET_PASSWORD_OTP_URL,
    payload,
  )) as CheckByEmailResponse;
  if (response.success) {
    if (response.code === 200) {
      return response.data[0];
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

export const newPasseowrdAPI = async (
  mobile: String,
  password: String,
  otp: string,
) => {
  let payload = {
    mobile: mobile,
    password: password,
    otp: otp,
  };
  let response = (await postRequestApi(
    NEW_PASSWORD_URL,
    payload,
  )) as CheckByEmailResponse;
  console.log('response>>>', response);
  if (response.success) {
    if (response.code === 200) {
      return response.data[0];
    } else {
      return false;
    }
  } else {
    if (response.code === 500) {
      return response;
    } else {
      alert(response.message);
    }
  }
};
