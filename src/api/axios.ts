// import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
// import {STORAGE_CONSTANT} from '../constant';
// import {BASE_URL} from '@env';
import {
  isNotConnected,
  isWrongSomthing,
  startLoader,
  stopLoader,
} from '../utils/helpers';
import axios from 'axios';

Axios.interceptors.request.use(async config => {
  //   const token = await AsyncStorage.getItem(STORAGE_CONSTANT.TOKEN);
  const token = global.access_token;

  config.headers = {
    ['auth-token']: token,
    'Content-Type': 'application/json',
    ...config.headers,
  };

  config.timeout = 30000;

  return config;
});

Axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error:::::', error, error?.message == 'Network Error');
    console.log('error Code-------->', error?.code);
    if (error?.message == 'Network Error') {
      console.log('isNotConnected', error?.message);
      isNotConnected();
    } else if (error?.message == 'Request failed with status code 404') {
      console.log(
        'isWrongSomthing',
        error?.message == 'Request failed with status code 404',
      );
      // return axios(error.config);
      isWrongSomthing();
    } else if (error?.response?.status == 500) {
      return Promise.reject(error);
    }
    return Promise.reject(error?.response?.data || error);
  },
);

const getRequestApi = async (url: string, headers = {}) => {
  const final_url = 'http://43.205.130.207/api/v1/' + url;
  return new Promise((resolve, reject) => {
    startLoader();
    Axios.get(final_url, headers)
      .then(result => {
        console.log('URL:', url);
        console.log('RESPONSE:', result.data);
        resolve({
          success: result.data.success,
          code: result.data.code,
          data: result.data.data,
          message: result.data.message,
        });
      })
      .catch(error => {
        console.log('error>>>>:', error);
        if (error?.response) {
          resolve({
            code: error?.response?.data?.code,
            success: error?.response?.data?.success,
            message: error?.response?.data?.message,
          });
        } else {
          console.log('error1>>>:', error);
          reject(error);
        }
      })
      .finally(() => {
        stopLoader();
      });
  });
};

const postRequestApi = (url: string, data: any, headers = {}) => {
  const final_url = 'http://43.205.130.207/api/v1/' + url;
  console.log('final_url:', final_url, data, headers);
  console.log('PAYLOAD:', data);
  return new Promise((resolve, reject) => {
    startLoader();
    Axios.post(final_url, data, headers)
      .then(result => {
        console.log('RESPONSE:', result);
        resolve({
          success: result.data.success,
          code: result.data.code,
          data: result.data.data,
          message: result.data.message,
        });
      })
      .catch(error => {
        console.log(
          'ERROR:',
          JSON.stringify(error.response.data),
          '====>url :' + final_url,
        );
        if (error?.response) {
          resolve({
            code: error?.response?.data?.code,
            success: error?.response?.data?.success,
            message: error?.response?.data?.message,
          });
        } else {
          reject(error);
        }
      })
      .finally(() => {
        stopLoader();
      });
  });
};

const patchRequestApi = (url: string, data: any, headers = {}) => {
  console.log('URL:', url);
  console.log('PATHCH PAYLOAD:', data);
  return new Promise((resolve, reject) => {
    Axios.patch(url, data, {
      headers: headers,
    })
      .then(result => {
        console.log('PATCH RESPONSE:', result.data);
        resolve({
          errorStatus: false,
          statusCode: result.status,
          data: result.data,
        });
      })
      .catch(error => {
        console.log('ERROR:', JSON.stringify(error), '====>url :' + url);
        if (error?.response) {
          resolve({
            errorStatus: true,
            statusCode: error?.response.status,
            data: error?.response.data,
          });
        } else {
          reject(error);
        }
      });
  });
};

const putRequestApi = (url: string, data: any, headers = {}) => {
  console.log('URL:', url);
  console.log('PUT PAYLOAD:', data);
  return new Promise((resolve, reject) => {
    Axios.put(url, data, {
      headers: headers,
    })
      .then(result => {
        console.log('PUT RESPONSE:', result.data);
        resolve({
          errorStatus: false,
          statusCode: result.status,
          data: result.data,
        });
      })
      .catch(error => {
        console.log('ERROR:', JSON.stringify(error), '====>url :' + url);
        if (error?.response) {
          resolve({
            errorStatus: true,
            statusCode: error?.response.status,
            data: error?.response.data,
          });
        } else {
          reject(error);
        }
      });
  });
};

const deleteRequestApi = (url: string, data: any) => {
  console.log('deleteURL:', url);
  console.log('deletePayload:', data);

  return new Promise((resolve, reject) => {
    Axios.delete(url, {
      data,
    })
      .then(result => {
        console.log('DELETE RESPONSE:', result.data);
        resolve({
          errorStatus: false,
          statusCode: result.status,
          data: result.data,
        });
      })
      .catch(error => {
        if (error?.response) {
          resolve({
            errorStatus: true,
            statusCode: error?.response.status,
            data: error?.response.data,
          });
        } else {
          reject(error);
        }
      });
  });
};

export {
  getRequestApi,
  postRequestApi,
  patchRequestApi,
  putRequestApi,
  deleteRequestApi,
};
