import { localStorageAPI } from './localStorageApi';
import { createTaskMarkup } from './createTaskMarkup';
import { refs } from './refs';
export function renderTasks() {
  const allTasks = localStorageAPI.getAllTasks();
  const markup = allTasks.map(createTaskMarkup).join('');
  refs.list.innerHTML = markup;
}
