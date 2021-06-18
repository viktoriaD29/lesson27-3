import { initTodoListHundlers } from './todoList.js';
import { renderTasks } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHundlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
/*import { initTodoListHandles } from './todoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandles();
});

const onStarageChange = e => {
  if(e.key === 'tasksList') {
    renderTasks()
  }
}
window.addEventListener('storage', onStarageChange)*/
