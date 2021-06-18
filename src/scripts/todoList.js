import { onCreateTask } from './createTask.js';

export const initTodoListHandles = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  /*const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);*/
};
