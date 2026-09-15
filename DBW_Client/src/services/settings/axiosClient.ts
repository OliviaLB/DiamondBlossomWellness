import type { ProblemDetails } from '@services/common.types';
import axios, { type AxiosInstance } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    skipGlobalErrorHandler?: boolean;
  }
}

let globalErrorHandler: ((error: ProblemDetails) => void) | null = null;

export const setGlobalErrorHandler = (handler: typeof globalErrorHandler) => {
  globalErrorHandler = handler;
};

const baseURL = import.meta.env.VITE_API;

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*'
  }
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const problem = error.response?.data;

    if (problem && !error.config?.skipGlobalErrorHandler) {
      globalErrorHandler?.(problem);
    }

    return Promise.reject(error);
  }
);
