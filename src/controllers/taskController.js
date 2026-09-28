const taskModel = require("../models/taskModel");

const parseId = (id) => {
  const parsedId = Number(id);
  return Number.isInteger(parsedId) && parsedId > 0 ? parsedId : null;
};

const getTasks = (req, res) => {
  const tasks = taskModel.getAllTasks();

  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks
  });
};

const getTask = (req, res) => {
  const id = parseId(req.params.id);

  if (id === null) {
    return res.status(400).json({
      success: false,
      message: "Task ID must be a positive integer"
    });
  }

  const task = taskModel.getTaskById(id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
};

const createTask = (req, res) => {
  const { title, description, isCompleted } = req.body;

  const task = taskModel.createTask({
    title: title.trim(),
    description: description.trim(),
    isCompleted
  });

  res.status(201).json({
    success: true,
    message: "Task created successfully",
    data: task
  });
};

const updateTask = (req, res) => {
  const id = parseId(req.params.id);

  if (id === null) {
    return res.status(400).json({
      success: false,
      message: "Task ID must be a positive integer"
    });
  }

  const task = taskModel.updateTask(id, {
    title: req.body.title?.trim(),
    description: req.body.description?.trim(),
    isCompleted: req.body.isCompleted
  });

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    data: task
  });
};

const deleteTask = (req, res) => {
  const id = parseId(req.params.id);

  if (id === null) {
    return res.status(400).json({
      success: false,
      message: "Task ID must be a positive integer"
    });
  }

  const deleted = taskModel.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  res.status(204).send();
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
