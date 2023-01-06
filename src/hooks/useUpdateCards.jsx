import { useRecoilState } from 'recoil';
import {
  doneCardsState,
  progressCardsState,
  todoCardsState,
} from '../store/atom';
import {
  createCard,
  deleteCard,
  getCardById,
  updateCard,
  updateNewCard,
} from '../utils/utilFn';

export const useUpdateCards = () => {
  const [todos, setTodos] = useRecoilState(todoCardsState);
  const [progress, setProgress] = useRecoilState(progressCardsState);
  const [done, setDone] = useRecoilState(doneCardsState);

  const cardsArr = {
    todos: [...todos],
    progress: [...progress],
    done: [...done],
  };
  const setCardsArr = {
    todos: setTodos,
    progress: setProgress,
    done: setDone,
  };

  const updateSameStateCardsById = (state, id) => {
    const selectedCard = getCardById(cardsArr[state], id);
    const deletedArr = deleteCard(cardsArr[state], id);
    const newDragCards = createCard(deletedArr, selectedCard);

    setCardsArr[state](newDragCards);
  };

  const updateDiffStateCardsById = (prevState, prevId, currState, currId) => {
    const selectedCard = getCardById(cardsArr[prevState], prevId);
    const newPrevCards = deleteCard(cardsArr[prevState], prevId);
    const newCurrCards = updateNewCard(
      cardsArr[currState],
      currId,
      selectedCard,
    );

    setCardsArr[prevState](newPrevCards);
    setCardsArr[currState](newCurrCards);
  };

  const updateSameStateCardsByCard = (card) => {
    const newCard = card.isNewCard
      ? createCard(cardsArr[card.state], card)
      : updateCard(cardsArr[card.state], card);
    setCardsArr[card.state](newCard);
  };

  const updateDiffStateCardsByCard = (prevState, card) => {
    const newPrevCards = deleteCard(cardsArr[prevState], card.id);
    const newCard = createCard(cardsArr[card.state], card);

    setCardsArr[prevState](newPrevCards);
    setCardsArr[card.state](newCard);
  };

  return {
    updateSameStateCardsById,
    updateDiffStateCardsById,
    updateSameStateCardsByCard,
    updateDiffStateCardsByCard,
  };
};
