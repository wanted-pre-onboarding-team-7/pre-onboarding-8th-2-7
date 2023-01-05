import { Card } from '../class/card';

export const isObjectHasKey = (obj) => {
  if (typeof obj === 'string') {
    return false;
  }
  return Object.keys(obj).length !== 0;
};

const formatTwoDigits = (number) => {
  return number >= 10 ? number : `0${number}`;
};

export const getFormattedToday = () => {
  const today = new Date();
  const dates = [
    today.getMonth() + 1,
    today.getDay(),
    today.getHours(),
    today.getMinutes(),
  ];
  const formattedDates = dates.map((date) => formatTwoDigits(date));

  return `${today.getFullYear()}-${formattedDates[0]}-${formattedDates[1]}T${
    formattedDates[2]
  }:${formattedDates[3]}`;
};

export const createCard = (prevCards, card) => {
  const newCards = prevCards;
  newCards.push(card.objectExceptState);
  return newCards;
};

export const updateCard = (prevCards, card) => {
  const newCards = prevCards.map((storedCard) => {
    if (String(storedCard.id) === String(card.id)) {
      return card.objectExceptState;
    }
    return storedCard;
  });
  return newCards;
};

export const deleteCard = (prevCards, clickedId) => {
  const newCards = prevCards.filter(
    (storedCard) => String(storedCard.id) !== String(clickedId),
  );
  return newCards;
};

export const getCardById = (cards, id) => {
  const result = cards.filter(
    (storedCard) => String(storedCard.id) === String(id),
  );
  return Card.createCard(...result);
};
