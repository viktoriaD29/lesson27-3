import { taskComplete } from './updateTask.js';
import { createElem } from './createTask.js';

export const initTodoListHundlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', createElem);
  
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', taskComplete);
};
/*import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandles = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
};*/
