import {createElement} from "./../utils.js";

export const createMainBoardTemplate = () => {
  return (
    `<section class="films">
    </section>`
  );
};

export default class MainBoard {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMainBoardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
