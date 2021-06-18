import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const createElem = () => {
  const input = document.querySelector('.task-input');
  const text = input.value;
  if (text === '') {
    return;
  }
  const tasks = getItem('tasksList') || [];
  const newTasks = tasks.concat({
    text,
    done: false,
    id: Math.random(),
  });
  setItem('tasksList', newTasks);
  renderTasks();
};
/*import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = (event) => {
  const inputElem = document.querySelector('.task-input');

  const textInput = inputElem.value;
  if (textInput === '') {
    return;
  }
  tasks.push({ text: textInput, done: false });
  renderTasks(tasks);
}

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return
  }
  taskTitleInputElem.value = '';
  const tasksList = getItem('tasksList') || [];

  const newTaskList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString()
  })

  setItem('tasksList', newTaskList);

  renderTasks()
}*/
