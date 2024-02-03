const LOCAL_STORAGE_KEY = 'tasks';

function addTask(dataObj) {
  const array = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  array.push(dataObj);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(array));
}

export const localStorageAPI = {
  addTask,
};
