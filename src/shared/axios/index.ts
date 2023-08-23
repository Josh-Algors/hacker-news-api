import Axios, { AxiosInstance, AxiosResponse } from 'axios';

const responseMessage = (responseBody) => {
  const response = {
    status: responseBody.status,
    code: responseBody.statusCode,
    data: responseBody.data.message,
  };
  return response;
};

const responseData = (responseBody) => {
  const response = {
    status: responseBody.status,
    code: responseBody.statusCode,
    data: responseBody.data,
  };

  return response;
};

const responseErrorMessage = (error) => {
  const responseError = {
    status: error.response,
    data: error.response,
  };

  return responseError;
};

export {
  Axios,
  AxiosInstance,
  AxiosResponse,
  responseMessage,
  responseData,
  responseErrorMessage,
};
