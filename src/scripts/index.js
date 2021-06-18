import { initTodoListHandles } from './todoList.js';
import { renderTasks } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandles();
});
