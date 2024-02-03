export function createTaskMarkup(dataObj) {
  return `<li class="task-list-item">
      <button class="task-list-item-btn" data-id="${dataObj.id}">Видалити</button>
      <h3>${dataObj.taskName}</h3>
      <p>${dataObj.taskText}</p>
   </li>`;
}
