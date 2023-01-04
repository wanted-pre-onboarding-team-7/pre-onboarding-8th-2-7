export const _KEY = 'user';

export const checkLocalStorage = () => {
  if (getLocalStorageToken()) {
    return true;
  }
  return false;
};

export const getLocalStorageToken = () => {
  return localStorage.getItem(_KEY);
};
export const saveLocalStorageToken = (token) => {
  return localStorage.setItem(_KEY, token);
};
