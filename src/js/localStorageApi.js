const LOCAL_STORAGE_KEY = 'tasks';

function addTask(dataObj) {
  const array = getAllTasks();
  array.push(dataObj);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(array));
}

function getAllTasks() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export const localStorageAPI = {
  addTask,
  getAllTasks,
};
