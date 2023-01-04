export const getCardsByStore = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setCardsByStore = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};
