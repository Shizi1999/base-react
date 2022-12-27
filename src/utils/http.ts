import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.BACKEND_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );
  }
}

const http = new Http();

export default http;
