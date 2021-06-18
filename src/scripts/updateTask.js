import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const taskComplete = (event) => {
  const tasksList = getItem('taskslist') || [];
  const newTasksList = tasksList.map((task) => {
    const isId = event.target.dataset.id;
    if (task.id === +isId) {
      const done = event.target.checked;
      return {
        ...task,
        done,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};

/*import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onUpdateTask = (event) => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  console.dir(event.target);

  const indexEl = event.target.dataset.id;
 
  tasks[indexEl].done = !tasks[indexEl].done;

  renderTasks(tasks);
}

listElem.addEventListener('click', onUpdateTask);

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('.list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const tasksList = getItem('.tasksList');
  const newTaskList = tasksList.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }

    return task;
  });

  setItem('tasksList', newTaskList);

  renderTasks();
};*/
