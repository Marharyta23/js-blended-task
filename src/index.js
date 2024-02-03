/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
import { refs } from './js/refs';
import { createTaskMarkup } from './js/createTaskMarkup';
import { localStorageAPI } from './js/localStorageApi';
import { renderTasks } from './js/renderTasks';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const dataObj = {};
  new FormData(refs.form).forEach((value, key) => {
    dataObj[key] = value;
  });

  localStorageAPI.addTask(dataObj);

  const markup = createTaskMarkup(dataObj);
  refs.list.insertAdjacentHTML('beforeend', markup);
  refs.form.reset();
}

renderTasks();
