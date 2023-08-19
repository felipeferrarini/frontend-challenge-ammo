import Axios from 'axios';

export const createHttpClient = (baseURL: string) => {
  return Axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
