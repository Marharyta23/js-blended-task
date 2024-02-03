export function onDeleteBtnClick(event) {
  if (event.target.nodeName === 'BUTTON') {
    const id = event.target.dataset.id;
    console.log(id);
  }
}
