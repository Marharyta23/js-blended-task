import { nanoid } from 'nanoid';

import { refs } from './refs';
import { createTaskMarkup } from './createTaskMarkup';
import { localStorageAPI } from './localStorageApi';
import { onFormSubmit } from './onFormSubmit';

export function onFormSubmit(e) {
  e.preventDefault();
  const dataObj = { id: nanoid() };
  new FormData(refs.form).forEach((value, key) => {
    dataObj[key] = value;
  });

  localStorageAPI.addTask(dataObj);

  const markup = createTaskMarkup(dataObj);
  refs.list.insertAdjacentHTML('beforeend', markup);
  refs.form.reset();
}
