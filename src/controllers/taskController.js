import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const completedQuery = req.query.completed;
  const completed = completedQuery === undefined ? undefined : completedQuery === true || completedQuery === 'true';
  const tasks = await taskService.getAllTasks({ completed });
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
