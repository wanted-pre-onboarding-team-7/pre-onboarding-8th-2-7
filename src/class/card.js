import { getLocalStorageId, postLocalStorageId } from '../utils/localStorgeFn';
import { getFormattedToday } from '../utils/utilFn';

export class Card {
  #id;
  #title;
  #content;
  #dueDate;
  #manager;
  #state;
  constructor(obj) {
    this.#id = obj.id;
    this.#title = obj.title;
    this.#content = obj.content;
    this.#dueDate = obj.dueDate;
    this.#manager = obj.manager;
    this.#state = obj.state;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get content() {
    return this.#content;
  }

  set content(value) {
    this.#content = value;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(value) {
    this.#dueDate = value;
  }

  get manager() {
    return this.#manager;
  }

  set manager(value) {
    this.#manager = value;
  }

  get state() {
    return this.#state;
  }

  set state(value) {
    this.#state = value;
  }

  get object() {
    return {
      id: this.#id,
      title: this.#title,
      content: this.#content,
      dueDate: this.#dueDate,
      manager: this.#manager,
      state: this.#state,
    };
  }

  get objectExceptState() {
    return {
      id: this.#id,
      title: this.#title,
      content: this.#content,
      dueDate: this.#dueDate,
      manager: this.#manager,
    };
  }

  get isNewCard() {
    return false;
  }

  isNoEmpty() {
    const values = Object.values(this.object);
    const emptyValues = values.filter((v) => v === '');
    return emptyValues.length === 0;
  }

  static createCard(modalObj) {
    return new Card(modalObj);
  }

  static createNewCard(modalObj) {
    const newCard = {
      id: createNewId(),
      dueDate: getFormattedToday(),
      ...defaultCard,
      state: modalObj.state,
    };
    return new NewCard(newCard);
  }
}

export class NewCard extends Card {
  get isNewCard() {
    return true;
  }
}

export const createNewId = () => {
  const newId = Number(getLocalStorageId()) + 1;
  return newId;
};

export const updateLocalStorgeId = (newId) => {
  const prevId = getLocalStorageId();
  if (Number(prevId) < Number(newId)) {
    postLocalStorageId(newId);
  }
};

export const defaultCard = {
  title: '',
  content: '',
  manager: '',
};
