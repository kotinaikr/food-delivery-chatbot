import axios from "axios";

import {
  clearGlobalError,
  setGlobalError,
  startLoading,
  stopLoading,
} from "../redux/slices/appSlice";
import { API_BASE_URL } from "./apiConfig";
import { getApiErrorMessage } from "./errorHandler";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

let storeRef = null;

const shouldSkipLoader = (config) => config?.skipGlobalLoader === true;
const shouldSkipError = (config) => config?.skipGlobalError === true;

const handleRequestStart = (config) => {
  const skipLoader = shouldSkipLoader(config);

  if (!skipLoader) {
    const { pendingRequests } = storeRef.getState().app;

    if (pendingRequests === 0) {
      storeRef.dispatch(clearGlobalError());
    }

    storeRef.dispatch(startLoading());
  }

  return {
    ...config,
    _skipLoader: skipLoader,
    _skipError: shouldSkipError(config),
  };
};

const handleRequestComplete = (config) => {
  if (!config?._skipLoader) {
    storeRef.dispatch(stopLoading());
  }
};

const handleResponseError = (error) => {
  const config = error?.config;
  handleRequestComplete(config);

  const skipError = config?._skipError;
  const message = getApiErrorMessage(error);

  if (!skipError && message) {
    storeRef.dispatch(setGlobalError(message));
  }

  return Promise.reject(error);
};

export const setupApiInterceptors = (store) => {
  storeRef = store;

  apiClient.interceptors.request.use(
    (config) => {
      const nextConfig = handleRequestStart(config);

      if (nextConfig.data instanceof FormData) {
        delete nextConfig.headers["Content-Type"];
      }

      return nextConfig;
    },
    (error) => handleResponseError(error)
  );

  apiClient.interceptors.response.use(
    (response) => {
      handleRequestComplete(response.config);
      return response;
    },
    (error) => handleResponseError(error)
  );
};
