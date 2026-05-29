import { apiClient } from "./apiClient";

/**
 * Use these helpers for all HTTP calls so axios interceptors
 * (global loader, error handling) apply consistently.
 */
export const api = {
  get: (url, config) => apiClient.get(url, config),

  post: (url, data, config) => apiClient.post(url, data, config),

  put: (url, data, config) => apiClient.put(url, data, config),

  patch: (url, data, config) => apiClient.patch(url, data, config),

  delete: (url, config) => apiClient.delete(url, config),

  request: (config) => apiClient.request(config),
};

export { apiClient };
