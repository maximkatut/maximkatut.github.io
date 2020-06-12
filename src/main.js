import './scss/style.scss';
import Line from './components/line';

const LINE_COUNT = 5;

const container = document.querySelector(`.background-lines`);

const initLines = () => {
  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < LINE_COUNT; i++) {
      const line = new Line();
      lines.push(line);
      line.render(container);
    }
    return lines;
  };

  const renderedLines = renderLines();

  window.addEventListener(`resize`, () => {
    renderedLines.forEach((line) => {
      line.rerender();
    });
  });
};

initLines();
