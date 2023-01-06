import { useRecoilState } from 'recoil';
import { kanbanCardsState } from '../store/atom';
import { KANBAN_STATE } from '../utils/constant';
import {
  createCard,
  deleteCard,
  getCardById,
  updateNewCard,
} from '../utils/utilFn';

export const useUpdateSameCardsById = () => {
  const [todos, setTodos] = useRecoilState(
    kanbanCardsState[KANBAN_STATE.TODOS],
  );
  const [progress, setProgress] = useRecoilState(
    kanbanCardsState[KANBAN_STATE.PROGRESS],
  );
  const [done, setDone] = useRecoilState(kanbanCardsState[KANBAN_STATE.DONE]);

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
    const newDragCards = deleteCard(cardsArr[prevState], prevId);
    const newDragOverCards = updateNewCard(
      cardsArr[currState],
      currId,
      selectedCard,
    );

    setCardsArr[prevState](newDragCards);
    setCardsArr[currState](newDragOverCards);
  };

  return { updateSameStateCardsById, updateDiffStateCardsById };
};
