import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { config } from '@/config/index';

const fetcher = axios.create({
  baseURL: config.apiURL,
  headers: {
    Authorization: `Bearer ${config.apiAccessToken}`,
  },
});

fetcher.interceptors.response.use((response) => {
  if (response.data && response.headers['content-type'] === 'application/json; charset=utf-8') {
    response.data = camelizeKeys(response.data);
  }

  return response;
});

fetcher.interceptors.request.use((config) => {
  const newConfig = { ...config };
  if (config.params) newConfig.params = decamelizeKeys(config.params);
  if (config.data) newConfig.data = decamelizeKeys(config.data);
  return newConfig;
});

export { fetcher };
