import {getHypotenuse, getRandomNumber} from '../utils/random';

const MIN_ANGLE = 45;
const MAX_ANGLE = 155;

export default class Line {
  constructor() {
    this._height = 0;
    this._width = 0;
    this._angle = 0;
    this._x = 0;
    this._y = 0;

    this._element = null;
    this._container = null;

    this._getLineLength();
  }

  _getHight() {
    this._height = document.body.clientHeight;
    return this._height;
  }

  _getWidth() {
    this._width = document.body.clientWidth;
    return this._width;
  }

  _getLineLength() {
    this._y = this._getHight();
    this._x = this._getWidth();
    this._lineLength = getHypotenuse(this._width, this._height);
    return this._lineLength;
  }

  _getAngle() {
    this._angle = getRandomNumber(MIN_ANGLE, MAX_ANGLE);
    return this._angle;
  }

  _createElement() {
    this._element = document.createElement(`DIV`);
    this._element.classList.add(`line`);
    this._element.style.width = `${this._lineLength}px`;
    this._element.style.transform = `rotate(${this._getAngle()}deg)`;
    this._element.style.left = `${getRandomNumber(0, this._width)}px`;
    return this._element;
  }

  render(container) {
    this._container = container;
    const newElement = this._createElement();
    this._container.appendChild(newElement);
  }

  rerender() {
    let oldElement = this._element;
    this._element = this._createElement();
    oldElement.parentNode.replaceChild(this._element, oldElement);
    oldElement = null;
  }
}
