import axios from 'axios';
import { restfulApiConfig } from './config';

export const client = axios.create({
  baseURL: restfulApiConfig,
});

export const setAuthToken = (token?: string | undefined) => {
  client.defaults.headers.common['Authorization'] = '';
  delete client.defaults.headers.common['Authorization'];

  if (token) {
    client.defaults.headers.common['Authorization'] = `${token}`;
  }
};
