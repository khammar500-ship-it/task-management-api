let tasks = [
  {
    id: 1,
    title: "Learn REST APIs",
    description: "Practice GET, POST, PUT and DELETE requests",
    isCompleted: false
  },
  {
    id: 2,
    title: "Build Task API",
    description: "Create a simple task management backend",
    isCompleted: true
  },
  {
    id: 3,
    title: "Test the API",
    description: "Test all endpoints with Postman",
    isCompleted: false
  }
];

let nextId = 4;

const getAllTasks = () => tasks;

const getTaskById = (id) => {
  return tasks.find((task) => task.id === id);
};

const createTask = ({ title, description, isCompleted = false }) => {
  const task = {
    id: nextId++,
    title,
    description,
    isCompleted
  };

  tasks.push(task);
  return task;
};

const updateTask = (id, data) => {
  const task = getTaskById(id);

  if (!task) return null;

  if (data.title !== undefined) task.title = data.title;
  if (data.description !== undefined) task.description = data.description;
  if (data.isCompleted !== undefined) task.isCompleted = data.isCompleted;

  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
