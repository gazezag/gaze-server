import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    // TODO
  },

  transformRequest: [data => JSON.stringify(data)],
  transformResponse: [
    data => (typeof data === 'string' && data.startsWith('{') ? JSON.parse(data) : data)
  ]
});

// TODO
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // add token
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// TODO
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    const { status } = data;

    if (status >= 200 && status < 300) {
      return Promise.resolve(data);
    } else {
      return Promise.reject(data);
    }
  },
  (error: AxiosError) => {
    let errorData;
    if (error.response) {
      const { status, statusText } = error.response;
      errorData = {
        code: status,
        msg: statusText
      };
    }
    return Promise.reject(errorData);
  }
);

export default service;
