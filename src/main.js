/* jshint esversion: 6 */
/* jshint browser: true */
/* jshint asi: true */

import {createBoard} from "./components/board.js"; // => возвращающаем DOM для сортировки
import {createCard} from "./components/card.js"; // => возвращающаем DOM для карточки задачи
import {createControl} from "./components/control.js"; // => возвращающаем DOM для меню
import {createEdit} from "./components/edit.js"; // => возвращающаем DOM для формы создания/редактирования задачи
import {createFilters} from "./components/filters.js"; // => возвращающаем DOM для фильтров
import {createLoadButton} from "./components/loadMoreButton.js"; // => возвращающаем DOM для кнопку load more

const TASK_COUNT = 3; // число блоков DOM.card

const mainElement = document.querySelector(`.main`);
const controlElement = mainElement.querySelector(`.main__control`);

// Функция для рендеринга (вставки в DOM) компонентов. Принимает:
// container - элемент, в который будем вставлять вёрстку,
// template - вёрстку, которую требуется отрендерить в этот элемент,
// position - положение в container, куда требуется вставить вёрстку:
const render = (container, template, position) => container.insertAdjacentHTML(position, template);

render(controlElement, createControl(), `beforeend`); // => отрисовываем блок DOM.control в .main__control

render(mainElement, createFilters(), `beforeend`); // => отрисовываем блок DOM.filters в .main

render(mainElement, createBoard(), `beforeend`); // => отрисовываем блок DOM.board в .main

const boardElement = mainElement.querySelector(`.board`);
const boardTasksElement = mainElement.querySelector(`.board__tasks`);

render(boardTasksElement, createEdit(), `beforeend`); // => отрисовываем блок DOM.edit в .board__tasks

for (let i = 0; i < TASK_COUNT; i++) {
  render(boardTasksElement, createCard(), `beforeend`); // => отрисовываем идентичные блоки DOM.card в .board__tasks
}

render(boardElement, createLoadButton(), `beforeend`); // =>отрисовываем DOM.loadMoreButton в .board
